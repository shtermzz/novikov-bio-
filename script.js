// Дані для розділів (термінальний стиль)
const sectionsData = {
    bio: {
        title: "> BIO / IDENTITY",
        content: `Занимаюсь трейдингом и программированием.<br>
Анализирую финансовые рынки, изучаю графики, паттерны и психологию торговли.<br><br>
Разрабатываю веб-приложения, ботов, и автоматизированные системы.<br>
Живу в Восточной Европе → строю карьеру и инвестирую в будущее.<br><br>
▸ Цель: масштабирование, финансовая свобода и создание полезных технологий.`,
        detail: null
    },
    projects: {
        title: "> PROJECTS / SKILLS",
        content: `💻 Мои проекты и скиллы:<br><br>
▪️ Веб-платформа для аналитики крипторынка (в разработке)<br>
▪️ Торговый бот для фьючерсов (Python + CCXT)<br>
▪️ Telegram-бот для сигналов и управления портфелем<br>
▪️ Адаптивные веб-сайты / лендинги / дашборды<br><br>
▪️ продам готового бота под dump/pump strategy <br> 
📚 Технологический стек:<br>
JavaScript (ES6+), React, Node.js, Express, MongoDB, Python, Pandas, Web3, Git, Docker.<br>
В планах: Solidity, AI-модели для трейдинга.`,
        detail: null
    },
    buy: {
        title: "> BUY / OFFERS",
        content: `💰 Что я скупаю / принимаю в работу:<br><br>
➤ Аккаунты криптобирж (MEXC) с -PNL <br>

➤ Сотрудничество по партнерским программам / арбитраж трафика (crypto).<br>
➤ Разработка ботов на заказ.<br><br>
💎 Условия обсуждаемы, оплата криптой`,
        detail: null
    },
    contact: {
        title: "> CONTACT / SOCIAL",
        content: `📩 Связаться со мной можно через Telegram:<br><br>
➤ Telegram: <strong style="color:#ff4db8;">@qmrkm</strong><br><br>

🕒 Ответ в течение 12 часов.`,
        detail: `<div style="text-align:center; margin-top:10px;">
                    <a href="https://t.me/qmrkm" target="_blank" class="cyber-btn" style="background:#ff4db8; box-shadow:0 0 12px #ff4db8;">
                        📨 НАПИСАТЬ В TELEGRAM
                    </a>
                    <div style="margin-top: 15px; font-size:0.75rem; opacity:0.8;">
                         Доступен 24/7
                    </div>
                </div>`
    }
};

// DOM елементи
const desktopMenuItems = document.querySelectorAll('#desktopMenu .menu-item');
const mobileMenuItems = document.querySelectorAll('#mobileMenu .mobile-menu-item');
const contentTitle = document.getElementById('contentTitle');
const contentText = document.getElementById('contentText');
const detailBox = document.getElementById('detailBox');
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

// Функція зміни активного розділу (універсальна)
function setActiveSection(sectionId, fromMobile = false) {
    // Оновлення активного класу в десктопному меню
    desktopMenuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });
    // Оновлення активного класу в мобільному меню
    mobileMenuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });

    const data = sectionsData[sectionId];
    if (data) {
        const container = document.querySelector('.content-panel');
        container.style.opacity = '0.7';
        setTimeout(() => {
            contentTitle.innerHTML = data.title;
            contentText.innerHTML = data.content;
            
            if (sectionId === 'contact' && data.detail) {
                detailBox.style.display = 'block';
                detailBox.innerHTML = data.detail;
            } else {
                detailBox.style.display = 'none';
                detailBox.innerHTML = '';
            }
            container.style.opacity = '1';
        }, 80);
        setTimeout(() => {
            container.style.opacity = '1';
        }, 120);
    }

    // Якщо виклик з мобільного меню — закриваємо бургер
    if (fromMobile) {
        closeBurgerMenu();
    }
}

// Відкриття/закриття бургер-меню
function toggleBurgerMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
        closeBurgerMenu();
    } else {
        openBurgerMenu();
    }
}

function openBurgerMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('active');
    burgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBurgerMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('active');
    burgerBtn.classList.remove('active');
    document.body.style.overflow = '';
}

// Обробники для десктопного меню
desktopMenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const section = item.getAttribute('data-section');
        if (section) setActiveSection(section, false);
        createTerminalSpark(e);
    });
});

// Обробники для мобільного меню (бургер)
mobileMenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const section = item.getAttribute('data-section');
        if (section) setActiveSection(section, true);
        createTerminalSpark(e);
    });
});

// Бургер кнопка
burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBurgerMenu();
});

// Оверлей закриває меню
overlay.addEventListener('click', () => {
    closeBurgerMenu();
});

// Закриваємо меню при ресайзі (якщо вікно стає ширшим)
window.addEventListener('resize', () => {
    if (window.innerWidth > 680 && mobileMenu.classList.contains('open')) {
        closeBurgerMenu();
    }
});

// Ефект спалаху при кліку
function createTerminalSpark(event) {
    const spark = document.createElement('div');
    spark.style.position = 'fixed';
    spark.style.width = '14px';
    spark.style.height = '14px';
    spark.style.background = 'radial-gradient(circle, #aaaaaa, #ff4db8)';
    spark.style.borderRadius = '50%';
    spark.style.left = (event.clientX - 7) + 'px';
    spark.style.top = (event.clientY - 7) + 'px';
    spark.style.pointerEvents = 'none';
    spark.style.zIndex = '9999';
    spark.style.filter = 'blur(2px)';
    spark.style.opacity = '0.9';
    document.body.appendChild(spark);
    
    let opacity = 1;
    const interval = setInterval(() => {
        opacity -= 0.12;
        spark.style.opacity = opacity;
        spark.style.transform = `scale(${1 + (1 - opacity) * 1.5})`;
        if (opacity <= 0) {
            clearInterval(interval);
            spark.remove();
        }
    }, 30);
    
    const terminalDiv = document.querySelector('.terminal');
    if (terminalDiv) {
        terminalDiv.style.transform = 'translateY(-2px)';
        setTimeout(() => {
            terminalDiv.style.transform = '';
        }, 90);
    }
}

// Створення фонових частинок
function createDigitalParticles() {
    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        const size = 2 + Math.random() * 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = 5 + Math.random() * 15 + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.backgroundColor = `rgba(150, 150, 150, ${0.2 + Math.random() * 0.4})`;
        particle.style.boxShadow = `0 0 4px #aaaaaa`;
        document.body.appendChild(particle);
    }
}

// Стартові ефекти
function terminalTypewriter() {
    contentText.style.opacity = '0';
    setTimeout(() => {
        contentText.style.opacity = '1';
    }, 100);
}

// Обробка кліку на контенті – додаткова анімація
const contentPanelDiv = document.querySelector('.content-panel');
if (contentPanelDiv) {
    contentPanelDiv.addEventListener('click', (e) => {
        if (e.target.closest('.cyber-btn')) return;
        const glitchSpan = document.createElement('span');
        glitchSpan.innerText = '>';
        glitchSpan.style.position = 'absolute';
        glitchSpan.style.color = '#aaaaaa';
        glitchSpan.style.fontSize = '1.2rem';
        glitchSpan.style.left = e.clientX + 'px';
        glitchSpan.style.top = e.clientY + 'px';
        glitchSpan.style.pointerEvents = 'none';
        glitchSpan.style.opacity = '0.7';
        glitchSpan.style.zIndex = '999';
        document.body.appendChild(glitchSpan);
        setTimeout(() => glitchSpan.remove(), 400);
    });
}

// Ініціалізація
setActiveSection('bio', false);

// Імітація курсора в футері
setInterval(() => {
    const footerSpan = document.querySelector('.terminal-footer span:first-child');
    if (footerSpan && footerSpan.innerText.includes('ACTIVE')) {
        const cursor = footerSpan.innerText.endsWith('_') ? ' ' : '_';
        footerSpan.innerText = `📟 [SESSION: ACTIVE${cursor}]`;
    }
}, 700);

window.addEventListener('DOMContentLoaded', () => {
    createDigitalParticles();
    terminalTypewriter();
    const scan = document.querySelector('.scan-line');
    if (scan) {
        setInterval(() => {
            scan.style.opacity = Math.random() * 0.4 + 0.2;
        }, 800);
    }
});

window.addEventListener('resize', () => {});