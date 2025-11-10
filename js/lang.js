const translations = {
  en: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    introTitle: "Hi, I’m Parisa (Shahpari2kht)",
    introText: "Data Scientist passionate about machine learning, data analysis, and creative problem solving. Building ML models, data pipelines, and visual analytics that empower decision-making.",
    projTitle: "Featured Projects",
    skillsTitle: "Technical Skills",
    contactTitle: "Contact",
  },

  fa: {
    about: "درباره من",
    projects: "پروژه‌ها",
    skills: "مهارت‌ها",
    contact: "تماس",
    introTitle: "سلام! من پریسا هستم (شاهپری۲ک‌اچ‌تی)",
    introText: "دانشمند داده با علاقه‌مندی به یادگیری ماشین، تحلیل داده و حل مسئله به روش‌های خلاقانه. در حال ساخت مدل‌های یادگیری ماشین، پایپ‌لاین‌های داده و داشبوردهای تصمیم‌یار.",
    projTitle: "پروژه‌های منتخب",
    skillsTitle: "مهارت‌های فنی",
    contactTitle: "ارتباط با من",
  },

  de: {
    about: "Über mich",
    projects: "Projekte",
    skills: "Fähigkeiten",
    contact: "Kontakt",
    introTitle: "Hallo! Ich bin Parisa (Shahpari2kht)",
    introText: "Datenwissenschaftlerin mit Leidenschaft für maschinelles Lernen, Datenanalyse und kreative Problemlösungen. Ich entwickle ML-Modelle, Datenpipelines und Dashboards zur Entscheidungsunterstützung.",
    projTitle: "Ausgewählte Projekte",
    skillsTitle: "Technische Fähigkeiten",
    contactTitle: "Kontakt",
  },
};

// تغییر زبان
const buttons = document.querySelectorAll(".lang-switch button");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    setLanguage(lang);
  });
});

function setLanguage(lang) {
  document.querySelector('[data-section="about"]').textContent = translations[lang].about;
  document.querySelector('[data-section="projects"]').textContent = translations[lang].projects;
  document.querySelector('[data-section="skills"]').textContent = translations[lang].skills;
  document.querySelector('[data-section="contact"]').textContent = translations[lang].contact;

  document.getElementById("intro-title").textContent = translations[lang].introTitle;
  document.getElementById("intro-text").textContent = translations[lang].introText;
  document.getElementById("proj-title").textContent = translations[lang].projTitle;
  document.getElementById("skills-title").textContent = translations[lang].skillsTitle;
  document.getElementById("contact-title").textContent = translations[lang].contactTitle;
}
