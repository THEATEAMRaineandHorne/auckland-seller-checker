const questions = [
  {
    text: "What best describes your situation?",
    options: [
      { label: "Thinking of selling soon", score: 0 },
      { label: "Preparing to list", score: 0 },
      { label: "Already listed but not getting enough enquiry", score: 3 },
      { label: "Getting enquiry but no offers", score: 3 },
      { label: "Getting low offers", score: 2 }
    ],
    categories: ["price", "marketing"]
  },
  {
    text: "How long has the property been on the market?",
    options: [
      { label: "Not listed yet", score: 0 },
      { label: "Less than 2 weeks", score: 1 },
      { label: "2–4 weeks", score: 2 },
      { label: "1–2 months", score: 3 },
      { label: "More than 2 months", score: 4 }
    ],
    categories: ["price", "competition"]
  },
  {
    text: "How many serious buyer enquiries have you had?",
    options: [
      { label: "Not listed yet / no enquiry yet", score: 0 },
      { label: "Strong enquiry", score: 0 },
      { label: "Some enquiry", score: 1 },
      { label: "Very little enquiry", score: 3 },
      { label: "Almost none", score: 4 }
    ],
    categories: ["marketing"]
  },
  {
    text: "How many buyers have physically viewed the property?",
    options: [
      { label: "Not listed yet / no viewings yet", score: 0 },
      { label: "Many", score: 0 },
      { label: "A reasonable number", score: 1 },
      { label: "Very few", score: 3 },
      { label: "Almost none", score: 4 }
    ],
    categories: ["marketing"]
  },
  {
    text: "Have you received any written offers?",
    options: [
      { label: "Not listed yet / no offers expected yet", score: 0 },
      { label: "Yes, a strong offer", score: 0 },
      { label: "Yes, but lower than expected", score: 2 },
      { label: "Verbal interest only", score: 3 },
      { label: "No offers", score: 4 }
    ],
    categories: ["price"]
  },
  {
    text: "What feedback are buyers giving?",
    options: [
      { label: "Not listed yet / no buyer feedback yet", score: 0 },
      { label: "Mostly positive", score: 0 },
      { label: "Price concerns", score: 3 },
      { label: "Condition concerns", score: 3 },
      { label: "Location or layout concerns", score: 2 }
    ],
    categories: ["price", "presentation", "confidence"]
  },
  {
    text: "How does your expected price compare with similar recent sales?",
    options: [
      { label: "Clearly supported by recent sales", score: 0 },
      { label: "Slightly above recent sales", score: 2 },
      { label: "Well above recent sales", score: 4 },
      { label: "Not sure yet", score: 2 },
      { label: "Mainly relying on online estimates or CV/GV", score: 3 }
    ],
    categories: ["price"]
  },
  {
    text: "How does your property present online or in photos?",
    options: [
      { label: "Not listed yet, but presentation is strong", score: 0 },
      { label: "Professional photos, video, floor plan and strong copy", score: 0 },
      { label: "Good photos but no video or floor plan", score: 1 },
      { label: "Average photos or needs improvement", score: 2 },
      { label: "Poor photos / not ready yet", score: 4 }
    ],
    categories: ["presentation", "marketing"]
  },
  {
    text: "Does the property have any buyer-confidence concerns?",
    options: [
      { label: "No known issues", score: 0 },
      { label: "Minor issues", score: 1 },
      { label: "Some concerns", score: 2 },
      { label: "Significant concerns", score: 4 },
      { label: "Not sure yet", score: 3 }
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
      { label: "Not checked yet", score: 2 }
    ],
    categories: ["competition"]
  },
  {
    text: "Is the home easy for buyers to imagine living in?",
    options: [
      { label: "Yes, very easy", score: 0 },
      { label: "Mostly", score: 1 },
      { label: "Some rooms need work", score: 2 },
      { label: "It feels cluttered or tired", score: 4 },
      { label: "Not sure yet", score: 2 }
    ],
    categories: ["presentation"]
  },
  {
    text: "Will the marketing reach buyers outside the standard property websites?",
    options: [
      { label: "Yes, strong digital campaign planned", score: 0 },
      { label: "Some social media planned", score: 1 },
      { label: "Mostly property portals only", score: 3 },
      { label: "Not sure yet", score: 3 },
      { label: "No clear marketing plan yet", score: 4 }
    ],
    categories: ["marketing"]
  }
];

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
  const q = questions[currentQuestion];

  progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

  questionBox.innerHTML = `
    <h2>${q.text}</h2>
    ${q.options.map((option, index) => `
      <button class="option ${answers[currentQuestion] === index ? "selected" : ""}" onclick="selectOption(${index})">
        ${option.label}
      </button>
    `).join("")}
  `;

  backBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
  nextBtn.textContent = currentQuestion === questions.length - 1 ? "Show My Result" : "Next";
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

  if (currentQuestion < questions.length - 1) {
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

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    const selectedOption = question.options[answerIndex];

    question.categories.forEach(category => {
      scores[category] += selectedOption.score;
    });
  });

  const total =
    scores.price +
    scores.presentation +
    scores.confidence +
    scores.marketing +
    scores.competition;

  let title = "";
  let text = "";

  if (total <= 10) {
    title = "Your property does not appear hard to sell — but preparation still matters.";
    text = "Based on your answers, there are no major warning signs at this stage. The best next step is to make sure your price, presentation and marketing are aligned before buyers form their first impression.";
  } else if (total <= 22) {
    title = "Buyers may be interested, but something could slow them down.";
    text = "Your property may not be the problem. The issue may be how buyers compare it with other homes, how it presents, how it is priced, or whether the marketing creates enough confidence and urgency.";
  } else if (total <= 34) {
    title = "Your property may be at risk of sitting on the market.";
    text = "Your answers show signs that buyers may hesitate. This does not automatically mean the property is overpriced, but it does suggest the selling strategy may need adjustment before momentum is lost.";
  } else {
    title = "Your property likely needs a strategy reset.";
    text = "When a property has been exposed to the market but buyers are not acting, doing more of the same rarely fixes the issue. A reset may involve new pricing language, stronger presentation, better buyer targeting, improved objection handling or a fresh launch strategy.";
  }

  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultText").textContent = text;

  document.getElementById("priceScore").textContent = getRiskLabel(scores.price);
  document.getElementById("presentationScore").textContent = getRiskLabel(scores.presentation);
  document.getElementById("confidenceScore").textContent = getRiskLabel(scores.confidence);
  document.getElementById("marketingScore").textContent = getRiskLabel(scores.marketing);
  document.getElementById("competitionScore").textContent = getRiskLabel(scores.competition);

  document.querySelector(".checker").classList.add("hidden");
  resultBox.classList.remove("hidden");
  resultBox.scrollIntoView({ behavior: "smooth" });
}

function getRiskLabel(score) {
  if (score <= 2) {
    return "Low";
  }

  if (score <= 6) {
    return "Medium";
  }

  return "High";
}

renderQuestion();
