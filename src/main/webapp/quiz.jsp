<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>StudyBot Quiz</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="page-container">
        <h1 class="page-title">Quick Quiz</h1>

        <div class="quiz-box">
    <h2 id="question">What is the SI unit of Force?</h2>

    <button class="quiz-option" onclick="checkAnswer('A')">A. Joule</button>
    <button class="quiz-option" onclick="checkAnswer('B')">B. Newton</button>
    <button class="quiz-option" onclick="checkAnswer('C')">C. Watt</button>
    <button class="quiz-option" onclick="checkAnswer('D')">D. Pascal</button>

   <p id="quizResult"></p>
<p id="scoreDisplay">Score: 0</p>
    <button class="btn" onclick="nextQuestion()">Next Question</button>
</div>

        <div class="back-button-container">
            <a href="index.jsp" class="btn">Back to Home</a>
        </div>
    </div>

<script src="script.js"></script>
<footer class="footer">
    <p>© 2026 StudyBot | Built for Competitive Exam Preparation</p>
</footer>
</body>
</html>