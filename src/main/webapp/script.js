function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase();

    let chatBox = document.querySelector(".chat-box");

    let userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.innerText = input.value;
    chatBox.appendChild(userDiv);

    let botReply = "";

	if (message.includes("jee")) {
	    botReply = "JEE is an engineering entrance exam for admission into IITs, NITs, and other engineering colleges.";
	} else if (message.includes("neet")) {
	    botReply = "NEET is a medical entrance exam for MBBS, BDS, and other medical courses.";
	} else if (message.includes("upsc")) {
	    botReply = "UPSC is one of India's toughest exams for IAS, IPS, and civil services.";
	} else if (message.includes("gate")) {
	    botReply = "GATE is useful for M.Tech admissions and PSU jobs.";
	} else if (message.includes("cat")) {
	    botReply = "CAT is an MBA entrance exam for IIMs and top business schools.";
	} else if (message.includes("ssc")) {
	    botReply = "SSC exams are government exams for jobs like CGL and CHSL.";
	} else if (message.includes("bank")) {
	    botReply = "Bank PO exams are for probationary officer jobs in banks.";
	} else if (message.includes("rrb")) {
	    botReply = "RRB NTPC is a railway recruitment exam for various railway posts.";
	} else if (message.includes("clat")) {
	    botReply = "CLAT is an entrance exam for law colleges and NLUs.";
	} else if (message.includes("mat")) {
	    botReply = "MAT is a management entrance exam for MBA colleges.";
	} else if (message.includes("physics")) {
	    botReply = "Physics is important for JEE, NEET, and GATE preparation.";
	} else if (message.includes("chemistry")) {
	    botReply = "Chemistry is an important subject for JEE and NEET.";
	} else if (message.includes("math")) {
	    botReply = "Mathematics is very important for JEE, CAT, SSC, and GATE.";
	} else if (message.includes("biology")) {
	    botReply = "Biology is the most important subject for NEET preparation.";
	} else {
	    botReply = "Sorry, I do not know that yet. Please ask about exams, subjects, or competitive exam preparation.";
	}

    let botDiv = document.createElement("div");
    botDiv.className = "bot-message";
    botDiv.innerText = botReply;
    chatBox.appendChild(botDiv);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
let score = 0;
let currentQuestion = 0;

const quizQuestions = [
    {
        question: "What is the SI unit of Force?",
        options: ["A. Joule", "B. Newton", "C. Watt", "D. Pascal"],
        correct: "B"
    },
    {
        question: "Which exam is for medical courses?",
        options: ["A. JEE", "B. CAT", "C. NEET", "D. GATE"],
        correct: "C"
    },
    {
        question: "Which subject is most important for NEET?",
        options: ["A. Biology", "B. History", "C. Geography", "D. Law"],
        correct: "A"
    }
];

function loadQuestion() {
    document.getElementById("question").innerText = quizQuestions[currentQuestion].question;

    const buttons = document.getElementsByClassName("quiz-option");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = quizQuestions[currentQuestion].options[i];
    }

    document.getElementById("quizResult").innerText = "";
}

function checkAnswer(answer) {
    let result = document.getElementById("quizResult");
    let scoreDisplay = document.getElementById("scoreDisplay");

    if (answer === quizQuestions[currentQuestion].correct) {
        result.innerText = "✅ Correct!";
        result.style.color = "#90EE90";
        score++;
    } else {
        result.innerText = "❌ Wrong Answer!";
        result.style.color = "#ff8080";
    }

    scoreDisplay.innerText = "Score: " + score;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= quizQuestions.length) {
        currentQuestion = 0;
    }

    loadQuestion();
}

window.onload = function() {
    loadQuestion();
};