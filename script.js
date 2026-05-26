let currentLanguage = "de";
let revealObserver;
let sectionObserver;

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const languageToggle = document.querySelector("[data-language-toggle]");

function getContentValue(path, content = window.siteContent[currentLanguage]) {
  return path.split(".").reduce((value, key) => (value ? value[key] : undefined), content);
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

function applyStaticText(content) {
  document.documentElement.lang = currentLanguage;
  document.title = content.meta.title;
  document.querySelector('meta[name="description"]').setAttribute("content", content.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getContentValue(element.dataset.i18n, content);
    element.textContent = value || "";
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((mapping) => {
      const [attribute, path] = mapping.split(":");
      const value = getContentValue(path, content);
      if (attribute && value) {
        element.setAttribute(attribute.trim(), value);
      }
    });
  });
}

function renderNavigation(content) {
  navLinks.innerHTML = content.nav.items
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");
}

function renderHeroActions(content) {
  const container = document.querySelector("[data-hero-actions]");
  container.innerHTML = content.hero.buttons
    .map((button) => `<a class="btn btn-${button.style}" href="${button.href}">${button.label}</a>`)
    .join("");
}

function renderAbout(content) {
  document.querySelector("[data-about-text]").innerHTML = content.about.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

function getToolFallback(name) {
  const compactName = name.replace(/[^a-zA-Z0-9 ]/g, "").trim();
  const words = compactName.split(/\s+/).filter(Boolean);

  if (words.length === 1) {
    return words[0].slice(0, 3).toUpperCase();
  }

  return words.map((word) => word[0]).join("").slice(0, 4).toUpperCase();
}

function renderToolbox(content) {
  document.querySelector("[data-toolbox-grid]").innerHTML = content.toolbox.tools
    .filter((tool) => !tool.secondary)
    .map((tool) => {
      const fallback = getToolFallback(tool.name);

      return `
        <article class="tool-tile">
          <div class="tool-logo-wrap">
            <img class="tool-logo" src="${tool.logo}" alt="${tool.name}" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
            <span class="tool-fallback" hidden>${fallback}</span>
          </div>
          <div>
            <h4 class="tool-name">${tool.name}</h4>
            <p class="tool-category">${tool.category}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderSkills(content) {
  document.querySelector("[data-skills-list]").innerHTML = content.skills.items
    .map((skill) => `<span>${skill}</span>`)
    .join("");
}

function renderJourney(content) {
  document.querySelector("[data-journey-list]").innerHTML = content.journey.entries
    .map((entry) => `
      <article class="journey-card reveal">
        <span class="journey-logo">
          ${entry.logoPath ? `<img src="${entry.logoPath}" alt="${entry.title}" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">` : ""}
          <span ${entry.logoPath ? "hidden" : ""}>${entry.logo}</span>
        </span>
        <div>
          <p class="journey-label">${entry.label}</p>
          <h3>${entry.title}</h3>
          <p>${entry.text}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderProjects(content) {
  document.querySelector("[data-project-list]").innerHTML = content.projects.cards
    .map((project) => `
      <article class="project-card ${project.featured ? "project-card-feature" : ""} reveal">
        <div class="project-media ${project.mediaClass || ""}" data-media-label="${project.mediaLabel}"></div>
        <div class="project-content">
          <div class="project-topline">
            <span>${project.type}</span>
            <span class="category-tag">${project.category}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tag-list">
            ${project.technologies.map((technology) => `<span>${technology}</span>`).join("")}
          </div>
          <a class="text-link" href="${project.href}" aria-label="${project.linkLabel}">${content.projects.detailLabel}</a>
        </div>
      </article>
    `)
    .join("");
}

function renderCV(content) {
  document.querySelector("[data-cv-highlights]").innerHTML = content.cv.highlights
    .map((highlight) => `
      <article class="cv-highlight">
        <span></span>
        <p>${highlight}</p>
      </article>
    `)
    .join("");

  document.querySelector("[data-cv-actions]").innerHTML = `
    <a class="cv-button" href="${content.cv.pdfPath}" target="_blank" rel="noopener noreferrer">${content.cv.buttons.view}</a>
    <a class="cv-button cv-button-secondary" href="${content.cv.pdfPath}" download>${content.cv.buttons.download}</a>
  `;
}

function renderContact(content) {
  document.querySelector("[data-contact-list]").innerHTML = content.contact.items
    .map((item) => `
      <a class="contact-item reveal" href="${item.href}" ${item.href.startsWith("mailto:") ? 'data-mail-link="true"' : 'target="_blank" rel="noopener"'} aria-label="${item.ariaLabel || `${item.label}: ${item.value}`}">
        <span class="contact-icon contact-icon-${item.icon || "link"}" aria-hidden="true"></span>
        <span class="contact-meta">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </span>
      </a>
    `)
    .join("");
}

function renderFooter(content) {
  const footerActions = document.querySelector("[data-footer-actions]");
  const footerLinks = [content.footer.email, content.footer.linkedin].filter(Boolean);

  footerActions.innerHTML = `
    <div class="footer-links">
      ${footerLinks
        .map((link) => `
          <a class="footer-icon-link" href="${link.href}" ${link.href.startsWith("mailto:") ? 'data-mail-link="true"' : 'target="_blank" rel="noopener"'} aria-label="${link.label}: ${link.value}">
            <img src="${link.icon}" alt="" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
            <span class="footer-icon-fallback" hidden>${link.fallback}</span>
          </a>
        `)
        .join("")}
    </div>
    <div class="footer-language" aria-label="${content.footer.languageLabel}">
      <button class="footer-language-option" type="button" data-footer-lang="de">DE</button>
      <span aria-hidden="true">|</span>
      <button class="footer-language-option" type="button" data-footer-lang="en">EN</button>
    </div>
  `;

  setText("[data-footer-copyright]", content.footer.copyright);
}

function updateLanguageToggle() {
  document.querySelectorAll("[data-lang-option]").forEach((option) => {
    option.classList.toggle("is-active", option.dataset.langOption === currentLanguage);
  });

  document.querySelectorAll("[data-footer-lang]").forEach((option) => {
    option.classList.toggle("language-active", option.dataset.footerLang === currentLanguage);
  });
}

function closeMobileNav() {
  navToggle.classList.remove("is-active");
  navToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("is-open");
  document.body.classList.remove("nav-open");
}

function updateHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function initRevealObserver() {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

function initSectionObserver() {
  if (sectionObserver) {
    sectionObserver.disconnect();
  }

  const navItems = document.querySelectorAll(".nav-links a");
  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navItems.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );

  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
}

function bindNavigationLinks() {
  document.querySelectorAll(".nav-links a, .hero-actions a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
}

function bindMailLinks() {
  document.querySelectorAll("[data-mail-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = link.href;
    });
  });
}

function bindFooterLanguage() {
  document.querySelectorAll("[data-footer-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.footerLang));
  });
}

function setLanguage(lang) {
  if (!window.siteContent[lang]) {
    return;
  }

  currentLanguage = lang;
  const content = window.siteContent[currentLanguage];

  applyStaticText(content);
  renderNavigation(content);
  renderHeroActions(content);
  renderAbout(content);
  renderToolbox(content);
  renderSkills(content);
  renderJourney(content);
  renderProjects(content);
  renderCV(content);
  renderContact(content);
  renderFooter(content);
  updateLanguageToggle();
  bindNavigationLinks();
  bindMailLinks();
  bindFooterLanguage();
  initRevealObserver();
  initSectionObserver();
  updateHeaderState();
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-active", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("nav-open", isOpen);
});

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "de" ? "en" : "de");
});

window.addEventListener("scroll", updateHeaderState, { passive: true });
window.setLanguage = setLanguage;
setLanguage(currentLanguage);
