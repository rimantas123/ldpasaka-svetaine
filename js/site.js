(function () {
  const path = location.pathname.split("/").pop() || "index.html";
  const nav = [
    ["index.html", "Pradžia"],
    ["naujienos.html", "Naujienos"],
    ["apie.html", "Apie mus"],
    ["valdorfas.html", "Valdorfo pedagogika"],
    ["paslaugos.html", "Paslaugos"],
    ["administracija.html", "Struktūra"],
    ["dokumentai.html", "Administracinė info"],
    ["kontaktai.html", "Kontaktai"]
  ];
  const links = nav.map(([href, label]) => `<li><a class="${path === href ? "active" : ""}" href="${href}">${label}</a></li>`).join("");
  const header = `<div class="topbar"><div class="wrap"><span>Kodas 191814643</span><div><a href="https://www.ldpasaka.lt/">Sena svetainė</a></div></div></div>
    <div class="brandbar"><div class="wrap"><a class="logo" href="index.html"><div class="logo-mark">P</div><div><strong>Mažeikių lopšelis-darželis „Pasaka“</strong><span>Ikimokyklinis ir priešmokyklinis ugdymas</span></div></a>
    <div class="brand-meta"><div><b>El. paštas</b><a href="mailto:info@ldpasaka.lt">info@ldpasaka.lt</a></div><div><b>Telefonas</b><a href="tel:+37044320352">+370 443 20 352</a></div><div><b>Adresas</b><span>Naftininkų g. 66, Mažeikiai</span></div></div></div></div>
    <nav class="main"><div class="wrap"><button class="nav-toggle" type="button">Meniu</button><ul>${links}</ul></div></nav>`;
  const footer = `<footer class="site"><div class="wrap foot-grid"><div><strong>Mažeikių lopšelis-darželis „Pasaka“</strong><p>Naftininkų g. 66, LT-89176 Mažeikiai<br>Tel. +370 443 20 352<br>info@ldpasaka.lt</p></div><div><strong>Darbo laikas</strong><p>Grupės: 7.30–18.00<br>Budinčios: 6.45–18.45</p></div><div><strong>Nuorodos</strong><p><a href="duomenu-apsauga.html">Duomenų apsauga</a><br><a href="korupcija.html">Korupcijos prevencija</a></p></div></div></footer>`;
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.innerHTML = header;
  if (f) f.outerHTML = footer;
  const btn = document.querySelector(".nav-toggle");
  const ul = document.querySelector("nav.main ul");
  if (btn && ul) btn.addEventListener("click", () => ul.classList.toggle("open"));
})();
