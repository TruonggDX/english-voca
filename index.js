// ================== DATA ==================
const VOCAB_TOPICS = {
    "Gia đình & bạn bè (Family & Friends)": [
        {en:'father', vi:'bố', pos:'noun'},
        {en:'mother', vi:'mẹ', pos:'noun'},
        {en:'brother', vi:'anh/em trai', pos:'noun'},
        {en:'sister', vi:'chị/em gái', pos:'noun'},
        {en:'son', vi:'con trai', pos:'noun'},
        {en:'daughter', vi:'con gái', pos:'noun'},
        {en:'husband', vi:'chồng', pos:'noun'},
        {en:'wife', vi:'vợ', pos:'noun'},
        {en:'parents', vi:'bố mẹ', pos:'noun'},
        {en:'grandparents', vi:'ông bà', pos:'noun'},
        {en:'grandfather', vi:'ông', pos:'noun'},
        {en:'grandmother', vi:'bà', pos:'noun'},
        {en:'uncle', vi:'chú/cậu/bác trai', pos:'noun'},
        {en:'aunt', vi:'cô/dì/thím/bác gái', pos:'noun'},
        {en:'cousin', vi:'anh/chị/em họ', pos:'noun'},
        {en:'nephew', vi:'cháu trai', pos:'noun'},
        {en:'niece', vi:'cháu gái', pos:'noun'},
        {en:'child', vi:'trẻ con', pos:'noun'},
        {en:'children', vi:'những đứa trẻ', pos:'noun'},
        {en:'baby', vi:'em bé', pos:'noun'},
        {en:'family', vi:'gia đình', pos:'noun'},
        {en:'relative', vi:'họ hàng', pos:'noun'},
        {en:'friend', vi:'bạn', pos:'noun'},
        {en:'best friend', vi:'bạn thân', pos:'noun'},
        {en:'classmate', vi:'bạn cùng lớp', pos:'noun'},
        {en:'colleague', vi:'đồng nghiệp', pos:'noun'},
        {en:'neighbor', vi:'hàng xóm', pos:'noun'},
        {en:'relationship', vi:'mối quan hệ', pos:'noun'},
        {en:'marriage', vi:'hôn nhân', pos:'noun'},
        {en:'wedding', vi:'đám cưới', pos:'noun'},
        {en:'birthday', vi:'sinh nhật', pos:'noun'},
        {en:'party', vi:'tiệc', pos:'noun'},
        {en:'gift', vi:'quà', pos:'noun'},
        {en:'generation', vi:'thế hệ', pos:'noun'},
        {en:'ancestor', vi:'tổ tiên', pos:'noun'},
        {en:'teenager', vi:'thiếu niên', pos:'noun'},
        {en:'adult', vi:'người lớn', pos:'noun'},
        {en:'elderly', vi:'người già', pos:'noun'},
        {en:'childhood', vi:'thời thơ ấu', pos:'noun'},
        {en:'friendship', vi:'tình bạn', pos:'noun'},
        {en:'family tree', vi:'gia phả', pos:'noun'},
        {en:'reunion', vi:'sự đoàn tụ', pos:'noun'},
        {en:'respect', vi:'sự tôn trọng', pos:'noun'},
        // Verbs
        {en:'celebrate', vi:'ăn mừng', pos:'verb'},
        {en:'care', vi:'quan tâm', pos:'verb'},
        {en:'support', vi:'ủng hộ', pos:'verb'},
        {en:'trust', vi:'tin tưởng', pos:'verb'},
        {en:'forgive', vi:'tha thứ', pos:'verb'},
        {en:'quarrel', vi:'cãi nhau', pos:'verb'},
        // Adjectives
        {en:'honest', vi:'trung thực', pos:'adj'},
        {en:'kind', vi:'tử tế', pos:'adj'},
        {en:'helpful', vi:'hay giúp đỡ', pos:'adj'},
        {en:'friendly', vi:'thân thiện', pos:'adj'},
        {en:'close', vi:'gần gũi', pos:'adj'},
        {en:'single', vi:'độc thân', pos:'adj'},
        {en:'married', vi:'đã kết hôn', pos:'adj'},
        {en:'divorced', vi:'ly hôn', pos:'adj'}
    ],
    "Trường học & học tập (School & Education)": [
      { en: "teacher", vi: "giáo viên", pos: "noun" },
      { en: "student", vi: "học sinh", pos: "noun" },
      { en: "book", vi: "sách", pos: "noun" },
      { en: "exam", vi: "kỳ thi", pos: "noun" },
      { en: "learn", vi: "học", pos: "verb" },
    ],
    "Travel & Transport (Đi lại & Du lịch)": [
      // Nouns - Từ đơn
      { "en": "bus", "vi": "xe buýt", "pos": "noun" },
      { "en": "train", "vi": "tàu hỏa", "pos": "noun" },
      { "en": "plane", "vi": "máy bay", "pos": "noun" },
      { "en": "car", "vi": "ô tô", "pos": "noun" },
      { "en": "bike", "vi": "xe đạp", "pos": "noun" },
      { "en": "ship", "vi": "tàu thủy", "pos": "noun" },
      { "en": "trip", "vi": "chuyến đi", "pos": "noun" },
      { "en": "tour", "vi": "chuyến tham quan", "pos": "noun" },
      { "en": "map", "vi": "bản đồ", "pos": "noun" },
      { "en": "visa", "vi": "thị thực", "pos": "noun" },
      { "en": "ticket", "vi": "vé", "pos": "noun" },
      { "en": "guide", "vi": "hướng dẫn viên", "pos": "noun" },
      { "en": "bag", "vi": "túi / hành lý", "pos": "noun" },
      { "en": "pass", "vi": "thẻ", "pos": "noun" },
    
      // Verbs - Từ đơn
      { "en": "go", "vi": "đi", "pos": "verb" },
      { "en": "travel", "vi": "đi lại, du lịch", "pos": "verb" },
      { "en": "visit", "vi": "thăm", "pos": "verb" },
      { "en": "fly", "vi": "bay", "pos": "verb" },
      { "en": "drive", "vi": "lái xe", "pos": "verb" },
      { "en": "ride", "vi": "cưỡi, lái xe hai bánh", "pos": "verb" },
      { "en": "book", "vi": "đặt vé/phòng", "pos": "verb" },
      { "en": "pack", "vi": "đóng gói hành lý", "pos": "verb" },
      { "en": "check", "vi": "kiểm tra", "pos": "verb" },
      { "en": "stay", "vi": "ở lại", "pos": "verb" },
    
      // Adjectives - Từ đơn
      { "en": "long", "vi": "dài", "pos": "adj" },
      { "en": "short", "vi": "ngắn", "pos": "adj" },
      { "en": "safe", "vi": "an toàn", "pos": "adj" },
      { "en": "cheap", "vi": "rẻ", "pos": "adj" },
      { "en": "expensive", "vi": "đắt", "pos": "adj" },
      { "en": "local", "vi": "địa phương", "pos": "adj" },
      { "en": "foreign", "vi": "nước ngoài", "pos": "adj" },
      { "en": "crowded", "vi": "đông đúc", "pos": "adj" },
      { "en": "comfortable", "vi": "thoải mái", "pos": "adj" },
    
      // Adverbs - Từ đơn
      { "en": "abroad", "vi": "ở nước ngoài", "pos": "adv" },
      { "en": "far", "vi": "xa", "pos": "adv" },
      { "en": "near", "vi": "gần", "pos": "adv" },
      { "en": "quickly", "vi": "nhanh chóng", "pos": "adv" },
      { "en": "slowly", "vi": "chậm rãi", "pos": "adv" },
      { "en": "safely", "vi": "một cách an toàn", "pos": "adv" },
      { "en": "comfortably", "vi": "thoải mái", "pos": "adv" },
    
      // Compound Nouns - Danh từ ghép
      { "en": "airport", "vi": "sân bay", "pos": "noun" },
      { "en": "bus station", "vi": "bến xe buýt", "pos": "noun" },
      { "en": "train station", "vi": "ga tàu", "pos": "noun" },
      { "en": "boarding pass", "vi": "thẻ lên máy bay", "pos": "noun" },
      { "en": "travel agency", "vi": "công ty du lịch", "pos": "noun" },
      { "en": "package tour", "vi": "tour trọn gói", "pos": "noun" },
      { "en": "public transport", "vi": "phương tiện công cộng", "pos": "noun" },
      { "en": "tourist attraction", "vi": "điểm du lịch", "pos": "noun" },
      { "en": "local cuisine", "vi": "ẩm thực địa phương", "pos": "noun" },
      { "en": "cultural heritage", "vi": "di sản văn hóa", "pos": "noun" },
    
      // Compound Verbs - Cụm động từ
      { "en": "check in", "vi": "làm thủ tục", "pos": "verb" },
      { "en": "check out", "vi": "trả phòng", "pos": "verb" },
      { "en": "set off", "vi": "khởi hành", "pos": "verb" },
      { "en": "get on", "vi": "lên xe/ máy bay", "pos": "verb" },
      { "en": "get off", "vi": "xuống xe/ tàu", "pos": "verb" },
      { "en": "take off", "vi": "cất cánh", "pos": "verb" },
      { "en": "touch down", "vi": "hạ cánh", "pos": "verb" },
      { "en": "look around", "vi": "ngắm nghía xung quanh", "pos": "verb" },
      { "en": "get away", "vi": "đi nghỉ, trốn đi chơi", "pos": "verb" },
    
      // Compound Adjectives - Tính từ ghép
      { "en": "well-known", "vi": "nổi tiếng", "pos": "adj" },
      { "en": "world-famous", "vi": "nổi tiếng toàn cầu", "pos": "adj" },
      { "en": "eco-friendly", "vi": "thân thiện với môi trường", "pos": "adj" },
      { "en": "high-speed", "vi": "cao tốc", "pos": "adj" },
      { "en": "long-distance", "vi": "đường dài", "pos": "adj" },
      { "en": "all-inclusive", "vi": "trọn gói (bao gồm tất cả)", "pos": "adj" },
    ],
    "Technology (Công nghệ)": [
      // Nouns - Danh từ
      { "en": "technology", "vi": "công nghệ", "pos": "noun" },
      { "en": "device", "vi": "thiết bị", "pos": "noun" },
      { "en": "gadget", "vi": "dụng cụ công nghệ nhỏ", "pos": "noun" },
      { "en": "smartphone", "vi": "điện thoại thông minh", "pos": "noun" },
      { "en": "laptop", "vi": "máy tính xách tay", "pos": "noun" },
      { "en": "internet", "vi": "mạng internet", "pos": "noun" },
      { "en": "social media", "vi": "mạng xã hội", "pos": "noun" },
      { "en": "software", "vi": "phần mềm", "pos": "noun" },
      { "en": "application", "vi": "ứng dụng", "pos": "noun" },
      { "en": "website", "vi": "trang web", "pos": "noun" },
      { "en": "robot", "vi": "rô-bốt", "pos": "noun" },
      { "en": "artificial intelligence", "vi": "trí tuệ nhân tạo", "pos": "noun" },
      { "en": "virtual reality", "vi": "thực tế ảo", "pos": "noun" },
      { "en": "augmented reality", "vi": "thực tế tăng cường", "pos": "noun" },
      { "en": "cloud computing", "vi": "điện toán đám mây", "pos": "noun" },
      { "en": "cyber security", "vi": "an ninh mạng", "pos": "noun" },
      { "en": "data", "vi": "dữ liệu", "pos": "noun" },
      { "en": "privacy", "vi": "sự riêng tư", "pos": "noun" },
      { "en": "innovation", "vi": "sự đổi mới", "pos": "noun" },
      { "en": "automation", "vi": "sự tự động hóa", "pos": "noun" },
    
      // Verbs - Động từ
      { "en": "innovate", "vi": "đổi mới", "pos": "verb" },
      { "en": "develop", "vi": "phát triển", "pos": "verb" },
      { "en": "apply", "vi": "áp dụng", "pos": "verb" },
      { "en": "access", "vi": "truy cập", "pos": "verb" },
      { "en": "connect", "vi": "kết nối", "pos": "verb" },
      { "en": "share", "vi": "chia sẻ", "pos": "verb" },
      { "en": "communicate", "vi": "giao tiếp", "pos": "verb" },
      { "en": "transform", "vi": "thay đổi", "pos": "verb" },
      { "en": "rely on", "vi": "phụ thuộc vào", "pos": "verb" },
      { "en": "surf", "vi": "lướt (mạng)", "pos": "verb" },
    
      // Adjectives - Tính từ
      { "en": "digital", "vi": "kỹ thuật số", "pos": "adj" },
      { "en": "smart", "vi": "thông minh", "pos": "adj" },
      { "en": "online", "vi": "trực tuyến", "pos": "adj" },
      { "en": "offline", "vi": "ngoại tuyến", "pos": "adj" },
      { "en": "high-tech", "vi": "công nghệ cao", "pos": "adj" },
      { "en": "user-friendly", "vi": "thân thiện với người dùng", "pos": "adj" },
      { "en": "up-to-date", "vi": "cập nhật, mới nhất", "pos": "adj" },
      { "en": "innovative", "vi": "sáng tạo", "pos": "adj" },
      { "en": "advanced", "vi": "tiên tiến", "pos": "adj" },
      { "en": "efficient", "vi": "hiệu quả", "pos": "adj" },
      { "en": "addictive", "vi": "gây nghiện", "pos": "adj" },
      { "en": "distracting", "vi": "gây xao nhãng", "pos": "adj" },
    ],
    "Health & Healthy Lifestyle (Sức khỏe & Lối sống lành mạnh)": [
      // Nouns - Danh từ
      { "en": "health", "vi": "sức khỏe", "pos": "noun" },
      { "en": "diet", "vi": "chế độ ăn", "pos": "noun" },
      { "en": "nutrition", "vi": "dinh dưỡng", "pos": "noun" },
      { "en": "habit", "vi": "thói quen", "pos": "noun" },
      { "en": "lifestyle", "vi": "lối sống", "pos": "noun" },
      { "en": "exercise", "vi": "bài tập", "pos": "noun" },
      { "en": "workout", "vi": "buổi tập", "pos": "noun" },
      { "en": "gym", "vi": "phòng tập", "pos": "noun" },
      { "en": "fitness", "vi": "sự khỏe mạnh/thể hình", "pos": "noun" },
      { "en": "strength", "vi": "sức mạnh", "pos": "noun" },
      { "en": "disease", "vi": "bệnh tật", "pos": "noun" },
      { "en": "illness", "vi": "sự ốm đau", "pos": "noun" },
      { "en": "obesity", "vi": "béo phì", "pos": "noun" },
      { "en": "stress", "vi": "căng thẳng", "pos": "noun" },
      { "en": "depression", "vi": "trầm cảm", "pos": "noun" },
      { "en": "sleep", "vi": "giấc ngủ", "pos": "noun" },
      { "en": "balance", "vi": "sự cân bằng", "pos": "noun" },
      { "en": "hygiene", "vi": "vệ sinh", "pos": "noun" },
      { "en": "medicine", "vi": "thuốc / y học", "pos": "noun" },
      { "en": "treatment", "vi": "sự điều trị", "pos": "noun" },
    
      // Verbs - Động từ
      { "en": "eat", "vi": "ăn", "pos": "verb" },
      { "en": "drink", "vi": "uống", "pos": "verb" },
      { "en": "sleep", "vi": "ngủ", "pos": "verb" },
      { "en": "exercise", "vi": "tập luyện", "pos": "verb" },
      { "en": "work out", "vi": "tập thể hình", "pos": "verb" },
      { "en": "relax", "vi": "thư giãn", "pos": "verb" },
      { "en": "recover", "vi": "hồi phục", "pos": "verb" },
      { "en": "prevent", "vi": "phòng ngừa", "pos": "verb" },
      { "en": "treat", "vi": "điều trị", "pos": "verb" },
      { "en": "reduce", "vi": "giảm bớt", "pos": "verb" },
    
      // Adjectives - Tính từ
      { "en": "healthy", "vi": "khỏe mạnh", "pos": "adj" },
      { "en": "unhealthy", "vi": "không lành mạnh", "pos": "adj" },
      { "en": "fit", "vi": "cân đối, khỏe", "pos": "adj" },
      { "en": "active", "vi": "năng động", "pos": "adj" },
      { "en": "energetic", "vi": "tràn đầy năng lượng", "pos": "adj" },
      { "en": "strong", "vi": "mạnh mẽ", "pos": "adj" },
      { "en": "weak", "vi": "yếu", "pos": "adj" },
      { "en": "balanced", "vi": "cân bằng", "pos": "adj" },
      { "en": "nutritious", "vi": "bổ dưỡng", "pos": "adj" },
      { "en": "overweight", "vi": "thừa cân", "pos": "adj" },
      { "en": "stressful", "vi": "căng thẳng", "pos": "adj" },
      { "en": "relaxed", "vi": "thư giãn", "pos": "adj" },
    ],
    "School & Study (Trường học & Học tập)": [
      // Nouns - Danh từ
      { "en": "school", "vi": "trường học", "pos": "noun" },
      { "en": "class", "vi": "lớp học", "pos": "noun" },
      { "en": "student", "vi": "học sinh, sinh viên", "pos": "noun" },
      { "en": "teacher", "vi": "giáo viên", "pos": "noun" },
      { "en": "subject", "vi": "môn học", "pos": "noun" },
      { "en": "lesson", "vi": "bài học", "pos": "noun" },
      { "en": "exam", "vi": "kỳ thi", "pos": "noun" },
      { "en": "grade", "vi": "điểm số / khối lớp", "pos": "noun" },
      { "en": "library", "vi": "thư viện", "pos": "noun" },
      { "en": "homework", "vi": "bài tập về nhà", "pos": "noun" },
      { "en": "notebook", "vi": "vở ghi", "pos": "noun" },
      { "en": "uniform", "vi": "đồng phục", "pos": "noun" },
      { "en": "knowledge", "vi": "kiến thức", "pos": "noun" },
      { "en": "study group", "vi": "nhóm học tập", "pos": "noun" },
      { "en": "learning materials", "vi": "tài liệu học tập", "pos": "noun" },
      { "en": "school bag", "vi": "cặp sách", "pos": "noun" },
      { "en": "school uniform", "vi": "đồng phục trường", "pos": "noun" },
      { "en": "school rules", "vi": "nội quy trường học", "pos": "noun" },
      { "en": "class schedule", "vi": "thời khóa biểu", "pos": "noun" },
      { "en": "classmate", "vi": "bạn cùng lớp", "pos": "noun" },
      { "en": "class teacher", "vi": "giáo viên chủ nhiệm", "pos": "noun" },
      { "en": "exam paper", "vi": "giấy thi / đề thi", "pos": "noun" },
      { "en": "exam results", "vi": "kết quả thi", "pos": "noun" },
      { "en": "study habits", "vi": "thói quen học tập", "pos": "noun" },
      { "en": "learning process", "vi": "quá trình học tập", "pos": "noun" },
      { "en": "online learning", "vi": "học trực tuyến", "pos": "noun" },
      { "en": "higher education", "vi": "giáo dục đại học", "pos": "noun" },
      { "en": "academic year", "vi": "năm học", "pos": "noun" },
    
      // Verbs - Động từ
      { "en": "study", "vi": "học", "pos": "verb" },
      { "en": "learn", "vi": "học, tiếp thu", "pos": "verb" },
      { "en": "teach", "vi": "dạy", "pos": "verb" },
      { "en": "revise", "vi": "ôn tập", "pos": "verb" },
      { "en": "prepare", "vi": "chuẩn bị", "pos": "verb" },
      { "en": "attend", "vi": "tham dự (lớp học)", "pos": "verb" },
      { "en": "take", "vi": "thi, làm bài kiểm tra", "pos": "verb" },
      { "en": "pass", "vi": "vượt qua, đỗ", "pos": "verb" },
      { "en": "fail", "vi": "trượt, rớt", "pos": "verb" },
      { "en": "graduate", "vi": "tốt nghiệp", "pos": "verb" },
      { "en": "explain", "vi": "giải thích", "pos": "verb" },
      { "en": "understand", "vi": "hiểu", "pos": "verb" },
      { "en": "memorize", "vi": "ghi nhớ", "pos": "verb" },
      { "en": "submit", "vi": "nộp (bài)", "pos": "verb" },
      { "en": "discuss", "vi": "thảo luận", "pos": "verb" },
    
      // Adjectives - Tính từ
      { "en": "academic", "vi": "học thuật", "pos": "adj" },
      { "en": "intelligent", "vi": "thông minh", "pos": "adj" },
      { "en": "diligent", "vi": "chăm chỉ", "pos": "adj" },
      { "en": "lazy", "vi": "lười biếng", "pos": "adj" },
      { "en": "hard-working", "vi": "siêng năng", "pos": "adj" },
      { "en": "successful", "vi": "thành công", "pos": "adj" },
      { "en": "educated", "vi": "có học thức", "pos": "adj" },
      { "en": "practical", "vi": "thực tiễn", "pos": "adj" },
      { "en": "theoretical", "vi": "lý thuyết", "pos": "adj" },
      { "en": "knowledgeable", "vi": "có kiến thức", "pos": "adj" },
      { "en": "prepared", "vi": "chuẩn bị sẵn sàng", "pos": "adj" },
      { "en": "motivated", "vi": "có động lực", "pos": "adj" },
      { "en": "disciplined", "vi": "có kỷ luật", "pos": "adj" },
      { "en": "curious", "vi": "ham học hỏi", "pos": "adj" },
      { "en": "creative", "vi": "sáng tạo", "pos": "adj" }
    ]
    
        
    // ... thêm các topic khác ở đây
  };
  
  // ================== STATE ==================
  let currentTopic = null;
  let currentWords = [];
  let currentIndex = 0;
  let filters = { noun: true, verb: true, adj: true };
  
  // ================== ELEMENTS ==================
  const topicList = document.getElementById("topicList");
  const studyScreen = document.getElementById("studyScreen");
  const topicScreen = document.getElementById("topicScreen");
  const topicTitle = document.getElementById("topicTitle");
  const statsBadge = document.getElementById("statsBadge");
  
  // tabs & sections
  const tabs = document.querySelectorAll(".tab");
  const flashSec = document.getElementById("flash");
  const fillSec = document.getElementById("fill");
  const testSec = document.getElementById("test");
  
  // flash elements
  const flashFront = document.getElementById("flashFront");
  const flashBack = document.getElementById("flashBack");
  const flashPos = document.getElementById("flashPos");
  const flashCard = document.getElementById("flashCard");
  const progress = document.getElementById("progress");
  
  // fill-in elements
  const fillPrompt = document.getElementById("fillPrompt");
  const fillInput = document.getElementById("fillInput");
  const fillFeedback = document.getElementById("fillFeedback");
  const directionSel = document.getElementById("direction");
  
  // test elements
  const quizBox = document.getElementById("quizBox");
  const resultBox = document.getElementById("resultBox");
  
  // ================== INIT TOPIC LIST ==================
  function loadTopics() {
    topicList.innerHTML = "";
    Object.keys(VOCAB_TOPICS).forEach((topic, index) => {
        const div = document.createElement("div");
        div.className = "card123";
        div.textContent = `${index + 1}. ${topic}`; 
        div.addEventListener("click", () => startTopic(topic));
        topicList.appendChild(div);
      });      
  }
  loadTopics();
  
  // ================== START TOPIC ==================
  function startTopic(topic) {
    currentTopic = topic;
    currentWords = VOCAB_TOPICS[topic];
    currentIndex = 0;
    topicTitle.textContent = topic;
    statsBadge.textContent = currentWords.length + " mục";
    topicScreen.classList.add("hidden");
    studyScreen.classList.remove("hidden");
    showSection("flash");
    renderFlash();
  }
  
  // ================== FLASHCARDS ==================
  function renderFlash() {
    const list = filteredWords();
    if (list.length === 0) {
      flashFront.textContent = "Không có từ nào (lọc hết rồi)";
      flashBack.textContent = "";
      flashPos.textContent = "";
      progress.textContent = "0/0";
      return;
    }
    const word = list[currentIndex % list.length];
    flashFront.textContent = word.en;
    flashBack.textContent = word.vi;
    flashPos.textContent = word.pos;
    progress.textContent = `${currentIndex + 1} / ${list.length}`;
    flashCard.classList.remove("flipped");
  }
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % filteredWords().length;
    renderFlash();
  });
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + filteredWords().length) % filteredWords().length;
    renderFlash();
  });
  flashCard.addEventListener("click", () =>
  flashCard.classList.toggle("is-flipped")
);

  
  // ================== FILTER ==================
  document.querySelectorAll(".pos-filter").forEach(cb => {
    cb.addEventListener("change", () => {
      filters[cb.value] = cb.checked;
      currentIndex = 0;
      renderFlash();
    });
  });
  function filteredWords() {
    return currentWords.filter(w => filters[w.pos]);
  }
  
  // ================== FILL-IN ==================
  function newFillQ() {
    const list = filteredWords();
    if (list.length === 0) {
      fillPrompt.textContent = "Không có từ nào để luyện!";
      return;
    }
    const w = list[Math.floor(Math.random() * list.length)];
    fillPrompt.dataset.answer = JSON.stringify(w);
    if (directionSel.value === "en2vi") {
      fillPrompt.textContent = `Nghĩa của "${w.en}" là gì?`;
    } else {
      fillPrompt.textContent = `Tiếng Anh của "${w.vi}" là gì?`;
    }
    fillInput.value = "";
    fillFeedback.textContent = "";
  }
  
  document.getElementById("newFill").addEventListener("click", newFillQ);
  document.getElementById("checkFill").addEventListener("click", () => {
    const w = JSON.parse(fillPrompt.dataset.answer);
    let correct =
      directionSel.value === "en2vi"
        ? w.vi.toLowerCase()
        : w.en.toLowerCase();
    if (fillInput.value.trim().toLowerCase() === correct) {
      fillFeedback.textContent = "✅ Đúng rồi!";
      fillFeedback.style.color = "green";
    } else {
      fillFeedback.textContent = `❌ Sai. Đáp án: ${correct}`;
      fillFeedback.style.color = "red";
    }
  });
  
  // ================== TEST ==================
  document.getElementById("startTest").addEventListener("click", () => {
    const num = parseInt(document.getElementById("numQuestions").value);
    const dir = document.getElementById("testDirection").value;
    const list = filteredWords();
    if (list.length < 4) {
      quizBox.innerHTML = "Cần ít nhất 4 từ để kiểm tra.";
      return;
    }
    let qs = [];
    for (let i = 0; i < num; i++) {
      qs.push(list[Math.floor(Math.random() * list.length)]);
    }
    let score = 0;
    quizBox.innerHTML = "";
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
  
    qs.forEach((w, idx) => {
      const div = document.createElement("div");
      div.className = "questionBox";
      div.innerHTML = `<p>Câu ${idx + 1}: ${
        dir === "en2vi" ? w.en : w.vi
      } = ?</p>`;
      let options = [w];
      while (options.length < 4) {
        let r = list[Math.floor(Math.random() * list.length)];
        if (!options.some(o => o.en === r.en)) options.push(r);
      }
      options.sort(() => Math.random() - 0.5);
    //   options.forEach(opt => {
    //     const btn = document.createElement("button");
    //     btn.textContent = dir === "en2vi" ? opt.vi : opt.en;
    //     btn.addEventListener("click", () => {
    //       if (btn.dataset.answered) return;
    //       btn.dataset.answered = true;
    //       if (opt.en === w.en) {
    //         btn.style.background = "lightgreen";
    //         score++;
    //       } else {
    //         btn.style.background = "salmon";
    //       }
    //     });
    //     div.appendChild(btn);
    //   });
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = dir === "en2vi" ? opt.vi : opt.en;
      
        btn.addEventListener("click", () => {
          // Nếu đã chọn => hủy chọn
          if (btn.classList.contains("selected")) {
            btn.classList.remove("selected", "correct", "wrong");
            btn.style.background = ""; // reset màu
            // Nếu trước đó là đúng thì trừ điểm
            if (opt.en === w.en) score--;
            return;
          }
      
          // Nếu chọn lần đầu
          btn.classList.add("selected");
          if (opt.en === w.en) {
            btn.classList.add("correct");
            btn.style.background = "lightgreen";
            score++;
          } else {
            btn.classList.add("wrong");
            btn.style.background = "salmon";
          }
        });
      
        div.appendChild(btn);
      });
      
      quizBox.appendChild(div);
    });
  
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Nộp bài";
    doneBtn.addEventListener("click", () => {
      resultBox.classList.remove("hidden");
      resultBox.innerHTML = `<h3>Kết quả: ${score} / ${num}</h3>`;
    });
    quizBox.appendChild(doneBtn);
  });
  
  // ================== TABS ==================
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      showSection(tab.dataset.mode);
      if (tab.dataset.mode === "flash") renderFlash();
      if (tab.dataset.mode === "fill") newFillQ();
    });
  });
  
  function showSection(mode) {
    flashSec.classList.add("hidden");
    fillSec.classList.add("hidden");
    testSec.classList.add("hidden");
    if (mode === "flash") flashSec.classList.remove("hidden");
    if (mode === "fill") fillSec.classList.remove("hidden");
    if (mode === "test") testSec.classList.remove("hidden");
  }
  
  // ================== BACK BTN ==================
  document.getElementById("backBtn").addEventListener("click", () => {
    studyScreen.classList.add("hidden");
    topicScreen.classList.remove("hidden");
    currentTopic = null;
  });
  document.getElementById("shuffleBtn").addEventListener("click", () => {
    currentWords = [...currentWords].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    renderFlash();
  });
  
  