// ===== DİL VERİSİ =====
const LANGUAGES = {
  python: {
    name: 'Python',
    icon: '🐍',
    iconBg: '#1e3a2f',
    type: { tr: 'Çok Amaçlı', en: 'General Purpose' },
    desc: {
      tr: 'Okunması ve öğrenmesi en kolay dillerden biri. Yapay zeka, veri bilimi ve web geliştirme için standart.',
      en: 'One of the easiest languages to read and learn. The standard for AI, data science, and web development.'
    },
    uses: {
      tr: ['Yapay Zeka', 'Veri Bilimi', 'Web (Backend)', 'Otomasyon'],
      en: ['AI / ML', 'Data Science', 'Web (Backend)', 'Automation']
    },
    useColors: ['#1e3a2f', '#50fa7b'],
    difficulty: 2,
    link: 'https://www.python.org/about/gettingstarted/',
    goals: ['ai', 'web', 'freelance'],
  },
  javascript: {
    name: 'JavaScript',
    icon: '⚡',
    iconBg: '#3a2e00',
    type: { tr: 'Web Dili', en: 'Web Language' },
    desc: {
      tr: 'Webın dili. Tarayıcıda ve sunucuda çalışır. Mobil geliştirme (React Native) için de temel.',
      en: 'The language of the web. Runs in browser and server. Foundation for mobile dev (React Native) too.'
    },
    uses: {
      tr: ['Web Frontend', 'Web Backend', 'Mobil (React Native)', 'Oyun'],
      en: ['Web Frontend', 'Web Backend', 'Mobile (React Native)', 'Games']
    },
    useColors: ['#3a2e00', '#f1fa8c'],
    difficulty: 2,
    link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps',
    goals: ['web', 'mobile', 'freelance'],
  },
  csharp: {
    name: 'C#',
    icon: '🎮',
    iconBg: '#1a0f3a',
    type: { tr: 'Çok Amaçlı', en: 'General Purpose' },
    desc: {
      tr: "Microsoft'un dili. Unity ile oyun geliştirme ve kurumsal uygulamalar için güçlü seçim.",
      en: "Microsoft's language. Powerful choice for game development with Unity and enterprise apps."
    },
    uses: {
      tr: ['Oyun (Unity)', 'Kurumsal Yazılım', 'Desktop Uygulaması', 'Web (.NET)'],
      en: ['Games (Unity)', 'Enterprise Software', 'Desktop Apps', 'Web (.NET)']
    },
    useColors: ['#1a0f3a', '#bd93f9'],
    difficulty: 3,
    link: 'https://dotnet.microsoft.com/en-us/learn/csharp',
    goals: ['game', 'job'],
  },
  c: {
    name: 'C',
    icon: '⚙️',
    iconBg: '#0a1f3a',
    type: { tr: 'Sistem Dili', en: 'Systems Language' },
    desc: {
      tr: 'Tüm modern dillerin atası. Bilgisayar biliminin temelini anlamak için olmazsa olmaz.',
      en: 'The ancestor of all modern languages. Essential for understanding computer science fundamentals.'
    },
    uses: {
      tr: ['İşletim Sistemi', 'Gömülü Sistemler', 'Sistem Programlama', 'Performans'],
      en: ['Operating Systems', 'Embedded Systems', 'System Programming', 'Performance']
    },
    useColors: ['#0a1f3a', '#8be9fd'],
    difficulty: 4,
    link: 'https://www.learn-c.org/',
    goals: ['job'],
  },
  cpp: {
    name: 'C++',
    icon: '🔧',
    iconBg: '#1f0f0a',
    type: { tr: 'Sistem / Oyun Dili', en: 'Systems / Game Language' },
    desc: {
      tr: "C'nin güçlü versiyonu. AAA oyunlar, yüksek performanslı sistemler ve Unreal Engine için.",
      en: "The powerful version of C. For AAA games, high-performance systems and Unreal Engine."
    },
    uses: {
      tr: ['Oyun (Unreal)', 'Yüksek Performans', 'Sistem Yazılımı', 'Finans'],
      en: ['Games (Unreal)', 'High Performance', 'System Software', 'Finance']
    },
    useColors: ['#1f0f0a', '#ffb86c'],
    difficulty: 5,
    link: 'https://www.learncpp.com/',
    goals: ['game', 'job'],
  },
  sql: {
    name: 'SQL',
    icon: '🗄️',
    iconBg: '#0f2a2a',
    type: { tr: 'Veri Tabanı Dili', en: 'Database Language' },
    desc: {
      tr: 'Veri ile çalışmanın temel dili. Her yazılımcının bilmesi gereken, öğrenmesi görece kolay.',
      en: 'The fundamental language for working with data. Something every developer should know, relatively easy to learn.'
    },
    uses: {
      tr: ['Veri Analizi', 'Backend', 'Veri Bilimi', 'İş Zekası'],
      en: ['Data Analysis', 'Backend', 'Data Science', 'Business Intelligence']
    },
    useColors: ['#0f2a2a', '#43e97b'],
    difficulty: 2,
    link: 'https://www.w3schools.com/sql/',
    goals: ['ai', 'web', 'job'],
  },
};

// ===== QUIZ SORULARI =====
const QUESTIONS = {
  tr: [
    {
      text: 'Hedefin ne?',
      options: [
        { label: 'Mobil uygulama yapmak', desc: 'iOS ve Android için', icon: '📱', val: 'mobile' },
        { label: 'Web sitesi / web uygulaması', desc: 'Frontend ve backend', icon: '🌐', val: 'web' },
        { label: 'Oyun geliştirme', desc: 'Mobil, PC veya konsol', icon: '🎮', val: 'game' },
        { label: 'Yapay zeka / veri bilimi', desc: 'ML, AI, data analizi', icon: '🧠', val: 'ai' },
        { label: 'İş bulmak / staj', desc: 'İş piyasasına girmek', icon: '💼', val: 'job' },
        { label: 'Freelance çalışmak', desc: 'Serbest yazılımcı', icon: '💻', val: 'freelance' },
      ]
    },
    {
      text: 'Programlama deneyimin?',
      options: [
        { label: 'Hiç yok', desc: 'Sıfırdan başlıyorum', icon: '🌱', val: 'none' },
        { label: 'Temel seviye', desc: 'Biraz yazdım, mantığı anlıyorum', icon: '🌿', val: 'basic' },
        { label: 'Orta seviye', desc: 'En az bir dil biliyorum', icon: '🌳', val: 'mid' },
      ]
    },
    {
      text: 'Öğrenme tercihin?',
      options: [
        { label: 'Kolay başlangıç istiyorum', desc: 'Hızlı sonuç, düşük kafa karışıklığı', icon: '🚀', val: 'easy' },
        { label: 'İş piyasasında en çok aranan', desc: 'En fazla iş ilanı olan dil', icon: '📈', val: 'market' },
        { label: 'Temelden öğrenmek istiyorum', desc: 'Zorlu ama sağlam temel', icon: '🏗️', val: 'deep' },
      ]
    },
  ],
  en: [
    {
      text: 'What is your goal?',
      options: [
        { label: 'Build mobile apps', desc: 'iOS and Android', icon: '📱', val: 'mobile' },
        { label: 'Web site / web app', desc: 'Frontend and backend', icon: '🌐', val: 'web' },
        { label: 'Game development', desc: 'Mobile, PC or console', icon: '🎮', val: 'game' },
        { label: 'AI / data science', desc: 'ML, AI, data analysis', icon: '🧠', val: 'ai' },
        { label: 'Get a job / internship', desc: 'Enter the job market', icon: '💼', val: 'job' },
        { label: 'Work freelance', desc: 'Independent developer', icon: '💻', val: 'freelance' },
      ]
    },
    {
      text: 'Your programming experience?',
      options: [
        { label: 'None at all', desc: 'Starting from scratch', icon: '🌱', val: 'none' },
        { label: 'Beginner', desc: 'Wrote some code, understand the logic', icon: '🌿', val: 'basic' },
        { label: 'Intermediate', desc: 'Know at least one language', icon: '🌳', val: 'mid' },
      ]
    },
    {
      text: 'Your learning preference?',
      options: [
        { label: 'Easy start', desc: 'Quick results, low confusion', icon: '🚀', val: 'easy' },
        { label: 'Most in-demand', desc: 'Language with most job listings', icon: '📈', val: 'market' },
        { label: 'Learn from fundamentals', desc: 'Hard but solid foundation', icon: '🏗️', val: 'deep' },
      ]
    },
  ]
};

// ===== ÖNERI MOTORU =====
function getRecommendations(answers) {
  const [goal, exp, pref] = answers;
  let scores = {};

  Object.entries(LANGUAGES).forEach(([key, lang]) => {
    scores[key] = 0;
    if (lang.goals.includes(goal)) scores[key] += 3;
  });

  // Deneyim ve tercih bazlı bonus
  if (exp === 'none' || pref === 'easy') {
    scores['python'] = (scores['python'] || 0) + 2;
    scores['javascript'] = (scores['javascript'] || 0) + 1;
    scores['sql'] = (scores['sql'] || 0) + 1;
  }
  if (pref === 'market') {
    scores['javascript'] = (scores['javascript'] || 0) + 2;
    scores['python'] = (scores['python'] || 0) + 2;
    scores['sql'] = (scores['sql'] || 0) + 1;
  }
  if (pref === 'deep' || exp === 'mid') {
    scores['c'] = (scores['c'] || 0) + 2;
    scores['cpp'] = (scores['cpp'] || 0) + 2;
    scores['csharp'] = (scores['csharp'] || 0) + 1;
  }
  if (goal === 'game') {
    scores['csharp'] = (scores['csharp'] || 0) + 3;
    scores['cpp'] = (scores['cpp'] || 0) + 2;
  }
  if (goal === 'mobile') {
    scores['javascript'] = (scores['javascript'] || 0) + 3;
  }
  if (goal === 'ai') {
    scores['python'] = (scores['python'] || 0) + 4;
    scores['sql'] = (scores['sql'] || 0) + 2;
  }

  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .filter(([, s]) => s > 0)
    .slice(0, 3)
    .map(([key]) => key);
}