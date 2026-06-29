/*
  Portfólio - Kauã Pimentel
  Script principal em JS puro
  Fundamentos da Programação Web - Uninter
*/

// --- dicionário de traduções ---
const translations = {
  // Menu
  'nav-sobre': { pt: 'Sobre mim', en: 'About me' },
  'nav-formacao': { pt: 'Formação', en: 'Education' },
  'nav-portfolio': { pt: 'Portfólio', en: 'Portfolio' },
  'nav-contato': { pt: 'Contato', en: 'Contact' },

  'hero-badge': { pt: 'Bem-vindo ao meu portfólio', en: 'Welcome to my portfolio' },
  'nav-bmc': { pt: 'Me pague um café', en: 'Buy me a coffee' },
  'hero-greeting': { pt: 'Olá, eu sou', en: 'Hello, I am' },
  'hero-bullet-1': { pt: 'Estudante de Engenharia de Software na Uninter', en: 'Software Engineering Student at Uninter' },
  'hero-bullet-2': { pt: 'Desenvolvimento Web Full Stack', en: 'Full Stack Web Development' },
  'hero-bullet-3': { pt: 'Arquitetura e Resolução de Problemas (Xadrez)', en: 'Architecture & Problem Solving (Chess)' },
  'hero-description': { 
    pt: 'Estudante de Engenharia de Software apaixonado por tecnologia, xadrez e teologia. Transformando ideias em código, um projeto de cada vez.', 
    en: 'Software Engineering student passionate about technology, chess, and theology. Turning ideas into code, one project at a time.' 
  },
  'hero-btn-portfolio': { pt: 'Ver Projetos', en: 'View Projects' },
  'hero-btn-contact': { pt: 'Fale Comigo', en: 'Contact Me' },

  // Sobre
  'sobre-title': { pt: 'Sobre mim', en: 'About me' },
  'sobre-badge': { pt: 'Full Stack Developer', en: 'Full Stack Developer' },
  'sobre-main-title': { pt: 'Transformando ideias em soluções digitais excepcionais', en: 'Transforming ideas into exceptional digital solutions' },
  'sobre-text-1': { 
    pt: 'Olá! Sou o <strong>Kauã Pimentel</strong>, de <strong>Duque de Caxias, Rio de Janeiro</strong>. Sou apaixonado por criar interfaces elegantes e soluções web funcionais e escaláveis.', 
    en: 'Hello! I am <strong>Kauã Pimentel</strong>, from <strong>Duque de Caxias, Rio de Janeiro</strong>. I am passionate about creating elegant interfaces and functional, scalable web solutions.' 
  },
  'sobre-text-2': { 
    pt: 'Atualmente cursando <strong>Engenharia de Software</strong> na Uninter. Uma das coisas que mais gosto de fazer no meu tempo livre (além de jogar xadrez e ler) é aprender novas linguagens de programação e testar novas arquiteturas de desenvolvimento.', 
    en: 'Currently studying <strong>Software Engineering</strong> at Uninter. One of my favorite things to do in my free time (besides playing chess and reading) is learning new programming languages and testing new development architectures.' 
  },
  'sobre-text-3': { 
    pt: 'Se quiser trocar uma ideia, pode me mandar um e-mail na seção de contato abaixo.', 
    en: 'If you want to chat, feel free to send me an email in the contact section below.' 
  },
  'sobre-info-nome-label': { pt: 'Nome:', en: 'Name:' },
  'sobre-info-local-label': { pt: 'Localização:', en: 'Location:' },
  'sobre-info-email-label': { pt: 'E-mail:', en: 'Email:' },
  'sobre-info-foco-label': { pt: 'Foco atual:', en: 'Current focus:' },
  'sobre-info-foco-value': { pt: 'Desenvolvimento Web', en: 'Web Development' },

  // Hobbies
  'sobre-hobbies-title': { pt: 'Meus Hobbies', en: 'My Hobbies' },
  'hobby-chess-title': { pt: 'Xadrez', en: 'Chess' },
  'hobby-chess-desc': { pt: 'Estratégia e raciocínio lógico que aplico na programação.', en: 'Strategy and logical reasoning that I apply to programming.' },
  'hobby-music-title': { pt: 'Música', en: 'Music' },
  'hobby-music-desc': { pt: 'Rock, Lofi e Música Clássica — trilhas que me inspiram e acompanham no dia a dia.', en: 'Rock, Lofi, and Classical Music — soundtracks that inspire and accompany me daily.' },
  'hobby-reading-title': { pt: 'Leitura', en: 'Reading' },
  'hobby-reading-desc': { pt: 'Ficção literária e obras teológicas expandem minha criatividade e visão de mundo.', en: 'Literary fiction and theological works expand my creativity and worldview.' },
  'hobby-basketball-title': { pt: 'Basquete', en: 'Basketball' },
  'hobby-basketball-desc': { pt: 'Trabalho em equipe e disciplina dentro e fora da quadra.', en: 'Teamwork and discipline on and off the court.' },
  'hobby-theology-title': { pt: 'Teologia', en: 'Theology' },
  'hobby-theology-desc': { pt: 'Estudo da fé e reflexões que nutrem minha vida espiritual e intelectual.', en: 'Study of faith and reflections that nourish my spiritual and intellectual life.' },
  'hobby-learning-title': { pt: 'Aprender', en: 'Learning' },
  'hobby-learning-desc': { pt: 'Sempre em busca de novos conhecimentos e desafios.', en: 'Always in search of new knowledge and challenges.' },

  // Formação
  'formacao-title': { pt: 'Formação', en: 'Education' },
  'formacao-academic-title': { pt: 'Formação Acadêmica', en: 'Academic Education' },
  'timeline-badge-in-progress': { pt: 'Em andamento', en: 'In progress' },
  'timeline-course-1-title': { pt: 'Engenharia de Software', en: 'Software Engineering' },
  'timeline-course-1-inst': { pt: 'Uninter — Centro Universitário Internacional', en: 'Uninter — International University Center' },
  'timeline-course-1-period': { pt: '2025 – Presente · 2º Semestre', en: '2025 – Present · 2nd Semester' },
  'timeline-course-1-desc': { 
    pt: 'Curso focado em desenvolvimento de software, engenharia de requisitos e metodologias ágeis. Aprendendo muito sobre arquitetura de sistemas.', 
    en: 'Course focused on software development, requirements engineering, and agile methodologies. Learning a lot about systems architecture.' 
  },
  'timeline-course-2-title': { pt: 'Ensino Médio Completo', en: 'High School' },
  'timeline-course-2-inst': { pt: 'Saber Sistema de Ensino', en: 'Saber Educational System' },
  'timeline-course-2-period': { pt: 'Concluído', en: 'Completed' },
  'timeline-course-2-desc': { 
    pt: 'Formação completa. Sempre gostei mais das matérias de exatas e lógica, o que acabou me levando pra programação.', 
    en: 'Complete education. I always liked exact sciences and logic subjects more, which eventually led me to programming.' 
  },
  'formacao-courses-title': { pt: 'Cursos & Certificações', en: 'Courses & Certifications' },
  'curso-1-title': { pt: 'Fullstack JavaScript', en: 'Fullstack JavaScript' },
  'curso-1-desc': { 
    pt: 'Formação em desenvolvimento web com JavaScript cobrindo front-end, back-end e banco de dados. Foi onde aprendi bastante coisa na prática.', 
    en: 'Web development training with JavaScript covering front-end, back-end, and databases. That is where I learned a lot in practice.' 
  },
  'formacao-languages-title': { pt: 'Idiomas', en: 'Languages' },
  'lang-pt-title': { pt: 'Português', en: 'Portuguese' },
  'lang-pt-level': { pt: 'Nativo', en: 'Native' },
  'lang-en-title': { pt: 'Inglês', en: 'English' },
  'lang-en-level': { pt: 'Intermediário-Avançado (B2)', en: 'Upper-Intermediate (B2)' },
  'lang-en-detail': { pt: 'English Beyond with John English — Nível B2', en: 'English Beyond with John English — B2 Level' },
  'formacao-skills-title': { pt: 'Tecnologias', en: 'Technologies' },

  // Portfólio
  'portfolio-title': { pt: 'Portfólio', en: 'Portfolio' },
  'portfolio-intro': { 
    pt: 'Uma seleção dos meus projetos mais recentes. Todos os códigos-fonte estão disponíveis no meu <a href="https://github.com/devkauapimentel" target="_blank" rel="noopener noreferrer">GitHub</a>.', 
    en: 'A selection of my latest projects. All source codes are available on my <a href="https://github.com/devkauapimentel" target="_blank" rel="noopener noreferrer">GitHub</a>.' 
  },
  'proj-1-desc': { pt: 'Sistema web completo para gerenciamento de clínicas de estética, com agendamento, controle de clientes e dashboard.', en: 'Complete web system for managing aesthetic clinics, with scheduling, customer control, and dashboard.' },
  'proj-2-desc': { pt: 'Ferramenta de mineração e captação de leads para marketing digital, automatizando o processo de prospecção.', en: 'Lead mining and capture tool for digital marketing, automating the prospecting process.' },
  'proj-tag-automation': { pt: 'Automação', en: 'Automation' },
  'proj-3-desc': { pt: 'Plataforma educacional para organização e acompanhamento de estudos de forma livre e personalizada.', en: 'Educational platform for organizing and tracking studies in a free and personalized way.' },
  'proj-4-desc': { pt: 'Aplicação gamificada de produtividade que transforma tarefas do dia a dia em missões e conquistas.', en: 'Gamified productivity application that transforms everyday tasks into missions and achievements.' },
  'proj-tag-gamification': { pt: 'Gamificação', en: 'Gamification' },
  'proj-5-desc': { pt: 'Portal de notícias responsivo com layout moderno, categorias e sistema de navegação intuitivo.', en: 'Responsive news portal with modern layout, categories, and intuitive navigation system.' },
  'proj-6-desc': { pt: 'Rede social inspirada no Instagram focada em viagens, com perfil de usuário e galeria de fotos.', en: 'Instagram-inspired social network focused on travel, with user profiles and a photo gallery.' },
  'portfolio-more': { pt: 'Ver todos os projetos no GitHub →', en: 'See all projects on GitHub →' },

  // Contato
  'contato-title': { pt: 'Contato', en: 'Contact' },
  'contato-subtitle': { pt: 'Vamos conversar?', en: 'Let\'s talk?' },
  'contato-text': { pt: 'Se quiser trocar uma ideia sobre algum projeto, colaboração ou oportunidade, é só mandar mensagem!', en: 'If you want to chat about a project, collaboration, or opportunity, just send me a message!' },
  'contato-email-title': { pt: 'E-mail', en: 'Email' },
  'contato-local-title': { pt: 'Localização', en: 'Location' },
  'contato-local-value': { pt: 'Duque de Caxias, RJ - Brasil', en: 'Duque de Caxias, RJ - Brazil' },
  'form-name-label': { pt: 'Nome completo *', en: 'Full name *' },
  'form-name-placeholder': { pt: 'Seu nome completo', en: 'Your full name' },
  'form-email-label': { pt: 'E-mail *', en: 'Email *' },
  'form-email-placeholder': { pt: 'seu@email.com', en: 'your@email.com' },
  'form-message-label': { pt: 'Mensagem *', en: 'Message *' },
  'form-message-placeholder': { pt: 'Escreva sua mensagem aqui...', en: 'Write your message here...' },
  'form-submit': { pt: 'Enviar Mensagem', en: 'Send Message' },

  // Modal
  'modal-title': { pt: 'Mensagem enviada com sucesso!', en: 'Message sent successfully!' },
  'modal-text': { pt: 'Obrigado por entrar em contato. Responderei sua mensagem o mais breve possível.', en: 'Thank you for getting in touch. I will reply to your message as soon as possible.' },
  'modal-close-btn': { pt: 'Fechar', en: 'Close' },

  // Footer
  'footer-text': { 
    pt: '&copy; 2025 <strong>Kauã Pimentel</strong>. Todos os direitos reservados.', 
    en: '&copy; 2025 <strong>Kauã Pimentel</strong>. All rights reserved.' 
  },
  'footer-credit': { pt: 'Desenvolvido com ❤️ usando HTML5, CSS3 e JavaScript.', en: 'Developed with ❤️ using HTML5, CSS3, and JavaScript.' },

  // Validações do formulário
  'err-name-empty': { pt: 'Por favor, informe seu nome.', en: 'Please enter your name.' },
  'err-name-short': { pt: 'O nome deve ter pelo menos 3 caracteres.', en: 'Name must be at least 3 characters long.' },
  'err-email-empty': { pt: 'Por favor, informe seu e-mail.', en: 'Please enter your email.' },
  'err-email-invalid': { pt: 'Por favor, informe um e-mail válido (ex: usuario@dominio.com).', en: 'Please enter a valid email (e.g., user@domain.com).' },
  'err-msg-empty': { pt: 'Por favor, escreva sua mensagem.', en: 'Please write your message.' },
  'err-msg-short': { pt: 'A mensagem deve ter pelo menos 10 caracteres.', en: 'Message must be at least 10 characters long.' }
};

let currentLanguage = localStorage.getItem('language') || 'pt';

// aplica o idioma nos elementos com data-i18n
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  const langLabel = document.getElementById('current-lang-label');
  if (langLabel) langLabel.innerText = lang.toUpperCase();
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[key][lang];
      } else {
        el.innerHTML = translations[key][lang];
      }
    }
  });
}

window.toggleLangMenu = function() {
  const menu = document.getElementById('lang-menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
};

window.selectLanguage = function(lang) {
  const menu = document.getElementById('lang-menu');
  if (menu) menu.style.display = 'none';
  setLanguage(lang);
};

// fecha o menu de idioma se clicar fora
document.addEventListener('click', (e) => {
  const dropdown = document.querySelector('.lang-dropdown');
  if (dropdown && !dropdown.contains(e.target)) {
    const menu = document.getElementById('lang-menu');
    if (menu) menu.style.display = 'none';
  }
});

// --- DOMContentLoaded - inicializa tudo ---
document.addEventListener('DOMContentLoaded', function () {

  setLanguage(currentLanguage);

  // --- toggle de tema ---
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  /* carrega o tema salvo no localStorage */
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    // console.log('tema salvo:', savedTheme);
    if (savedTheme === 'light') {
      body.classList.add('light-theme');
    }
  }

  // alterna claro/escuro e salva no localStorage
  function toggleTheme() {
    body.classList.toggle('light-theme');
    const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
  }

  loadTheme();
  themeToggle.addEventListener('click', toggleTheme);

  // --- menu hamburger (mobile) ---
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  function toggleMenu() {
    navToggle.classList.toggle('nav__toggle--active');
    navMenu.classList.toggle('nav__menu--active');
    const isExpanded = navMenu.classList.contains('nav__menu--active');
    navToggle.setAttribute('aria-expanded', isExpanded);
  }

  function closeMenu() {
    navToggle.classList.remove('nav__toggle--active');
    navMenu.classList.remove('nav__menu--active');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', toggleMenu);

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // --- efeito de digitação (typewriter) ---
  const typingElement = document.getElementById('typing-text');

  const typingTextsDict = {
    pt: [
      'Desenvolvedor Full Stack',
      'Estudante de Eng. de Software',
      'Apaixonado por Tecnologia',
      'Jogador de Xadrez ♟️'
    ],
    en: [
      'Full Stack Developer',
      'Software Eng. Student',
      'Passionate about Technology',
      'Chess Player ♟️'
    ]
  };

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  // TODO: melhorar isso depois
  function typeWriter() {
    const currentTexts = typingTextsDict[currentLanguage];
    const currentText = currentTexts[textIndex % currentTexts.length];

    if (charIndex > currentText.length) {
      charIndex = currentText.length;
    }

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    // terminou de digitar
    if (!isDeleting && charIndex >= currentText.length) {
      typingSpeed = 2000;
      isDeleting = true;
    }

    // terminou de apagar, vai pro próximo
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % currentTexts.length;
      typingSpeed = 500;
    }

    setTimeout(typeWriter, typingSpeed);
  }

  typeWriter();

  // --- validação do formulário de contato ---
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // valida nome (não vazio + min 3 chars)
  function validateName() {
    const name = nameInput.value.trim();
    if (name === '') {
      showError(nameInput, nameError, translations['err-name-empty'][currentLanguage]);
      return false;
    }
    if (name.length < 3) {
      showError(nameInput, nameError, translations['err-name-short'][currentLanguage]);
      return false;
    }
    showSuccess(nameInput, nameError);
    return true;
  }

  /* valida email com regex */
  function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === '') {
      showError(emailInput, emailError, translations['err-email-empty'][currentLanguage]);
      return false;
    }
    if (!emailRegex.test(email)) {
      showError(emailInput, emailError, translations['err-email-invalid'][currentLanguage]);
      return false;
    }
    showSuccess(emailInput, emailError);
    return true;
  }

  function validateMessage() {
    const message = messageInput.value.trim();
    if (message === '') {
      showError(messageInput, messageError, translations['err-msg-empty'][currentLanguage]);
      return false;
    }
    if (message.length < 10) {
      showError(messageInput, messageError, translations['err-msg-short'][currentLanguage]);
      return false;
    }
    showSuccess(messageInput, messageError);
    return true;
  }

  function showError(input, errorElement, message) {
    input.classList.add('form-group__input--error');
    input.classList.remove('form-group__input--success');
    errorElement.textContent = message;
  }

  function showSuccess(input, errorElement) {
    input.classList.remove('form-group__input--error');
    input.classList.add('form-group__input--success');
    errorElement.textContent = '';
  }

  // validação em tempo real no blur
  nameInput.addEventListener('blur', validateName);
  emailInput.addEventListener('blur', validateEmail);
  messageInput.addEventListener('blur', validateMessage);

  nameInput.addEventListener('input', function () {
    if (nameInput.classList.contains('form-group__input--error')) {
      validateName();
    }
  });

  emailInput.addEventListener('input', function () {
    if (emailInput.classList.contains('form-group__input--error')) {
      validateEmail();
    }
  });

  messageInput.addEventListener('input', function () {
    if (messageInput.classList.contains('form-group__input--error')) {
      validateMessage();
    }
  });

  // --- envio do formulário (simulação) ---
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log('enviando formulário...');

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
      contactForm.reset();

      nameInput.classList.remove('form-group__input--success');
      emailInput.classList.remove('form-group__input--success');
      messageInput.classList.remove('form-group__input--success');

      openModal();
    }
  });

  // --- modal de sucesso ---
  const modal = document.getElementById('success-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');

  function openModal() {
    modal.classList.add('modal--active');
    modal.setAttribute('aria-hidden', 'false');
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove('modal--active');
    modal.setAttribute('aria-hidden', 'true');
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // fecha modal com Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('modal--active')) {
      closeModal();
    }
  });

  // --- scroll spy - link ativo no menu ---
  const sections = document.querySelectorAll('.section');

  /* usa IntersectionObserver pra detectar qual seção tá visível */
  const scrollSpyObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove('nav__link--active');
          });
          const activeLink = document.querySelector('.nav__link[href="#' + entry.target.id + '"]');
          if (activeLink) {
            activeLink.classList.add('nav__link--active');
          }
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px'
    }
  );

  sections.forEach(function (section) {
    scrollSpyObserver.observe(section);
  });

  // --- sombra no header ao rolar ---
  const header = document.getElementById('header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });

  // --- botão voltar ao topo ---
  const backToTop = document.getElementById('back-to-top');

  // mostra o botão quando scroll > 500px
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      backToTop.classList.add('back-to-top--visible');
    } else {
      backToTop.classList.remove('back-to-top--visible');
    }
  });

  backToTop.addEventListener('click', function () {
    // console.log('voltando pro topo');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --- scroll reveal (animações de entrada) ---
  const revealElements = document.querySelectorAll(
    '.section__header, .sobre__content, .sobre__hobbies, ' +
    '.formacao__column, .project-card, .contato__info, ' +
    '.contato__form-wrapper'
  );

  // estado inicial invisível
  revealElements.forEach(function (element) {
    element.classList.add('scroll-reveal');
  });

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });

});
