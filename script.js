// Проста логіка перемикання вкладок (табів)
const tabs = document.querySelectorAll('.tab-btn');
const panes = document.querySelectorAll('.tab-pane');

function switchTab(tabId) {
    // видаляємо активні класи у всіх кнопках
    tabs.forEach(btn => {
        btn.classList.remove('active');
    });
    // ховаємо всі панелі
    panes.forEach(pane => {
        pane.classList.remove('active-pane');
    });

    // активуємо обрану кнопку
    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // показуємо потрібну панель
    const activePane = document.getElementById(`tab-${tabId}`);
    if (activePane) activePane.classList.add('active-pane');
}

// вішаємо обробники на кожну вкладку
tabs.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const tabId = btn.getAttribute('data-tab');
        if (tabId) switchTab(tabId);
    });
});

// додатковий ефект: плавний перехід і перевірка, що все працює
console.log('tabs ready — pink/black theme, чистий дизайн вкладочок');