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
  <script src="報名表tests.js"></script>
  <script src="資料收集.js"></script>
</body>
</html>
