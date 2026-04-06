<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>StudyBot Chat</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="chat-container">
        <h1 class="page-title">Ask StudyBot</h1>

        <div class="bot-message">
    🤖 Hello! I am StudyBot.<br><br>
    You can ask me about:
    <br>• JEE
    <br>• NEET
    <br>• UPSC
    <br>• SSC
    <br>• GATE
    <br>• CAT
    <br>• Subjects like Physics, Chemistry, Math, Biology
</div>
        </div>

        <div class="input-area">
            <input type="text" id="userInput" placeholder="Ask about exams, subjects, or preparation tips...">
            <button onclick="sendMessage()">Send</button>
        </div>

        <div class="back-button-container">
            <a href="index.jsp" class="btn">Back to Home</a>
        </div>

<script src="script.js"></script>
<footer class="footer">
    <p>© 2026 StudyBot | Built for Competitive Exam Preparation</p>
</footer>
</body>
</html>