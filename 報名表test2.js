document.addEventListener("DOMContentLoaded", function() {
    // 取得表單和報名成功訊息區域
    const form = document.getElementById("registration-form");
    const successMessage = document.getElementById("success-message");

    // 監聽表單提交事件
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // 防止表單直接提交到伺服器

        // 可以在這裡加上資料驗證邏輯
        // 例如，檢查每個欄位是否都有填寫，或是檢查郵件格式是否正確

        // 顯示報名成功訊息
        successMessage.style.display = "block";  // 顯示成功訊息

        // 隱藏報名表單
        form.style.display = "none";  // 隱藏表單

        // 若需要，可以清除表單內容（選擇性）
        form.reset();  // 重置表單
    });
});
