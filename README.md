<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>羽球賽報名表</title>
<style>
/* style.css 內的內容直接貼在這裡 */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #333;
}

header {
  background-color: #4caf50;
  color: white;
  text-align: center;
  padding: 20px 10px;
  border-bottom: 3px solid #388e3c;
}

header h1 {
  font-size: 2.5em;
  margin: 0;
}

header p {
  font-size: 1.2em;
  margin-top: 5px;
}

section {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select {
  font-size: 1em;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
}

button {
  background-color: #4caf50;
  color: white;
  font-size: 1em;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #388e3c;
}

#success-message {
  max-width: 600px;
  margin: 20px auto;
  padding: 15px;
  background-color: #dff0d8;
  color: #3c763d;
  border: 1px solid #d6e9c6;
  border-radius: 8px;
  text-align: center;
}
</style>

</head>
<body>
  <header>
    <h1>羽球賽報名表</h1>
    <p>歡迎參加我們的羽球活動，讓我們一起運動、競技、娛樂！</p>
  </header>

  <section>
    <form id="registration-form">
      <label for="name">姓名：</label>
      <input type="text" id="name" name="name" required><br><br>

      <label for="email">電子郵件：</label>
      <input type="email" id="email" name="email" required><br><br>

      <label for="skill-level">羽球技能水平：</label>
      <select id="skill-level" name="skill-level" required>
        <option value="beginner">初學者</option>
        <option value="intermediate">中階</option>
        <option value="advanced">進階</option>
      </select><br><br>

      <label for="phone">聯絡電話：</label>
      <input type="tel" id="phone" name="phone" required><br><br>

      <button type="submit">報名參加</button>
    </form>
  </section>

  <div id="success-message" style="display:none;">
    <p>感謝您的報名！我們已收到您的報名資訊。</p>
  </div>
  <script src="server.js"></script>
  <script src="報名表tests2.js"></script>
  <script src="資料收集.js"></script>
</body>
</html>
