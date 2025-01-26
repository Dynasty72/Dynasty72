// Firebase 配置
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// 初始化 Firebase
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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 儲存資料的函數
function saveFormData(name, email, skillLevel, phone) {
  const registrationsRef = ref(database, "registrations");
  const newRegistrationRef = push(registrationsRef);

  set(newRegistrationRef, {
    name: name,
    email: email,
    skillLevel: skillLevel,
    phone: phone
  })
    .then(() => {
      console.log("報名資料已成功儲存！");
      document.getElementById("success-message").style.display = "block";
    })
    .catch(error => {
      console.error("儲存失敗：" + error.message);
    });
}

// 監聽表單提交事件
document.getElementById("registration-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // 獲取表單資料
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const skillLevel = document.getElementById("skill-level").value;
  const phone = document.getElementById("phone").value;

  // 儲存資料到 Firebase
  saveFormData(name, email, skillLevel, phone);
});
