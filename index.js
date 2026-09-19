const darkBtn = document.getElementById('theme-button');
darkBtn.addEventListener('click', () => {
  // Переключаем класс (если был — удалит, если не было — добавит)
  document.body.classList.toggle('dark-theme');
  
  // Проверяем, какой класс сейчас активен, и сохраняем значение
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
