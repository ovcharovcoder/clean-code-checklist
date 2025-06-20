'use strict';

const checklists = document.querySelectorAll('.checklist');
const languageToggles = document.querySelectorAll('.language-toggle');
const result = document.querySelector('.result');
const progressCount = document.getElementById('progress-count');
const totalCount = document.getElementById('total-count');
const themeToggle = document.getElementById('theme-toggle');
const resetChecklist = document.getElementById('reset-checklist');

// Оновлення тексту кнопки теми
function updateThemeButtonText() {
  const textSpan = themeToggle.querySelector('.theme-text');
  if (textSpan) {
    textSpan.textContent = document.body.classList.contains('light-theme')
      ? 'Темна тема'
      : 'Світла тема';
  }
}

// Показати чекліст для обраної мови
function showChecklist(language) {
  checklists.forEach(checklist => {
    checklist.style.display =
      checklist.dataset.language === language ? 'block' : 'none';
  });
  languageToggles.forEach(button => {
    button.classList.toggle('active', button.dataset.language === language);
  });
  updateProgress(language);
}

// Оновлення прогресу
function updateProgress(language) {
  const activeChecklist = document.querySelector(
    `.checklist[data-language="${language}"]`
  );
  const checkboxes = activeChecklist.querySelectorAll('input[type="checkbox"]');
  const checkedCount = [...checkboxes].filter(cb => cb.checked).length;
  progressCount.textContent = checkedCount;
  totalCount.textContent = checkboxes.length;
  result.style.display = checkedCount === checkboxes.length ? 'block' : 'none';
}

// Завантаження стану чекбоксів
function loadCheckboxes(language) {
  const checkboxes = document
    .querySelector(`.checklist[data-language="${language}"]`)
    .querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((cb, index) => {
    cb.checked =
      localStorage.getItem(`checkbox-${language}-${index}`) === 'true';
    cb.parentElement.classList.toggle('checked', cb.checked);
  });
}

// Ініціалізація
let activeLanguage = localStorage.getItem('activeLanguage') || 'js';
showChecklist(activeLanguage);
loadCheckboxes(activeLanguage);

// Обробка перемикання мови
languageToggles.forEach(button => {
  button.addEventListener('click', () => {
    activeLanguage = button.dataset.language;
    localStorage.setItem('activeLanguage', activeLanguage);
    showChecklist(activeLanguage);
    loadCheckboxes(activeLanguage);
  });
});

// Обробка чекбоксів
checklists.forEach(checklist => {
  const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((cb, index) => {
    cb.addEventListener('change', () => {
      cb.parentElement.classList.toggle('checked', cb.checked);
      localStorage.setItem(
        `checkbox-${checklist.dataset.language}-${index}`,
        cb.checked
      );
      updateProgress(checklist.dataset.language);
    });
  });
});

// Скидання чекліста
if (resetChecklist) {
  resetChecklist.addEventListener('click', () => {
    const activeChecklist = document.querySelector(
      `.checklist[data-language="${activeLanguage}"]`
    );
    const checkboxes = activeChecklist.querySelectorAll(
      'input[type="checkbox"]'
    );
    checkboxes.forEach((cb, index) => {
      cb.checked = false;
      cb.parentElement.classList.remove('checked');
      localStorage.setItem(`checkbox-${activeLanguage}-${index}`, 'false');
    });
    updateProgress(activeLanguage);
  });
} else {
  console.error('Reset checklist button not found');
}

// Перемикач теми
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    console.log('Theme toggle clicked');
    document.body.classList.toggle('light-theme');
    const isLightTheme = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    updateThemeButtonText();
    console.log(`Theme set to: ${isLightTheme ? 'light' : 'dark'}`);
  });
  updateThemeButtonText();
} else {
  console.error('Theme toggle button not found');
}

// Завантаження теми
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
  console.log('Loaded light theme from localStorage');
} else {
  console.log('Loaded dark theme (default or from localStorage)');
}
updateThemeButtonText();

// Ініціалізація прогресу
updateProgress(activeLanguage);
