<!DOCTYPE html>

<html lang="zh-Hant">
<head>
  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>羽球賽報名表</title>
  
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>羽球賽報名表</h1>
        <p>歡迎參加我們的羽球活動，讓我們一起運動、競技、娛樂！</p>
    </header>

    <section class="info">
        <h2>活動資訊</h2>
        <p><strong>日期：</strong>2025年1月27日</p>
        <p><strong>時間：</strong>早上8點 - 10點</p>
        <p><strong>地點：</strong>永安羽球館</p>
        <p>活動包含熱身、羽球比賽以及友誼賽，無論您是初學者還是進階選手，都能找到適合自己的組別。</p>
    </section>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
        }

        header {
            background-color: #1e88e5;
            color: white;
            text-align: center;
            padding: 20px 0;
        }

        header h1 {
            margin: 0;
        }

        header p {
            font-size: 18px;
        }

        section {
            margin: 20px;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #1e88e5;
        }

        label {
            font-weight: bold;
        }

        input, select {
            width: 100%;
            padding: 8px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        button {
            background-color: #1e88e5;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius:10px;
            cursor: pointer;
            font-size: 20px;
        }

        button:hover {
            background-color: #1565c0;
        }

        footer {
            text-align: center;
            padding: 1px 0px;
            background-color: #1e88e5;
            color: white;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
      #success-message {
    text-align: center;
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    border-radius: 5px;
    font-size: 1.2em;
    margin-top: 20px;
}
    </style>
</head>
    <form id="registration-form">
        <h2>報名表單</h2>
        <form action="#" method="POST">
            <label for="name">姓名：</label>
            <input type="text" id="name" name="name" required><br><br>

            <label for="email">電子郵件：</label>
            <input type="email" id="email" name="email" required><br><br>

            <label for="skill-level">羽球技能水平：</label>
            <select id="skill-level" name="skill-level">
                <option value="beginner">初學者</option>
              <option value="intermediate">中下</option>
                <option value="intermediate">中階</option>
              <option value="intermediate">中上</option>
            </select><br><br>

            <label for="phone">聯絡電話：</label>
            <input type="tel" id="phone" name="phone" required><br><br>

            <button type="submit">報名參加</button>
        </form>

    </section>
    <div id="success-message" style="display:none;">
        <p>感謝您的報名！我們已收到您的報名資訊。</p>
    </div>
    <footer>
        <p>&copy; 2025 非常讚羽球隊</p>
    </footer>
 <script src="報名表test2.js"></script>
 <script src="資料收集.js"></script>
 <script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyBz3qZGPIqDeF8d9nppWzGnmlgI3-07E9E",
    authDomain: "dynasty72-3b76d.firebaseapp.com",
    databaseURL: "https://dynasty72-3b76d-default-rtdb.firebaseio.com",
    projectId: "dynasty72-3b76d",
    storageBucket: "dynasty72-3b76d.firebasestorage.app",
    messagingSenderId: "10319445859",
    appId: "1:10319445859:web:11fdb04884d2e2cbe99d56",
    measurementId: "G-S1EX422VNQ"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
 </script>
</body>
</html>

