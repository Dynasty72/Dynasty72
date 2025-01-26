document.getElementById("registration-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const skillLevel = document.getElementById("skill-level").value;
  const phone = document.getElementById("phone").value;

  fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, skillLevel, phone })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`伺服器回應失敗，狀態碼：${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.message === '報名成功') {
        document.getElementById("success-message").style.display = "block";
      } else {
        alert("報名失敗：" + data.message);
      }
    })
    .catch(error => {
      console.error('發送資料失敗：', error);
      alert('提交資料時發生錯誤，請稍後再試！');
    });
});
