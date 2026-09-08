document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const continueBtn = document.getElementById("continue-btn");
  const choiceButtons = document.querySelectorAll("#choice-buttons .choice-btn[data-response]");
  const responsePopup = document.getElementById("response-popup");
  const responseText = document.getElementById("response-text");
  const veil = document.getElementById("screen-veil");

  const verifyMain = document.getElementById("verify-main");
  const verifyInner = document.querySelector(".verify-inner");
  const notJassuBtn = document.getElementById("not-jassu-btn");
  const notJassuResult = document.getElementById("not-jassu-result");
  const notJassuLeaveBtn = document.getElementById("not-jassu-leave-btn");

  const sisterYesBtn = document.getElementById("sister-yes-btn");
  const sisterNoBtn = document.getElementById("sister-no-btn");
  const sisterButtons = document.getElementById("sister-buttons");
  const sisterQuestionBlock = document.getElementById("sister-question-block");
  const sisterYesResult = document.getElementById("sister-yes-result");
  const sisterAngryPopup = document.getElementById("sister-angry-popup");
  const sisterContinueBtn = document.getElementById("sister-continue-btn");
  const angrySticker = document.getElementById("angry-sticker");
  const sisterInner = document.querySelector(".sister-inner");

  const problemLine1 = document.getElementById("problem-line-1");
  const problemLine2 = document.getElementById("problem-line-2");
  const whatProblemBtn = document.getElementById("what-problem-btn");
  const openSurpriseBtn = document.getElementById("open-surprise-btn");
  const memoryGoBtn = document.getElementById("memory-go-btn");
  const openMemoriesBtn = document.getElementById("open-memories-btn");
  const emotionalDamageBtn = document.getElementById("emotional-damage-btn");
  const quizProgress = document.getElementById("quiz-progress");
  const quizProgressFill = document.getElementById("quiz-progress-fill");
  const quizCard = document.getElementById("quiz-card");
  const quizPhoto = document.getElementById("quiz-photo");
  const quizQuestion = document.getElementById("quiz-question");
  const quizOptions = document.getElementById("quiz-options");
  const quizResult = document.getElementById("quiz-result");
  const quizResultEmoji = document.getElementById("quiz-result-emoji");
  const quizResultText = document.getElementById("quiz-result-text");
  const quizNextBtn = document.getElementById("quiz-next");
  const quizComplete = document.getElementById("quiz-complete");
  const quizCompleteScore = document.getElementById("quiz-complete-score");
  const quizCompleteTitle = document.getElementById("quiz-complete-title");
  const quizCompleteCopy = document.getElementById("quiz-complete-copy");
  const quizConfetti = document.getElementById("quiz-confetti");
  const quizIntro = document.getElementById("quiz-intro");
  const quizPlay = document.getElementById("quiz-play");
  const quizStartBtn = document.getElementById("quiz-start-btn");
  const quizPlayAgainBtn = document.getElementById("quiz-play-again-btn");
  const quizContinueBtn = document.getElementById("quiz-continue-btn");
  const wishCakeStage = document.getElementById("wish-cake-stage");
  const wishSparkles = document.getElementById("wish-sparkles");
  const wishGranted = document.getElementById("wish-granted");
  const candlesHint = document.getElementById("candles-hint");
  const candlesMicLevel = document.getElementById("candles-mic-level");
  const candlesMicStatus = document.getElementById("candles-mic-status");
  const candlesContinueBtn = document.getElementById("candles-continue-btn");
  const surpriseBox = document.getElementById("surprise-box");
  const surpriseBurst = document.getElementById("surprise-burst");
  const surpriseClosedHint = document.getElementById("surprise-closed-hint");
  const openSurpriseBoxBtn = document.getElementById("open-surprise-box-btn");
  const surpriseReveal = document.getElementById("surprise-reveal");
  const surpriseContinueBtn = document.getElementById("surprise-continue-btn");
  const realSurpriseBtn = document.getElementById("real-surprise-btn");
  const openGiftBtn = document.getElementById("open-gift-btn");
  const giftBoxImg = document.getElementById("gift-box-img");
  const giftBurst = document.getElementById("gift-burst");
  const showMessageBtn = document.getElementById("show-message-btn");
  const openMessageBtn = document.getElementById("open-message-btn");
  const oneMoreThingBtn = document.getElementById("one-more-thing-btn");
  const playAgainBtn = document.getElementById("play-again-btn");
  const letterOpening = document.getElementById("letter-opening");
  const letterCard = document.getElementById("letter-card");
  const revealCakeImg = document.getElementById("reveal-cake-img");
  const memoryCards = document.querySelectorAll(".memory-card");
  const memoryModal = document.getElementById("memory-modal");
  const memoryModalTitle = document.getElementById("memory-modal-title");
  const memoryModalMedia = document.getElementById("memory-modal-media");
  const memoryModalMessage = document.getElementById("memory-modal-message");
  const memoryModalClose = document.getElementById("memory-modal-close");
  const storyLines = document.querySelectorAll("#distance-story .story-line");

  const screens = {
    welcome: document.getElementById("screen-welcome"),
    verify: document.getElementById("screen-verify"),
    sister: document.getElementById("screen-sister"),
    problem: document.getElementById("screen-problem"),
    distance: document.getElementById("screen-distance"),
    memoryTeaser: document.getElementById("screen-memory-teaser"),
    memoryIntro: document.getElementById("screen-memory-intro"),
    memoryCards: document.getElementById("screen-memory-cards"),
    quiz: document.getElementById("screen-quiz"),
    candles: document.getElementById("screen-candles"),
    surprise: document.getElementById("screen-surprise"),
    shayari: document.getElementById("screen-shayari"),
    notDone: document.getElementById("screen-not-done"),
    gift: document.getElementById("screen-gift"),
    birthdayReveal: document.getElementById("screen-birthday-reveal"),
    messageIntro: document.getElementById("screen-message-intro"),
    letter: document.getElementById("screen-letter"),
    finale: document.getElementById("screen-finale"),
  };

  const memoryContent = {
    childhood: {
      title: "👶 Where it all started…",
      message:
        "Look at us 😭😂 We were so tiny… and somehow you were already stuck with me. 💗",
      type: "image",
      src: "images/Old childhood photo.jpeg",
      alt: "Old childhood photo",
    },
    together: {
      title: "💕 Still stuck with me",
      message:
        "Some things change, but unfortunately for you… having me as your sister isn't one of them 😂💗",
      type: "image",
      src: "images/A nice photo together.jpeg",
      alt: "A nice photo together",
    },
    video: {
      title: "🎥 Okay… THIS one 😂👀",
      message: "Some memories are just too good to leave in the gallery 😂💗",
      type: "video",
      src: "videoes/A memorable event.mp4",
    },
  };

  const quizQuestions = [
    {
      question: "If our childhood fights could continue through the internet, what would my sister probably do?",
      image: "shyari photo/how to slap through internet.jpg",
      imageFallbacks: ["shyari photo/how to slap through intrenet.jpg"],
      imageAlt: "How to slap through the internet",
      options: [
        "Calmly explain her side",
        "Say sorry immediately",
        "Somehow still find a way to beat me",
        "Ignore me completely",
      ],
      correctIndex: 2,
      responses: [
        "WRONG! 😂 You really think distance could save me from my sister? Nice try!",
        "WRONG! 😂 You really think distance could save me from my sister? Nice try!",
        "Obviously 😂 Even the INTERNET wouldn't be safe from you!",
        "WRONG! 😂 You really think distance could save me from my sister? Nice try!",
      ],
    },
    {
      question: "Who had the legendary scooty incident where someone ended up falling in the fields? 😂🛵",
      image: "shyari photo/gopy and u.jpg",
      imageAlt: "Brother and sister on the legendary scooty",
      options: [
        "My sister",
        "My brother",
        "Both of them somehow managed it 😂",
        "Nobody — the scooty was perfectly safe",
      ],
      correctIndex: 1,
      responses: [
        "NOPE 😂 Nice try! My sister may have been on the scooty, but the legendary fall belongs to someone else!",
        "HAHAHA YES 😂🛵 The fields still remember that legendary fall!",
        "😂 It was not a group project! One person gets the credit for that legendary fall.",
        "Absolutely NOT 😂 The fields would strongly disagree with you!",
      ],
    },
    {
      question: "What was basically our childhood love language?",
      image: "shyari photo/khichai.jpg",
      imageAlt: "Khichai, our version of sibling love",
      options: [
        "Saying nice things to each other",
        "Helping each other with homework",
        "Teasing, annoying and pulling each other's leg",
        "Sitting quietly without bothering each other",
      ],
      correctIndex: 2,
      responses: [
        "😂 Nice imagination, but we definitely weren't THAT peaceful.",
        "Homework? 😂 We had much more important things to do... like annoying each other.",
        "Exactly 😂 Our version of love was 50% affection and 50% khichai.",
        "HAHAHA 😂 Sitting quietly? You clearly don't remember us!",
      ],
    },
    {
      question: "Be honest... when my sister and I used to fight, who usually had the upper hand?",
      image: "shyari photo/mar marai.jpg",
      imageAlt: "A classic sibling fight",
      options: [
        "Me",
        "My sister",
        "We were always equal",
        "Nobody — we never fought",
      ],
      correctIndex: 1,
      responses: [
        "HAHAHAHA 😂 That's the biggest lie in this entire quiz.",
        "Let's be honest 😂 You were basically undefeated!",
        "Equal?! 😂 I wish. You had a clear advantage!",
        "Never fought?! 😂 Should we call the witnesses?",
      ],
    },
    {
      question: "If this picture could describe our childhood, what would it say?",
      image: "shyari photo/larai.jpg",
      imageAlt: "Another day, another sibling fight",
      options: [
        "Peace and harmony",
        "A normal family dinner",
        "Another day, another sibling fight 😂",
        "We were practicing meditation",
      ],
      correctIndex: 2,
      responses: [
        "Peace and harmony?! 😂 Wrong childhood.",
        "Family dinner? 😂 Someone clearly needs to check the family history.",
        "CORRECT 😂 Another day, another fight. And somehow we still loved each other.",
        "Meditation?! 😂 With us? Absolutely impossible.",
      ],
    },
    {
      question: "After all the fighting, teasing and annoying each other, what has always stayed the same?",
      image: "shyari photo/phone.jpg",
      imageAlt: "Still connected after all the fights",
      options: [
        "We stopped talking",
        "Our sibling bond",
        "We forgot everything",
        "We became strangers",
      ],
      correctIndex: 1,
      responses: [
        "😂 Nice try. Fighting never managed to get rid of our bond.",
        "❤️ Exactly. No matter how much we fight, you're still my sister and one of my favourite people.",
        "Not a chance 😂 Those crazy memories are impossible to forget.",
        "Never ❤️ We might fight like enemies sometimes, but we're still siblings.",
      ],
    },
  ];

  const quizOptionLetters = ["A", "B", "C", "D", "E", "F"];

  let angryHideTimer = null;
  let dodgeCooldown = false;
  let storyTimers = [];
  let problemStarted = false;
  let distanceStoryStarted = false;
  let quizIndex = 0;
  let quizSelected = null;
  let quizAnswered = false;
  let quizScore = 0;
  let quizRevealTimer = null;
  let candlesBlown = false;
  let surpriseOpened = false;
  let wishAudioCtx = null;
  let wishAnalyser = null;
  let wishMicStream = null;
  let wishMicRaf = 0;
  let wishBlowFrames = 0;
  let wishGrantedTimer = null;

  function showScreen(nextKey) {
    const next = screens[nextKey];
    if (!next) return;

    const current = document.querySelector(".screen.is-active");

    veil.classList.add("is-on");
    veil.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      if (current) {
        current.classList.remove("is-active");
        current.hidden = true;
      }

      next.hidden = false;
      void next.offsetWidth;
      next.classList.add("is-active");

      if (nextKey === "sister") {
        setupSisterNoDodge();
      }

      if (nextKey === "problem") {
        startProblemSequence();
      }

      if (nextKey === "distance") {
        startDistanceStory();
      }

      if (nextKey === "birthdayReveal" && revealCakeImg) {
        revealCakeImg.classList.remove("is-visible");
        void revealCakeImg.offsetWidth;
        setTimeout(() => {
          revealCakeImg.classList.add("is-visible");
        }, 120);
      }

      if (nextKey === "quiz") {
        showQuizIntro();
      }

      if (nextKey === "candles") {
        startCandleStage();
      } else {
        stopCandleMic();
      }

      if (nextKey === "surprise") {
        startSurpriseStage();
      }

      if (nextKey === "shayari") {
        startShayari();
      }

      if (nextKey === "letter") {
        startLetterOpen();
      }

      setTimeout(() => {
        veil.classList.remove("is-on");
        veil.setAttribute("aria-hidden", "true");
      }, 280);
    }, 380);
  }

  function setImageWithFallback(img, fallbackEl, srcs) {
    if (!img) return;

    let i = 0;
    img.classList.remove("is-loaded", "is-missing");
    img.onerror = null;
    img.onload = null;

    const fail = () => {
      img.classList.remove("is-loaded");
      img.classList.add("is-missing");
      if (fallbackEl) {
        fallbackEl.hidden = false;
        fallbackEl.classList.add("is-shown");
      }
    };

    const tryNext = () => {
      if (i >= srcs.length) {
        fail();
        return;
      }

      img.onload = () => {
        img.classList.add("is-loaded");
        img.classList.remove("is-missing");
        if (fallbackEl) {
          fallbackEl.hidden = true;
          fallbackEl.classList.remove("is-shown");
        }
      };

      img.onerror = () => {
        i += 1;
        tryNext();
      };

      img.src = srcs[i];
    };

    tryNext();
  }

  function spawnBurstIn(container) {
    if (!container) return;
    container.innerHTML = "";

    const pieces = ["💗", "💕", "✨", "💖", "🎀", "🎉", "🥳", "⭐", "💗", "✨"];
    const colors = ["#ff8fb8", "#ffc0d9", "#f48fb1", "#ffd6e8", "#e8d4f0", "#fff59d"];

    pieces.forEach((piece, index) => {
      const el = document.createElement("span");
      const angle = (Math.PI * 2 * index) / pieces.length;
      const distance = 70 + Math.random() * 90;
      el.className = "gift-burst-piece";
      el.textContent = piece;
      el.style.left = "50%";
      el.style.top = "42%";
      el.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      el.style.setProperty("--dy", `${Math.sin(angle) * distance - 24}px`);
      el.style.animationDelay = `${index * 0.03}s`;
      container.appendChild(el);
    });

    for (let i = 0; i < 16; i += 1) {
      const dot = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const distance = 40 + Math.random() * 110;
      dot.className = "gift-burst-piece is-dot";
      dot.style.left = "50%";
      dot.style.top = "42%";
      dot.style.background = colors[i % colors.length];
      dot.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      dot.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
      dot.style.animationDelay = `${0.05 + i * 0.02}s`;
      container.appendChild(dot);
    }
  }

  function stopCandleMic() {
    if (wishMicRaf) {
      cancelAnimationFrame(wishMicRaf);
      wishMicRaf = 0;
    }
    if (wishMicStream) {
      wishMicStream.getTracks().forEach((track) => track.stop());
      wishMicStream = null;
    }
    if (wishAudioCtx) {
      wishAudioCtx.close().catch(() => {});
      wishAudioCtx = null;
    }
    wishAnalyser = null;
    wishBlowFrames = 0;
    if (candlesMicLevel) candlesMicLevel.style.width = "0%";
  }

  function listenForBlow() {
    if (!wishAnalyser || candlesBlown) return;

    const data = new Uint8Array(wishAnalyser.frequencyBinCount);

    const tick = () => {
      if (!wishAnalyser || candlesBlown) return;
      wishAnalyser.getByteFrequencyData(data);

      let sum = 0;
      let count = 0;
      for (let i = 10; i < data.length; i += 1) {
        sum += data[i];
        count += 1;
      }
      const avg = count ? sum / count : 0;
      if (candlesMicLevel) {
        candlesMicLevel.style.width = `${Math.min(100, avg * 1.6)}%`;
      }

      if (avg > 38) {
        wishBlowFrames += 1;
      } else {
        wishBlowFrames = Math.max(0, wishBlowFrames - 1);
      }

      if (wishBlowFrames > 7) {
        blowCandles();
        return;
      }

      wishMicRaf = requestAnimationFrame(tick);
    };

    wishMicRaf = requestAnimationFrame(tick);
  }

  function tryStartCandleMic() {
    if (candlesBlown) return;

    const canUseMic =
      window.isSecureContext &&
      navigator.mediaDevices &&
      typeof navigator.mediaDevices.getUserMedia === "function";

    if (!canUseMic) {
      if (candlesHint) {
        candlesHint.textContent = "Tap the candles to blow them out 🕯️";
      }
      if (candlesMicStatus) {
        candlesMicStatus.textContent =
          "Mic needs a local server — tapping the cake works perfectly 🕯️";
      }
      return;
    }

    if (candlesHint) {
      candlesHint.textContent =
        "Blow into the mic… or tap the candles if the mic is shy 🕯️";
    }
    if (candlesMicStatus) {
      candlesMicStatus.textContent = "Listening for a birthday blow… 🎤";
    }

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        if (candlesBlown) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        wishMicStream = stream;
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        wishAudioCtx = new AudioCtx();
        wishAnalyser = wishAudioCtx.createAnalyser();
        wishAnalyser.fftSize = 512;
        const source = wishAudioCtx.createMediaStreamSource(stream);
        source.connect(wishAnalyser);
        listenForBlow();
      })
      .catch(() => {
        if (candlesHint) {
          candlesHint.textContent = "Tap the candles to blow them out 🕯️";
        }
        if (candlesMicStatus) {
          candlesMicStatus.textContent =
            "Mic said no — just tap the candles instead 😌";
        }
      });
  }

  function startCandleStage() {
    candlesBlown = false;
    clearTimeout(wishGrantedTimer);
    stopCandleMic();

    if (wishCakeStage) {
      wishCakeStage.classList.remove("is-blown");
      wishCakeStage.setAttribute("aria-disabled", "false");
    }
    if (wishSparkles) wishSparkles.innerHTML = "";
    if (wishGranted) {
      wishGranted.hidden = true;
      wishGranted.classList.remove("is-visible");
    }
    if (candlesContinueBtn) {
      candlesContinueBtn.hidden = true;
      candlesContinueBtn.disabled = false;
      candlesContinueBtn.classList.remove("is-visible", "clicked");
    }

    tryStartCandleMic();
  }

  function blowCandles() {
    if (candlesBlown) return;
    candlesBlown = true;
    stopCandleMic();

    if (wishCakeStage) {
      wishCakeStage.classList.add("is-blown");
      wishCakeStage.setAttribute("aria-disabled", "true");
    }
    spawnBurstIn(wishSparkles);

    if (wishGranted) {
      wishGranted.hidden = false;
      void wishGranted.offsetWidth;
      wishGranted.classList.add("is-visible");
    }
    if (candlesHint) {
      candlesHint.textContent = "Wish locked in. Don't peek yet 😌";
    }
    if (candlesMicStatus) {
      candlesMicStatus.textContent = "Candles out. Sparkles in. ✨";
    }

    wishGrantedTimer = setTimeout(() => {
      if (candlesContinueBtn) {
        candlesContinueBtn.hidden = false;
        void candlesContinueBtn.offsetWidth;
        candlesContinueBtn.classList.add("is-visible");
      }
    }, 850);
  }

  function startSurpriseStage() {
    surpriseOpened = false;
    if (surpriseBox) {
      surpriseBox.classList.remove("is-open", "is-wiggle");
      surpriseBox.disabled = false;
    }
    if (surpriseBurst) surpriseBurst.innerHTML = "";
    if (surpriseClosedHint) surpriseClosedHint.hidden = false;
    if (openSurpriseBoxBtn) {
      openSurpriseBoxBtn.hidden = false;
      openSurpriseBoxBtn.disabled = false;
      openSurpriseBoxBtn.classList.remove("clicked");
    }
    if (surpriseReveal) {
      surpriseReveal.hidden = true;
      surpriseReveal.classList.remove("is-visible");
    }
    if (surpriseContinueBtn) {
      surpriseContinueBtn.hidden = true;
      surpriseContinueBtn.disabled = false;
      surpriseContinueBtn.classList.remove("is-visible", "clicked");
    }
  }

  function openSurpriseBox() {
    if (surpriseOpened) return;
    surpriseOpened = true;

    if (surpriseBox) {
      surpriseBox.disabled = true;
      surpriseBox.classList.add("is-wiggle");
    }
    if (openSurpriseBoxBtn) {
      openSurpriseBoxBtn.disabled = true;
      openSurpriseBoxBtn.classList.add("clicked");
    }

    setTimeout(() => {
      if (surpriseBox) {
        surpriseBox.classList.remove("is-wiggle");
        surpriseBox.classList.add("is-open");
      }
      spawnBurstIn(surpriseBurst);
      if (surpriseClosedHint) surpriseClosedHint.hidden = true;
      if (openSurpriseBoxBtn) openSurpriseBoxBtn.hidden = true;
    }, 420);

    setTimeout(() => {
      if (surpriseReveal) {
        surpriseReveal.hidden = false;
        void surpriseReveal.offsetWidth;
        surpriseReveal.classList.add("is-visible");
      }
    }, 880);

    setTimeout(() => {
      if (surpriseContinueBtn) {
        surpriseContinueBtn.hidden = false;
        void surpriseContinueBtn.offsetWidth;
        surpriseContinueBtn.classList.add("is-visible");
      }
    }, 1500);
  }

  function startShayari() {
    const screen = screens.shayari;
    if (!screen) return;

    screen.classList.remove("is-revealed");
    void screen.offsetWidth;
    screen.classList.add("is-revealed");
  }

  function startLetterOpen() {
    if (!letterOpening || !letterCard) return;

    letterOpening.hidden = false;
    letterOpening.classList.remove("is-done");
    letterOpening.setAttribute("aria-hidden", "false");
    letterCard.hidden = true;
    letterCard.classList.remove("is-visible");

    const envelope = letterOpening.querySelector(".letter-envelope");
    if (envelope) {
      envelope.style.animation = "none";
      void envelope.offsetWidth;
      envelope.style.animation = "";
    }

    setTimeout(() => {
      letterOpening.classList.add("is-done");
      letterOpening.setAttribute("aria-hidden", "true");
      letterCard.hidden = false;
      void letterCard.offsetWidth;
      letterCard.classList.add("is-visible");
    }, 1450);
  }

  function quizTotal() {
    return quizQuestions.length;
  }

  function clearQuizConfetti() {
    if (quizConfetti) quizConfetti.innerHTML = "";
  }

  function spawnQuizConfetti() {
    if (!quizConfetti) return;
    quizConfetti.innerHTML = "";

    const pieces = ["💗", "💕", "✨", "💖", "🎀", "🎉", "🥳", "⭐", "💗", "✨", "🛵", "🎂"];
    const colors = ["#ff8fb8", "#ffc0d9", "#f48fb1", "#ffd6e8", "#e8d4f0", "#fff59d"];

    pieces.forEach((piece, index) => {
      const el = document.createElement("span");
      const angle = (Math.PI * 2 * index) / pieces.length;
      const distance = 90 + Math.random() * 110;
      el.className = "gift-burst-piece";
      el.textContent = piece;
      el.style.left = "50%";
      el.style.top = "42%";
      el.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      el.style.setProperty("--dy", `${Math.sin(angle) * distance - 30}px`);
      el.style.animationDelay = `${index * 0.03}s`;
      quizConfetti.appendChild(el);
    });

    for (let i = 0; i < 18; i += 1) {
      const dot = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 130;
      dot.className = "gift-burst-piece is-dot";
      dot.style.left = "50%";
      dot.style.top = "42%";
      dot.style.background = colors[i % colors.length];
      dot.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      dot.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
      dot.style.animationDelay = `${0.05 + i * 0.02}s`;
      quizConfetti.appendChild(dot);
    }
  }

  function hideQuizResult() {
    if (!quizResult) return;
    quizResult.hidden = true;
    quizResult.classList.remove("is-visible", "is-correct");
    if (quizResultEmoji) quizResultEmoji.textContent = "";
    if (quizResultText) quizResultText.textContent = "";
  }

  function showQuizResult(text, { correct = false, emoji = "👀" } = {}) {
    if (!quizResult || !quizResultText) return;

    quizResult.hidden = false;
    quizResult.classList.toggle("is-correct", correct);
    if (quizResultEmoji) quizResultEmoji.textContent = emoji;
    quizResultText.textContent = text;
    quizResult.classList.remove("is-visible");
    void quizResult.offsetWidth;
    quizResult.classList.add("is-visible");
  }

  function updateQuizProgress(index) {
    const total = quizTotal();
    if (quizProgress) {
      quizProgress.textContent = `Question ${index + 1} of ${total}`;
    }
    if (quizProgressFill) {
      quizProgressFill.style.width = `${((index + 1) / total) * 100}%`;
    }
  }

  function renderQuizOptions(question) {
    if (!quizOptions) return;
    quizOptions.innerHTML = "";

    question.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn quiz-option";
      btn.dataset.index = String(index);

      const letter = document.createElement("span");
      letter.className = "quiz-option-letter";
      letter.textContent = quizOptionLetters[index] || String(index + 1);

      const text = document.createElement("span");
      text.className = "quiz-option-text";
      text.textContent = option;

      btn.append(letter, text);
      quizOptions.appendChild(btn);
    });
  }

  function lockQuizOptions() {
    if (!quizOptions) return;
    quizOptions.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.disabled = true;
    });
  }

  function renderQuizQuestion(index) {
    const question = quizQuestions[index];
    if (!question) return;

    clearTimeout(quizRevealTimer);
    clearQuizConfetti();
    quizSelected = null;
    quizAnswered = false;

    updateQuizProgress(index);

    if (quizQuestion) quizQuestion.textContent = question.question;

    if (quizPhoto) {
      quizPhoto.alt = question.imageAlt || "";
      const sources = [question.image].concat(question.imageFallbacks || []);
      setImageWithFallback(quizPhoto, null, sources.filter(Boolean));
    }

    renderQuizOptions(question);
    hideQuizResult();

    if (quizNextBtn) {
      quizNextBtn.hidden = true;
      quizNextBtn.classList.remove("is-visible", "clicked");
      quizNextBtn.textContent =
        index === quizTotal() - 1 ? "See my score 🎉 →" : "Next Question →";
    }

    if (quizCard) {
      quizCard.hidden = false;
      quizCard.classList.remove("is-swap", "is-shaking");
      void quizCard.offsetWidth;
      quizCard.classList.add("is-swap");
    }
  }

  function answerQuiz(index) {
    if (quizAnswered) return;

    const question = quizQuestions[quizIndex];
    if (!question) return;

    quizSelected = index;
    quizAnswered = true;
    lockQuizOptions();

    const isCorrect = index === question.correctIndex;
    if (isCorrect) {
      quizScore += 1;
      spawnQuizConfetti();
    }

    quizOptions.querySelectorAll(".quiz-option").forEach((btn) => {
      const optionIndex = Number(btn.dataset.index);
      btn.classList.toggle("selected", optionIndex === index);
      btn.classList.toggle("is-correct", optionIndex === index && isCorrect);
      btn.classList.toggle("is-wrong", optionIndex === index && !isCorrect);
    });

    const response = question.responses[index];
    showQuizResult(response, {
      correct: isCorrect,
      emoji: isCorrect ? "🎉" : "😅",
    });

    if (quizNextBtn) {
      quizNextBtn.hidden = false;
      void quizNextBtn.offsetWidth;
      quizNextBtn.classList.add("is-visible");
    }
  }

  function getQuizFinale(score) {
    const total = quizTotal();
    if (score === total) {
      return {
        title: `${score}/${total} — THE SIBLING EXPERT 😂❤️`,
        message:
          "Okay, you remember EVERYTHING. Unfortunately, that also means you remember all the times you beat me 😂",
      };
    }
    if (score >= 4) {
      return {
        title: "Almost Perfect 😂",
        message: "You remember the important things... especially the fights 😂❤️",
      };
    }
    if (score >= 2) {
      return {
        title: "Are you REALLY my sister? 😭",
        message: "How could you forget our legendary childhood fights?! 😂",
      };
    }
    return {
      title: "WHO ARE YOU? 💀",
      message: "We literally grew up together and THIS is your score?! 😭😂",
    };
  }

  function showQuizComplete() {
    clearQuizConfetti();
    spawnQuizConfetti();

    if (quizProgressFill) quizProgressFill.style.width = "100%";
    if (quizPlay) quizPlay.hidden = true;
    if (quizComplete) {
      const finale = getQuizFinale(quizScore);
      quizComplete.hidden = false;
      if (quizCompleteScore) {
        quizCompleteScore.textContent = `Your Score: ${quizScore} / ${quizTotal()}`;
      }
      if (quizCompleteTitle) quizCompleteTitle.textContent = finale.title;
      if (quizCompleteCopy) quizCompleteCopy.textContent = finale.message;
    }
  }

  function goQuizNext() {
    if (quizIndex >= quizTotal() - 1) {
      showQuizComplete();
      return;
    }

    quizIndex += 1;
    renderQuizQuestion(quizIndex);
  }

  function showQuizIntro() {
    quizIndex = 0;
    quizSelected = null;
    quizAnswered = false;
    quizScore = 0;
    clearTimeout(quizRevealTimer);
    clearQuizConfetti();

    if (quizIntro) quizIntro.hidden = false;
    if (quizPlay) quizPlay.hidden = true;
    if (quizComplete) quizComplete.hidden = true;
    if (quizStartBtn) {
      quizStartBtn.disabled = false;
      quizStartBtn.classList.remove("clicked");
    }
    if (quizContinueBtn) {
      quizContinueBtn.disabled = false;
      quizContinueBtn.classList.remove("clicked");
    }
  }

  function startQuiz() {
    quizIndex = 0;
    quizSelected = null;
    quizAnswered = false;
    quizScore = 0;
    clearTimeout(quizRevealTimer);
    clearQuizConfetti();

    if (quizIntro) quizIntro.hidden = true;
    if (quizPlay) quizPlay.hidden = false;
    if (quizComplete) quizComplete.hidden = true;
    if (quizContinueBtn) {
      quizContinueBtn.disabled = false;
      quizContinueBtn.classList.remove("clicked");
    }

    renderQuizQuestion(0);
  }

  function startProblemSequence() {
    if (problemStarted || !problemLine1) return;
    problemStarted = true;

    // First line fades in
    requestAnimationFrame(() => {
      problemLine1.classList.add("is-visible");
    });

    // Then reveal the problem + button
    setTimeout(() => {
      if (problemLine2) {
        problemLine2.hidden = false;
        void problemLine2.offsetWidth;
        problemLine2.classList.add("is-visible");
      }
    }, 1100);

    setTimeout(() => {
      if (whatProblemBtn) {
        whatProblemBtn.hidden = false;
        void whatProblemBtn.offsetWidth;
        whatProblemBtn.classList.add("is-visible");
      }
    }, 1750);
  }

  function clearStoryTimers() {
    storyTimers.forEach((id) => clearTimeout(id));
    storyTimers = [];
  }

  function startDistanceStory() {
    if (distanceStoryStarted) return;
    distanceStoryStarted = true;
    clearStoryTimers();

    storyLines.forEach((line) => {
      line.classList.remove("is-visible");
      const delay = Number(line.dataset.delay || 0);
      const timer = setTimeout(() => {
        line.classList.add("is-visible");
      }, delay);
      storyTimers.push(timer);
    });

    // Show surprise button after the final line
    const lastDelay = 8000;
    const btnTimer = setTimeout(() => {
      if (!openSurpriseBtn) return;
      openSurpriseBtn.hidden = false;
      void openSurpriseBtn.offsetWidth;
      openSurpriseBtn.classList.add("is-visible");
    }, lastDelay + 900);
    storyTimers.push(btnTimer);
  }

  function showAngryReaction() {
    if (!sisterAngryPopup) return;

    sisterAngryPopup.hidden = false;
    sisterAngryPopup.classList.remove("is-hiding");
    void sisterAngryPopup.offsetWidth;
    sisterAngryPopup.classList.add("is-visible");

    if (angrySticker) {
      angrySticker.classList.remove("pop-in");
      void angrySticker.offsetWidth;
      angrySticker.classList.add("pop-in");
    }

    clearTimeout(angryHideTimer);
    angryHideTimer = setTimeout(() => {
      sisterAngryPopup.classList.add("is-hiding");
      sisterAngryPopup.classList.remove("is-visible");

      setTimeout(() => {
        if (!sisterAngryPopup.classList.contains("is-visible")) {
          sisterAngryPopup.hidden = true;
          sisterAngryPopup.classList.remove("is-hiding");
        }
      }, 350);
    }, 1800);
  }

  function moveNoButton() {
    if (!sisterNoBtn || !sisterButtons) return;

    const areaEl = sisterInner || sisterButtons;
    const area = areaEl.getBoundingClientRect();
    const btnRect = sisterNoBtn.getBoundingClientRect();
    const btnW = btnRect.width || 180;
    const btnH = btnRect.height || 52;
    const pad = 10;

    const box = sisterButtons.getBoundingClientRect();
    const maxX = Math.max(pad, box.width - btnW - pad);
    const maxY = Math.max(pad, Math.max(box.height, 160) - btnH - pad);

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    const yesRect = sisterYesBtn.getBoundingClientRect();
    const yesRelLeft = yesRect.left - box.left;
    const yesRelTop = yesRect.top - box.top;
    if (
      Math.abs(x - yesRelLeft) < btnW * 0.85 &&
      Math.abs(y - yesRelTop) < btnH * 1.2
    ) {
      x = (x + maxX / 2) % maxX;
      y = (y + maxY / 2) % maxY;
    }

    sisterButtons.style.minHeight = "180px";
    sisterNoBtn.style.position = "absolute";
    sisterNoBtn.style.left = `${x}px`;
    sisterNoBtn.style.top = `${y}px`;
    sisterNoBtn.classList.add("is-dodging");

    void area;
  }

  function triggerNoDodge(event) {
    if (sisterYesResult && !sisterYesResult.hidden) return;
    if (dodgeCooldown) return;

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    dodgeCooldown = true;
    moveNoButton();
    showAngryReaction();

    setTimeout(() => {
      dodgeCooldown = false;
    }, 280);
  }

  function setupSisterNoDodge() {
    if (!sisterNoBtn) return;

    sisterNoBtn.onmouseenter = (event) => triggerNoDodge(event);
    sisterNoBtn.ontouchstart = (event) => triggerNoDodge(event);
    sisterNoBtn.onclick = (event) => triggerNoDodge(event);
  }

  function clearSisterNoDodge() {
    if (!sisterNoBtn) return;
    sisterNoBtn.onmouseenter = null;
    sisterNoBtn.ontouchstart = null;
    sisterNoBtn.onclick = null;
    clearTimeout(angryHideTimer);
  }

  // Screen 1 → Screen 2
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startBtn.classList.add("clicked");
      startBtn.disabled = true;

      setTimeout(() => {
        showScreen("verify");
        startBtn.classList.remove("clicked");
      }, 220);
    });
  }

  // Valid identity choices → funny popup + continue (all stay clickable)
  choiceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const message = btn.dataset.response;
      if (!message || !responsePopup || !responseText || !continueBtn) return;

      btn.classList.add("clicked");

      choiceButtons.forEach((other) => {
        other.classList.toggle("selected", other === btn);
      });

      responseText.textContent = message;
      responsePopup.hidden = false;
      responsePopup.classList.remove("is-visible");
      void responsePopup.offsetWidth;
      responsePopup.classList.add("is-visible");

      if (continueBtn.hidden || !continueBtn.classList.contains("is-visible")) {
        continueBtn.hidden = false;
        void continueBtn.offsetWidth;
        continueBtn.classList.add("is-visible");
      }

      setTimeout(() => {
        btn.classList.remove("clicked");
      }, 280);
    });
  });

  // "I'm not Jassu" → gate screen
  if (notJassuBtn && notJassuResult && verifyMain) {
    notJassuBtn.addEventListener("click", () => {
      notJassuBtn.classList.add("clicked");
      verifyMain.classList.add("is-hiding");

      setTimeout(() => {
        verifyMain.hidden = true;
        if (verifyInner) verifyInner.classList.add("is-gate-mode");
        notJassuResult.hidden = false;
        void notJassuResult.offsetWidth;
        notJassuResult.classList.add("is-visible");
        notJassuBtn.classList.remove("clicked");
      }, 320);
    });
  }

  // Leave → back to "Are you really Jassu?"
  if (notJassuLeaveBtn && notJassuResult && verifyMain) {
    notJassuLeaveBtn.addEventListener("click", () => {
      notJassuLeaveBtn.classList.add("clicked");
      notJassuResult.classList.add("is-hiding");
      notJassuResult.classList.remove("is-visible");

      setTimeout(() => {
        notJassuResult.hidden = true;
        notJassuResult.classList.remove("is-hiding");
        if (verifyInner) verifyInner.classList.remove("is-gate-mode");
        verifyMain.hidden = false;
        verifyMain.classList.remove("is-hiding");
        void verifyMain.offsetWidth;
        notJassuLeaveBtn.classList.remove("clicked");
      }, 320);
    });
  }

  // Screen 2 → Screen 3 (sister question)
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      continueBtn.classList.add("clicked");
      continueBtn.disabled = true;

      setTimeout(() => {
        showScreen("sister");
        continueBtn.classList.remove("clicked");
      }, 220);
    });
  }

  // YES → love message + continue
  if (sisterYesBtn) {
    sisterYesBtn.addEventListener("click", () => {
      sisterYesBtn.classList.add("clicked");
      sisterYesBtn.disabled = true;
      if (sisterNoBtn) sisterNoBtn.disabled = true;
      clearSisterNoDodge();

      if (sisterAngryPopup) {
        sisterAngryPopup.hidden = true;
        sisterAngryPopup.classList.remove("is-visible", "is-hiding");
      }

      sisterButtons.classList.add("is-hiding");

      setTimeout(() => {
        sisterButtons.hidden = true;
        sisterQuestionBlock.hidden = true;
        if (sisterInner) sisterInner.classList.add("is-yes-mode");

        sisterYesResult.hidden = false;
        void sisterYesResult.offsetWidth;
        sisterYesResult.classList.add("is-visible");
        sisterYesBtn.classList.remove("clicked");
      }, 380);
    });
  }

  // Sister continue → one little problem
  if (sisterContinueBtn) {
    sisterContinueBtn.addEventListener("click", () => {
      sisterContinueBtn.classList.add("clicked");
      sisterContinueBtn.disabled = true;

      setTimeout(() => {
        showScreen("problem");
        sisterContinueBtn.classList.remove("clicked");
      }, 220);
    });
  }

  // What problem? → Canada / India scene
  if (whatProblemBtn) {
    whatProblemBtn.addEventListener("click", () => {
      whatProblemBtn.classList.add("clicked");
      whatProblemBtn.disabled = true;

      setTimeout(() => {
        showScreen("distance");
        whatProblemBtn.classList.remove("clicked");
      }, 220);
    });
  }

  // Open surprise → memory lane teaser
  if (openSurpriseBtn) {
    openSurpriseBtn.addEventListener("click", () => {
      openSurpriseBtn.classList.add("clicked");
      openSurpriseBtn.disabled = true;

      setTimeout(() => {
        showScreen("memoryTeaser");
        openSurpriseBtn.classList.remove("clicked");
      }, 220);
    });
  }

  function pauseMemoryVideo() {
    if (!memoryModalMedia) return;
    const video = memoryModalMedia.querySelector("video");
    if (video) {
      video.pause();
    }
  }

  function openMemoryModal(key) {
    const data = memoryContent[key];
    if (!data || !memoryModal || !memoryModalMedia) return;

    pauseMemoryVideo();
    memoryModalMedia.innerHTML = "";

    if (memoryModalTitle) memoryModalTitle.textContent = data.title;
    if (memoryModalMessage) memoryModalMessage.textContent = data.message;

    if (data.type === "video") {
      const video = document.createElement("video");
      video.src = data.src;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      memoryModalMedia.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = data.src;
      img.alt = data.alt || "";
      memoryModalMedia.appendChild(img);
    }

    memoryModal.hidden = false;
    memoryModal.setAttribute("aria-hidden", "false");
    void memoryModal.offsetWidth;
    memoryModal.classList.add("is-open");
  }

  function closeMemoryModal() {
    if (!memoryModal) return;
    pauseMemoryVideo();
    memoryModal.classList.remove("is-open");
    memoryModal.setAttribute("aria-hidden", "true");

    setTimeout(() => {
      if (!memoryModal.classList.contains("is-open")) {
        memoryModal.hidden = true;
        if (memoryModalMedia) memoryModalMedia.innerHTML = "";
      }
    }, 280);
  }

  // Memory "Let's go!" → memory box intro
  if (memoryGoBtn) {
    memoryGoBtn.addEventListener("click", () => {
      memoryGoBtn.classList.add("clicked");
      memoryGoBtn.disabled = true;

      setTimeout(() => {
        showScreen("memoryIntro");
        memoryGoBtn.classList.remove("clicked");
      }, 220);
    });
  }

  // Open the memories → cards
  if (openMemoriesBtn) {
    openMemoriesBtn.addEventListener("click", () => {
      openMemoriesBtn.classList.add("clicked");
      openMemoriesBtn.disabled = true;

      setTimeout(() => {
        showScreen("memoryCards");
        openMemoriesBtn.classList.remove("clicked");
      }, 220);
    });
  }

  // Memory cards — all independently clickable
  memoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.memory;
      if (!key) return;
      openMemoryModal(key);
    });
  });

  if (memoryModalClose) {
    memoryModalClose.addEventListener("click", closeMemoryModal);
  }

  if (memoryModal) {
    memoryModal.querySelectorAll("[data-close-memory]").forEach((el) => {
      el.addEventListener("click", closeMemoryModal);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && memoryModal && memoryModal.classList.contains("is-open")) {
      closeMemoryModal();
    }
  });

  // Enough emotional damage → not done yet
  if (emotionalDamageBtn) {
    emotionalDamageBtn.addEventListener("click", () => {
      emotionalDamageBtn.classList.add("clicked");
      emotionalDamageBtn.disabled = true;
      closeMemoryModal();

      setTimeout(() => {
        showScreen("quiz");
        emotionalDamageBtn.classList.remove("clicked");
      }, 220);
    });
  }

  if (quizStartBtn) {
    quizStartBtn.addEventListener("click", () => {
      quizStartBtn.classList.add("clicked");
      quizStartBtn.disabled = true;
      setTimeout(() => {
        startQuiz();
        quizStartBtn.classList.remove("clicked");
      }, 180);
    });
  }

  if (quizOptions) {
    quizOptions.addEventListener("click", (event) => {
      const btn = event.target.closest(".quiz-option");
      if (!btn || quizAnswered || btn.disabled) return;

      btn.classList.add("clicked");
      answerQuiz(Number(btn.dataset.index));
      setTimeout(() => btn.classList.remove("clicked"), 220);
    });
  }

  if (quizNextBtn) {
    quizNextBtn.addEventListener("click", () => {
      quizNextBtn.classList.add("clicked");
      setTimeout(() => {
        goQuizNext();
        quizNextBtn.classList.remove("clicked");
      }, 220);
    });
  }

  if (quizPlayAgainBtn) {
    quizPlayAgainBtn.addEventListener("click", () => {
      quizPlayAgainBtn.classList.add("clicked");
      setTimeout(() => {
        startQuiz();
        quizPlayAgainBtn.classList.remove("clicked");
      }, 180);
    });
  }

  if (quizContinueBtn) {
    quizContinueBtn.addEventListener("click", () => {
      quizContinueBtn.classList.add("clicked");
      quizContinueBtn.disabled = true;
      clearQuizConfetti();

      setTimeout(() => {
        showScreen("candles");
        quizContinueBtn.classList.remove("clicked");
      }, 220);
    });
  }

  if (wishCakeStage) {
    wishCakeStage.addEventListener("click", () => {
      if (candlesBlown) return;
      blowCandles();
    });

    wishCakeStage.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      blowCandles();
    });
  }

  if (candlesContinueBtn) {
    candlesContinueBtn.addEventListener("click", () => {
      if (!candlesBlown) return;
      candlesContinueBtn.classList.add("clicked");
      candlesContinueBtn.disabled = true;
      setTimeout(() => {
        showScreen("surprise");
        candlesContinueBtn.classList.remove("clicked");
      }, 220);
    });
  }

  if (surpriseBox) {
    surpriseBox.addEventListener("click", () => {
      openSurpriseBox();
    });
  }

  if (openSurpriseBoxBtn) {
    openSurpriseBoxBtn.addEventListener("click", () => {
      openSurpriseBox();
    });
  }

  if (surpriseContinueBtn) {
    surpriseContinueBtn.addEventListener("click", () => {
      if (!surpriseOpened) return;
      surpriseContinueBtn.classList.add("clicked");
      surpriseContinueBtn.disabled = true;
      setTimeout(() => {
        showScreen("shayari");
        surpriseContinueBtn.classList.remove("clicked");
      }, 220);
    });
  }

  // Real surprise → gift box screen
  if (realSurpriseBtn) {
    realSurpriseBtn.addEventListener("click", () => {
      realSurpriseBtn.classList.add("clicked");
      realSurpriseBtn.disabled = true;

      setTimeout(() => {
        showScreen("gift");
        realSurpriseBtn.classList.remove("clicked");
      }, 220);
    });
  }

  function spawnGiftBurst() {
    if (!giftBurst) return;
    giftBurst.innerHTML = "";

    const pieces = ["💗", "💕", "✨", "💖", "🎀", "⭐", "💗", "✨", "💕", "🌟", "💗", "✨"];
    const colors = ["#ff8fb8", "#ffc0d9", "#f48fb1", "#ffd6e8", "#e8d4f0", "#fff59d"];

    pieces.forEach((piece, index) => {
      const el = document.createElement("span");
      const angle = (Math.PI * 2 * index) / pieces.length;
      const distance = 70 + Math.random() * 70;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance - 20;

      el.className = "gift-burst-piece";
      el.textContent = piece;
      el.style.setProperty("--dx", `${dx}px`);
      el.style.setProperty("--dy", `${dy}px`);
      el.style.animationDelay = `${index * 0.03}s`;
      giftBurst.appendChild(el);
    });

    for (let i = 0; i < 14; i += 1) {
      const dot = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const distance = 40 + Math.random() * 90;
      dot.className = "gift-burst-piece is-dot";
      dot.style.background = colors[i % colors.length];
      dot.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      dot.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
      dot.style.animationDelay = `${0.05 + i * 0.025}s`;
      giftBurst.appendChild(dot);
    }
  }

  // Open the gift → shake, pop, burst, then birthday reveal
  if (openGiftBtn) {
    openGiftBtn.addEventListener("click", () => {
      openGiftBtn.classList.add("clicked");
      openGiftBtn.disabled = true;

      if (giftBoxImg) {
        giftBoxImg.classList.remove("is-popping");
        giftBoxImg.classList.add("is-shaking");
      }

      setTimeout(() => {
        if (giftBoxImg) {
          giftBoxImg.classList.remove("is-shaking");
          giftBoxImg.classList.add("is-popping");
        }
        spawnGiftBurst();
      }, 900);

      setTimeout(() => {
        showScreen("birthdayReveal");
        openGiftBtn.classList.remove("clicked");
      }, 1650);
    });
  }

  // Birthday reveal → message intro
  if (showMessageBtn) {
    showMessageBtn.addEventListener("click", () => {
      showMessageBtn.classList.add("clicked");
      showMessageBtn.disabled = true;

      setTimeout(() => {
        showScreen("messageIntro");
        showMessageBtn.classList.remove("clicked");
      }, 220);
    });
  }

  // Open my message → letter opening + letter card
  if (openMessageBtn) {
    openMessageBtn.addEventListener("click", () => {
      openMessageBtn.classList.add("clicked");
      openMessageBtn.disabled = true;

      setTimeout(() => {
        showScreen("letter");
        openMessageBtn.classList.remove("clicked");
      }, 220);
    });
  }

  // One more thing → finale celebration
  if (oneMoreThingBtn) {
    oneMoreThingBtn.addEventListener("click", () => {
      oneMoreThingBtn.classList.add("clicked");
      oneMoreThingBtn.disabled = true;

      setTimeout(() => {
        showScreen("finale");
        oneMoreThingBtn.classList.remove("clicked");
      }, 220);
    });
  }

  // Play again → restart adventure from welcome
  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", () => {
      playAgainBtn.classList.add("clicked");
      setTimeout(() => {
        window.location.reload();
      }, 280);
    });
  }
});
