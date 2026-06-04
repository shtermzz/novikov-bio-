// Функция переключения между вкладками
function switchTab(id, btn) {
    // Находим все кнопки вкладок
    const allTabs = document.querySelectorAll('.tab');
    // Находим все панели с контентом
    const allPanels = document.querySelectorAll('.panel');
    
    // Убираем активный класс со всех кнопок
    allTabs.forEach(tab => tab.classList.remove('active'));
    // Убираем активный класс со всех панелей
    allPanels.forEach(panel => panel.classList.remove('active'));
    
    // Показываем выбранную панель
    document.getElementById(id).classList.add('active');
    // Активируем нажатую кнопку
    btn.classList.add('active');
}