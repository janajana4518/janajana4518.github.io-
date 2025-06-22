// "ზემოთ დაბრუნების" ღილაკი
const btn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ძებნის ფუნქცია
const searchInput = document.querySelector('input[type="search"]');
const submitBtn = document.querySelector('input[type="submit"]');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const searchText = searchInput.value.trim().toLowerCase();
  if (!searchText) return;

  // მოვძებნოთ ყველა ტექსტის მქონე ელემენტი article-ში
  const searchArea = document.querySelector('article');
  const allElements = searchArea.querySelectorAll("p, li, h2, a");

  let found = false;

  allElements.forEach((el) => {
    const text = el.textContent.toLowerCase();
    if (!found && text.includes(searchText)) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.style.backgroundColor = "#e0e0ff"; // ნაზად შეაფერადებს მოძებნილს
      setTimeout(() => {
        el.style.backgroundColor = ""; // რამდენიმე წამში მოაშოროს ფერი
      }, 2000);
      found = true;
    }
  });

  if (!found) {
    alert("ვერ მოიძებნა ტექსტში ❌");
  }
});

