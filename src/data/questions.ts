export interface Option {
  key: string;
  text: string;
}

export interface Question {
  id: number;
  title: string;
  question: string;
  options: Option[];
  answer: string;
  explanation: string;
  topic: 'ML' | 'DL' | 'CV' | 'NLP' | string;
  note: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "k-NN cơ bản",
    question: "Trong thuật toán k-NN, điều gì xảy ra khi tăng k từ 1 lên 50?",
    options: [
      { key: "A", text: "Mô hình phức tạp hơn và dễ overfitting hơn" },
      { key: "B", text: "Mô hình smooth hơn, giảm variance nhưng có thể tăng bias (bỏ qua cấu trúc cục bộ)" },
      { key: "C", text: "Thời gian dự đoán giảm do cần xét ít điểm hơn" },
      { key: "D", text: "Độ chính xác luôn tăng theo k" }
    ],
    answer: "B",
    explanation: "k nhỏ → nhạy cảm với nhiễu → overfitting (high variance). k lớn → quyết định bị trung bình hóa → \nunderfitting (high bias). Không có k 'luôn tốt hơn' — cần dùng cross-validation để chọn k tối ưu.",
    topic: "ML",
    note: ""
  },
  {
    id: 2,
    title: "Khoảng cách Euclid",
    question: "Tính khoảng cách Euclid giữa Q=(3, 4) và P=(0, 0).",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "4" },
      { key: "C", text: "5" },
      { key: "D", text: "7" }
    ],
    answer: "C",
    explanation: "d = √[(3−0)² + (4−0)²] = √[9+16] = √25 = 5\n Các bước tính: \nd = √[(3−0)² + (4−0)²]\n= √[9 + 16]\n= √25 = 5",
    topic: "ML",
    note: ""
  },
  {
    id: 3,
    title: "Entropy",
    question: "Một nhóm có 5 mẫu: 3 lớp Dương, 2 lớp Âm. Entropy là bao nhiêu?",
    options: [
      { key: "A", text: "1.00" },
      { key: "B", text: "0.97" },
      { key: "C", text: "0.80" },
      { key: "D", text: "0.50" }
    ],
    answer: "B",
    explanation: "p(+) = 3/5 = 0.6; p(−) = 2/5 = 0.4.\nH = −0.6 log₂(0.6) − 0.4 log₂(0.4) ≈ 0.971 bit. Hai lớp gần cân bằng nên entropy gần 1.",
    topic: "ML",
    note: ""
  },
  {
    id: 4,
    title: "Random Forest",
    question: "Random Forest khác một cây quyết định đơn lẻ ở điểm chính nào?",
    options: [
      { key: "A", text: "Random Forest không bao giờ bị overfitting" },
      { key: "B", text: "Random Forest dùng nhiều cây, mỗi cây train trên bootstrap sample khác nhau và chỉ xét √p features tại mỗi split" },
      { key: "C", text: "Random Forest nhanh hơn cây đơn lẻ khi dự đoán" },
      { key: "D", text: "Random Forest không cần chuẩn hóa dữ liệu" }
    ],
    answer: "B",
    explanation: "Random Forest = Bagging + nhiều cây + Random Feature Selection. Bagging: mỗi cây học trên tập \ncon ngẫu nhiên khác nhau. Tại mỗi split chỉ xét √p features ngẫu nhiên → cây đa dạng → giảm \nvariance khi kết hợp.",
    topic: "ML",
    note: "√p là lựa chọn phổ biến, không bắt buộc trong mọi Random Forest. Bootstrap là lấy mẫu có hoàn lại."
  },
  {
    id: 5,
    title: "SVM hyperplane",
    question: "SVM tìm kiếm điều gì khi phân loại dữ liệu 2 lớp?",
    options: [
      { key: "A", text: "Đường phân cách có độ dốc lớn nhất" },
      { key: "B", text: "Siêu phẳng (hyperplane) có margin lớn nhất — khoảng cách từ siêu phẳng đến điểm gần nhất của mỗi lớp là tối đa" },
      { key: "C", text: "Đường đi qua trung tâm của tất cả điểm dữ liệu" },
      { key: "D", text: "Đường phân cách có nhiều support vectors nhất" }
    ],
    answer: "B",
    explanation: "SVM tìm maximum margin hyperplane. Support vectors = các điểm gần hyperplane nhất (nằm trên \n'lề'). Chỉ support vectors quyết định vị trí hyperplane — không phụ thuộc vào các điểm khác.",
    topic: "ML",
    note: ""
  },
  {
    id: 6,
    title: "Overfitting dấu hiệu",
    question: "Đâu là dấu hiệu RÕ RÀNG nhất của overfitting?",
    options: [
      { key: "A", text: "Training loss thấp VÀ validation loss thấp như nhau" },
      { key: "B", text: "Training loss thấp (ví dụ 2%) nhưng validation loss cao (ví dụ 25%)" },
      { key: "C", text: "Cả training loss và validation loss đều cao" },
      { key: "D", text: "Validation loss thấp hơn training loss" }
    ],
    answer: "B",
    explanation: "Overfitting = model học thuộc tập train nhưng không tổng quát được. Train tốt (loss thấp) nhưng val \nkém (loss cao) là dấu hiệu điển hình. Cả hai đều cao = underfitting. Val thấp hơn train = bình thường \n(train có augmentation, dropout).",
    topic: "ML",
    note: ""
  },
  {
    id: 7,
    title: "K-Means dừng",
    question: "Thuật toán K-Means dừng khi nào?",
    options: [
      { key: "A", text: "Khi đạt đúng K cụm" },
      { key: "B", text: "Khi các tâm cụm không thay đổi giữa 2 vòng lặp liên tiếp (hoặc thay đổi dưới ngưỡng ε)" },
      { key: "C", text: "Sau đúng 100 vòng lặp" },
      { key: "D", text: "Khi tất cả điểm cách đều các tâm cụm" }
    ],
    answer: "B",
    explanation: "K-Means hội tụ khi assignment không thay đổi → tâm không đổi. Đây là local optimum, không đảm \nbảo global. Vì thế nên chạy nhiều lần với initialization khác nhau và chọn kết quả có WCSS nhỏ nhất.",
    topic: "ML",
    note: ""
  },
  {
    id: 8,
    title: "MSE tính tay",
    question: "Cho y_true = [2, 4, 6] và y_pred = [3, 3, 5]. MSE bằng bao nhiêu?",
    options: [
      { key: "A", text: "1.0" },
      { key: "B", text: "1.5" },
      { key: "C", text: "2.0" },
      { key: "D", text: "0.5" }
    ],
    answer: "A",
    explanation: "MSE = [(2−3)² + (4−3)² + (6−5)²] / 3\n Các bước tính: \n(2−3)² = (−1)² = 1\n(4−3)² = (1)²  = 1\n(6−5)² = (1)²  = 1\nMSE = (1+1+1)/3 = 3/3 = 1.0",
    topic: "ML",
    note: ""
  },
  {
    id: 9,
    title: "Precision & Recall",
    question: "Hệ thống phát hiện email spam: trong 100 email thật, phát hiện đúng 80 spam. Nhưng cũng gán nhầm 10 email quan trọng thành spam. Recall của spam là bao nhiêu? (Giả sử có 100 email spam thật sự)",
    options: [
      { key: "A", text: "Recall = 0.80" },
      { key: "B", text: "Recall = 0.89" },
      { key: "C", text: "Recall = 0.70" },
      { key: "D", text: "Recall = 0.75" }
    ],
    answer: "A",
    explanation: "Recall = TP / (TP + FN). TP = 80 (spam phát hiện đúng). FN = 20 (spam bị bỏ sót). Recall = 80 / \n(80+20) = 0.80. Precision = 80 / (80+10) = 0.89.\n Các bước tính: \nTP = 80 (spam detect đúng)\nFN = 20 (spam bị miss)\nFP = 10 (email thường bị gán nhầm là spam)\nRecall = TP/(TP+FN) = 80/100 = 0.80",
    topic: "ML",
    note: ""
  },
  {
    id: 10,
    title: "Silhouette",
    question: "Điểm p thuộc cụm C1. a(p)=0.5, b(p,C2)=0.8, b(p,C3)=1.5. Silhouette s(p) là bao nhiêu?",
    options: [
      { key: "A", text: "s(p) = 0.375" },
      { key: "B", text: "s(p) = 0.475" },
      { key: "C", text: "s(p) = 0.600" },
      { key: "D", text: "s(p) = 0.500" }
    ],
    answer: "A",
    explanation: "b(p) = min(b(p,C2), b(p,C3)) = min(0.8, 1.5) = 0.8.  s(p) = (b−a)/max(a,b) = (0.8−0.5)/max(0.5,0.8) = \n0.3/0.8 = 0.375\n Các bước tính: \nb(p) = min(0.8, 1.5) = 0.8  ← cụm GẦN NHẤT khác\ns(p) = (0.8 − 0.5) / max(0.5, 0.8)\n= 0.3 / 0.8 = 0.375",
    topic: "ML",
    note: ""
  },
  {
    id: 11,
    title: "Chuẩn hóa k-NN",
    question: "Tại sao phải chuẩn hóa dữ liệu trước khi dùng k-NN?",
    options: [
      { key: "A", text: "Để mô hình chạy nhanh hơn" },
      { key: "B", text: "Để tránh một thuộc tính có giá trị lớn thống trị khoảng cách Euclid — ví dụ thu nhập (triệu đồng) lấn át chiều cao (cm)" },
      { key: "C", text: "Vì k-NN yêu cầu dữ liệu ở dạng phần trăm" },
      { key: "D", text: "Để giảm số lượng điểm dữ liệu cần xét" }
    ],
    answer: "B",
    explanation: "Khoảng cách Euclid nhạy cảm với đơn vị. Thuộc tính 'thu nhập' (1M-50M) sẽ lấn át 'tuổi' (18-65). Sau\nchuẩn hóa min-max hoặc z-score, mọi thuộc tính có cùng thang đo → đóng góp ngang nhau vào \nkhoảng cách.",
    topic: "ML",
    note: ""
  },
  {
    id: 12,
    title: "Bagging vs Boosting",
    question: "XGBoost dựa trên kỹ thuật nào?",
    options: [
      { key: "A", text: "Bagging (như Random Forest)" },
      { key: "B", text: "Boosting (cây sau học từ lỗi của cây trước)" },
      { key: "C", text: "Ensemble đơn giản (averaging)" },
      { key: "D", text: "Deep learning (neural network)" }
    ],
    answer: "B",
    explanation: "Boosting: train tuần tự. Cây 1 train bình thường. Cây 2 tập trung vào mẫu Cây 1 sai. Cây 3 tập trung \nvào mẫu Cây 2 vẫn sai... Kết quả: tổng hợp có trọng số. Random Forest = Bagging (song song, độc \nlập). XGBoost/AdaBoost = Boosting (tuần tự).",
    topic: "ML",
    note: ""
  },
  {
    id: 13,
    title: "Regularization",
    question: "Bạn có 500 features nhưng nghi ngờ chỉ ~30 features thực sự quan trọng. Nên dùng regularization nào?",
    options: [
      { key: "A", text: "L2 (Ridge) — giảm tất cả trọng số đều nhau" },
      { key: "B", text: "L1 (Lasso) — đẩy nhiều trọng số về đúng 0, tự động chọn features quan trọng" },
      { key: "C", text: "Dropout — tắt ngẫu nhiên features" },
      { key: "D", text: "Không cần regularization" }
    ],
    answer: "B",
    explanation: "L1 tạo sparse solution: trọng số features không quan trọng → 0. L2 giảm tất cả trọng số nhưng không\nvề 0. Khi cần feature selection tự động → L1 (Lasso). Khi muốn giảm variance mà giữ tất cả features \n→ L2 (Ridge).",
    topic: "ML",
    note: ""
  },
  {
    id: 14,
    title: "Cross-validation",
    question: "5-fold cross-validation với 1000 mẫu: mỗi lần train/test sử dụng bao nhiêu mẫu?",
    options: [
      { key: "A", text: "Train: 500, Test: 500" },
      { key: "B", text: "Train: 800, Test: 200 (4 folds train, 1 fold test)" },
      { key: "C", text: "Train: 900, Test: 100" },
      { key: "D", text: "Train: 1000, Test: 1000 (dùng lại toàn bộ)" }
    ],
    answer: "B",
    explanation: "5-fold: chia đều thành 5 phần 200 mẫu. Mỗi vòng: 1 phần test (200 mẫu), 4 phần còn lại train (800 \nmẫu). Lặp 5 vòng, mỗi phần làm test đúng 1 lần. Kết quả = trung bình 5 vòng.",
    topic: "ML",
    note: "Fold giữ lại là validation khi dùng để chọn mô hình; tách biệt với test cuối cùng."
  },
  {
    id: 15,
    title: "Model selection",
    question: "Mô hình A: train=99%, val=60%. Mô hình B: train=78%, val=76%. Nên chọn mô hình nào để deploy?",
    options: [
      { key: "A", text: "A — vì train accuracy cao hơn" },
      { key: "B", text: "B — vì val accuracy cao hơn và gap train-val nhỏ hơn (không overfitting)" },
      { key: "C", text: "A — vì không overfitting nếu train đủ lâu" },
      { key: "D", text: "Cần train thêm mô hình A" }
    ],
    answer: "B",
    explanation: "Deploy model nghĩa là gặp data mới (giống val/test). Mô hình A: overfit nặng (train 99% vs val 60% \n— gap 39%). Mô hình B: không overfit, val cao hơn → sẽ tốt hơn khi gặp data mới. Luôn chọn theo \nval accuracy, không phải train accuracy.",
    topic: "ML",
    note: "Validation tốt hơn là bằng chứng để chọn B, không chứng minh B hoàn toàn không overfit."
  },
  {
    id: 16,
    title: "Entropy cao",
    question: "Trong cây quyết định ID3, nút có Entropy cao có nghĩa là gì?",
    options: [
      { key: "A", text: "Nút thuần khiết — tất cả mẫu cùng lớp" },
      { key: "B", text: "Nút không thuần khiết — các lớp phân bố tương đối đều nhau" },
      { key: "C", text: "Nút rất sâu trong cây" },
      { key: "D", text: "Nút cần được pruning (cắt tỉa)" }
    ],
    answer: "B",
    explanation: "Entropy = 0: tất cả mẫu cùng 1 lớp → thuần khiết. Entropy = 1 (binary): 50% lớp A, 50% lớp B → hỗn\nloạn tối đa. ID3 muốn giảm entropy sau mỗi lần chia (tăng Information Gain).",
    topic: "ML",
    note: ""
  },
  {
    id: 17,
    title: "Naive Bayes",
    question: "Naive Bayes gọi là 'naive' vì lý do gì?",
    options: [
      { key: "A", text: "Vì thuật toán quá đơn giản không học được pattern phức tạp" },
      { key: "B", text: "Vì giả định các features độc lập với nhau cho trước class label — giả định này thường không đúng trong thực tế" },
      { key: "C", text: "Vì chỉ dùng được với dữ liệu nhị phân" },
      { key: "D", text: "Vì không cần training data" }
    ],
    answer: "B",
    explanation: "P(x ,x ,...,x |y) = ΠP(x |y) — giả định independence. Thực tế các features thường tương quan (ví dụ: ₁ ₂ ₙ ᵢ\n'machine' và 'learning' thường đi cùng). Dù vậy Naive Bayes vẫn hoạt động tốt với NLP vì dataset đủ \nlớn.",
    topic: "ML",
    note: ""
  },
  {
    id: 18,
    title: "Bias-Variance",
    question: "Model A train=70%, val=69%. Model B train=99%, val=65%. Mô hình nào có high variance?",
    options: [
      { key: "A", text: "Model A" },
      { key: "B", text: "Model B" },
      { key: "C", text: "Cả hai" },
      { key: "D", text: "Không mô hình nào" }
    ],
    answer: "B",
    explanation: "High variance = overfitting: train tốt nhưng val kém. Model B: train 99% vs val 65% (gap 34%) → high\nvariance (overfitting). Model A: train 70% ≈ val 69% (gap nhỏ) → high bias (underfitting — cả hai đều \nthấp), LOW variance.",
    topic: "ML",
    note: "Khoảng cách train–validation lớn gợi ý high variance; accuracy 70% chưa đủ chứng minh high bias."
  },
  {
    id: 19,
    title: "Feature importance",
    question: "Trong Random Forest, feature importance được đo bằng gì?",
    options: [
      { key: "A", text: "Correlation của feature với target variable" },
      { key: "B", text: "Trung bình mức độ giảm impurity (Gini/Entropy) khi feature đó được dùng để split, tính trên toàn bộ rừng" },
      { key: "C", text: "Kích thước hệ số trong linear regression" },
      { key: "D", text: "Số lần feature xuất hiện trong dataset" }
    ],
    answer: "B",
    explanation: "Mean Decrease in Impurity (MDI): feature quan trọng → được chọn nhiều để split → mỗi lần giảm \nGini/Entropy nhiều. Tổng hợp trên tất cả cây cho feature importance. Cẩn thận: MDI bias với feature \nnhiều giá trị. Permutation importance (shuffle feature → đo accuracy giảm) là alternative tốt hơn.",
    topic: "ML",
    note: ""
  },
  {
    id: 20,
    title: "Logistic Regression",
    question: "Logistic Regression khác Linear Regression ở điểm nào chính?",
    options: [
      { key: "A", text: "Logistic Regression không có giai đoạn training" },
      { key: "B", text: "Logistic Regression áp dụng hàm sigmoid lên output tuyến tính → output (0,1) là xác ∈ suất" },
      { key: "C", text: "Logistic Regression chỉ dùng cho dữ liệu cân bằng" },
      { key: "D", text: "Logistic Regression không cần gradient descent" }
    ],
    answer: "B",
    explanation: "Linear: y = Wx + b → output bất kỳ số thực. Logistic: y = σ(Wx+b) = 1/(1+e^(−(Wx+b))) → output  ∈\n(0,1). Dùng Binary Cross-Entropy thay vì MSE. Quyết định: nếu y > 0.5 → lớp 1, ngược lại → lớp 0.",
    topic: "ML",
    note: ""
  },
  {
    id: 21,
    title: "K-Means WCSS",
    question: "Chạy K-Means 5 lần với K=3, thu được WCSS: [120, 95, 88, 110, 92]. Nên chọn kết quả nào?",
    options: [
      { key: "A", text: "Lần 1 (WCSS=120) vì chạy đầu tiên" },
      { key: "B", text: "Lần 3 (WCSS=88) vì WCSS nhỏ nhất → phân cụm compact nhất" },
      { key: "C", text: "Trung bình cộng của 5 lần" },
      { key: "D", text: "Lần 5 (WCSS=92) vì ổn định hơn" }
    ],
    answer: "B",
    explanation: "WCSS = Within-Cluster Sum of Squares = tổng bình phương khoảng cách từ điểm đến tâm cụm. \nWCSS nhỏ nhất = các điểm gần tâm nhất = phân cụm tốt nhất. K-Means có thể rơi vào local \nminimum → cần chạy nhiều lần và chọn kết quả có WCSS nhỏ nhất.",
    topic: "ML",
    note: ""
  },
  {
    id: 22,
    title: "Imbalanced dataset",
    question: "Dataset: 99% giao dịch bình thường, 1% gian lận. Classifier luôn predict 'bình thường'. Vấn đề là gì?",
    options: [
      { key: "A", text: "Vì accuracy = 99% không đủ cao" },
      { key: "B", text: "Accuracy 99% misleading — Recall = 0 (không phát hiện bất kỳ gian lận nào). Model vô dụng dù accuracy cao" },
      { key: "C", text: "Cần dataset lớn hơn để train" },
      { key: "D", text: "Không có vấn đề — 99% là rất tốt" }
    ],
    answer: "B",
    explanation: "Imbalanced data: class 1% bị bỏ qua hoàn toàn. Mô hình predict 'bình thường' 100%: TP=0, FN=tất \ncả gian lận. Recall = 0. Accuracy cao nhưng vô dụng. Cần: F1-score, AUC-ROC, class weighting, \noversampling.",
    topic: "ML",
    note: ""
  },
  {
    id: 23,
    title: "Train Test split",
    question: "Tại sao cần tập validation RIÊNG với tập test?",
    options: [
      { key: "A", text: "Để có thêm data training" },
      { key: "B", text: "Dùng test để tune hyperparameter → test bị 'lộ' → đánh giá thực sự sẽ không khách quan. Validation: tune model. Test: đánh giá final 1 lần duy nhất" },
      { key: "C", text: "Chỉ cần khi model có >1000 tham số" },
      { key: "D", text: "Để tăng độ chính xác của model" }
    ],
    answer: "B",
    explanation: "Train: học parameters. Validation: chọn hyperparameters, model selection. Test: báo cáo \nperformance cuối. Nếu dùng test để tune hyperparameters → model 'biết' test data → test accuracy \nkhông phản ánh real-world performance.",
    topic: "ML",
    note: ""
  },
  {
    id: 24,
    title: "L1 L2 khác biệt",
    question: "L1 và L2 regularization đều giảm overfitting nhưng theo cách khác nhau. Điểm khác biệt chính?",
    options: [
      { key: "A", text: "L1 chậm hơn L2 về mặt tính toán" },
      { key: "B", text: "L1 đẩy nhiều trọng số về đúng 0 (feature selection). L2 giảm đều tất cả trọng số nhưng không về 0" },
      { key: "C", text: "L2 dùng cho classification, L1 cho regression" },
      { key: "D", text: "L1 và L2 cho kết quả giống nhau" }
    ],
    answer: "B",
    explanation: "L2 penalty: λ×Σw ² → gradient: 2λw  → trọng số giảm dần nhưng không về 0. L1 penalty: λ×Σ|w | → ᵢ ᵢ ᵢ\ngradient: λ×sign(w ) → trọng số có thể về đúng 0. L1 = tự động loại bỏ features không quan trọng. L2 ᵢ\n= giữ tất cả features nhưng giảm magnitude.",
    topic: "ML",
    note: "L2 khuyến khích trọng số nhỏ, không có quy tắc rằng mọi trọng số giảm đều hay không bao giờ bằng 0."
  },
  {
    id: 25,
    title: "Gradient descent",
    question: "Hàm L(w) = (w−4)². Bắt đầu w=0, learning rate η=0.5. Sau 1 bước gradient descent, w là bao nhiêu?",
    options: [
      { key: "A", text: "w = 2" },
      { key: "B", text: "w = 4" },
      { key: "C", text: "w = 6" },
      { key: "D", text: "w = 1" }
    ],
    answer: "B",
    explanation: "∂L/∂w = 2(w−4). Tại w=0: ∂L/∂w = 2(0−4) = −8. w_new = 0 − 0.5×(−8) = 0 + 4 = 4.\n Các bước tính: \n∂L/∂w = 2×(w−4) = 2×(0−4) = −8\nw_new = w − η×(∂L/∂w) = 0 − 0.5×(−8) = 0 + 4 = 4",
    topic: "ML",
    note: ""
  },
  {
    id: 26,
    title: "ROC AUC",
    question: "AUC-ROC = 0.5 của một classifier có nghĩa là gì?",
    options: [
      { key: "A", text: "Model đạt accuracy 50%" },
      { key: "B", text: "Model không có khả năng phân biệt 2 lớp — tương đương random guessing" },
      { key: "C", text: "Model tệ — cần train lại" },
      { key: "D", text: "Model đang bị overfitting" }
    ],
    answer: "B",
    explanation: "ROC curve: True Positive Rate vs False Positive Rate. AUC=1.0: perfect. AUC=0.5: đường chéo = \nrandom guessing (không phân biệt được). AUC=0.0: phân biệt ngược (flip → hoàn hảo). AUC khác \naccuracy — không bị ảnh hưởng bởi imbalanced data.",
    topic: "ML",
    note: "AUC=0.5 không có nghĩa accuracy=50%, cũng không buộc mọi điểm ROC nằm trên đường chéo."
  },
  {
    id: 27,
    title: "Ensemble methods",
    question: "Điểm khác biệt cơ bản giữa Bagging và Boosting là gì?",
    options: [
      { key: "A", text: "Bagging dùng nhiều loại mô hình khác nhau" },
      { key: "B", text: "Bagging train song song và độc lập (giảm variance). Boosting train tuần tự — mỗi model học từ lỗi của model trước (giảm bias)" },
      { key: "C", text: "Bagging chỉ cho classification" },
      { key: "D", text: "Boosting luôn tốt hơn Bagging" }
    ],
    answer: "B",
    explanation: "Bagging (Random Forest): mỗi cây học trên bootstrap sample → song song → giảm variance. \nBoosting (XGBoost): cây sau tập trung vào mẫu cây trước sai → tuần tự → giảm bias. Boosting \naccuracy cao hơn nhưng dễ overfit hơn.",
    topic: "ML",
    note: ""
  },
  {
    id: 28,
    title: "Decision Tree pruning",
    question: "Tại sao cần pruning (cắt tỉa) cây quyết định?",
    options: [
      { key: "A", text: "Để cây chạy nhanh hơn khi train" },
      { key: "B", text: "Để giảm overfitting: cây quá sâu học thuộc từng mẫu train → kém tổng quát. Pruning cắt bỏ nhánh không cải thiện validation performance" },
      { key: "C", text: "Để cây phân loại chính xác hơn trên train set" },
      { key: "D", text: "Pruning không cần thiết nếu có đủ data" }
    ],
    answer: "B",
    explanation: "Cây sâu: mỗi leaf có thể chứa 1 mẫu → học thuộc train data hoàn hảo → train accuracy = 100% \nnhưng val/test kém (overfit). Pre-pruning: giới hạn max_depth, min_samples_split. Post-pruning: \nbuild full tree rồi cắt nhánh làm giảm val accuracy.",
    topic: "ML",
    note: ""
  },
  {
    id: 29,
    title: "PCA mục đích",
    question: "PCA (Principal Component Analysis) dùng để làm gì?",
    options: [
      { key: "A", text: "Phân loại dữ liệu thành nhiều lớp" },
      { key: "B", text: "Giảm số chiều dữ liệu bằng cách tìm các hướng có phương sai lớn nhất, giữ lại thông tin quan trọng nhất" },
      { key: "C", text: "Tăng số chiều dữ liệu để model học tốt hơn" },
      { key: "D", text: "Chuẩn hóa dữ liệu về khoảng [0,1]" }
    ],
    answer: "B",
    explanation: "PCA: tìm eigenvectors của covariance matrix → chọn k eigenvectors với eigenvalue lớn nhất. Project\ndata lên k chiều mới. Ứng dụng: visualization (reduce to 2D/3D), remove noise (components nhỏ = \nnoise), speed up training (ít features hơn).",
    topic: "ML",
    note: "PCA giữ phương sai, không đảm bảo giữ đặc trưng phân loại hữu ích nhất."
  },
  {
    id: 30,
    title: "Recall vs Precision use case",
    question: "Hệ thống phát hiện ung thư: bỏ sót bệnh nhân ung thư (False Negative) nguy hiểm hơn nhiều so với báo nhầm người khỏe (False Positive). Metric nào quan trọng nhất?",
    options: [
      { key: "A", text: "Precision — vì cần chính xác" },
      { key: "B", text: "Recall — vì cần phát hiện ĐỦ tất cả ca thật sự bị bệnh (không được bỏ sót)" },
      { key: "C", text: "Accuracy — vì đây là metric tổng quát nhất" },
      { key: "D", text: "F1-Score — luôn là lựa chọn tốt nhất" }
    ],
    answer: "B",
    explanation: "False Negative (bỏ sót ung thư) nguy hiểm hơn False Positive (báo nhầm người khỏe). Recall = \nTP/(TP+FN). Recall cao = ít bỏ sót. Precision = TP/(TP+FP) = không báo nhầm. Trong y tế: ưu tiên \nRecall. Trong spam filter: ưu tiên Precision (không muốn gán nhầm email quan trọng thành spam).",
    topic: "ML",
    note: ""
  },
  {
    id: 31,
    title: "BatchNorm vị trí",
    question: "Thứ tự chuẩn khi xây dựng một block trong deep network là gì?",
    options: [
      { key: "A", text: "ReLU → Linear → BatchNorm" },
      { key: "B", text: "BatchNorm → Linear → ReLU" },
      { key: "C", text: "Linear → BatchNorm → ReLU" },
      { key: "D", text: "Linear → ReLU → BatchNorm" }
    ],
    answer: "C",
    explanation: "Thứ tự chuẩn nhất: Linear (phép nhân ma trận) → BatchNorm (chuẩn hóa) → ReLU (hàm kích hoạt).\nBatchNorm SAU Linear để chuẩn hóa giá trị trước khi áp activation. Một số kiến trúc dùng \nLinear→ReLU→BN nhưng Linear→BN→ReLU phổ biến hơn.",
    topic: "DL",
    note: "C là cấu hình phổ biến theo ý đề, không phải thứ tự duy nhất hợp lệ."
  },
  {
    id: 32,
    title: "Loss function selection",
    question: "Bạn xây dựng mô hình phân loại ảnh thành 5 lớp (chó, mèo, chim, cá, thỏ). Output layer nên có bao nhiêu node và dùng hàm mất mát nào?",
    options: [
      { key: "A", text: "1 node output, BCEWithLogitsLoss" },
      { key: "B", text: "5 node output, CrossEntropyLoss (đã tích hợp Softmax)" },
      { key: "C", text: "5 node output, MSELoss" },
      { key: "D", text: "2 node output, CrossEntropyLoss" }
    ],
    answer: "B",
    explanation: "Phân loại 5 lớp: output layer cần 5 nodes (1 cho mỗi lớp). CrossEntropyLoss trong PyTorch đã tích \nhợp Softmax → KHÔNG thêm Softmax thủ công vào model. BCEWithLogitsLoss chỉ cho binary. \nMSELoss cho hồi quy.",
    topic: "DL",
    note: "BCEWithLogitsLoss còn dùng cho đa nhãn; CrossEntropyLoss phù hợp 5 lớp loại trừ nhau."
  },
  {
    id: 33,
    title: "Vanishing gradient",
    question: "Vanishing Gradient xảy ra khi nào và giải quyết bằng cách nào?",
    options: [
      { key: "A", text: "Xảy ra khi gradient quá lớn → dùng gradient clipping" },
      { key: "B", text: "Xảy ra khi gradient trở nên rất nhỏ (gần 0) qua nhiều lớp → dùng ReLU thay Sigmoid, skip connections (ResNet), batch normalization" },
      { key: "C", text: "Xảy ra khi learning rate quá nhỏ → tăng lr" },
      { key: "D", text: "Chỉ xảy ra với CNN, không xảy ra với MLP" }
    ],
    answer: "B",
    explanation: "Vanishing gradient: Sigmoid'(x) ≤ 0.25 → gradient nhân nhiều lần qua nhiều lớp → tiến về 0 → layer \nđầu học rất chậm. Giải pháp: ReLU (gradient=1 cho x>0), Skip connections (bypass nhiều lớp), BN \n(chuẩn hóa giúp gradient ổn định), LSTM/GRU cho RNN.",
    topic: "DL",
    note: ""
  },
  {
    id: 34,
    title: "Dropout cơ chế",
    question: "Khi inference (dự đoán), Dropout hoạt động như thế nào?",
    options: [
      { key: "A", text: "Dropout vẫn tắt ngẫu nhiên p% neurons như khi training" },
      { key: "B", text: "Dropout bị TẮT — tất cả neurons đều hoạt động (gọi model.eval() trong PyTorch)" },
      { key: "C", text: "Dropout chỉ giữ lại các neurons quan trọng nhất" },
      { key: "D", text: "Dropout tắt 50% neurons cố định" }
    ],
    answer: "B",
    explanation: "Khi inference ở chế độ eval, Dropout không bỏ ngẫu nhiên activation. Với inverted dropout, các activation giữ lại được nhân 1/(1−p) lúc train; eval giữ nguyên đầu vào.",
    topic: "DL",
    note: "Sửa lỗi PDF: inverted dropout nhân 1/(1−p) khi TRAIN. Khi EVAL, Dropout là phép đồng nhất, không nhân thêm (1−p)."
  },
  {
    id: 35,
    title: "Optimizer Adam",
    question: "Tại sao Adam optimizer phổ biến hơn SGD thuần túy trong deep learning?",
    options: [
      { key: "A", text: "Adam chạy nhanh hơn SGD về mặt tính toán" },
      { key: "B", text: "Adam tự động điều chỉnh learning rate riêng cho từng tham số dựa trên lịch sử gradient → hội tụ nhanh hơn, ít nhạy cảm với learning rate ban đầu" },
      { key: "C", text: "Adam không cần khởi tạo trọng số" },
      { key: "D", text: "Adam không bị overfitting" }
    ],
    answer: "B",
    explanation: "SGD: w ← w − η×g (lr cố định cho tất cả params). Adam kết hợp Momentum (hướng) + RMSProp \n(magnitude riêng cho từng param). Params được update thường xuyên → lr nhỏ hơn; params ít \nupdate → lr lớn hơn. Mặc định: lr=0.001, β =0.9, β =0.999.₁ ₂",
    topic: "DL",
    note: ""
  },
  {
    id: 36,
    title: "Early stopping",
    question: "Early stopping monitor cái gì để quyết định dừng training?",
    options: [
      { key: "A", text: "Training loss" },
      { key: "B", text: "Validation loss (hoặc validation accuracy) — dừng khi không cải thiện trong 'patience' epochs liên tiếp" },
      { key: "C", text: "Số epoch đã train" },
      { key: "D", text: "Learning rate" }
    ],
    answer: "B",
    explanation: "Training loss luôn giảm khi train thêm (có thể do overfit). Validation loss tăng khi overfit → đó là lúc \ncần dừng. Patience=10: chịu đựng 10 epoch không cải thiện. Khi dừng: restore checkpoint tốt nhất. \nGiúp tránh overfitting mà không cần chọn số epoch trước.",
    topic: "DL",
    note: "Training loss có thể dao động, không phải luôn giảm. Theo dõi validation và khôi phục checkpoint tốt nhất."
  },
  {
    id: 37,
    title: "Weight initialization",
    question: "Tại sao khởi tạo tất cả weights = 0 là sai?",
    options: [
      { key: "A", text: "Vì weight = 0 không thể tính gradient" },
      { key: "B", text: "Tất cả neurons cùng lớp nhận cùng gradient → cùng update → học giống hệt nhau. Network tương đương chỉ có 1 neuron/lớp → không học được gì thêm từ việc có nhiều neurons" },
      { key: "C", text: "Vì model sẽ không converge" },
      { key: "D", text: "Vì gradient sẽ quá lớn" }
    ],
    answer: "B",
    explanation: "Symmetry breaking problem: nếu W=0, tất cả ∂L/∂w  = ∂L/∂w  = ... = ∂L/∂w  (giống nhau). Update ₁ ₂ ₙ\ngiống nhau → neurons đồng nhất → mạng thực chất chỉ có 1 neuron hiệu quả. Cần random \ninitialization để phá đối xứng. Xavier, He initialization giúp duy trì variance ổn định.",
    topic: "DL",
    note: "Quy tắc phá đối xứng áp dụng trọng số neuron ẩn; bias vẫn thường khởi tạo bằng 0."
  },
  {
    id: 38,
    title: "BCE Loss tính",
    question: "Label thật y=1 (mèo), xác suất dự đoán p=0.9. Binary Cross-Entropy loss là bao nhiêu?",
    options: [
      { key: "A", text: "BCE ≈ 0.105" },
      { key: "B", text: "BCE ≈ 0.301" },
      { key: "C", text: "BCE ≈ 0.693" },
      { key: "D", text: "BCE ≈ 0.200" }
    ],
    answer: "A",
    explanation: "BCE = −[y×ln(p) + (1−y)×ln(1−p)] = −[1×ln(0.9) + 0×ln(0.1)]\n Các bước tính: \nBCE = −[1×ln(0.9) + 0×ln(0.1)]\n= −[1×(−0.105) + 0]\n= −(−0.105) = 0.105",
    topic: "DL",
    note: ""
  },
  {
    id: 39,
    title: "Batch normalization lợi ích",
    question: "Batch Normalization mang lại lợi ích chính nào trong training?",
    options: [
      { key: "A", text: "Giảm số lượng tham số của model" },
      { key: "B", text: "Chuẩn hóa input mỗi lớp → ổn định training, cho phép learning rate lớn hơn, giảm nhạy cảm với weight initialization" },
      { key: "C", text: "Loại bỏ cần thiết phải dùng Dropout" },
      { key: "D", text: "Tăng tốc inference lên 10 lần" }
    ],
    answer: "B",
    explanation: "Internal Covariate Shift: phân phối input mỗi lớp thay đổi liên tục → khó train. BN chuẩn hóa về \nmean=0, var=1 trên mỗi batch. Kết quả: lr lớn hơn (train nhanh), ít phụ thuộc initialization, ổn định \nhơn. BN có 2 params learnable: γ (scale) và β (shift).",
    topic: "DL",
    note: ""
  },
  {
    id: 40,
    title: "PyTorch vòng lặp",
    question: "Trong vòng lặp training PyTorch, tại sao phải gọi optimizer.zero_grad() mỗi vòng?",
    options: [
      { key: "A", text: "Để reset model weights về 0" },
      { key: "B", text: "Vì PyTorch TỰ ĐỘNG CỘNG DỒN gradient giữa các vòng. Nếu không zero_grad(), gradient bị tích lũy sai từ vòng trước → update weights không đúng" },
      { key: "C", text: "Để tăng tốc độ training" },
      { key: "D", text: "Chỉ cần gọi 1 lần duy nhất trước vòng lặp" }
    ],
    answer: "B",
    explanation: "PyTorch design: gradient TÍCH LŨY (accumulate) sau mỗi backward(). Ích lợi: gradient accumulation \nkhi batch nhỏ. Nhưng thông thường phải zero_grad() trước mỗi backward() mới để gradient của vòng\nnày không bị cộng với vòng trước.",
    topic: "DL",
    note: ""
  },
  {
    id: 41,
    title: "ReLU ưu điểm",
    question: "Tại sao ReLU thường được chọn thay vì Sigmoid cho hidden layers?",
    options: [
      { key: "A", text: "ReLU cho output trong khoảng (0,1) như xác suất" },
      { key: "B", text: "ReLU không bị vanishing gradient phía dương (gradient=1 khi x>0). Sigmoid gradient tối đa 0.25 → vanish qua nhiều lớp" },
      { key: "C", text: "ReLU nhanh hơn Sigmoid về mặt toán học" },
      { key: "D", text: "ReLU có thể xử lý input âm tốt hơn Sigmoid" }
    ],
    answer: "B",
    explanation: "Sigmoid: σ'(x) = σ(x)(1−σ(x)) ≤ 0.25. Qua 10 lớp: gradient ≤ (0.25)^10 ≈ 0 → vanishing. ReLU: \ngradient = 1 (x>0), 0 (x<0). Không bị saturate phía dương → gradient chảy tốt. Nhược: Dying ReLU \n(x luôn âm → gradient=0 → neuron 'chết'). Giải pháp: Leaky ReLU.",
    topic: "DL",
    note: "ReLU vẫn có gradient bằng 0 ở phía âm. C cũng là ưu điểm tính toán; B là ý chính của câu."
  },
  {
    id: 42,
    title: "Softmax dùng khi nào",
    question: "Softmax thường được dùng ở đâu trong neural network?",
    options: [
      { key: "A", text: "Hidden layers để thêm phi tuyến tính" },
      { key: "B", text: "Output layer của phân loại nhiều lớp — chuyển logits thành xác suất (tổng = 1)" },
      { key: "C", text: "Input layer để chuẩn hóa dữ liệu" },
      { key: "D", text: "Thay thế cho BatchNorm" }
    ],
    answer: "B",
    explanation: "Softmax(s ) = e  / Σe . Kết quả: mỗi giá trị  (0,1) và tổng = 1 → có thể interpret là xác suất. Chọn ᵢ ˢ ˢʲ ⁱ ∈\nclass = argmax. Lưu ý: CrossEntropyLoss PyTorch đã tích hợp Softmax → KHÔNG thêm Softmax \nvào output layer của model khi dùng CrossEntropyLoss.",
    topic: "DL",
    note: ""
  },
  {
    id: 43,
    title: "He initialization",
    question: "He initialization tốt hơn Xavier cho network dùng ReLU vì lý do gì?",
    options: [
      { key: "A", text: "He sử dụng phân phối uniform thay vì normal" },
      { key: "B", text: "ReLU set 50% neurons về 0 → variance giảm 2 lần. He: Var(W)=2/n_in bù đắp → variance ổn định qua các lớp. Xavier: Var(W)=2/(n_in+n_out) không bù đắp đủ" },
      { key: "C", text: "He không cần biết n_in và n_out" },
      { key: "D", text: "Xavier và He giống nhau cho ReLU" }
    ],
    answer: "B",
    explanation: "Xavier giả định activation function symmetric (tanh, sigmoid). ReLU(x<0)=0 → 50% neurons = 0 → \nvariance giảm 2 lần qua mỗi lớp. He: nhân thêm 2 để bù → Var(W) = 2/n_in. Giữ variance activation \nổn định → tránh vanishing/exploding gradient.",
    topic: "DL",
    note: "50% activation bằng 0 là trực giác dưới giả thiết phân phối ban đầu, không phải bảo đảm."
  },
  {
    id: 44,
    title: "Transfer learning freeze",
    question: "Khi fine-tune ResNet50 trên dataset ảnh vệ tinh nhỏ (500 ảnh), chiến lược tốt nhất là gì?",
    options: [
      { key: "A", text: "Train lại toàn bộ ResNet50 từ đầu với 500 ảnh" },
      { key: "B", text: "Freeze toàn bộ backbone (đóng băng không train), chỉ thêm và train classifier head mới" },
      { key: "C", text: "Chỉ train 2 lớp đầu tiên (lớp thấp nhất)" },
      { key: "D", text: "Không train gì cả — dùng features có sẵn trực tiếp" }
    ],
    answer: "B",
    explanation: "Dataset nhỏ: fine-tune toàn bộ → overfit (nhiều params quá so với data). Tốt nhất: backbone đã học \nfeatures tốt (edges, textures, shapes) từ ImageNet → giữ nguyên. Thêm classifier head mới (ít \nparams) → chỉ train head. Nếu domain khác nhiều + data trung bình: unfreeze thêm vài layer cuối.",
    topic: "DL",
    note: "B là điểm khởi đầu hợp lý, không chắc tốt nhất. Cần so sánh với mở một số lớp cuối trên validation."
  },
  {
    id: 45,
    title: "model.eval()",
    question: "Tại sao phải gọi model.eval() trước khi dự đoán trong PyTorch?",
    options: [
      { key: "A", text: "Để giải phóng bộ nhớ GPU" },
      { key: "B", text: "Để TẮT Dropout (không ngẫu nhiên tắt neurons) và BatchNorm (dùng running statistics thay vì batch statistics) → kết quả dự đoán ổn định" },
      { key: "C", text: "Để model dừng học và chỉ dự đoán" },
      { key: "D", text: "Để tăng tốc inference 2x" }
    ],
    answer: "B",
    explanation: "Training mode: BN dùng batch mean/var (noisy). Dropout tắt ngẫu nhiên neurons. Eval mode: BN \ndùng running mean/var (ổn định). Dropout disabled. Quên gọi model.eval() → mỗi lần inference cho \nkết quả khác nhau (do Dropout ngẫu nhiên) → không thể reproduce.",
    topic: "DL",
    note: "BatchNorm không bị tắt; nó dùng running statistics theo cấu hình thông thường. eval() không tự tắt autograd."
  },
  {
    id: 46,
    title: "GAN mode collapse",
    question: "GAN sinh ảnh toàn màu xám. Nguyên nhân phổ biến nhất là gì?",
    options: [
      { key: "A", text: "Learning rate quá nhỏ" },
      { key: "B", text: "Mất cân bằng Discriminator/Generator — Discriminator học quá nhanh, Generator bỏ cuộc và output giá trị trung tính (màu xám trung bình RGB)" },
      { key: "C", text: "Batch size quá lớn" },
      { key: "D", text: "Loss quá nhỏ" }
    ],
    answer: "B",
    explanation: "B là đáp án theo ý đề: mất cân bằng huấn luyện có thể khiến generator không học tốt. Tuy nhiên đầu ra màu xám không xác định duy nhất nguyên nhân. Cần kiểm tra pipeline ảnh, loss, gradient và độ đa dạng mẫu.",
    topic: "DL",
    note: "Ảnh xám không đủ để kết luận D quá mạnh. Có thể do lỗi chuẩn hóa, hiển thị hoặc tối ưu. B chỉ là ý đề; mode collapse nghĩa là thiếu đa dạng."
  },
  {
    id: 47,
    title: "Autoencoder ứng dụng",
    question: "Autoencoder thường dùng cho bài toán nào?",
    options: [
      { key: "A", text: "Phân loại ảnh (image classification)" },
      { key: "B", text: "Khử nhiễu ảnh, phát hiện bất thường (anomaly detection), nén dữ liệu — vì học cách tái tạo dữ liệu qua bottleneck" },
      { key: "C", text: "Dịch thuật ngôn ngữ" },
      { key: "D", text: "Phân tích cảm xúc văn bản" }
    ],
    answer: "B",
    explanation: "Autoencoder: Encoder nén x → z (nhỏ hơn) → Decoder tái tạo x' ≈ x. Denoising AE: train với noisy \ninput, reconstruct clean output → khử nhiễu. Anomaly detection: dữ liệu bình thường → \nreconstruction error nhỏ; anomaly → error lớn (không biết cách tái tạo). VAE: z ~ N(μ,σ²) → sinh dữ \nliệu mới.",
    topic: "DL",
    note: ""
  },
  {
    id: 48,
    title: "Gradient clipping",
    question: "Gradient clipping dùng để giải quyết vấn đề gì?",
    options: [
      { key: "A", text: "Vanishing gradient — gradient quá nhỏ" },
      { key: "B", text: "Exploding gradient — gradient quá lớn → weight update quá mạnh → training không ổn định. Clipping giới hạn norm gradient không vượt quá threshold" },
      { key: "C", text: "Overfitting" },
      { key: "D", text: "Slow convergence" }
    ],
    answer: "B",
    explanation: "Exploding gradient phổ biến trong RNN, Transformer (sequence dài). Gradient norm > threshold → \nscale gradient xuống. PyTorch: nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0). Khác \nvanishing gradient (quá nhỏ → dùng ReLU, skip connections).",
    topic: "DL",
    note: ""
  },
  {
    id: 49,
    title: "Stable Diffusion",
    question: "Stable Diffusion thuộc loại mô hình sinh ảnh nào?",
    options: [
      { key: "A", text: "GAN (Generative Adversarial Network)" },
      { key: "B", text: "Diffusion Model — thêm noise dần vào ảnh, sau đó học cách khử noise ngược lại để sinh ảnh mới" },
      { key: "C", text: "Autoencoder đơn thuần" },
      { key: "D", text: "Transformer Encoder-Decoder" }
    ],
    answer: "B",
    explanation: "Stable Diffusion = Latent Diffusion Model (LDM): (1) VAE encode ảnh → latent space nhỏ hơn. (2) \nDiffusion process trong latent space. (3) Conditional generation: text → CLIP embedding → cross-\nattention trong UNet. KHÔNG có Discriminator → không phải GAN. Mỗi step khử noise một ít → cần \n20-50 steps.",
    topic: "DL",
    note: "Số bước khử nhiễu phụ thuộc cấu hình, không cố định 20–50."
  },
  {
    id: 50,
    title: "CrossEntropyLoss Softmax",
    question: "Code PyTorch nào SAI khi dùng CrossEntropyLoss?",
    options: [
      { key: "A", text: "outputs = model(x); loss = nn.CrossEntropyLoss()(outputs, y)" },
      { key: "B", text: "outputs = F.softmax(model(x), dim=1); loss = nn.CrossEntropyLoss()(outputs, y) — SAI vì Softmax được áp 2 lần" },
      { key: "C", text: "loss_fn = nn.CrossEntropyLoss(); loss = loss_fn(model(x), y)" },
      { key: "D", text: "outputs = model(x); criterion = nn.CrossEntropyLoss(); loss = criterion(outputs, target)" }
    ],
    answer: "B",
    explanation: "CrossEntropyLoss trong PyTorch = log_softmax + NLLLoss. Nếu outputs đã qua Softmax rồi mới \nđưa vào CrossEntropyLoss → Softmax được áp 2 lần → giá trị xác suất bị ép vào (0,1) không đúng \n→ loss sai. Model output phải là raw logits (chưa qua Softmax).",
    topic: "DL",
    note: ""
  },
  {
    id: 51,
    title: "Khởi tạo sai",
    question: "Đâu là phương pháp khởi tạo weights TỐT NHẤT cho network dùng ReLU?",
    options: [
      { key: "A", text: "Tất cả weights = 0" },
      { key: "B", text: "Tất cả weights = 1" },
      { key: "C", text: "He initialization: W ~ N(0, 2/n_in)" },
      { key: "D", text: "Weights ngẫu nhiên từ N(0, 1) không cần scale" }
    ],
    answer: "C",
    explanation: "All-zeros: symmetry problem (đã giải thích). All-ones: exploding activations. N(0,1) không scale: khi \nn_in lớn → Σw x  có variance = n_in → explode. He: √(2/n_in) → variance ổn định qua các lớp. ᵢ ᵢ\nXavier: tốt cho tanh/sigmoid. He: tốt cho ReLU.",
    topic: "DL",
    note: ""
  },
  {
    id: 52,
    title: "Self-supervised learning",
    question: "Self-supervised learning khác supervised learning ở điểm gì chính?",
    options: [
      { key: "A", text: "Self-supervised cần ít dữ liệu hơn" },
      { key: "B", text: "Self-supervised TỰ TẠO nhãn từ dữ liệu không có nhãn (ví dụ: mask một phần và predict phần bị mask) — không cần người gán nhãn" },
      { key: "C", text: "Self-supervised chỉ dùng cho Computer Vision" },
      { key: "D", text: "Self-supervised dùng reinforcement learning để học" }
    ],
    answer: "B",
    explanation: "Supervised: cần (X, y) pairs — tốn kém labeling. Self-supervised: tạo pseudo-labels từ data structure.\nVí dụ: BERT mask 15% tokens và predict. SimCLR tạo 2 augmented views, maximize similarity. MAE\nmask 75% image patches và reconstruct. Học được representations tốt mà không cần labels.",
    topic: "DL",
    note: ""
  },
  {
    id: 53,
    title: "Overfitting giải pháp",
    question: "Model bị overfitting (train 98%, val 62%). Cách nào sau đây KHÔNG giúp giảm overfitting?",
    options: [
      { key: "A", text: "Thêm Dropout vào model" },
      { key: "B", text: "Tăng learning rate thêm 10 lần" },
      { key: "C", text: "Thu thập thêm training data" },
      { key: "D", text: "Thêm L2 regularization" }
    ],
    answer: "B",
    explanation: "Tăng learning rate không giúp giảm overfitting — thực ra có thể làm tệ hơn (training không ổn định). \nDropout, L2 regularization, thêm data đều giúp giảm overfitting. Các cách khác: giảm model \ncomplexity, cross-validation, early stopping, data augmentation.",
    topic: "DL",
    note: "Tăng learning rate tùy ý 10 lần không phải biện pháp chuẩn chống overfit; learning rate vẫn có thể ảnh hưởng tổng quát hóa."
  },
  {
    id: 54,
    title: "Mini-batch SGD",
    question: "Tại sao nên shuffle (xáo trộn) dữ liệu trước mỗi epoch trong mini-batch SGD?",
    options: [
      { key: "A", text: "Để tăng số lượng mẫu training" },
      { key: "B", text: "Để tránh model học theo thứ tự dữ liệu — nếu không shuffle, mỗi batch luôn cùng loại → gradient bị biased. Shuffle đảm bảo mỗi batch đa dạng → gradient unbiased" },
      { key: "C", text: "Để giảm thời gian training" },
      { key: "D", text: "Shuffle không cần thiết nếu data đã phân phối đều" }
    ],
    answer: "B",
    explanation: "Ví dụ: dataset sắp xếp theo class [A,A,A,...,B,B,B,...]. Không shuffle: batch đầu toàn A → gradient \nbias toward A. Với shuffle: mỗi batch mix đều các class → gradient unbiased → model học tốt hơn. \nTrong PyTorch: DataLoader(dataset, shuffle=True).",
    topic: "DL",
    note: "Shuffle không đảm bảo mỗi batch cân bằng; phải tôn trọng cấu trúc thời gian khi cần."
  },
  {
    id: 55,
    title: "Knowledge distillation",
    question: "Knowledge Distillation là kỹ thuật gì?",
    options: [
      { key: "A", text: "Chia model lớn thành nhiều model nhỏ hơn" },
      { key: "B", text: "Train model nhỏ (student) bắt chước output xác suất của model lớn (teacher) — student học cả 'dark knowledge' trong probability distribution của teacher" },
      { key: "C", text: "Nén dữ liệu training để train nhanh hơn" },
      { key: "D", text: "Chuyển knowledge từ text model sang image model" }
    ],
    answer: "B",
    explanation: "Teacher: lớn, chính xác, chậm. Student: nhỏ, nhanh. Thay vì dùng hard labels (0/1), dùng soft \nprobabilities của teacher (ví dụ [0.7, 0.2, 0.1]). Soft labels chứa thêm thông tin về tương quan giữa \nclasses. Loss = α×CE(student, hard_labels) + (1−α)×KL(student, teacher_soft). Ứng dụng: \nDistilBERT là student của BERT.",
    topic: "DL",
    note: ""
  },
  {
    id: 56,
    title: "Conv2D output size",
    question: "Input ảnh 64×64, Conv2D với kernel=3, stride=1, padding=1. Kích thước output là bao nhiêu?",
    options: [
      { key: "A", text: "62×62" },
      { key: "B", text: "64×64" },
      { key: "C", text: "66×66" },
      { key: "D", text: "32×32" }
    ],
    answer: "B",
    explanation: "Công thức: (W−k+2p)/s +1 = (64−3+2×1)/1 +1 = 63/1 +1 = 64. padding=1 với kernel=3, stride=1 ⌊ ⌋ ⌊ ⌋ ⌊ ⌋\n→ output = input (same padding behavior).\n Các bước tính: \n(64 − 3 + 2×1) / 1  + 1⌊ ⌋\n= (64 − 3 + 2) / 1  + 1⌊ ⌋\n= 63  + 1 = 63 + 1 = 64⌊ ⌋",
    topic: "CV",
    note: ""
  },
  {
    id: 57,
    title: "Conv2D stride=2",
    question: "Input ảnh 28×28, Conv2D: kernel=5, stride=2, không padding. Output size là bao nhiêu?",
    options: [
      { key: "A", text: "14×14" },
      { key: "B", text: "12×12" },
      { key: "C", text: "13×13" },
      { key: "D", text: "10×10" }
    ],
    answer: "B",
    explanation: "(W−k)/s +1 = (28−5)/2 +1 = 23/2 +1 = 11+1 = 12. Output: 12×12.⌊ ⌋ ⌊ ⌋ ⌊ ⌋\n Các bước tính: \n(28 − 5 + 0) / 2  + 1⌊ ⌋\n= 23 / 2  + 1⌊ ⌋\n= 11 + 1 = 12",
    topic: "CV",
    note: ""
  },
  {
    id: 58,
    title: "Max pooling",
    question: "Feature map 4×4: [[1,3,2,4],[5,6,7,8],[9,2,3,1],[4,6,8,2]]. Max Pooling 2×2, stride=2. Giá trị tại vị trí (0,0) của output?",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "6" },
      { key: "C", text: "5" },
      { key: "D", text: "9" }
    ],
    answer: "B",
    explanation: "Ô 2×2 đầu tiên (vị trí (0,0)): [[1,3],[5,6]]. Max = 6.\n Các bước tính: \nÔ (0,0): lấy 2×2 góc trên trái: [[1,3],[5,6]]\nMax([[1,3],[5,6]]) = 6",
    topic: "CV",
    note: ""
  },
  {
    id: 59,
    title: "Feature map bộ lọc ngang",
    question: "Bộ lọc Sobel nằm ngang [[-1,-2,-1],[0,0,0],[1,2,1]] phát hiện đặc trưng gì trong ảnh?",
    options: [
      { key: "A", text: "Cạnh theo hướng dọc (vertical edges)" },
      { key: "B", text: "Cạnh theo hướng ngang (horizontal edges) — phát hiện sự thay đổi pixel theo chiều dọc" },
      { key: "C", text: "Góc và điểm giao" },
      { key: "D", text: "Đốm màu (color blobs)" }
    ],
    answer: "B",
    explanation: "Sobel ngang: âm ở trên, dương ở dưới → cho giá trị cao khi gradient vertical lớn → tức là cạnh \nngang. Giá trị cao = đường ngang sáng trong feature map. Sobel dọc [[-1,0,1],[-2,0,2],[-1,0,1]] phát \nhiện cạnh dọc.",
    topic: "CV",
    note: ""
  },
  {
    id: 60,
    title: "Depthwise separable conv",
    question: "MobileNet dùng Depthwise Separable Convolution thay vì Standard Convolution. Lý do chính?",
    options: [
      { key: "A", text: "Cho accuracy cao hơn Standard Conv" },
      { key: "B", text: "Giảm đáng kể số FLOPs: Standard 3×3: C_in×C_out×k²; Depthwise Sep: C_in×k² + C_in×C_out — nhanh hơn ~8x với C_out=256, k=3" },
      { key: "C", text: "Depthwise Conv xử lý được ảnh đen trắng" },
      { key: "D", text: "Không cần GPU để chạy" }
    ],
    answer: "B",
    explanation: "Standard 3×3 Conv: C_in channels → C_out channels, FLOPs = k²×C_in×C_out. Depthwise: mỗi \nchannel conv riêng (k²×1), sau đó Pointwise 1×1 conv C_in→C_out. Total ≈ k²×C_in + C_in×C_out = \nC_in(k²+C_out). Reduction ≈ k²×C_out/(k²+C_out) ≈ k²=9x với C_out lớn. Dùng trong MobileNet, \nEfficientNet.",
    topic: "CV",
    note: "Công thức đếm theo mỗi vị trí không gian. Giảm phép tính không đảm bảo tăng tốc thực tế đúng cùng tỉ lệ."
  },
  {
    id: 61,
    title: "ResNet skip connection",
    question: "ResNet giải quyết vấn đề gì khi xây dựng mạng rất sâu (100+ lớp)?",
    options: [
      { key: "A", text: "Giảm số tham số" },
      { key: "B", text: "Giải quyết Vanishing Gradient: skip connection tạo 'đường tắt' cho gradient chảy trực tiếp → gradient không bị triệt tiêu dù mạng sâu" },
      { key: "C", text: "Tăng kích thước input ảnh" },
      { key: "D", text: "Giảm thời gian training" }
    ],
    answer: "B",
    explanation: "ResNet dùng y = F(x) + x. Nhánh identity tạo thêm đường truyền tín hiệu và gradient, hỗ trợ tối ưu mạng sâu. Đạo hàm là F′(x)+1, nhưng tổng này không có cận dưới 1.",
    topic: "CV",
    note: "Sửa lỗi PDF: F′(x)+1 KHÔNG luôn ≥1 vì F′(x) có thể âm. Residual giúp tối ưu, không bảo đảm gradient luôn khác 0."
  },
  {
    id: 62,
    title: "NMS IoU",
    question: "Hộp A: (10,10,50,50), Hộp B: (30,30,70,70). Tọa độ (x1,y1,x2,y2). IoU là bao nhiêu?",
    options: [
      { key: "A", text: "IoU ≈ 0.14" },
      { key: "B", text: "IoU ≈ 0.25" },
      { key: "C", text: "IoU ≈ 0.50" },
      { key: "D", text: "IoU ≈ 0.33" }
    ],
    answer: "A",
    explanation: "Giao: x1=max(10,30)=30, y1=30, x2=min(50,70)=50, y2=50. Giao=20×20=400. Hộp A: 40×40=1600. \nHộp B: 40×40=1600. Hợp=1600+1600−400=2800. IoU=400/2800≈0.143≈0.14.\n Các bước tính: \nGiao: x1=max(10,30)=30, y1=max(10,30)=30, x2=min(50,70)=50, y2=min(50,70)=50\nDiện tích giao = (50−30)×(50−30) = 20×20 = 400\nDiện tích A = (50−10)×(50−10) = 40×40 = 1600\nDiện tích B = (70−30)×(70−30) = 40×40 = 1600\nHợp = 1600 + 1600 − 400 = 2800\nIoU = 400/2800 ≈ 0.143 ≈ 0.14",
    topic: "CV",
    note: ""
  },
  {
    id: 63,
    title: "ViT kiến trúc",
    question: "Vision Transformer (ViT) chia ảnh 224×224 thành bao nhiêu patches nếu patch size = 16×16?",
    options: [
      { key: "A", text: "196 patches (14×14)" },
      { key: "B", text: "256 patches (16×16)" },
      { key: "C", text: "144 patches (12×12)" },
      { key: "D", text: "100 patches (10×10)" }
    ],
    answer: "A",
    explanation: "224 / 16 = 14. Số patches = 14 × 14 = 196. Mỗi patch 16×16×3 = 768 giá trị → flatten → linear \nprojection thành vector D chiều. Thêm [CLS] token → 197 tokens tổng cộng.\n Các bước tính: \nSố patches mỗi chiều = 224 / 16 = 14\nTổng patches = 14 × 14 = 196",
    topic: "CV",
    note: ""
  },
  {
    id: 64,
    title: "Transfer learning fine-tune",
    question: "pretrained=True khi tải model có nghĩa là gì?",
    options: [
      { key: "A", text: "Model sẽ được train lại từ đầu với dữ liệu của bạn" },
      { key: "B", text: "Tải trọng số đã được huấn luyện sẵn trên ImageNet (1.2M ảnh) — không train từ đầu" },
      { key: "C", text: "Model sẽ tự động chọn hyperparameters tốt nhất" },
      { key: "D", text: "Model chỉ dùng được với ảnh 224×224" }
    ],
    answer: "B",
    explanation: "pretrained=True (hay weights='DEFAULT'): download trọng số từ PyTorch Hub đã huấn luyện sẵn. \nTrọng số này đã học features từ ImageNet: lớp thấp (cạnh, textures), lớp cao (vật thể phức tạp). \nDùng lại thay vì train từ đầu → tiết kiệm thời gian, cần ít data hơn.",
    topic: "CV",
    note: "Pretrained nghĩa là trọng số đã học; ImageNet chỉ là nguồn trong ngữ cảnh mô hình ảnh của đề."
  },
  {
    id: 65,
    title: "U-Net skip",
    question: "Trong U-Net (encoder-decoder cho segmentation), skip connections làm gì?",
    options: [
      { key: "A", text: "Cộng (ADD) encoder features vào decoder features như ResNet" },
      { key: "B", text: "Nối (CONCATENATE) encoder features với decoder features theo chiều channel — giúp decoder giữ spatial details bị mất trong quá trình pooling" },
      { key: "C", text: "Copy toàn bộ encoder vào decoder" },
      { key: "D", text: "Giảm số kênh bằng cách trừ encoder từ decoder" }
    ],
    answer: "B",
    explanation: "U-Net: encoder nén ảnh (giảm spatial, tăng channels) → decoder phóng to lại. Skip connections: \ncat(encoder_features, decoder_upsample) → preserve fine-grained spatial info. ResNet: ADD. U-Net:\nCONCAT. Điểm khác biệt quan trọng hay ra thi.",
    topic: "CV",
    note: ""
  },
  {
    id: 66,
    title: "Object detection anchor",
    question: "Anchor boxes trong SSD (Single Shot Detector) dùng để làm gì?",
    options: [
      { key: "A", text: "Tăng tốc training bằng cách giảm số pixels cần xét" },
      { key: "B", text: "Định nghĩa trước các hộp bao với nhiều tỷ lệ và kích thước tại mỗi vị trí trên feature map — model học cách offset (điều chỉnh) từ anchors đến vật thể thật" },
      { key: "C", text: "Phân vùng ảnh thành các ô bằng nhau" },
      { key: "D", text: "Lọc bỏ các hộp không có vật thể" }
    ],
    answer: "B",
    explanation: "SSD: tại mỗi grid cell → đặt k anchor boxes với tỷ lệ khác nhau (1:1, 2:1, 1:2...). Model predict: \nΔx,Δy,Δw,Δh (offset từ anchor) + confidence + class scores. NMS sau đó loại hộp trùng lặp. Khác: \nFCOS anchor-free — predict trực tiếp không qua anchor.",
    topic: "CV",
    note: ""
  },
  {
    id: 67,
    title: "GAN thành phần",
    question: "GAN bao gồm 2 mạng chính. Chúng làm gì?",
    options: [
      { key: "A", text: "Encoder và Decoder — nén rồi tái tạo dữ liệu" },
      { key: "B", text: "Generator tạo ảnh giả từ noise; Discriminator phân biệt ảnh thật và ảnh giả — hai bên thi đấu cho đến khi G tạo ảnh thật đến mức D không phân biệt được" },
      { key: "C", text: "Detector và Classifier — phát hiện và phân loại vật thể" },
      { key: "D", text: "Teacher và Student — knowledge distillation" }
    ],
    answer: "B",
    explanation: "GAN adversarial: G muốn D(G(z))=1 (D nghĩ là thật); D muốn D(x)=1 (thật) và D(G(z))=0 (giả). Nash \nequilibrium: G tạo ảnh hoàn hảo → D(G(z))=0.5. Ứng dụng: sinh ảnh, augmentation, style transfer, \nsuper resolution.",
    topic: "CV",
    note: ""
  },
  {
    id: 68,
    title: "Depthwise conv",
    question: "Global Average Pooling (GAP) thường thay thế cái gì ở cuối mạng CNN?",
    options: [
      { key: "A", text: "Lớp Max Pooling" },
      { key: "B", text: "Lớp Flatten + Fully Connected lớn — giảm đáng kể số tham số và tránh overfitting" },
      { key: "C", text: "Lớp BatchNorm" },
      { key: "D", text: "Lớp Dropout" }
    ],
    answer: "B",
    explanation: "Traditional CNN: feature map → Flatten (ví dụ 7×7×512=25088) → FC(25088→4096) → \nFC(4096→1000). Rất nhiều params. GAP: mỗi channel → 1 giá trị trung bình → 512 chiều → \nFC(512→1000). Giảm params ~100x. Thêm invariance với vị trí vật thể. ResNet dùng GAP.",
    topic: "CV",
    note: "Tiêu đề trong PDF bị nhầm: câu này hỏi Global Average Pooling. Sau GAP vẫn có thể có FC nhỏ."
  },
  {
    id: 69,
    title: "Feature extraction code",
    question: "Để trích xuất feature vector từ ResNet50, bạn cần làm gì với lớp fc cuối?",
    options: [
      { key: "A", text: "Xóa hoàn toàn lớp fc" },
      { key: "B", text: "Thay lớp fc bằng nn.Identity() — thay vì classify, model trả về feature vector 2048 chiều" },
      { key: "C", text: "Giảm kích thước lớp fc xuống 1" },
      { key: "D", text: "Nhân đôi kích thước lớp fc" }
    ],
    answer: "B",
    explanation: "ResNet50 gốc: ...→avgpool→flatten(2048)→fc(2048→1000 classes). Để lấy features: model.fc = \nnn.Identity(). Khi forward: model(x) → 2048-dim feature vector (không qua classification). Thay bằng \nnn.Linear(2048, num_new_classes) để fine-tune classification head.",
    topic: "CV",
    note: ""
  },
  {
    id: 70,
    title: "Dice Loss",
    question: "Tại sao Dice Loss thường dùng cho segmentation thay vì Cross-Entropy?",
    options: [
      { key: "A", text: "Dice Loss nhanh hơn Cross-Entropy" },
      { key: "B", text: "Ảnh segmentation thường mất cân bằng (background >> foreground). CE bị background chi phối. Dice = 2×TP/(2TP+FP+FN) không phụ thuộc tỷ lệ class" },
      { key: "C", text: "Cross-Entropy không dùng được cho segmentation" },
      { key: "D", text: "Dice Loss đơn giản hơn để implement" }
    ],
    answer: "B",
    explanation: "Dice đo độ chồng lấp vùng dự đoán với vùng thật: Dice = 2TP/(2TP+FP+FN). Dice Loss thường là 1−Dice. Nó không thưởng trực tiếp số lượng true negative rất lớn của nền nên hữu ích khi foreground nhỏ. Có thể kết hợp với cross-entropy.",
    topic: "CV",
    note: "Dice không hoàn toàn độc lập tỉ lệ lớp. Dice coefficient = 2TP/(2TP+FP+FN); Dice Loss thường = 1−Dice. Cross-entropy vẫn dùng được cho segmentation."
  },
  {
    id: 71,
    title: "Data augmentation rules",
    question: "Khi dùng augmentation cho nhận diện chữ số (0-9), kỹ thuật nào KHÔNG an toàn?",
    options: [
      { key: "A", text: "Random crop nhỏ" },
      { key: "B", text: "Random brightness/contrast" },
      { key: "C", text: "Horizontal flip — vì 6 và 9 sẽ bị nhầm lẫn khi lật ngang" },
      { key: "D", text: "Small rotation (±10°)" }
    ],
    answer: "C",
    explanation: "C theo ý đề: lật ngang có thể tạo chữ số soi gương, không bảo toàn phân phối dữ liệu. Nguyên tắc augmentation là giữ đúng nhãn. Cần kiểm tra cả crop và góc xoay để không làm mất nét quyết định.",
    topic: "CV",
    note: "Sửa lỗi PDF: lật ngang không phải phép đổi 6 thành 9; xoay khoảng 180° mới thường gây nhầm này. Lật ngang có thể tạo chữ số soi gương ngoài phân phối."
  },
  {
    id: 72,
    title: "CNN receptive field",
    question: "Stack 3 lớp Conv2D kernel=3×3. Receptive field của mỗi neuron output là bao nhiêu?",
    options: [
      { key: "A", text: "3×3" },
      { key: "B", text: "5×5" },
      { key: "C", text: "7×7" },
      { key: "D", text: "9×9" }
    ],
    answer: "C",
    explanation: "Receptive field tăng dần: 1 lớp conv 3×3 → RF=3. 2 lớp → RF=5. 3 lớp → RF=7. Công thức: RF_k = \nRF_{k-1} + (f-1)×Π_{i=1}^{k-1} stride_i. Với stride=1 và f=3: RF_k = 1 + k×(3-1) = 1+2k = 7 với k=3.\n Các bước tính: \nLớp 1: RF = 3\nLớp 2: RF = 3 + 2 = 5\nLớp 3: RF = 5 + 2 = 7",
    topic: "CV",
    note: "Kết quả 7×7 giả sử stride=1, dilation=1, không có pooling xen giữa."
  },
  {
    id: 73,
    title: "Pretrained model selection",
    question: "Bạn cần phân tích ảnh y tế (X-ray). Nên bắt đầu với cách nào?",
    options: [
      { key: "A", text: "Train CNN từ đầu với 500 ảnh X-ray" },
      { key: "B", text: "Fine-tune ResNet pretrained trên ImageNet — dù domain khác, các features cấp thấp (cạnh, texture) vẫn hữu ích và giúp converge nhanh hơn" },
      { key: "C", text: "Dùng BERT (model NLP) vì X-ray cần hiểu ngữ cảnh" },
      { key: "D", text: "Không cần AI — dùng threshold đơn giản" }
    ],
    answer: "B",
    explanation: "500 ảnh quá ít để train từ đầu. Pretrained ImageNet features (cạnh, texture, shape) vẫn có ích cho X-\nray dù khác domain. Transfer learning: fine-tune backbone + train classification head → tốt hơn nhiều\nso với random init. CheXNet (DenseNet pretrained) là ví dụ thành công.",
    topic: "CV",
    note: ""
  },
  {
    id: 74,
    title: "Stable Diffusion vs GAN",
    question: "Điểm khác biệt chính giữa Stable Diffusion và GAN trong việc sinh ảnh?",
    options: [
      { key: "A", text: "Stable Diffusion nhanh hơn GAN" },
      { key: "B", text: "GAN: 2 mạng đối nghịch (G vs D), 1 forward pass để sinh ảnh. Stable Diffusion: 1 mạng (UNet), nhiều bước khử noise (20-50 steps) — không có Discriminator" },
      { key: "C", text: "GAN tốt hơn về chất lượng ảnh" },
      { key: "D", text: "Cả hai đều dùng cùng loss function" }
    ],
    answer: "B",
    explanation: "GAN: G(noise)→ảnh giả, D phân biệt. 1 forward pass của G → ảnh. Training unstable (mode \ncollapse). Stable Diffusion: start từ noise → 50 denoising steps với UNet → ảnh. Stable hơn GAN \ntraining. Text conditioning qua CLIP. Tradeoff: SD chậm hơn (nhiều steps) nhưng chất lượng cao và \nđa dạng hơn.",
    topic: "CV",
    note: "Stable Diffusion không chỉ có một mạng: còn có bộ mã hóa văn bản và bộ mã hóa/giải mã ảnh. Số bước không cố định."
  },
  {
    id: 75,
    title: "Skip connection loại",
    question: "ResNet và U-Net đều có skip connections nhưng khác nhau. Sự khác biệt là gì?",
    options: [
      { key: "A", text: "ResNet dùng Concatenate, U-Net dùng Add" },
      { key: "B", text: "ResNet dùng Add (cộng), U-Net dùng Concatenate (nối) — dẫn đến số channels tăng trong U-Net" },
      { key: "C", text: "Cả hai đều dùng Multiply (nhân)" },
      { key: "D", text: "ResNet không có skip connections, chỉ U-Net mới có" }
    ],
    answer: "B",
    explanation: "ResNet: X_out = F(X) + X (Add → channels không đổi). U-Net: X_out = Cat(encoder_i, decoder_i) \n(Concat → channels tăng, ví dụ 256+256=512). Lý do U-Net dùng Concat: giữ NHIỀU thông tin hơn \n(cả spatial từ encoder lẫn semantic từ decoder). Lý do ResNet dùng Add: đơn giản, không tăng \nchannels.",
    topic: "CV",
    note: ""
  },
  {
    id: 76,
    title: "Thứ tự NLP",
    question: "Thứ tự đúng của các bước tiền xử lý NLP cơ bản?",
    options: [
      { key: "A", text: "Rút gốc từ → Tách từ → Chuẩn hóa → POS" },
      { key: "B", text: "Tách từ → Chuẩn hóa → Rút gốc từ → Gán nhãn POS" },
      { key: "C", text: "POS → Tách từ → Chuẩn hóa → Rút gốc từ" },
      { key: "D", text: "Chuẩn hóa → Rút gốc từ → Tách từ → POS" }
    ],
    answer: "B",
    explanation: "B là thứ tự tài liệu lựa chọn: tách token → chuẩn hóa → rút gốc → POS. Đây chỉ là một quy trình minh họa, không phải quy tắc chung cho mọi tác vụ NLP.",
    topic: "NLP",
    note: "B theo quy ước đề. Không có thứ tự NLP phổ quát: có thể chuẩn hóa trước tách token, POS trước lemmatization; BERT thường không stemming."
  },
  {
    id: 77,
    title: "Word2Vec CBoW",
    question: "CBoW (Continuous Bag of Words) và Skip-gram làm ngược nhau. Mô tả đúng CBoW?",
    options: [
      { key: "A", text: "Dùng từ trung tâm để đoán các từ xung quanh" },
      { key: "B", text: "Dùng các từ xung quanh (context) để đoán từ trung tâm" },
      { key: "C", text: "Dùng toàn bộ câu để đoán từng từ" },
      { key: "D", text: "Dùng nhãn (label) để phân loại từ" }
    ],
    answer: "B",
    explanation: "CBoW: context=['love', 'learning'] → predict 'deep' (từ trung tâm). Nhanh hơn Skip-gram. Skip-gram: \n'deep' → predict ['love', 'learning']. Tốt hơn với từ hiếm. GloVe: học từ co-occurrence matrix toàn cục \n(khác cả hai — không dùng sliding window trực tiếp mà dùng ma trận toàn bộ).",
    topic: "NLP",
    note: ""
  },
  {
    id: 78,
    title: "BERT đầu vào",
    question: "BertTokenizer.encode_plus() trả về những gì?",
    options: [
      { key: "A", text: "Chỉ input_ids" },
      { key: "B", text: "input_ids, attention_mask (và token_type_ids) — tất cả cần thiết để feed vào BERT" },
      { key: "C", text: "Chỉ attention_mask" },
      { key: "D", text: "input_ids và word embeddings" }
    ],
    answer: "B",
    explanation: "input_ids: dãy số ID của tokens. attention_mask: 1=token thật, 0=padding. token_type_ids: 0=câu A, \n1=câu B (dùng trong NSP). Ví dụ: tokenizer('Hello AI', return_tensors='pt') → {'input_ids': \ntensor([[101, 7592, 9932, 102]]), 'attention_mask': tensor([[1,1,1,1]])}. [CLS]=101, [SEP]=102.",
    topic: "NLP",
    note: "Các trường trả về phụ thuộc tokenizer và tham số. Không phải mọi trường đều phải truyền tường minh; tokenizer không trả word embeddings."
  },
  {
    id: 79,
    title: "Transformer attention",
    question: "Cơ chế Attention trong Transformer giúp model làm gì?",
    options: [
      { key: "A", text: "Tăng tốc độ training bằng song song hóa" },
      { key: "B", text: "Mỗi từ trong câu 'chú ý' (attend) đến các từ liên quan khác — giúp model hiểu ngữ cảnh và mối quan hệ dài hạn trong câu" },
      { key: "C", text: "Giảm kích thước sequence" },
      { key: "D", text: "Chuẩn hóa embeddings của tokens" }
    ],
    answer: "B",
    explanation: "Self-attention: mỗi token tính similarity với tất cả tokens khác → weighted sum. Ví dụ: 'Con mèo ngồi \nvì NÓ mệt' — 'NÓ' attend cao đến 'Con mèo'. Multi-head: 8 heads song song, mỗi head học loại \nrelationship khác nhau (syntax, coreference, semantics...).",
    topic: "NLP",
    note: ""
  },
  {
    id: 80,
    title: "BERT vs GPT",
    question: "BERT và GPT đều dùng Transformer nhưng khác nhau điểm gì chính?",
    options: [
      { key: "A", text: "BERT lớn hơn GPT về số tham số" },
      { key: "B", text: "BERT đọc 2 chiều (encoder, bidirectional) → tốt cho understanding. GPT đọc 1 chiều từ trái sang phải (decoder) → tốt cho generation" },
      { key: "C", text: "BERT sinh văn bản, GPT phân loại văn bản" },
      { key: "D", text: "BERT dùng RNN, GPT dùng Transformer" }
    ],
    answer: "B",
    explanation: "BERT (Bidirectional Encoder): mỗi token attend tất cả tokens khác → hiểu ngữ cảnh đầy đủ. Dùng \ncho: classification, NER, QA. GPT (Generative Pre-trained Transformer, Decoder-only): causal \nattention — token t chỉ attend t'<t. Dùng cho: text generation, chatbot. T5/BART: encoder+decoder \ncho translation/summarization.",
    topic: "NLP",
    note: ""
  },
  {
    id: 81,
    title: "Negative Sampling",
    question: "Negative Sampling trong Word2Vec giải quyết vấn đề gì?",
    options: [
      { key: "A", text: "Giảm số từ trong vocabulary" },
      { key: "B", text: "Giảm chi phí tính toán: thay vì softmax trên toàn bộ vocabulary (100K+ từ), chỉ update với 1 từ đúng + k từ sai ngẫu nhiên (k=5-20)" },
      { key: "C", text: "Tạo thêm training data" },
      { key: "D", text: "Giải quyết vấn đề OOV (out-of-vocabulary)" }
    ],
    answer: "B",
    explanation: "Skip-gram gốc: mỗi bước update softmax qua 100K từ → O(100K) computation. Negative Sampling: \nchỉ update với 1 positive + k negatives → O(k). Negatives chọn theo P(w)  freq(w)^0.75 — từ phổ ∝\nbiến có xác suất cao hơn nhưng không quá lớn. Tăng tốc training ~1000x.",
    topic: "NLP",
    note: ""
  },
  {
    id: 82,
    title: "LLM là gì",
    question: "LLM (Large Language Model) như ChatGPT học được gì trong quá trình pretraining?",
    options: [
      { key: "A", text: "Học quy tắc ngữ pháp được viết tay bởi ngôn ngữ học" },
      { key: "B", text: "Học dự đoán từ tiếp theo trong chuỗi văn bản — từ đó học được ngữ nghĩa, cú pháp, kiến thức thế giới từ lượng văn bản khổng lồ" },
      { key: "C", text: "Học phân loại văn bản thành các chủ đề cố định" },
      { key: "D", text: "Học dịch thuật từ cặp ngôn ngữ cho sẵn" }
    ],
    answer: "B",
    explanation: "LLM pretraining: minimize −Σlog P(x |x ,...,x ). Học dự đoán từ tiếp theo trên hàng trăm tỷ tokens. ₜ ₁ ₜ₋₁\nTừ việc dự đoán từ, model học: nghĩa từ, cú pháp câu, suy luận logic, kiến thức thực tế, phong cách \nviết... Emergent abilities xuất hiện ở model đủ lớn: math reasoning, code generation, few-shot \nlearning.",
    topic: "NLP",
    note: "Chính xác là dự đoán TOKEN tiếp theo, không nhất thiết từ hoàn chỉnh; không phải mọi LLM dùng cùng mục tiêu."
  },
  {
    id: 83,
    title: "LangChain",
    question: "LangChain thư viện Python dùng để làm gì?",
    options: [
      { key: "A", text: "Train LLM từ đầu" },
      { key: "B", text: "Kết nối LLM với công cụ bên ngoài (tìm kiếm web, database, API) và xây dựng agent pipeline phức tạp cho ứng dụng AI" },
      { key: "C", text: "Nén và quantize model LLM" },
      { key: "D", text: "Dịch văn bản sang nhiều ngôn ngữ" }
    ],
    answer: "B",
    explanation: "LangChain: chains (chuỗi các bước xử lý), agents (LLM tự quyết định dùng tool nào), memory (lưu \nlịch sử), tools (search, calculator, database). Ví dụ RAG pipeline: user query → retrieve relevant docs\n→ LLM answer with context. Tương tự: LlamaIndex, Haystack.",
    topic: "NLP",
    note: ""
  },
  {
    id: 84,
    title: "Chain-of-Thought",
    question: "Chain-of-Thought (CoT) prompting là gì và tại sao hiệu quả?",
    options: [
      { key: "A", text: "Kỹ thuật fine-tune LLM với dữ liệu toán học" },
      { key: "B", text: "Hướng dẫn LLM giải từng bước trung gian thay vì trả lời trực tiếp — model chia bài toán phức tạp thành bước nhỏ → tăng độ chính xác đáng kể trên toán học, logic" },
      { key: "C", text: "Kỹ thuật giảm kích thước context window" },
      { key: "D", text: "Phương pháp tăng tốc inference LLM" }
    ],
    answer: "B",
    explanation: "Không CoT: 'Nếu có 23 học sinh mỗi lớp, 5 lớp, cần bao nhiêu ghế?' → GPT có thể sai. Với CoT: \n'Hãy nghĩ từng bước. Bước 1: số học sinh = 23×5 = 115. Bước 2: cần 115 ghế.' → chính xác hơn. \nZero-shot CoT: thêm 'Let's think step by step'. Few-shot CoT: cung cấp ví dụ có lời giải bước.",
    topic: "NLP",
    note: ""
  },
  {
    id: 85,
    title: "Sentence similarity BERT",
    question: "Để so sánh độ tương đồng ngữ nghĩa giữa 2 câu, vì sao Sentence-BERT tốt hơn BERT gốc?",
    options: [
      { key: "A", text: "Sentence-BERT lớn hơn BERT gốc nên chính xác hơn" },
      { key: "B", text: "BERT gốc cần đưa cả 2 câu cùng lúc (cross-encoder, O(n²) pairs). Sentence-BERT encode từng câu độc lập → so sánh bằng cosine similarity → O(n), phù hợp semantic search quy mô lớn" },
      { key: "C", text: "Sentence-BERT không cần tokenization" },
      { key: "D", text: "BERT gốc không hiểu tiếng Việt" }
    ],
    answer: "B",
    explanation: "Sentence-BERT tạo embedding từng câu độc lập để lưu và tái sử dụng. Cross-encoder phải đưa từng cặp qua mạng. Sau khi mã hóa, so sánh cosine rẻ hơn nhiều; so mọi cặp vẫn cần số phép so sánh bậc hai.",
    topic: "NLP",
    note: "Mã hóa n câu độc lập cần n biểu diễn; so sánh mọi cặp vẫn O(n²) phép so sánh vector. SBERT giảm chi phí chạy mạng trên từng cặp."
  },
  {
    id: 86,
    title: "Text stopwords DL",
    question: "Tại sao BERT thường KHÔNG loại bỏ stopwords như các phương pháp NLP truyền thống?",
    options: [
      { key: "A", text: "Vì BERT không biết đâu là stopwords" },
      { key: "B", text: "BERT học contextual representations — 'not good' hoàn toàn khác 'good'. Loại bỏ 'not' → mất thông tin critical. Attention mechanism tự học từ nào quan trọng" },
      { key: "C", text: "Vì stopwords chứa thông tin quan trọng trong tiếng Anh" },
      { key: "D", text: "Vì loại bỏ stopwords làm tăng vocabulary size" }
    ],
    answer: "B",
    explanation: "TF-IDF + SVM: stopwords thêm noise → loại bỏ hợp lý. BERT: model học từ context. 'I do NOT \nrecommend this' vs 'I recommend this' — 'not' cực kỳ quan trọng cho sentiment. Transformer \nattention tự học weight cho mỗi token → model tự biết bỏ qua token không quan trọng.",
    topic: "NLP",
    note: ""
  },
  {
    id: 87,
    title: "GPT autoregressive",
    question: "GPT sinh văn bản theo phương pháp autoregressive. Điều này có nghĩa là gì?",
    options: [
      { key: "A", text: "GPT sinh toàn bộ câu trong 1 forward pass" },
      { key: "B", text: "GPT sinh từng token một, token mới được thêm vào context và làm input cho bước tiếp theo: P(x ,...,x ) = ΠP(x |x ,...,x )₁ ₙ ₜ ₁ ₜ₋₁" },
      { key: "C", text: "GPT chỉ sinh văn bản độ dài cố định" },
      { key: "D", text: "GPT sinh ngẫu nhiên không theo pattern" }
    ],
    answer: "B",
    explanation: "Autoregressive generation: x  → x  → ... → x . Mỗi bước điều kiện trên tất cả tokens trước. ₁ ₂ ₙ\nSampling: (1) Greedy (argmax), (2) Temperature (random theo distribution), (3) Top-k, (4) Nucleus \n(top-p). Inference chậm vì tuần tự. GPT-3: 175B params, sinh tốt nhưng chậm.",
    topic: "NLP",
    note: ""
  },
  {
    id: 88,
    title: "Tokenization BPE",
    question: "Tại sao GPT-4 dùng BPE tokenization thay vì word-level tokenization?",
    options: [
      { key: "A", text: "BPE nhanh hơn word-level" },
      { key: "B", text: "Word-level: không xử lý được từ mới (OOV). BPE: merge cặp ký tự phổ biến nhất → có thể tokenize bất kỳ từ nào, và rare words được chia thành subword pieces" },
      { key: "C", text: "BPE cho vocabulary nhỏ hơn" },
      { key: "D", text: "BPE không cần whitespace để tách từ" }
    ],
    answer: "B",
    explanation: "Word tokenizer: 'ChatGPT' → unknown token nếu không có trong vocab. BPE: 'Chat' + 'G' + 'PT' = 3 \ntokens (biết cả 3 subwords). Character-level: 'ChatGPT' = 7 tokens (dài). BPE cân bằng: shorter \nsequences hơn char-level, handle OOV tốt hơn word-level. GPT-4: ~100K token vocabulary.",
    topic: "NLP",
    note: "Cách tách từ phụ thuộc tokenizer. Khả năng xử lý mọi chuỗi cần đơn vị cơ sở/fallback thích hợp, chẳng hạn byte-level BPE."
  },
  {
    id: 89,
    title: "Zero-shot LLM",
    question: "Zero-shot classification với LLM là gì?",
    options: [
      { key: "A", text: "Classification mà model không cần input nào" },
      { key: "B", text: "Phân loại text mà KHÔNG cần bất kỳ ví dụ training nào — chỉ dùng instruction trong prompt: 'Classify as positive/negative: ...'" },
      { key: "C", text: "Classification với model chưa được pretrain" },
      { key: "D", text: "Classification chỉ dùng được với 0 lớp" }
    ],
    answer: "B",
    explanation: "Traditional ML: cần labeled examples để train. Zero-shot LLM: 'Is this review positive or negative? \nReview: The food was amazing! Answer:' → GPT hiểu task từ instruction. Không cần fine-tune. Few-\nshot: thêm 1-3 examples trong prompt → tốt hơn zero-shot. In-context learning là nền tảng của LLM \nusefulness.",
    topic: "NLP",
    note: "Zero-shot không nghĩa là chưa huấn luyện; nghĩa là không có ví dụ mẫu cho tác vụ trong prompt."
  },
  {
    id: 90,
    title: "Embedding cosine similarity",
    question: "4 vector từ: w1=[0.8,0.6], w2=[0.6,0.8], w3=[0.9,0.1], w4=[-0.8,-0.6]. Từ nào gần w1 nhất theo cosine similarity?",
    options: [
      { key: "A", text: "w2" },
      { key: "B", text: "w3" },
      { key: "C", text: "w4" },
      { key: "D", text: "Bằng nhau" }
    ],
    answer: "A",
    explanation: "Cosine similarity phụ thuộc HƯỚNG, không phụ thuộc độ dài. w1=[0.8,0.6] và w2=[0.6,0.8]: cùng \nhướng → sim cao. w3=[0.9,0.1]: hướng khác nhiều. w4=[-0.8,-0.6]: ngược hướng hoàn toàn → sim=-\n1.\n Các bước tính: \ncos(w1,w2): w1·w2=0.48+0.48=0.96; |w1|=|w2|=1.0; sim=0.96\ncos(w1,w3): w1·w3=0.72+0.06=0.78; |w3|≈0.91; sim≈0.86\ncos(w1,w4): w1·w4=-0.64-0.36=-1.0 (ngược hướng)\n→ w2 gần nhất với sim=0.96",
    topic: "NLP",
    note: ""
  },
  {
    id: 91,
    title: "Attention mechanism formula",
    question: "Công thức Scaled Dot-Product Attention là gì?",
    options: [
      { key: "A", text: "Attention(Q,K,V) = softmax(Q+K) × V" },
      { key: "B", text: "Attention(Q,K,V) = softmax(QK / √d_k) × V — chia √d_k để tránh dot product quá lớn khiᵀ d_k lớn" },
      { key: "C", text: "Attention(Q,K,V) = Q × K × V" },
      { key: "D", text: "Attention(Q,K,V) = sigmoid(QK ) × Vᵀ" }
    ],
    answer: "B",
    explanation: "Q (Query), K (Key), V (Value) đều từ input. QK : similarity scores. /√d_k: scale để prevent vanishing ᵀ\ngradient trong softmax (khi dot product lớn → softmax rất peaked → gradient nhỏ). Softmax: \nnormalize scores thành weights. ×V: weighted sum of values. Multi-head: 8 attention heads song \nsong → concat → linear.",
    topic: "NLP",
    note: ""
  },
  {
    id: 92,
    title: "Fine-tune BERT tasks",
    question: "BERT fine-tune cho Sentiment Analysis thường dùng output của token nào?",
    options: [
      { key: "A", text: "Output của token cuối cùng" },
      { key: "B", text: "Output của token [CLS] (đầu tiên) — [CLS] được thiết kế để aggregate thông tin toàn câu, dùng cho sentence-level tasks" },
      { key: "C", text: "Average của tất cả token outputs" },
      { key: "D", text: "Output của token có attention score cao nhất" }
    ],
    answer: "B",
    explanation: "BERT: [CLS] W  W  ... W  [SEP]. [CLS] token attend tất cả tokens qua bidirectional attention → ₁ ₂ ₙ\naggregate thông tin toàn câu. Fine-tune: [CLS]_embedding → Linear(768, num_classes) → Softmax. \nTrain với CrossEntropyLoss trên sentiment labels. Học cả BERT weights lẫn linear head.",
    topic: "NLP",
    note: "B là thiết kế BERT chuẩn của đề; mean pooling cũng có thể dùng."
  },
  {
    id: 93,
    title: "Transformer parallelism",
    question: "Tại sao Transformer train nhanh hơn RNN trên GPU?",
    options: [
      { key: "A", text: "Transformer có ít tham số hơn RNN" },
      { key: "B", text: "RNN xử lý tuần tự (token → token → ...) → không parallelize. Transformer xử lý toàn ₁ ₂ bộ sequence song song (1 forward pass) → tận dụng GPU parallelism hoàn toàn" },
      { key: "C", text: "Transformer không cần backpropagation" },
      { key: "D", text: "RNN cần nhiều layers hơn Transformer" }
    ],
    answer: "B",
    explanation: "RNN: hidden state h  phụ thuộc h  → tuần tự → GPU phải chờ từng bước. Sequence 512 tokens =ₜ ₜ₋₁\n512 sequential steps. Transformer: attention tính tất cả pairs đồng thời → 1 matrix multiply. GPU xử \nlý song song. Trade-off: Transformer O(n²) memory cho attention, RNN O(n) nhưng sequential. \nFlashAttention giải quyết memory issue của Transformer.",
    topic: "NLP",
    note: "Song song hóa là lợi thế lúc huấn luyện; sinh tự hồi quy vẫn phụ thuộc token trước. Không phải Transformer luôn nhanh hơn RNN."
  },
  {
    id: 94,
    title: "Text classification pipeline",
    question: "Bài toán phân loại email spam với BERT. Bước nào KHÔNG cần thiết?",
    options: [
      { key: "A", text: "Tokenize email text bằng BertTokenizer" },
      { key: "B", text: "Loại bỏ stopwords trước khi tokenize — BERT tự xử lý context, không cần loại stopwords" },
      { key: "C", text: "Thêm attention_mask cho padded sequences" },
      { key: "D", text: "Fine-tune BERT với labeled spam/ham data" }
    ],
    answer: "B",
    explanation: "Pipeline BERT: (1) Tokenize với BertTokenizer (không loại stopwords — BERT học context). (2) Pad \nsequences → attention_mask. (3) Fine-tune với labeled data (thêm classification head). Loại bỏ \nstopwords: cần với TF-IDF/Naive Bayes, KHÔNG cần với BERT.",
    topic: "NLP",
    note: "Loại stopwords không bắt buộc ngay cả với TF-IDF/Naive Bayes."
  },
  {
    id: 95,
    title: "NLP evaluation BLEU",
    question: "BLEU score đo gì trong machine translation?",
    options: [
      { key: "A", text: "Độ lưu loát và tự nhiên theo đánh giá của người" },
      { key: "B", text: "N-gram precision: tỷ lệ n-gram trong bản dịch candidate khớp với reference translations — BLEU cao = nhiều n-gram chính xác. Brevity penalty phạt bản dịch ngắn" },
      { key: "C", text: "Tốc độ dịch của model" },
      { key: "D", text: "Kích thước vocabulary của model" }
    ],
    answer: "B",
    explanation: "BLEU kết hợp modified n-gram precision và brevity penalty. Nó đo sự khớp với bản dịch tham chiếu, không trực tiếp đo chất lượng theo người. Với ví dụ trong PDF, từ “sat” không khớp: p₁=4/5=0.8. Candidate có 5 token, reference có 6: BP=exp(1−6/5). BLEU-1≈0.655.",
    topic: "NLP",
    note: "Sửa ví dụ PDF: “sat” không có trong reference. Unigram precision = 4/5 = 0.8, không phải 1. BLEU-1 còn nhân brevity penalty: 0.8×exp(−0.2) ≈ 0.655."
  },
  {
    id: 96,
    title: "RAG pipeline",
    question: "RAG (Retrieval-Augmented Generation) giải quyết vấn đề gì của LLM?",
    options: [
      { key: "A", text: "Giảm kích thước model để deploy nhanh hơn" },
      { key: "B", text: "LLM không biết thông tin mới sau training cutoff và có thể hallucinate. RAG: retrieve relevant documents từ database → thêm vào context → LLM trả lời dựa trên documents thật" },
      { key: "C", text: "Tăng tốc độ sinh text" },
      { key: "D", text: "Giảm chi phí fine-tuning" }
    ],
    answer: "B",
    explanation: "RAG pipeline: (1) Offline: chunk documents → embed → store vector DB. (2) Online query: embed \nquestion → retrieve top-k similar chunks (cosine sim). (3) Augment prompt: 'Context: {chunks}\\n\\\nnQuestion: {q}\\nAnswer:'. (4) LLM generate based on context. Giúp LLM trả lời câu hỏi về thông tin \nmới/cụ thể mà không cần fine-tune.",
    topic: "NLP",
    note: "RAG hỗ trợ thông tin mới, không đảm bảo loại bỏ hoàn toàn hallucination."
  },
  {
    id: 97,
    title: "Sentiment vs ABSA",
    question: "'Pin điện thoại tệ nhưng camera rất đẹp.' Sentiment analysis thông thường vs ABSA cho kết quả gì?",
    options: [
      { key: "A", text: "Cả hai đều cho kết quả: Negative" },
      { key: "B", text: "Thông thường: Mixed/Neutral (tổng quan). ABSA: pin=Negative, camera=Positive — phân biệt sentiment theo từng aspect" },
      { key: "C", text: "Cả hai đều cho kết quả: Positive" },
      { key: "D", text: "Thông thường: Positive, ABSA: Negative" }
    ],
    answer: "B",
    explanation: "Sentiment analysis thông thường: phân tích sentiment tổng quan → 'Mixed' hoặc tùy model. ABSA \n(Aspect-Based Sentiment Analysis): (1) Xác định aspects: 'Pin', 'camera'. (2) Classify sentiment của \nmỗi aspect: pin→NEG, camera→POS. Useful cho product reviews, customer feedback analysis.",
    topic: "NLP",
    note: "Nhãn tổng thể phụ thuộc hệ nhãn, không bắt buộc Neutral. ABSA: pin tiêu cực, camera tích cực."
  },
  {
    id: 98,
    title: "Perplexity LLM",
    question: "Perplexity = 50 vs Perplexity = 10 của 2 language models. Model nào tốt hơn?",
    options: [
      { key: "A", text: "Perplexity = 50 tốt hơn vì số lớn hơn" },
      { key: "B", text: "Perplexity = 10 tốt hơn — perplexity thấp = model chắc chắn và chính xác hơn trong dự đoán token tiếp theo" },
      { key: "C", text: "Bằng nhau — perplexity không ảnh hưởng quality" },
      { key: "D", text: "Cần biết kích thước vocabulary mới so sánh được" }
    ],
    answer: "B",
    explanation: "Perplexity = exp(average negative log-likelihood per token). Thấp = tốt. PPL=1: hoàn hảo. \nPPL=vocab_size: random. GPT-2 small: ~29 PPL trên Penn Treebank. GPT-3: ~12 PPL trên \nWikiText. Caveat: PPL phụ thuộc dataset → không so sánh được giữa 2 test sets khác nhau.",
    topic: "NLP",
    note: "Chỉ so perplexity khi dữ liệu, tokenization và cách đánh giá tương thích. Thấp hơn không chứng minh tốt hơn mọi tác vụ."
  },
  {
    id: 99,
    title: "LLM safety",
    question: "RLHF (Reinforcement Learning from Human Feedback) dùng để làm gì trong LLM?",
    options: [
      { key: "A", text: "Train LLM từ đầu không cần supervised data" },
      { key: "B", text: "Align LLM với human preferences: train reward model từ human judgments, dùng PPO để fine-tune LLM → model helpful, harmless, honest hơn" },
      { key: "C", text: "Quantize model để chạy trên edge devices" },
      { key: "D", text: "Tăng tốc inference LLM" }
    ],
    answer: "B",
    explanation: "RLHF pipeline (InstructGPT): (1) SFT: fine-tune trên instruction-following data. (2) Reward Model: \nannotators rank responses → train RM predict human preference. (3) PPO: fine-tune LLM maximize \nRM reward. Kết quả: model follow instructions tốt hơn, ít harmful outputs. DPO đơn giản hơn: trực \ntiếp tối ưu preference data không cần RL.",
    topic: "NLP",
    note: "PPO là một lựa chọn trong RLHF, không bắt buộc. Phản hồi không bảo đảm mô hình luôn đúng/an toàn."
  },
  {
    id: 100,
    title: "Tổng hợp mọi chủ đề",
    question: "Đâu là thứ tự ĐÚNG từ dữ liệu thô đến kết quả phân loại ảnh bằng CNN fine-tuned?",
    options: [
      { key: "A", text: "Tải pretrained model → Thay đổi lớp fc → Freeze backbone → Train toàn bộ từ đầu → Dự đoán" },
      { key: "B", text: "Tải pretrained model → Thay đổi lớp fc cho đúng số lớp → Freeze backbone → Train fc head → Gọi model.eval() → Dự đoán" },
      { key: "C", text: "Train từ đầu → Augment data → Dự đoán → Tải pretrained model" },
      { key: "D", text: "Tải pretrained model → Dự đoán ngay lập tức không cần thay đổi gì" }
    ],
    answer: "B",
    explanation: "Tải pretrained model → thay head cho đúng số lớp → freeze backbone → train head → eval → dự đoán. Bật lại gradient cho toàn bộ tham số head, gồm cả bias. Dùng no_grad/inference_mode khi không cần gradient. Nếu giữ nguyên backbone hoàn toàn, quản lý cả BatchNorm running statistics.",
    topic: "NLP",
    note: "Sửa code PDF: bật requires_grad cho TẤT CẢ model.fc.parameters(), gồm weight và bias. Đóng băng gradient không tự đóng băng running statistics của BatchNorm. Chỉ train head chính xác hơn là feature extraction."
  }
];
