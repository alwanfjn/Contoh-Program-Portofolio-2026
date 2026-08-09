function wa() {
  window.open(
    "https://wa.me/6282251507374?text=Saya%20tertarik%20dengan%20portofolio%20anda,%20saya%20ingin%20mengenal%20lebih%20lanjut%20untuk%20berdiskusi%20dengan%20anda"
  );
}

function darkMode() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function applyTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

document.addEventListener("DOMContentLoaded", applyTheme);

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 15px 30px rgba(255,152,0,.5)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,.4)";
  });
});
