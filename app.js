const API_URL = "https://script.google.com/macros/s/AKfycby3Cig_uVP2ZtDsS5PQAMy2QLQAQDakZSoOLDFzLN6lk00sVAnuYHJ2EOgRwnUxDte5gA/exec";

async function loadWarta() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    let html = "";
    data.forEach(item => {
      html += `
        <div class="card">
          <h3>${item.judul}</h3>
          <small>${item.tanggal}</small>
          <p>${item.isi}</p>
        </div>
      `;
    });

    document.getElementById("app").innerHTML = html;
    localStorage.setItem("warta-cache", html);
  } catch {
    document.getElementById("app").innerHTML =
      localStorage.getItem("warta-cache") ||
      "<p>Belum ada data</p>";
  }
}

loadWarta();