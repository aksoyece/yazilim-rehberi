// ===== STATE =====
let lang = 'tr';
let step = 0;
let answers = [];
let selectedVal = null;

// ===== TRANSLATIONS =====
const UI = {
  tr: {
    heroTag: 'Yazılım Dili Rehberi',
    heroTitle: 'Hangi dili<br/><em>öğrenmeliyim?</em>',
    heroSub: '3 soruya cevap ver, sana en uygun yazılım dilini ve öğrenme yolunu bulalım.',
    ctaBtn: 'Başla →',
    stepLabel: (s, t) => `Soru ${s} / ${t}`,
    next: 'Devam',
    back: 'Geri',
    resultTag: '✓ Sonuçların hazır',
    resultTitle: 'Sana özel öneriler',
    topBadge: 'En iyi öneri',
    whyTitle: 'Neden bu dil?',
    learnLink: 'Öğrenmeye başla →',
    restart: '↩ Baştan Başla',
    langsTitle: 'Tüm Diller',
    langsSub: 'Her dil hakkında detaylı bilgi al',
    diffLabel: 'Zorluk:',
    footer: '© 2025 CodePath — Yazılım öğrenme rehberi',
  },
  en: {
    heroTag: 'Language Guide',
    heroTitle: 'Which language<br/>should I <em>learn?</em>',
    heroSub: 'Answer 3 questions, and we\'ll find the best programming language and learning path for you.',
    ctaBtn: 'Start →',
    stepLabel: (s, t) => `Question ${s} of ${t}`,
    next: 'Continue',
    back: 'Back',
    resultTag: '✓ Your results are ready',
    resultTitle: 'Recommendations for you',
    topBadge: 'Top pick',
    whyTitle: 'Why this language?',
    learnLink: 'Start learning →',
    restart: '↩ Start Over',
    langsTitle: 'All Languages',
    langsSub: 'Detailed info about every language',
    diffLabel: 'Difficulty:',
    footer: '© 2025 CodePath — Programming language guide',
  }
};

// ===== LANG =====
function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });
  applyStaticTexts();
  renderLangsGrid();

  const quizVisible = document.getElementById('screen-quiz').style.display !== 'none';
  const resultVisible = document.getElementById('screen-result').style.display !== 'none';
  if (quizVisible) renderStep();
  if (resultVisible) showResult(answers);
}

function applyStaticTexts() {
  const t = UI[lang];
  el('hero-tag').textContent = t.heroTag;
  el('hero-title').innerHTML = t.heroTitle;
  el('hero-sub').textContent = t.heroSub;
  el('cta-btn').textContent = t.ctaBtn;
  el('langs-title').textContent = t.langsTitle;
  el('langs-sub').textContent = t.langsSub;
  el('footer-text').textContent = t.footer;
}

// ===== QUIZ =====
function startQuiz() {
  el('screen-hero').style.display = 'none';
  el('screen-quiz').style.display = 'flex';
  el('screen-result').style.display = 'none';
  step = 0;
  answers = [];
  selectedVal = null;
  renderStep();
}

function renderStep() {
  const t = UI[lang];
  const qs = QUESTIONS[lang];
  const q = qs[step];

  el('progress-fill').style.width = ((step / qs.length) * 100) + '%';
  el('step-label').textContent = t.stepLabel(step + 1, qs.length);
  el('quiz-question').textContent = q.text;

  const optEl = el('quiz-options');
  optEl.innerHTML = '';
  selectedVal = answers[step] || null;

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-card' + (selectedVal === opt.val ? ' selected' : '');
    btn.innerHTML = `
      <span class="option-icon">${opt.icon}</span>
      <span class="option-text">
        <span class="option-label">${opt.label}</span>
        <span class="option-desc">${opt.desc}</span>
      </span>
    `;
    btn.addEventListener('click', () => {
      selectedVal = opt.val;
      document.querySelectorAll('.option-card').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      el('nav-next').classList.add('enabled');
    });
    optEl.appendChild(btn);
  });

  el('back-label').textContent = t.back;
  el('next-label').textContent = t.next;

  const nextBtn = el('nav-next');
  nextBtn.classList.toggle('enabled', !!selectedVal);

  el('nav-back').style.opacity = step === 0 ? '0.3' : '1';
  el('nav-back').style.pointerEvents = step === 0 ? 'none' : 'auto';
}

function goNext() {
  if (!selectedVal) return;
  answers[step] = selectedVal;
  const total = QUESTIONS[lang].length;
  if (step + 1 >= total) {
    showResult(answers);
    return;
  }
  step++;
  selectedVal = answers[step] || null;
  renderStep();
}

function goBack() {
  if (step === 0) return;
  step--;
  selectedVal = answers[step] || null;
  renderStep();
}

// ===== RESULT =====
function showResult(ans) {
  el('screen-quiz').style.display = 'none';
  el('screen-result').style.display = 'flex';
  el('screen-result').scrollIntoView({ behavior: 'smooth' });

  const t = UI[lang];
  el('result-tag').textContent = t.resultTag;
  el('result-title').textContent = t.resultTitle;
  el('restart-btn').textContent = t.restart;

  const recommended = getRecommendations(ans);
  const container = el('result-cards');
  container.innerHTML = '';

  recommended.forEach((key, i) => {
    const lang_data = LANGUAGES[key];
    const card = document.createElement('div');
    card.className = 'result-card' + (i === 0 ? ' top-pick' : '');

    const uses = lang_data.uses[lang].map(u =>
      `<span class="tag">${u}</span>`
    ).join('');

    const topBadge = i === 0
      ? `<span class="top-badge">${t.topBadge}</span>`
      : '';

    const diffDots = Array.from({ length: 5 }, (_, d) =>
      `<div class="diff-dot${d < lang_data.difficulty ? ' filled' : ''}"></div>`
    ).join('');

    card.innerHTML = `
      <div class="card-icon-wrap" style="background: ${lang_data.iconBg};">
        <span style="font-size: 1.6rem;">${lang_data.icon}</span>
      </div>
      <div class="card-body">
        <div class="card-top">
          <span class="card-name">${lang_data.name}</span>
          ${topBadge}
        </div>
        <p class="card-why">${lang_data.desc[lang]}</p>
        <div class="card-tags">${uses}</div>
        <div class="diff-bar">
          <span>${t.diffLabel}</span>
          <div class="diff-dots">${diffDots}</div>
        </div>
        <br/>
        <a class="card-link" href="${lang_data.link}" target="_blank" rel="noopener">
          ${t.learnLink}
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

function restart() {
  el('screen-result').style.display = 'none';
  el('screen-hero').style.display = 'grid';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  step = 0;
  answers = [];
  selectedVal = null;
}

// ===== LANGUAGES GRID =====
function renderLangsGrid() {
  const t = UI[lang];
  const grid = el('langs-grid');
  grid.innerHTML = '';

  Object.entries(LANGUAGES).forEach(([key, l]) => {
    const card = document.createElement('div');
    card.className = 'lang-card';

    const uses = l.uses[lang].map(u =>
      `<span class="lang-use-tag" style="background:${l.iconBg}; color:${l.useColors[1]}; border: 1px solid ${l.useColors[1]}22;">${u}</span>`
    ).join('');

    const diffDots = Array.from({ length: 5 }, (_, d) =>
      `<div class="diff-dot${d < l.difficulty ? ' filled' : ''}"></div>`
    ).join('');

    card.innerHTML = `
      <div class="lang-card-header">
        <div class="lang-icon" style="background: ${l.iconBg};">${l.icon}</div>
        <div>
          <div class="lang-name">${l.name}</div>
          <div class="lang-type">${l.type[lang]}</div>
        </div>
      </div>
      <p class="lang-desc">${l.desc[lang]}</p>
      <div class="lang-uses">${uses}</div>
      <div class="diff-bar">
        <span>${t.diffLabel}</span>
        <div class="diff-dots">${diffDots}</div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ===== UTILS =====
function el(id) { return document.getElementById(id); }

// ===== INIT =====
applyStaticTexts();
renderLangsGrid();