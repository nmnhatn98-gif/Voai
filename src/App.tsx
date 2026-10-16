import React, { useState, useEffect, useMemo, useRef } from 'react';
import { QUESTIONS, Question } from './data/questions';

interface StorageState {
  answers: Record<number, string>;
  marks: Record<number, boolean>;
}

const TOPICS = [
  { id: 'all', icon: '◈', name: 'Tất cả câu hỏi', count: 100 },
  { id: 'ML', icon: '◇', name: 'Machine Learning', count: 30 },
  { id: 'DL', icon: '⌘', name: 'Deep Learning', count: 25 },
  { id: 'CV', icon: '▧', name: 'Computer Vision', count: 20 },
  { id: 'NLP', icon: '≋', name: 'Ngôn ngữ tự nhiên', count: 25 },
];

export default function App() {
  const [state, setState] = useState<StorageState>(() => {
    try {
      const raw = localStorage.getItem('voai-lab-v1');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed.answers === 'object' && typeof parsed.marks === 'object') {
          return parsed;
        }
      }
    } catch {
      // ignore JSON parse error
    }
    return { answers: {}, marks: {} };
  });

  const [topic, setTopic] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');
  const [activeId, setActiveId] = useState<number>(1);
  const [revealedIds, setRevealedIds] = useState<Set<number>>(new Set());

  const questionCardRef = useRef<HTMLDivElement>(null);

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem('voai-lab-v1', JSON.stringify(state));
    } catch {
      // storage quota or private browsing error
    }
  }, [state]);

  // Compute metrics
  const answeredQuestions = useMemo(() => {
    return QUESTIONS.filter((q) => state.answers[q.id]);
  }, [state.answers]);

  const correctCount = useMemo(() => {
    return answeredQuestions.filter((q) => state.answers[q.id] === q.answer).length;
  }, [answeredQuestions, state.answers]);

  const wrongCount = answeredQuestions.length - correctCount;

  const savedCount = useMemo(() => {
    return Object.values(state.marks).filter(Boolean).length;
  }, [state.marks]);

  // Filtered question list
  const filteredList = useMemo(() => {
    const s = search.toLocaleLowerCase('vi').trim();
    return QUESTIONS.filter((q) => {
      // Topic match
      if (topic !== 'all' && q.topic !== topic) return false;

      // Search match
      if (s) {
        const matchId = String(q.id) === s;
        const matchText = `${q.title} ${q.question}`.toLocaleLowerCase('vi').includes(s);
        if (!matchId && !matchText) return false;
      }

      // Filter status
      if (filter === 'unanswered' && state.answers[q.id]) return false;
      if (filter === 'wrong') {
        const ans = state.answers[q.id];
        if (!ans || ans === q.answer) return false;
      }
      if (filter === 'bookmarked' && !state.marks[q.id]) return false;
      if (filter === 'notes' && !q.note) return false;

      return true;
    });
  }, [topic, search, filter, state.answers, state.marks]);

  // Ensure active question belongs to filtered list
  useEffect(() => {
    if (filteredList.length > 0 && !filteredList.some((q) => q.id === activeId)) {
      setActiveId(filteredList[0].id);
    }
  }, [filteredList, activeId]);

  const activeQuestion = useMemo(() => {
    return filteredList.find((q) => q.id === activeId);
  }, [filteredList, activeId]);

  const activeIndex = useMemo(() => {
    if (!activeQuestion) return -1;
    return filteredList.indexOf(activeQuestion);
  }, [filteredList, activeQuestion]);

  const scrollToQuestion = () => {
    if (questionCardRef.current) {
      questionCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectQuestion = (id: number) => {
    setActiveId(id);
    scrollToQuestion();
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveId(filteredList[activeIndex - 1].id);
      scrollToQuestion();
    }
  };

  const handleNext = () => {
    if (activeIndex >= 0 && activeIndex < filteredList.length - 1) {
      setActiveId(filteredList[activeIndex + 1].id);
      scrollToQuestion();
    }
  };

  const handleAnswer = (qId: number, chosenKey: string) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [qId]: chosenKey },
    }));
  };

  const handleToggleBookmark = (qId: number) => {
    setState((prev) => ({
      ...prev,
      marks: { ...prev.marks, [qId]: !prev.marks[qId] },
    }));
  };

  const handleToggleRevealOrRetry = (qId: number) => {
    const isAnswered = !!state.answers[qId];
    if (isAnswered) {
      // "Thử lại câu này": clear answer and reset revealed state
      setState((prev) => {
        const nextAnswers = { ...prev.answers };
        delete nextAnswers[qId];
        return { ...prev, answers: nextAnswers };
      });
      setRevealedIds((prev) => {
        const next = new Set(prev);
        next.delete(qId);
        return next;
      });
    } else {
      // Toggle reveal
      setRevealedIds((prev) => {
        const next = new Set(prev);
        if (next.has(qId)) {
          next.delete(qId);
        } else {
          next.add(qId);
        }
        return next;
      });
    }
  };

  const handleReset = () => {
    if (window.confirm('Xóa đáp án và dấu trang đã lưu để bắt đầu lại?')) {
      setState({ answers: {}, marks: {} });
      setRevealedIds(new Set());
    }
  };

  const currentTopicName = TOPICS.find((t) => t.id === topic)?.name || 'Tất cả câu hỏi';

  return (
    <>
      <header>
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); setTopic('all'); setSearch(''); setFilter('all'); }}>
          <span className="logo">V.</span> VOAI <b>LAB</b>
        </a>
        <span className="header-note">KHÔNG GIAN TỰ HỌC AI</span>
        <button id="reset" className="quiet" onClick={handleReset} title="Xóa tiến độ làm bài">
          Làm lại từ đầu ↺
        </button>
      </header>

      <main>
        <section className="hero">
          <div>
            <div className="eyebrow">
              <span /> TỪ ZERO ĐẾN HIỂU BẢN CHẤT
            </div>
            <h1>
              Hiểu từng câu.<br />
              <em>Vững từng bước.</em>
            </h1>
            <p>
              100 câu hỏi, bốn mảng kiến thức AI. Thử sức trước,<br className="desktop" />
              mở lời giải sau — và hiểu vì sao đáp án đúng.
            </p>
            <div className="hero-tags">
              <span>100 câu luyện tập</span>
              <span>4 chủ đề</span>
              <span>Giải thích &amp; hiệu chỉnh</span>
            </div>
          </div>

          <div className="journey">
            <span className="eyebrow">HÀNH TRÌNH CỦA BẠN</span>
            <div className="numbers">
              <strong id="done">{answeredQuestions.length}</strong>
              <span>/ 100 câu đã làm</span>
            </div>
            <div className="track">
              <i id="progress" style={{ width: `${answeredQuestions.length}%` }} />
            </div>
            <div className="metrics">
              <div>
                <b id="correct">{correctCount}</b>
                <span>Trả lời đúng</span>
              </div>
              <div>
                <b id="wrong">{wrongCount}</b>
                <span>Cần xem lại</span>
              </div>
              <div>
                <b id="saved">{savedCount}</b>
                <span>Đã đánh dấu</span>
              </div>
            </div>
            <small>Tiến độ tự lưu trên trình duyệt này.</small>
          </div>
        </section>

        <section className="workspace">
          <aside>
            <div className="aside-title">CHỦ ĐỀ KIẾN THỨC</div>
            <nav className="topic-nav" id="topics">
              {TOPICS.map((t) => {
                const isActive = topic === t.id;
                return (
                  <button
                    key={t.id}
                    className={isActive ? 'active' : ''}
                    aria-pressed={isActive}
                    onClick={() => setTopic(t.id)}
                  >
                    {t.icon} {t.name}
                    <span>{t.count}</span>
                  </button>
                );
              })}
            </nav>

            <div className="tip">
              <span>✦ GÓC HỌC TẬP</span>
              <p>
                Đừng chỉ nhớ chữ cái.<br />
                Hãy thử giải thích đáp án bằng lời của chính bạn.
              </p>
            </div>

            <div className="source">
              Nguồn: “VOAI — Từ Zero, Lý thuyết &amp; 100 câu luyện đề” do bạn cung cấp.<br /><br />
              Bản ôn tập độc lập, không phải đề thi chính thức. Các ghi chú màu vàng làm rõ lỗi và giả thiết trong tài liệu.
            </div>
          </aside>

          <div className="study">
            <div className="toolbar">
              <label className="search">
                ⌕{' '}
                <input
                  id="search"
                  type="text"
                  placeholder="Tìm câu hỏi, chủ đề hoặc số câu…"
                  aria-label="Tìm câu hỏi"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>

              <select
                id="filter"
                className="filter-select"
                aria-label="Lọc trạng thái"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">Tất cả câu hỏi</option>
                <option value="unanswered">Chưa làm</option>
                <option value="wrong">Trả lời sai</option>
                <option value="bookmarked">Đã đánh dấu</option>
                <option value="notes">Có hiệu chỉnh</option>
              </select>
            </div>

            <div className="study-heading">
              <h2 id="topic-title">{currentTopicName}</h2>
              <span id="count">{filteredList.length} câu hỏi</span>
            </div>

            <div id="question" ref={questionCardRef}>
              {!activeQuestion ? (
                <div className="empty">
                  Chưa có câu hỏi trong bộ lọc này.<br />
                  Thử đổi chủ đề hoặc trạng thái để tiếp tục học.
                </div>
              ) : (
                (() => {
                  const q = activeQuestion;
                  const chosen = state.answers[q.id];
                  const isMarked = !!state.marks[q.id];
                  const isRevealed = revealedIds.has(q.id);
                  const showExplanation = !!chosen || isRevealed;

                  return (
                    <article className="card">
                      <div className="card-top">
                        <span className="badge">{q.topic}</span>
                        <span>CÂU {String(q.id).padStart(2, '0')} / 100</span>
                        <button
                          className={`bookmark ${isMarked ? 'on' : ''}`}
                          id="bookmark"
                          aria-pressed={isMarked}
                          onClick={() => handleToggleBookmark(q.id)}
                        >
                          {isMarked ? '★ Đã đánh dấu' : '☆ Đánh dấu'}
                        </button>
                      </div>

                      <h3>{q.question}</h3>

                      <div className="options">
                        {q.options.map((o) => {
                          const isRight = showExplanation && o.key === q.answer;
                          const isWrong = chosen === o.key && chosen !== q.answer;
                          return (
                            <button
                              key={o.key}
                              className={`option ${isRight ? 'right' : ''} ${isWrong ? 'wrong' : ''}`}
                              disabled={!!chosen}
                              onClick={() => handleAnswer(q.id, o.key)}
                            >
                              <span className="letter">{o.key}</span>
                              <span>{o.text}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="actions">
                        <small>
                          {chosen
                            ? chosen === q.answer
                              ? '✓ Bạn đã chọn đúng.'
                              : '↗ Chưa đúng. Xem cách giải bên dưới nhé.'
                            : 'Chọn một đáp án để kiểm tra kiến thức.'}
                        </small>
                        <button
                          className="primary"
                          id="reveal"
                          onClick={() => handleToggleRevealOrRetry(q.id)}
                        >
                          {chosen
                            ? 'Thử lại câu này'
                            : showExplanation
                            ? 'Ẩn lời giải'
                            : 'Xem lời giải ↗'}
                        </button>
                      </div>

                      {showExplanation && (
                        <div className="explanation" aria-live="polite">
                          <h4>
                            Đáp án {q.answer} · {q.title}
                          </h4>
                          <p>{q.explanation}</p>
                          {q.note ? (
                            <div className="note">
                              <b>✦ Hiểu chính xác hơn</b>
                              {q.note}
                            </div>
                          ) : null}
                        </div>
                      )}
                    </article>
                  );
                })()
              )}
            </div>

            <div className="pagination">
              <button
                id="prev"
                disabled={activeIndex <= 0}
                onClick={handlePrev}
              >
                ← Câu trước
              </button>
              <span id="position">
                {filteredList.length > 0 ? `${activeIndex + 1} / ${filteredList.length}` : '0 / 0'}
              </span>
              <button
                id="next"
                disabled={activeIndex < 0 || activeIndex >= filteredList.length - 1}
                onClick={handleNext}
              >
                Câu tiếp →
              </button>
            </div>

            <section className="map">
              <div className="aside-title">
                ĐI ĐẾN CÂU HỎI <span>● Đúng <i>● Sai</i></span>
              </div>
              <div id="grid">
                {filteredList.map((x) => {
                  const isCurrent = x.id === activeId;
                  const ans = state.answers[x.id];
                  const isGood = ans && ans === x.answer;
                  const isBad = ans && ans !== x.answer;
                  const isMarked = state.marks[x.id];

                  let classNames = '';
                  if (isCurrent) classNames += 'current ';
                  if (isGood) classNames += 'good ';
                  if (isBad) classNames += 'bad ';
                  if (isMarked) classNames += 'marked';

                  return (
                    <button
                      key={x.id}
                      className={classNames.trim()}
                      aria-label={`Câu ${x.id}${ans ? (isGood ? ', đã đúng' : ', đã sai') : ''}`}
                      onClick={() => handleSelectQuestion(x.id)}
                    >
                      {x.id}
                    </button>
                  );
                })}
              </div>
            </section>
          </div>
        </section>
      </main>

      <footer>
        VOAI LAB <span>Học để hiểu, không chỉ để chọn đúng.</span>
      </footer>
    </>
  );
}
