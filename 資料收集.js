// 引入 Firebase 套件
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

// Firebase 配置
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

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 儲存表單資料
function saveFormData(name, email, skillLevel, phone) {
  const reference = ref(database, "registrations"); // 指向 Firebase 路徑
  const newRegistration = push(reference); // 建立新節點
  set(newRegistration, {
    name: name,
    email: email,
    skillLevel: skillLevel,
    phone: phone
  })
    .then(() => {
      console.log("報名資料已成功儲存！");
    })
    .catch((error) => {
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
