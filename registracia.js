const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // ფორმის გადაგზავნა რომ არ მოხდეს

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    message.textContent = "გთხოვ შეავსო ყველა ველი ❌";
    message.style.color = "red";
  } else {
    message.textContent = "რეგისტრაცია წარმატებულია! ✅";
    message.style.color = "green";
    form.reset(); // ფორმის გასუფთავება
  }
});
