<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"></script>
// 這裡是 Firebase 配置，將下面的代碼替換為你在 Firebase 控制台獲取的設定。
  const firebaseConfig = {
    apiKey: "AIzaSyBz3qZGPIqDeF8d9nppWzGnmlgI3-07E9E",
    authDomain: "dynasty72-3b76d.firebaseapp.com",
    databaseURL: "https://dynasty72-3b76d.firebaseio.com",
    projectId: "dynasty72-3b76d",
    storageBucket: "dynasty72-3b76d.firebasestorage.app",
    messagingSenderId: "10319445859",
    appId: "1:10319445859:web:11fdb04884d2e2cbe99d56"
  };

  // 初始化 Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database(app);
  
  // 儲存表單資料
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const skillLevel = document.getElementById("skillLevel").value;
  const phone = document.getElementById("phone").value;
 // function saveFormData(name, email, skillLevel, phone) {
    const reference = database.ref('registrations').push;
    //const newRegistration = reference.push();
    newRegistration.set({
      name: name,
      email: email,
      skillLevel: skillLevel,
      phone: phone
    })
    .then(() => {
      console.log("報名資料已成功儲存！");
    })
    .catch(error => {
      console.log("儲存失敗：" + error.message);
    });
  }

  // 監聽表單提交事件
  document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // 獲取表單資料
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const skillLevel = document.getElementById("skill-level").value;
    const phone = document.getElementById("phone").value;

    // 儲存資料到 Firebase
    saveFormData(name, email, skillLevel, phone);
  });
