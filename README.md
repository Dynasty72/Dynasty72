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

  <section>
    <form id="registration-form">
      <h2>報名表單</h2>
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

  <footer>
    <p>&copy; 2025 非常讚羽球隊</p>
  </footer>

  <script src="資料收集.js"></script>
</body>
</html>
