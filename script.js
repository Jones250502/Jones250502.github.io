let currentLanguage = "de";
let revealObserver;
let sectionObserver;

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const languageToggle = document.querySelector("[data-language-toggle]");
const projectPage = document.querySelector("[data-project-page]");

function isProjectPage() {
  return Boolean(projectPage);
}

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
  const project = getCurrentProject();
  const metaDescription = document.querySelector('meta[name="description"]');

  document.documentElement.lang = currentLanguage;
  document.title = project ? `${project.title} | Jonas Fritsch` : content.meta.title;
  if (metaDescription) {
    metaDescription.setAttribute("content", project ? project.summary : content.meta.description);
  }

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
  if (!navLinks) {
    return;
  }

  navLinks.innerHTML = content.nav.items
    .map((item) => `<li><a href="${isProjectPage() ? `../index.html${item.href}` : item.href}">${item.label}</a></li>`)
    .join("");
}

function renderHeroActions(content) {
  const container = document.querySelector("[data-hero-actions]");
  if (!container) {
    return;
  }

  container.innerHTML = content.hero.buttons
    .map((button) => `<a class="btn btn-${button.style}" href="${button.href}">${button.label}</a>`)
    .join("");
}

function renderAbout(content) {
  const container = document.querySelector("[data-about-text]");
  if (!container) {
    return;
  }

  container.innerHTML = content.about.paragraphs
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
  const container = document.querySelector("[data-toolbox-grid]");
  if (!container) {
    return;
  }

  container.innerHTML = content.toolbox.tools
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
  const container = document.querySelector("[data-skills-list]");
  if (!container) {
    return;
  }

  container.innerHTML = content.skills.items
    .map((skill) => `<span>${skill}</span>`)
    .join("");
}

function renderJourney(content) {
  const container = document.querySelector("[data-journey-list]");
  if (!container) {
    return;
  }

  container.innerHTML = content.journey.entries
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

function getProjectInitials(title) {
  return title
    .replace(/[^a-zA-Z0-9äöüÄÖÜß ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function renderProjects(content) {
  const container = document.querySelector("[data-project-list]");
  if (!container) {
    return;
  }

  container.innerHTML = content.projects.cards
    .map((project) => `
      <article class="project-card reveal">
        <a class="project-cover-link" href="${project.href}" aria-label="${project.linkLabel}">
          <div class="project-media" data-media-label="${getProjectInitials(project.title)}">
            <img src="${project.cover}" alt="" loading="lazy" onerror="this.hidden=true;">
            <span class="project-cover-cta">${content.projects.detailLabel}</span>
          </div>
        </a>
        <div class="project-content">
          <div class="project-topline">
            <span class="category-tag">${project.category}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-card-tool-grid">
            ${project.technologies.map((technology) => {
              const logo = getProjectToolLogo(technology);
              return `
                <span class="project-card-tool-tile">
                  <span class="project-card-tool-logo">
                    ${logo ? `<img src="${logo}" alt="" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">` : ""}
                    <span ${logo ? "hidden" : ""}>${getToolFallback(technology)}</span>
                  </span>
                  <span class="project-card-tool-name">${technology}</span>
                </span>
              `;
            }).join("")}
          </div>
          <a class="text-link" href="${project.href}" aria-label="${project.linkLabel}">${content.projects.detailLabel}</a>
        </div>
      </article>
    `)
    .join("");
}

function renderCV(content) {
  const highlights = document.querySelector("[data-cv-highlights]");
  const actions = document.querySelector("[data-cv-actions]");
  if (!highlights || !actions) {
    return;
  }

  highlights.innerHTML = `<p>${content.cv.subtitle}</p>`;

  actions.innerHTML = `
    <a class="cv-button" href="${content.cv.pdfPath}" target="_blank" rel="noopener noreferrer">${content.cv.buttons.view}</a>
    <a class="cv-button cv-button-secondary" href="${content.cv.pdfPath}" download>${content.cv.buttons.download}</a>
  `;
}

function renderContact(content) {
  const container = document.querySelector("[data-contact-list]");
  if (!container) {
    return;
  }

  container.innerHTML = content.contact.items
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
  if (!footerActions) {
    return;
  }

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
  if (!navToggle || !navLinks) {
    return;
  }

  navToggle.classList.remove("is-active");
  navToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("is-open");
  document.body.classList.remove("nav-open");
}

function updateHeaderState() {
  if (!header) {
    return;
  }

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
  if (isProjectPage()) {
    return;
  }

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
  document.querySelectorAll(".nav-links a, .hero-actions a, [data-back-to-portfolio]").forEach((link) => {
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

function getCurrentProject() {
  if (!isProjectPage()) {
    return null;
  }

  if (window.projectDetailContent && window.projectDetailContent[currentLanguage]) {
    return window.projectDetailContent[currentLanguage];
  }

  if (!window.projectDetails) {
    return null;
  }

  const slug = projectPage.dataset.projectSlug;
  return window.projectDetails[currentLanguage].items.find((project) => project.slug === slug) || null;
}

function getProjectToolLogo(toolName) {
  const content = window.siteContent[currentLanguage];
  const normalized = toolName.toLowerCase();
  const aliases = {
    "c#": "Visual Studio",
    "gui": "Visual Studio",
    "bahnparameter": "MATLAB",
    "path parameters": "MATLAB",
    "robot control": "KUKA",
    "kuka robot": "KUKA",
    "kuka schnittstelle": "KUKA",
    "kuka interface": "KUKA",
    "roboterzelle": "KUKA",
    "robot cell": "KUKA",
    "systemanalyse": "MATLAB",
    "system analysis": "MATLAB",
    "datenkommunikation": "KRL",
    "data communication": "KRL",
    "validierung": "MATLAB",
    "validation": "MATLAB",
    "testing": "MATLAB"
  };
  const lookupName = aliases[normalized] || toolName;
  const lookup = lookupName.toLowerCase();
  const tool = content.toolbox.tools.find((item) => {
    const itemName = item.name.toLowerCase();
    return lookup.includes(itemName) || itemName.includes(lookup);
  });

  if (tool) {
    return tool.logo;
  }

  if (normalized.includes("kuka") || normalized.includes("krl")) {
    return "assets/logos/KUKA-logo.svg";
  }

  if (normalized.includes("matlab")) {
    return "assets/logos/Matlab_Logo.png";
  }

  if (normalized.includes("unity")) {
    return "assets/logos/Unity_Technologies_logo.svg";
  }

  if (normalized.includes("nvidia") || normalized.includes("isaac")) {
    return "assets/logos/NVIDIA_logo.svg";
  }

  return "";
}

function renderProjectPage() {
  if (!isProjectPage() || !window.projectDetails) {
    return;
  }

  const project = getCurrentProject();
  if (!project) {
    return;
  }

  const labels = window.projectDetails[currentLanguage].labels;
  const allProjects = window.projectDetails[currentLanguage].items;
  const projectIndex = allProjects.findIndex((item) => item.slug === project.slug);
  const previousProject = allProjects[(projectIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(projectIndex + 1) % allProjects.length];

  document.querySelectorAll("[data-back-to-portfolio]").forEach((link) => {
    link.textContent = labels.backToPortfolio;
    link.href = "../index.html#projects";
  });

  setText("[data-project-kicker]", project.category);
  setText("[data-project-title]", project.title);
  setText("[data-project-subtitle]", project.subtitle);
  setText("[data-project-summary]", project.summary);
  setText("[data-project-type-label]", labels.type);
  setText("[data-project-type]", project.type);
  setText("[data-project-period-label]", labels.period);
  setText("[data-project-period]", project.period);
  setText("[data-project-status-label]", labels.status);
  setText("[data-project-status]", project.status);
  setText("[data-tech-heading]", labels.technologies);
  setText("[data-timeline-heading]", labels.timeline);
  setText("[data-gallery-heading]", labels.gallery);

  const focusList = document.querySelector("[data-project-focus]");
  if (focusList) {
    focusList.innerHTML = (project.focus || [])
      .map((item) => `<span>${item}</span>`)
      .join("");
  }

  const heroMedia = document.querySelector("[data-project-hero-media]");
  if (heroMedia) {
    heroMedia.dataset.mediaLabel = getProjectInitials(project.title);
    heroMedia.innerHTML = `<img src="../${project.cover}" alt="${project.title}" loading="eager" onerror="this.hidden=true;">`;
  }

  const toolList = document.querySelector("[data-project-tools]");
  if (toolList) {
    toolList.innerHTML = project.tools
      .map((tool) => {
        const logo = getProjectToolLogo(tool);
        return `
          <article class="project-tool">
            <span class="project-tool-logo">
              ${logo ? `<img src="../${logo}" alt="" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">` : ""}
              <span ${logo ? "hidden" : ""}>${getToolFallback(tool)}</span>
            </span>
            <strong>${tool}</strong>
          </article>
        `;
      })
      .join("");
  }

  const timeline = document.querySelector("[data-project-timeline]");
  if (timeline) {
    timeline.innerHTML = project.timeline
      .map((item, itemIndex) => `
        <article class="project-timeline-item reveal ${itemIndex % 2 ? "is-reversed" : ""}">
          <div class="project-timeline-media" data-media-label="${getProjectInitials(item.title)}">
            <img src="../${item.image}" alt="${item.title}" loading="lazy" onerror="this.hidden=true;">
          </div>
          <div class="project-timeline-content">
            <span class="project-timeline-icon">${item.icon}</span>
            <h3>${item.title}</h3>
            ${item.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            <div class="timeline-tool-grid">
              ${item.tags.map((tag) => {
                const logo = getProjectToolLogo(tag);
                return `
                  <span class="timeline-tool-tile">
                    <span class="timeline-tool-logo">
                      ${logo ? `<img src="../${logo}" alt="" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">` : ""}
                      <span ${logo ? "hidden" : ""}>${getToolFallback(tag)}</span>
                    </span>
                    <span class="timeline-tool-name">${tag}</span>
                  </span>
                `;
              }).join("")}
            </div>
          </div>
        </article>
      `)
      .join("");
  }

  const projectNavigation = document.querySelector("[data-project-navigation]");
  if (projectNavigation) {
    projectNavigation.innerHTML = `
      <a class="project-nav-link" href="${previousProject.href}">
        <span>${labels.previous}</span>
        <strong>${previousProject.title}</strong>
      </a>
      <a class="project-nav-link project-nav-home" href="../index.html#projects">
        <span>${labels.backToPortfolio}</span>
        <strong>${window.siteContent[currentLanguage].projects.heading}</strong>
      </a>
      <a class="project-nav-link is-next" href="${nextProject.href}">
        <span>${labels.next}</span>
        <strong>${nextProject.title}</strong>
      </a>
    `;
  }

  const gallery = document.querySelector("[data-project-gallery]");
  if (gallery) {
    gallery.innerHTML = project.galleryImages
      .map((image, imageIndex) => `
        <button class="gallery-item" type="button" data-gallery-item data-media-label="${getProjectInitials(project.title)} ${imageIndex + 1}" aria-label="${project.title} ${labels.gallery} ${imageIndex + 1}">
          <img src="../${image}" alt="" loading="lazy" onerror="this.hidden=true;">
        </button>
      `)
      .join("");
  }
}

function bindGallery() {
  document.querySelectorAll("[data-gallery-item]").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-expanded");
    });
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
  renderProjectPage();
  updateLanguageToggle();
  bindNavigationLinks();
  bindMailLinks();
  bindFooterLanguage();
  bindGallery();
  initRevealObserver();
  initSectionObserver();
  updateHeaderState();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "de" ? "en" : "de");
  });
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
window.setLanguage = setLanguage;
setLanguage(currentLanguage);
