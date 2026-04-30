const journeyQuestion = {
  text: "Where are you in your selling journey?",
  options: [
    { label: "Thinking of selling, but not listed yet", path: "presale" },
    { label: "Preparing to list soon", path: "presale" },
    { label: "Already listed, but not getting enough enquiry", path: "listed" },
    { label: "Getting viewings, but no offers", path: "listed" },
    { label: "Getting offers, but too low", path: "listed" }
  ],
  categories: []
};

const presaleQuestions = [
  {
    text: "How clear are you on your likely selling price?",
    options: [
      { label: "Very clear, based on recent comparable sales", score: 0 },
      { label: "Some idea, but not fully sure", score: 1 },
      { label: "Mainly relying on online estimates", score: 3 },
      { label: "Hoping for a certain price, but unsure if buyers will agree", score: 4 },
      { label: "Not sure at all yet", score: 3 }
    ],
    categories: ["price"]
  },
  {
    text: "How does your expected price compare with similar recent sales?",
    options: [
      { label: "Clearly supported by recent sales", score: 0 },
      { label: "Slightly above recent sales", score: 2 },
      { label: "Well above recent sales", score: 4 },
      { label: "Not checked properly yet", score: 3 },
      { label: "Mostly relying on CV/GV or online estimates", score: 3 }
    ],
    categories: ["price"]
  },
  {
    text: "How would buyers see the presentation of your home today?",
    options: [
      { label: "Very well presented and ready to photograph", score: 0 },
      { label: "Mostly good, just minor improvements needed", score: 1 },
      { label: "Some rooms need work", score: 2 },
      { label: "It feels cluttered, tired or dated", score: 4 },
      { label: "Not sure what buyers would notice first", score: 3 }
    ],
    categories: ["presentation"]
  },
  {
    text: "Are there any visible maintenance issues buyers may notice?",
    options: [
      { label: "No obvious issues", score: 0 },
      { label: "A few small things", score: 1 },
      { label: "Some noticeable repairs needed", score: 3 },
      { label: "Several issues may worry buyers", score: 4 },
      { label: "Not sure yet", score: 2 }
    ],
    categories: ["presentation", "confidence"]
  },
  {
    text: "Does the property have any buyer-confidence concerns?",
    options: [
      { label: "No known concerns", score: 0 },
      { label: "Minor concerns only", score: 1 },
      { label: "Some concerns, but manageable", score: 2 },
      { label: "Significant concerns, such as CCC, title, consent or major repairs", score: 4 },
      { label: "Not sure yet", score: 3 }
    ],
    categories: ["confidence"]
  },
  {
    text: "Are your key property documents ready or easy to access?",
    options: [
      { label: "Yes, everything is organised", score: 0 },
      { label: "Some documents are ready", score: 1 },
      { label: "We still need to organise LIM, title or council records", score: 3 },
      { label: "There may be issues in the documents", score: 4 },
      { label: "Not sure what documents we need", score: 3 }
    ],
    categories: ["confidence"]
  },
  {
    text: "How strong is your marketing plan before launching?",
    options: [
      { label: "Strong plan with photos, video, floor plan and digital campaign", score: 0 },
      { label: "Professional photos planned, but not much else yet", score: 2 },
      { label: "Mostly just standard property websites", score: 3 },
      { label: "No clear plan yet", score: 4 },
      { label: "Not sure what good marketing should include", score: 3 }
    ],
    categories: ["marketing"]
  },
  {
    text: "Is your marketing plan designed to attract qualified buyers, not just online views?",
    options: [
      { label: "Yes, it includes AI-enhanced targeting and a clear buyer strategy", score: 0 },
      { label: "Some digital marketing is planned, but I am not sure how targeted it is", score: 2 },
      { label: "Mostly standard property websites only", score: 3 },
      { label: "No clear plan yet", score: 4 },
      { label: "I am not sure what AI-enhanced marketing should include", score: 3 }
    ],
    categories: ["marketing"]
  },
  {
    text: "How much similar competition is currently nearby?",
    options: [
      { label: "Very little similar competition", score: 0 },
      { label: "Some competition", score: 1 },
      { label: "Many similar homes", score: 2 },
      { label: "Cheaper or better-presented homes nearby", score: 4 },
      { label: "Not checked yet", score: 2 }
    ],
    categories: ["competition"]
  }
];

const listedQuestions = [
  {
    text: "How long has the property been on the market?",
    options: [
      { label: "Less than 2 weeks", score: 1 },
      { label: "2–4 weeks", score: 2 },
      { label: "1–2 months", score: 3 },
      { label: "More than 2 months", score: 4 },
      { label: "It was listed before and withdrawn", score: 4 }
    ],
    categories: ["price", "competition"]
  },
  {
    text: "How many serious buyer enquiries have you had?",
    options: [
      { label: "Strong enquiry", score: 0 },
      { label: "Some enquiry", score: 1 },
      { label: "Very little enquiry", score: 3 },
      { label: "Almost none", score: 4 },
      { label: "Not sure because feedback is unclear", score: 3 }
    ],
    categories: ["marketing"]
  },
  {
    text: "How many buyers have physically viewed the property?",
    options: [
      { label: "Many", score: 0 },
      { label: "A reasonable number", score: 1 },
      { label: "Very few", score: 3 },
      { label: "Almost none", score: 4 },
      { label: "Not sure", score: 3 }
    ],
    categories: ["marketing"]
  },
  {
    text: "Have you received any written offers?",
    options: [
      { label: "Yes, a strong offer", score: 0 },
      { label: "Yes, but lower than expected", score: 2 },
      { label: "Verbal interest only", score: 3 },
      { label: "No offers", score: 4 },
      { label: "Only very low interest", score: 4 }
    ],
    categories: ["price"]
  },
  {
    text: "What feedback are buyers giving?",
    options: [
      { label: "Mostly positive", score: 0 },
      { label: "Price concerns", score: 3 },
      { label: "Condition concerns", score: 3 },
      { label: "Location or layout concerns", score: 2 },
      { label: "We are not getting clear feedback", score: 4 }
    ],
    categories: ["price", "presentation", "confidence"]
  },
  {
    text: "How does your asking price compare with similar recent sales?",
    options: [
      { label: "Clearly supported by recent sales", score: 0 },
      { label: "Slightly above recent sales", score: 2 },
      { label: "Well above recent sales", score: 4 },
      { label: "Not sure", score: 3 },
      { label: "Mainly relying on online estimates or CV/GV", score: 3 }
    ],
    categories: ["price"]
  },
  {
    text: "How does your property present online?",
    options: [
      { label: "Professional photos, video, floor plan and strong copy", score: 0 },
      { label: "Good photos but no video or floor plan", score: 1 },
      { label: "Average photos", score: 2 },
      { label: "Poor photos", score: 4 },
      { label: "Not sure", score: 3 }
    ],
    categories: ["presentation", "marketing"]
  },
  {
    text: "Does the property have any buyer-confidence concerns?",
    options: [
      { label: "No known issues", score: 0 },
      { label: "Minor issues", score: 1 },
      { label: "Some concerns", score: 2 },
      { label: "Significant concerns, such as CCC, title, consent or major repairs", score: 4 },
      { label: "Not sure", score: 3 }
    ],
    categories: ["confidence"]
  },
  {
    text: "How much similar competition is currently nearby?",
    options: [
      { label: "Very little similar competition", score: 0 },
      { label: "Some competition", score: 1 },
      { label: "Many similar homes", score: 2 },
      { label: "Cheaper or better-presented homes nearby", score: 4 },
      { label: "Not sure", score: 3 }
    ],
    categories: ["competition"]
  },
  {
    text: "How clear is the feedback and follow-up after viewings?",
    options: [
      { label: "Very clear and detailed", score: 0 },
      { label: "Some feedback, but not very deep", score: 1 },
      { label: "Very general feedback only", score: 3 },
      { label: "Almost no clear feedback", score: 4 },
      { label: "Not sure what buyers really think", score: 4 }
    ],
    categories: ["marketing", "confidence"]
  },
  {
    text: "Is the marketing reaching buyers outside the standard property websites?",
    options: [
      { label: "Yes, strong digital campaign", score: 0 },
      { label: "Some social media", score: 1 },
      { label: "Mostly property portals only", score: 3 },
      { label: "Not sure", score: 3 },
      { label: "No", score: 4 }
    ],
    categories: ["marketing"]
  },
  {
    text: "Do you know if your current campaign is using AI-enhanced marketing to find buyers who are ready, able and motivated?",
    options: [
      { label: "Yes, the campaign is actively targeting likely buyers", score: 0 },
      { label: "Some digital marketing is being used, but I am not sure how targeted it is", score: 2 },
      { label: "Mostly just standard websites and social posts", score: 3 },
      { label: "No, I do not think AI-enhanced targeting is being used", score: 4 },
      { label: "I am not sure", score: 3 }
    ],
    categories: ["marketing"]
  }
];

let path = null;
let activeQuestions = [journeyQuestion, ...presaleQuestions];
let currentQuestion = 0;
let answers = [];

const questionBox = document.getElementById("questionBox");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("resultBox");
const restartBtn = document.getElementById("restartBtn");

function renderQuestion() {
  const q = activeQuestions[currentQuestion];

  progressText.textContent = `Question ${currentQuestion + 1} of ${activeQuestions.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / activeQuestions.length) * 100}%`;

  questionBox.innerHTML = `
    <h2>${q.text}</h2>
    ${q.options.map((option, index) => `
      <button class="option ${answers[currentQuestion] === index ? "selected" : ""}" onclick="selectOption(${index})">
        ${option.label}
      </button>
    `).join("")}
  `;

  backBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
  nextBtn.textContent = currentQuestion === activeQuestions.length - 1 ? "Show My Result" : "Next";
}

function selectOption(index) {
  answers[currentQuestion] = index;
  renderQuestion();
}

nextBtn.addEventListener("click", () => {
  if (answers[currentQuestion] === undefined) {
    alert("Please choose an answer before continuing.");
    return;
  }

  if (currentQuestion === 0) {
    const selectedPath = journeyQuestion.options[answers[0]].path;

    if (selectedPath !== path) {
      path = selectedPath;

      activeQuestions = path === "presale"
        ? [journeyQuestion, ...presaleQuestions]
        : [journeyQuestion, ...listedQuestions];

      answers = [answers[0]];
    }
  }

  if (currentQuestion < activeQuestions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
});

backBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});

restartBtn.addEventListener("click", () => {
  path = null;
  activeQuestions = [journeyQuestion, ...presaleQuestions];
  currentQuestion = 0;
  answers = [];
  resultBox.classList.add("hidden");
  document.querySelector(".checker").classList.remove("hidden");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function showResult() {
  const scores = {
    price: 0,
    presentation: 0,
    confidence: 0,
    marketing: 0,
    competition: 0
  };

  const maxScores = {
    price: 0,
    presentation: 0,
    confidence: 0,
    marketing: 0,
    competition: 0
  };

  activeQuestions.forEach((question, questionIndex) => {
    if (!question.categories || question.categories.length === 0) {
      return;
    }

    const selectedOption = question.options[answers[questionIndex]];
    const maxOptionScore = Math.max(...question.options.map(option => option.score || 0));

    question.categories.forEach(category => {
      scores[category] += selectedOption.score || 0;
      maxScores[category] += maxOptionScore;
    });
  });

  const totalScore =
    scores.price +
    scores.presentation +
    scores.confidence +
    scores.marketing +
    scores.competition;

  const maxTotal =
    maxScores.price +
    maxScores.presentation +
    maxScores.confidence +
    maxScores.marketing +
    maxScores.competition;

  const riskPercent = maxTotal === 0 ? 0 : totalScore / maxTotal;

  let title = "";
  let text = "";

  if (path === "presale") {
    if (riskPercent <= 0.25) {
      title = "Your property appears well-positioned before going to market.";
      text = "Based on your answers, there are no major warning signs at this stage. The best next step is to make sure your pricing, presentation, documents and marketing are aligned before buyers form their first impression.";
    } else if (riskPercent <= 0.5) {
      title = "Your property has some pre-sale risks worth fixing before launch.";
      text = "Your answers suggest buyers may respond well, but there are a few areas that should be checked before going live. Small improvements before launch can protect your first impression and reduce the risk of sitting on the market.";
    } else if (riskPercent <= 0.75) {
      title = "Your property may need preparation before it is ready for the market.";
      text = "Your answers show possible risks around price, presentation, buyer confidence, marketing or competition. Addressing these before launch may help you avoid weak enquiry, low offers or early price pressure.";
    } else {
      title = "Your property likely needs a stronger launch strategy before listing.";
      text = "If these issues are not addressed before going to market, buyers may hesitate quickly. A stronger launch plan may involve pricing evidence, presentation improvements, document preparation, objection handling and stronger buyer targeting.";
    }
  } else {
    if (riskPercent <= 0.25) {
      title = "Your property appears to be receiving a healthy market response.";
      text = "Based on your answers, there are no major warning signs. The next step is to make sure buyer follow-up, price positioning and negotiation strategy are being handled carefully.";
    } else if (riskPercent <= 0.5) {
      title = "Buyers may be interested, but something is slowing them down.";
      text = "Your property may not be the problem. The issue may be how buyers compare it with other homes, how it presents, how it is priced, or whether the marketing creates enough confidence and urgency.";
    } else if (riskPercent <= 0.75) {
      title = "Your property may be at risk of sitting on the market.";
      text = "Your answers show signs that buyers may be hesitating. This does not automatically mean the property is overpriced, but it does suggest the selling strategy may need adjustment before momentum is lost.";
    } else {
      title = "Your property likely needs a strategy reset.";
      text = "When a property has been exposed to the market but buyers are not acting, doing more of the same rarely fixes the issue. A reset may involve new pricing language, stronger presentation, better buyer targeting, improved objection handling or a fresh launch strategy.";
    }
  }

  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultText").textContent = text;

  document.getElementById("priceScore").textContent = getRiskPercent(scores.price, maxScores.price);
  document.getElementById("presentationScore").textContent = getRiskPercent(scores.presentation, maxScores.presentation);
  document.getElementById("confidenceScore").textContent = getRiskPercent(scores.confidence, maxScores.confidence);
  document.getElementById("marketingScore").textContent = getRiskPercent(scores.marketing, maxScores.marketing);
  document.getElementById("competitionScore").textContent = getRiskPercent(scores.competition, maxScores.competition);

  document.querySelector(".checker").classList.add("hidden");
  resultBox.classList.remove("hidden");
  resultBox.scrollIntoView({ behavior: "smooth" });
}

function getRiskPercent(score, maxScore) {
  if (maxScore === 0) {
    return "0%";
  }

  const percentage = Math.round((score / maxScore) * 100);
  return `${percentage}%`;
}

renderQuestion();
