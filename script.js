// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");
if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    if (navList.style.display === "flex") navList.style.display = "";
    else navList.style.display = "flex";
    navList.style.flexDirection = "column";
    navList.style.gap = "0.5rem";
  });
}

// Image modal preview for project images
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
document.querySelectorAll(".projects-grid img").forEach((img) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    if (!modal || !modalImg) return;
    modalImg.src = img.src;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});
if (modal) {
  modal.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    if (modalImg) modalImg.src = "";
  });
}

// -------- Internationalization (i18n) --------
const translations = {
  id: {
    lang_label: "ID",
    brand_subtitle: "Desain Komunikasi Visual",
    cta_download_cv: "Unduh CV",
    hero_title: "Halo, saya Cintya Anjelika",
    hero_intro:
      "Saya merupakan lulusan Desain Komunikasi Visual yang fokus pada desain editorial. Dapat membuat desain yang membantu cerita merek terlihat jelas dan berkesan.",
    btn_view_portfolio: "Lihat Portofolio",
    nav_projects: "Portofolio",
    nav_about: "Tentang",
    nav_contact: "Kontak",
    projects_title: "Portofolio",
    projects_subtitle:
      "Proyek terpilih — mengedit foto, poster, dan desain cetak",
    project1_title: "Poster Sepatu Aerostreet 'Reborn' ",
    project1_desc:
      "Proyek ini dibuat untuk tugas mata pelajaran Desain Percetakan, promosi produk fashion khususnya sepatu.",
    project2_title: "Poster Event",
    project2_desc:
      "Proyek ini dibuat untuk tugas mata pelajaran Desain Percetakan, promosi acara Pentas Seni Sekolah Mutiara Bangsa 1.",
    project3_title: "Desain Layout Koran",
    project3_desc:
      "Proyek ini dibuat untuk tugas mata pelajaran Desain Percetakan, membuat tata letak koran",
    about_title: "Tentang Saya",
    about_intro:
      "Saya menyelesaikan pendidikan Sekolah Menengah Kejuruan saya di SMK Mutiara Bangsa 1 di jurusan Desain Komunikasi Visual. Memiliki pengalaman pelatihan desain grafis yang dibimbing oleh mentor Universitas Multimedia Nusantara",
    skills_title: "Keahlian",
    skill1: "Basic desain grafis",
    skill2: "Layout & desain editorial",
    skill3: "Adobe Photoshop / Illustrator / Premiere",
    skill4: "Canva",
    skill5: "Basic Figma",
    documents_title: "Dokumen",
    documents_subtitle: "Beberapa dokumen penting bisa diunduh:",
    contact_title: "Kontak",
    contact_intro:
      "Ingin menanyakan sesuatu? Kirim pesan singkat dan saya akan balas secepatnya",
    contact_sending: "Mengirim...",
    contact_success: "Pesan terkirim — terima kasih!",
    contact_error: "Gagal mengirim pesan. Coba lagi nanti.",
    contact_error_missing: "Silakan lengkapi semua isian.",
    placeholder_name: "Nama",
    placeholder_email: "Email",
    placeholder_message: "Pesan",
    btn_send: "Kirim",
    info_title: "Informasi",
    info_email_label: "Email:",
    info_location: "Lokasi: Indonesia",
    info_phone: "Telepon/WA: +62 895-3602-70715",
    footer_made_with: "Made with care • Desain Komunikasi Visual",
    page_title: "Cintya Anjelika — Portfolio",
    page_description: "Portfolio Cintya Anjelika — Desain Komunikasi Visual",
    btn_back: "Kembali",
  },
  en: {
    lang_label: "EN",
    brand_subtitle: "Visual Communication Design",
    cta_download_cv: "Download CV",
    hero_title: "Hi, I’m Cintya Anjelika",
    hero_intro:
      "I graduated in Visual Communication Design with a focus on editorial design. Create designs that help brand stories look clear and memorable.",
    btn_view_portfolio: "View Portfolio",
    nav_projects: "Portfolio",
    nav_about: "About",
    nav_contact: "Contact",
    projects_title: "Portfolio",
    projects_subtitle:
      "Selected projects — editing photo, poster, and print design",
    project1_title: "Aerostreet 'Reborn' shoe poster",
    project1_desc:
      "This project was created for a Printing Design subject assignment, promotion of fashion products, especially shoes",
    project2_title: "Event Poster",
    project2_desc:
      "This project was created for a Printing Design subject assignment, promotion of Mutiara Bangsa 1 School Art Performance",
    project3_title: "Newspaper Layout design",
    project3_desc:
      "This project was created for a Printing Design subject assinment, create a newspaper layout",
    project4_title: "Print Design",
    project4_desc: "Layout design for books and brochures.",
    about_title: "About Me",
    about_intro:
      "I completed my vocational high school education at SMK Mutiara Bangsa 1 majoring in Visual Communication Design. I have graphic design training experience under the guidance of a mentor from Multimedia Nusantara University.",
    skills_title: "Skills",
    skill1: "Basic graphic design",
    skill2: "Layout & editorial design",
    skill3: "Adobe Photoshop / Illustrator / Premiere",
    skill4: "Canva",
    skill5: "Basic Figma",
    documents_title: "Documents",
    documents_subtitle: "Some important documents are available for download:",
    contact_title: "Contact",
    contact_intro:
      "Have a question? Send a short message and I will reply as soon as possible.",
    contact_sending: "Sending...",
    contact_success: "Message sent — thank you!",
    contact_error: "Failed to send message. Please try again later.",
    contact_error_missing: "Please complete all fields.",
    placeholder_name: "Name",
    placeholder_email: "Email",
    placeholder_message: "Message",
    btn_send: "Send",
    info_title: "Information",
    info_email_label: "Email:",
    info_location: "Location: Indonesia",
    info_phone: "Phone/WA: +62 895-3602-70715",
    footer_made_with: "Made with care • Visual Communication Design",
    page_title: "Cintya Anjelika — Portfolio",
    page_description:
      "Portfolio of Cintya Anjelika — Visual Communication Design",
    btn_back: "Back",
  },
};

// expose translations globally for other pages (detail.html)
window.translations = translations;

function applyTranslations(lang) {
  const dict = translations[lang] || translations.id;
  // replace text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.placeholder = dict[key];
  });
  // update lang attr
  document.documentElement.lang = lang;
  // update title & meta description if present
  if (dict.page_title) document.title = dict.page_title;
  const descMeta = document.querySelector("meta[name=description]");
  if (descMeta && dict.page_description)
    descMeta.content = dict.page_description;
}

// language selector handling
const langSelect = document.getElementById("langSelect");
const savedLang =
  localStorage.getItem("preferredLang") ||
  navigator.language?.slice(0, 2) ||
  "id";
if (langSelect) {
  langSelect.value = savedLang === "en" ? "en" : "id";
  applyTranslations(langSelect.value);
  langSelect.addEventListener("change", () => {
    const v = langSelect.value;
    localStorage.setItem("preferredLang", v);
    applyTranslations(v);
  });
} else {
  applyTranslations(savedLang);
}

// Contact form removed — site keeps contact information but no client-side contact submission.
