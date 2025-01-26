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
    .then(response => response.json())
    .then(data => {
      if (data.message === '報名成功') {
        document.getElementById("success-message").style.display = "block";
      } else {
        alert("報名失敗：" + data.message);
      }
    })
    .catch(error => console.error('發送資料失敗：', error));
});
