// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");
if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    // toggle the open class; CSS handles layout and visibility
    navList.classList.toggle("open");
  });
  // close nav when clicking an item (mobile UX)
  navList.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "A") navList.classList.remove("open");
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
    brand_subtitle: "Informatika",
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
      "Proyek terpilih — mengedit foto, poster, desain cetak, dan figma",
    project1_title: "Poster Sepatu Aerostreet 'Reborn' ",
    project1_desc: "Poster promosi produk fashion khususnya sepatu.",
    project2_title: "Poster Event",
    project2_desc: "Poster promosi Pentas Seni Sekolah Mutiara Bangsa 1.",
    project3_title: "Desain Layout Koran",
    project3_desc: "Membuat layout koran.",
    project4_title: "Desain Sablon Baju",
    project4_desc: "Desain tipografi untuk sablon baju.",
    project5_title: "Desain Instagram Feed",
    project5_desc: "Promosi diskon gratis satu menu.",
    project6_title: "Desain Instagram Feed",
    project6_desc: "Promosi diskon hemat menu.",
    project7_title: "Desain UI/UX Instagram",
    project7_desc: "Desain UI/UX Instagram sederhana menggunakan Figma.",
    project8_title: "Desain Website Konsultasi",
    project8_desc: "Desain website untuk konsultasi dokter.",
    project9_title: "Desain Website Petshop",
    project9_desc: "Desain website untuk toko hewan peliharaan.",
    about_title: "Tentang Saya",
    about_intro:
      "Saya menyelesaikan pendidikan Sekolah Menengah Kejuruan saya di SMK Mutiara Bangsa 1 di jurusan Desain Komunikasi Visual. Memiliki pengalaman pelatihan desain grafis yang dibimbing oleh mentor Universitas Multimedia Nusantara.Saat ini saya sedang menempuh pendidikan S1 Informatika di Universitas Bunda Mulia.",
    skills_title: "Keahlian",
    skill1: "Basic desain grafis",
    skill2: "Layout & desain editorial",
    skill3: "Adobe Photoshop / Illustrator / Premiere",
    skill4: "Canva",
    skill5: "Basic Figma",
    documents_title: "Dokumen",
    documents_subtitle: "Beberapa dokumen penting bisa diunduh:",
    contact_title: "Kontak",
    info_title: "Informasi",
    info_email_label: "Email:",
    info_location: "Lokasi: Tangeramg, Banten, Indonesia",
    info_phone: "Telepon/WA: +62 895-3602-70715",
    footer_made_with: "Made with care",
    page_title: "Cintya Anjelika — Portfolio",
    page_description: "Portfolio Cintya Anjelika",
    btn_back: "Kembali",
  },
  en: {
    lang_label: "EN",
    brand_subtitle: "Informatics",
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
      "Selected projects — editing photo, poster, print design, and figma",
    project1_title: "Aerostreet 'Reborn' shoe poster",
    project1_desc: "Promotional poster for fashion products, especially shoes.",
    project2_title: "Event Poster",
    project2_desc:
      "Promotional poster for Mutiara Bangsa 1 School Art Performance.",
    project3_title: "Newspaper Layout design",
    project3_desc: "Creating newspaper layouts.",
    project4_title: "T-shirt Screen Printing Design",
    project4_desc: "Typography design for t-shirt screen printing.",
    project5_title: "Instagram Feed design",
    project5_desc: "Promotion of free one menu discount.",
    project6_title: "Instagram Feed design",
    project6_desc: "Promotion of menu savings discount.",
    project7_title: "Instagram UI/UX design",
    project7_desc: "Simple Instagram UI/UX design using Figma.",
    project8_title: "Doctor Consultation Website design",
    project8_desc: "Website design for doctor consultation.",
    project9_title: "Petshop Website design",
    project9_desc: "Website design for pet shop.",
    about_title: "About Me",
    about_intro:
      "I completed my Vocational High School education at SMK Mutiara Bangsa 1 in the Visual Communication Design major. I have experience in graphic design training guided by mentors from Multimedia Nusantara University. Currently, I am pursuing a Bachelor's degree in Informatics at Bunda Mulia University.",
    skills_title: "Skills",
    skill1: "Basic graphic design",
    skill2: "Layout & editorial design",
    skill3: "Adobe Photoshop / Illustrator / Premiere",
    skill4: "Canva",
    skill5: "Basic Figma",
    documents_title: "Documents",
    documents_subtitle: "Some important documents are available for download:",
    contact_title: "Contact",
    info_title: "Information",
    info_email_label: "Email:",
    info_location: "Location: Tangerang, Banten, Indonesia",
    info_phone: "Phone/WA: +62 895-3602-70715",
    footer_made_with: "Made with care",
    page_title: "Cintya Anjelika — Portfolio",
    page_description: "Portfolio of Cintya Anjelika",
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
