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
  
  