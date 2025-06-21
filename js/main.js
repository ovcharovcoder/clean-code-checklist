'use strict';

const translations = {
  uk: {
    meta_description:
      'Чеклісти та принципи чистого коду для JavaScript, PHP та Python від Андрія Овчарова.',
    meta_keywords:
      'чистий код, JavaScript, PHP, Python, програмування, чекліст',
    title: 'Чистий Код — Принципи + Чекліст',
    header_h1: '🧼 Чистий Код — Принципи + Чекліст',
    header_p: 'Кодуй зі смаком. Кодуй свідомо. Перед пушем — перевір себе.',
    theme_toggle: 'Змінити тему',
    reset_checklist: 'Скинути чекліст',
    progress_label: 'Виконано:',
    progress_of: 'з',
    result_text:
      '🟢 Усі пункти виконано? Ти — бог чистого коду. Пуш зі спокійною душею 😎🚀',
    footer_text: 'Створено з ❤️ <strong>Андрій Овчаров</strong>',
    footer_quote: '«Кодуй зі смаком. Кодуй свідомо.»',

    // JavaScript Принципи
    js_principles_h2: '🔟 Основні принципи чистого JavaScript-коду',
    js_principle_1:
      '<strong>Один рядок — одна дія</strong><br /><code>const total = price * quantity;</code> — уникай кількох операцій в одному рядку.',
    js_principle_2:
      '<strong>Змінні з чіткими іменами</strong><br /><code>const userProfile;</code> краще, ніж <code>const u;</code>',
    js_principle_3:
      '<strong>Функція робить одну річ</strong><br />Наприклад, функція <code>fetchUserData</code> лише отримує дані, а не оновлює UI.',
    js_principle_4:
      '<strong>DRY — Don’t Repeat Yourself</strong><br />Використовуй <code>map</code> або <code>reduce</code> для уникнення повторів.',
    js_principle_5:
      '<strong>Використовуй <code>const</code> за замовчуванням</strong><br />Замість <code>let</code> використовуй <code>const</code>, якщо значення не змінюється.',
    js_principle_6:
      '<strong>Мінімізуй вкладеність</strong><br />Використовуй ранній <code>return</code>, наприклад: <pre><code>if (!user) return null;</code></pre>',
    js_principle_7:
      '<strong>Коментарі пояснюють «чому»</strong><br />Наприклад: <pre><code>// Кешуємо результат для оптимізації\nconst cachedData = getData();</code></pre>',
    js_principle_8:
      '<strong>Використовуй ES6+ можливості</strong><br />Стрілкові функції, деструктуризація: <code>const { id, name } = user;</code>',
    js_principle_9:
      '<strong>Обробляй асинхронність чітко</strong><br />Використовуй <code>async/await</code> замість <code>.then</code>.',
    js_principle_10:
      '<strong>Форматуй код автоматично</strong><br />ESLint + Prettier для єдиного стилю.',
    js_principle_11:
      '<strong>Уникай глобальних змінних</strong><br />Використовуй модулі або замикання.',
    js_principle_12:
      '<strong>Перевіряй типи даних</strong><br />Використовуй <code>typeof</code> або TypeScript для безпеки.',
    // JavaScript Чекліст
    js_checklist_h2: '✅ Чекліст чистого JavaScript-коду',

    js_names_legend: '🔡 Імена та змінні',
    js_checklist_names_1: 'Ім’я змінної/функції передає її суть?',
    js_checklist_names_1_small:
      '(Наприклад, <code>calculateTotalPrice</code> краще, ніж <code>calc</code>)',
    js_checklist_names_2: 'Магічні значення винесені?',
    js_checklist_names_2_small:
      '(Наприклад, <code>const MAX_USERS = 100;</code> замість <code>100</code>)',
    js_checklist_names_3: 'Немає схожих імен, що плутають?',
    js_checklist_names_3_small:
      '(Наприклад, <code>user</code> і <code>users</code> можуть заплутати)',

    js_structure_legend: '🧩 Структура',
    js_checklist_structure_1: 'Один рядок — одна дія?',
    js_checklist_structure_1_small:
      '(Наприклад, <code>const sum = a + b;</code> замість кількох дій)',
    js_checklist_structure_2: 'Функції невеликі, роблять одне?',
    js_checklist_structure_2_small:
      '(Функція до 20 рядків, наприклад, <code>getUserById</code>)',
    js_checklist_structure_3: 'Глибина вкладеності мінімальна?',
    js_checklist_structure_3_small:
      '(Використовуй ранній <code>return</code> замість глибоких <code>if</code>)',

    js_repetition_legend: '♻️ Повтори',
    js_checklist_repetition_1: 'Уникнено копіпасту?',
    js_checklist_repetition_1_small:
      '(Наприклад, використовуй <code>array.map</code> замість циклів)',
    js_checklist_repetition_2: 'Схожі речі реалізовані однаково?',
    js_checklist_repetition_2_small:
      '(Наприклад, форматування дат через <code>date-fns</code>)',

    js_formatting_legend: '🧼 Форматування',
    js_checklist_formatting_1: 'Прогнав через Prettier/ESLint?',
    js_checklist_formatting_1_small:
      "(<a href='https://eslint.org' target='_blank' rel='noopener'>ESLint</a> і <a href='https://prettier.io' target='_blank' rel='noopener'>Prettier</a>)",
    js_checklist_formatting_2: 'Всі відступи, лапки, пробіли — однакові?',
    js_checklist_formatting_2_small: '(Перевір через форматувальник)',
    js_checklist_formatting_3: 'Видалено "мертвий" код?',
    js_checklist_formatting_3_small:
      '(Наприклад, невикористані функції чи <code>console.log</code>)',

    js_logic_legend: '🧠 Логіка',
    js_checklist_logic_1: 'Перевірено всі гілки?',
    js_checklist_logic_1_small:
      '(Перевір <code>if/else</code>, <code>switch</code>, цикли)',
    js_checklist_logic_2: 'Використано <code>===</code>, а не <code>==</code>?',
    js_checklist_logic_2_small: '(Строга рівність уникає помилок)',
    js_checklist_logic_3: 'Оброблені всі edge cases?',
    js_checklist_logic_3_small:
      '(Перевір <code>null</code>, <code>undefined</code>, порожні масиви)',
    js_checklist_logic_4: 'Перевірено асинхронний код?',
    js_checklist_logic_4_small:
      '(Переконайся, що <code>async/await</code> обробляє помилки)',

    js_comments_legend: '📜 Коментарі',
    js_checklist_comments_1: 'Є коментарі там, де треба?',
    js_checklist_comments_1_small:
      '(Коментуй складну логіку, наприклад, замикання)',
    js_checklist_comments_2: 'Коментарі пояснюють «чому», а не «що»?',
    js_checklist_comments_2_small:
      '(Наприклад, "// Дозволяємо доступ до адмінки лише адміністраторам")',
    js_checklist_comments_3: 'Код зрозумілий без коментарів?',
    js_checklist_comments_3_small:
      '(Чіткі імена зменшують потребу в коментарях)',

    js_testing_legend: '🧪 Тестування',
    js_checklist_testing_1: 'Код перевірено в дії?',
    js_checklist_testing_1_small: '(Запусти та перевір результат)',
    js_checklist_testing_2: 'Не ламає існуючу логіку?',
    js_checklist_testing_2_small: '(Перевір старі функції після змін)',
    js_checklist_testing_3: 'Протестовано руками або автотестом?',
    js_checklist_testing_3_small:
      '(Використовуй <code>Jest</code> або <code>Mocha</code>)',

    js_security_legend: '🔒 Безпека',
    js_checklist_security_1: 'Перевірено на вразливості (XSS, ін’єкції)?',
    js_checklist_security_1_small:
      '(Екрануй дані, наприклад, через <code>DOMPurify</code>)',
    js_checklist_security_2: 'Використані безпечні методи доступу?',
    js_checklist_security_2_small:
      '(Наприклад, уникнення <code>eval</code> чи <code>innerHTML</code>)',
    js_optimization_legend: '⚡ Оптимізація',
    js_checklist_optimization_1: 'Код оптимізовано для продуктивністі?',
    js_checklist_optimization_1_small:
      '(Наприклад, використовуй <code>forEach</code> замість <code>for</code> для читабельності)',
    js_checklist_optimization_2:
      'Вдалося запобігти надмірному використанню ресурсів?',
    js_checklist_optimization_2_small:
      '(Перевір витоки пам’яті в замиканнях чи слухачах подій)',
    js_checklist_optimization_3: 'Чи активовано режим "use strict"?',
    js_checklist_optimization_3_small:
      '(Додай <code>"use strict";</code> на початку файлу)',

    // PHP Принципи
    php_principles_h2: '🔟 Основні принципи чистого PHP-коду',
    php_principle_1:
      '<strong>Дотримуйся стандартів PSR</strong><br />Використовуй <code>PSR-12</code> для форматування коду.',
    php_principle_2:
      '<strong>Чіткі імена змінних і методів</strong><br /><code>$userRepository</code> краще, ніж <code>$repo</code>.',
    php_principle_3:
      '<strong>Одна функція — одна відповідальність</strong><br />Наприклад, <code>getUserData</code> лише отримує дані.',
    php_principle_4:
      '<strong>DRY — Don’t Repeat Yourself</strong><br />Використовуй функції чи класи для повторюваного коду.',
    php_principle_5:
      '<strong>Використовуй типізацію</strong><br />Наприклад: <pre><code>function add(int $a, int $b): int { return $a + $b; }</code></pre>',
    php_principle_6:
      '<strong>Мінімізуй вкладеність</strong><br />Використовуй ранній <code>return</code>: <pre><code>if (!$user) return null;</code></pre>',
    php_principle_7:
      '<strong>Обробляй помилки</strong><br />Використовуй <code>try/catch</code> для винятків.',
    php_principle_8:
      '<strong>Коментарі пояснюють «чому»</strong><br />Наприклад: <pre><code>// Використовується для кешування\nprivate $cache = [];</code></pre>',
    php_principle_9:
      '<strong>Використовуй Composer</strong><br />Організуй залежності через <code>composer.json</code>.',
    php_principle_10:
      '<strong>Уникай глобальних змінних</strong><br />Краще передавай дані через параметри.',

    // PHP Чекліст
    php_checklist_h2: '✅ Чекліст чистого PHP-коду',

    php_names_legend: '🔡 Імена та змінні',
    php_checklist_names_1: 'Чіткі імена змінних і методів?',
    php_checklist_names_1_small:
      '(Наприклад, <code>$userService</code> краще, ніж <code>$s</code>)',
    php_checklist_names_2: 'Магічні значення винесені?',
    php_checklist_names_2_small:
      '(Наприклад, <code>const MAX_USERS = 100;</code>)',
    php_checklist_names_3: 'Немає схожих імен?',
    php_checklist_names_3_small:
      '(Наприклад, <code>$user</code> і <code>$users</code>)',

    php_structure_legend: '🧩 Структура',
    php_checklist_structure_1: 'Один рядок — одна дія?',
    php_checklist_structure_1_small:
      '(Наприклад, <code>$sum = $a + $b;</code>)',
    php_checklist_structure_2: 'Методи невеликі, роблять одне?',
    php_checklist_structure_2_small: '(До 20-30 рядків)',
    php_checklist_structure_3: 'Мінімальна вкладеність?',
    php_checklist_structure_3_small:
      '(Ранній <code>return</code> замість вкладених <code>if</code>)',

    php_repetition_legend: '♻️ Повтори',
    php_checklist_repetition_1: 'Уникнено копіпасту?',
    php_checklist_repetition_1_small: '(Винось у функції чи класи)',
    php_checklist_repetition_2: 'Схожі задачі реалізовані однаково?',
    php_checklist_repetition_2_small: '(Наприклад, однаковий формат логів)',

    php_formatting_legend: '🧼 Форматування',
    php_checklist_formatting_1: 'Дотримано PSR-12?',
    php_checklist_formatting_1_small:
      "(<a href='https://www.php-fig.org/psr/psr-12/' target='_blank' rel='noopener'>PSR-12</a>)",
    php_checklist_formatting_2: 'Однакові відступи та форматування?',
    php_checklist_formatting_2_small: '(Перевір через форматувальник)',
    php_checklist_formatting_3: 'Видалено невикористаний код?',
    php_checklist_formatting_3_small: '(Наприклад, старі функції)',

    php_logic_legend: '🧠 Логіка',
    php_checklist_logic_1: 'Перевірено всі гілки?',
    php_checklist_logic_1_small: '(Перевір <code>if/else</code>, цикли)',
    php_checklist_logic_2: 'Оброблено винятки?',
    php_checklist_logic_2_small: '(Використовуй <code>try/catch</code>)',
    php_checklist_logic_3: 'Перевірено edge cases?',
    php_checklist_logic_3_small: '(Наприклад, порожні дані, <code>null</code>)',

    php_comments_legend: '📜 Коментарі',
    php_checklist_comments_1: 'Є коментарі там, де треба?',
    php_checklist_comments_1_small: '(Коментуй складну логіку)',
    php_checklist_comments_2: 'Коментарі пояснюють «чому»?',
    php_checklist_comments_2_small: '(Наприклад, «// Для безпеки»)',
    php_checklist_comments_3: 'Код зрозумілий без коментарів?',
    php_checklist_comments_3_small:
      '(Зрозумілі імена зменшують потребу у коментарях)',

    php_testing_legend: '🧪 Тестування',
    php_checklist_testing_1: 'Код перевірено в дії?',
    php_checklist_testing_1_small: '(Запусти та перевір)',
    php_checklist_testing_2: 'Не ламає існуючу логіку?',
    php_checklist_testing_2_small: '(Перевір старі функції)',
    php_checklist_testing_3: 'Протестовано автотестами?',
    php_checklist_testing_3_small: '(Наприклад, <code>PHPUnit</code>)',

    php_security_legend: '🔒 Безпека',
    php_checklist_security_1: 'Перевірено на SQL-ін’єкції та XSS?',
    php_checklist_security_1_small: '(Використовуй підготовлені запити)',
    php_checklist_security_2: 'Використані безпечні методи?',
    php_checklist_security_2_small:
      '(Наприклад, <code>htmlspecialchars</code>)',
    php_optimization_legend: '⚡ Оптимізація',
    php_checklist_optimization_1: 'Оптимізовано продуктивність?',
    php_checklist_optimization_1_small: '(Уникай зайвих запитів до БД)',
    php_checklist_optimization_2:
      'Вдалося запобігти надмірному використанню ресурсів?',
    php_checklist_optimization_2_small: '(Перевір кешування)',

    // Python Принципи
    py_principles_h2: '🔟 Основні принципи чистого Python-коду',
    py_principle_1:
      '<strong>Дотримуйся PEP 8</strong><br />Використовуй <code>flake8</code> для форматування.',
    py_principle_2:
      '<strong>Чіткі імена змінних</strong><br /><code>user_profile</code> краще, ніж <code>u</code>.',
    py_principle_3:
      '<strong>Функція робить одну річ</strong><br />Наприклад, <code>get_user_data</code> лише отримує дані.',
    py_principle_4:
      '<strong>DRY — Don’t Repeat Yourself</strong><br />Використовуй функції чи класи для повторів.',
    py_principle_5:
      '<strong>Використовуй list comprehensions</strong><br />Наприклад: <pre><code>[x*2 for x in numbers]</code></pre>',
    py_principle_6:
      '<strong>Мінімізуй вкладеність</strong><br />Використовуй ранній <code>return</code>: <pre><code>if not user: return None</code></pre>',
    py_principle_7:
      '<strong>Обробляй винятки</strong><br />Використовуй <code>try/except</code> для помилок.',
    py_principle_8:
      '<strong>Коментарі пояснюють «чому»</strong><br />Наприклад: <pre><code># Кеш для оптимізації\ncache = {}</code></pre>',
    py_principle_9:
      '<strong>Використовуй віртуальні середовища</strong><br />Наприклад, <code>venv</code> або <code>poetry</code>.',
    py_principle_10:
      '<strong>Пиши самодокументований код</strong><br />Чіткі імена зменшують потребу в коментарях.',

    // Python Чекліст
    py_checklist_h2: '✅ Чекліст чистого Python-коду',

    py_names_legend: '🔡 Імена та змінні',
    py_checklist_names_1: 'Чіткі імена змінних?',
    py_checklist_names_1_small:
      '(Наприклад, <code>user_data</code> краще, ніж <code>d</code>)',
    py_checklist_names_2: 'Магічні значення винесені?',
    py_checklist_names_2_small: '(Наприклад, <code>MAX_USERS = 100</code>)',
    py_checklist_names_3: 'Немає схожих імен?',
    py_checklist_names_3_small:
      '(Наприклад, <code>user</code> і <code>users</code>)',

    py_structure_legend: '🧩 Структура',
    py_checklist_structure_1: 'Один рядок — одна дія?',
    py_checklist_structure_1_small: '(Наприклад, <code>total = a + b</code>)',
    py_checklist_structure_2: 'Функції невеликі, роблять одне?',
    py_checklist_structure_2_small: '(До 20-30 рядків)',
    py_checklist_structure_3: 'Мінімальна вкладеність?',
    py_checklist_structure_3_small: '(Ранній <code>return</code>)',

    py_repetition_legend: '♻️ Повтори',
    py_checklist_repetition_1: 'Уникнено копіпасту?',
    py_checklist_repetition_1_small: '(Винось у функції)',
    py_checklist_repetition_2: 'Схожі задачі реалізовані однаково?',
    py_checklist_repetition_2_small: '(Наприклад, однаковий формат логів)',

    py_formatting_legend: '🧼 Форматування',
    py_checklist_formatting_1: 'Дотримано PEP 8?',
    py_checklist_formatting_1_small:
      "(<a href='https://peps.python.org/pep-0008/' target='_blank' rel='noopener'>PEP 8</a>)",
    py_checklist_formatting_2: 'Однакові відступи та форматування?',
    py_checklist_formatting_2_small: '(Перевір через <code>flake8</code>)',
    py_checklist_formatting_3: 'Видалено невикористаний код?',
    py_checklist_formatting_3_small: '(Наприклад, старі функції)',

    py_logic_legend: '🧠 Логіка',
    py_checklist_logic_1: 'Перевірено всі гілки?',
    py_checklist_logic_1_small: '(Перевір <code>if/else</code>, цикли)',
    py_checklist_logic_2: 'Оброблено винятки?',
    py_checklist_logic_2_small: '(Використовуй <code>try/except</code>)',
    py_checklist_logic_3: 'Перевірено edge cases?',
    py_checklist_logic_3_small: '(Наприклад, порожні дані, <code>None</code>)',

    py_comments_legend: '📜 Коментарі',
    py_checklist_comments_1: 'Є коментарі там, де треба?',
    py_checklist_comments_1_small: '(Коментуй складну логіку)',
    py_checklist_comments_2: 'Коментарі пояснюють «чому»?',
    py_checklist_comments_2_small: '(Наприклад, «// Для кешування»)',
    py_checklist_comments_3: 'Код зрозумілий без коментарів?',
    py_checklist_comments_3_small: '(Чіткі імена зменшують потребу)',

    py_testing_legend: '🧪 Тестування',
    py_checklist_testing_1: 'Код перевірено в дії?',
    py_checklist_testing_1_small: '(Запусти та перевір)',
    py_checklist_testing_2: 'Не ламає існуючу логіку?',
    py_checklist_testing_2_small: '(Перевір старі функції)',
    py_checklist_testing_3: 'Протестовано автотестами?',
    py_checklist_testing_3_small: '(Наприклад, <code>pytest</code>)',

    py_security_legend: '🔒 Безпека',
    py_checklist_security_1: 'Перевірено на вразливості?',
    py_checklist_security_1_small:
      '(Екрануй дані, наприклад, <code>html.escape</code>)',
    py_checklist_security_2: 'Використані безпечні методи?',
    py_checklist_security_2_small: '(Наприклад, підготовлені запити до БД)',

    py_optimization_legend: '⚡ Оптимізація',
    py_checklist_optimization_1: 'Оптимізовано продуктивність?',
    py_checklist_optimization_1_small: '(Уникай зайвих циклів)',
    py_checklist_optimization_2:
      'Вдалося запобігти надмірному використанню ресурсів?',
    py_checklist_optimization_2_small: '(Перевір кешування)',
  },

  en: {
    meta_description:
      'Checklists and clean code principles for JavaScript, PHP, and Python by Andriy Ovcharov.',
    meta_keywords:
      'clean code, JavaScript, PHP, Python, programming, checklist',
    title: 'Clean Code — Principles + Checklist',
    header_h1: '🧼 Clean Code — Principles + Checklist',
    header_p:
      'Code with style. Code consciously. Check yourself before pushing.',
    theme_toggle: 'Change theme',
    reset_checklist: 'Reset checklist',
    progress_label: 'Completed:',
    progress_of: 'of',
    result_text:
      "🟢 All items completed? You're a clean code god. Push with peace of mind 😎🚀",
    footer_text: 'Created with ❤️ <strong>Andriy Ovcharov</strong>',
    footer_quote: '«Code with style. Code consciously.»',

    // JavaScript Principles
    js_principles_h2: '🔟 Key Principles of Clean JavaScript Code',
    js_principle_1:
      '<strong>One Line — One Action</strong><br /><code>const total = price * quantity;</code> — avoid multiple operations in one line.',
    js_principle_2:
      '<strong>Clear Variable Names</strong><br /><code>const userProfile;</code> is better than <code>const u;</code>',
    js_principle_3:
      '<strong>Functions Do One Thing</strong><br />For example, the function <code>fetchUserData</code> only fetches data, not updates the UI.',
    js_principle_4:
      '<strong>DRY — Don’t Repeat Yourself</strong><br />Use <code>map</code> or <code>reduce</code> to avoid repetition.',
    js_principle_5:
      '<strong>Use <code>const</code> by Default</strong><br />Use <code>const</code> instead of <code>let</code> if the value doesn’t change.',
    js_principle_6:
      '<strong>Minimize Nesting</strong><br />Use early <code>return</code>, e.g.: <pre><code>if (!user) return null;</code></pre>',
    js_principle_7:
      "<strong>Comments Explain 'Why'</strong><br />For example: <pre><code>// Cache result for optimization\nconst cachedData = getData();</code></pre>",
    js_principle_8:
      '<strong>Use ES6+ Features</strong><br />Arrow functions, destructuring: <code>const { id, name } = user;</code>',
    js_principle_9:
      '<strong>Handle Asynchronicity Clearly</strong><br />Use <code>async/await</code> instead of <code>.then</code>.',
    js_principle_10:
      '<strong>Format Code Automatically</strong><br />ESLint + Prettier for consistent style.',
    js_principle_11:
      '<strong>Avoid Global Variables</strong><br />Use modules or closures.',
    js_principle_12:
      '<strong>Check Data Types</strong><br />Use <code>typeof</code> or TypeScript for safety.',

    // JavaScript Checklist
    js_checklist_h2: '✅ Clean JavaScript Code Checklist',

    js_names_legend: '🔡 Names & Variables',
    js_checklist_names_1: 'Do variable/function names convey their purpose?',
    js_checklist_names_1_small:
      '(E.g., <code>calculateTotalPrice</code> is better than <code>calc</code>)',
    js_checklist_names_2: 'Are magic values extracted to constants?',
    js_checklist_names_2_small:
      '(E.g., <code>const MAX_USERS = 100;</code> instead of <code>100</code>)',
    js_checklist_names_3: 'No confusingly similar names?',
    js_checklist_names_3_small:
      '(E.g., <code>user</code> and <code>users</code> can cause confusion)',

    js_structure_legend: '🧩 Structure',
    js_checklist_structure_1: 'One line — one action?',
    js_checklist_structure_1_small:
      '(E.g., <code>const sum = a + b;</code> instead of multiple actions)',
    js_checklist_structure_2: 'Are functions small and focused on one task?',
    js_checklist_structure_2_small:
      '(Functions up to 20 lines, e.g., <code>getUserById</code>)',
    js_checklist_structure_3: 'Is nesting depth minimized?',
    js_checklist_structure_3_small:
      '(Use early <code>return</code> instead of deep <code>if</code> statements)',

    js_repetition_legend: '♻️ Repetition',
    js_checklist_repetition_1: 'Avoided code duplication?',
    js_checklist_repetition_1_small:
      '(E.g., use <code>array.map</code> instead of loops)',
    js_checklist_repetition_2: 'Are similar tasks implemented consistently?',
    js_checklist_repetition_2_small:
      '(E.g., date formatting via <code>date-fns</code>)',

    js_formatting_legend: '🧼 Formatting',
    js_checklist_formatting_1: 'Ran Prettier/ESLint?',
    js_checklist_formatting_1_small:
      "(<a href='https://eslint.org' target='_blank' rel='noopener'>ESLint</a> and <a href='https://prettier.io' target='_blank' rel='noopener'>Prettier</a>)",
    js_checklist_formatting_2:
      'Are all indents, quotes, and spaces consistent?',
    js_checklist_formatting_2_small: '(Check via formatter)',
    js_checklist_formatting_3: 'Removed "dead" code?',
    js_checklist_formatting_3_small:
      '(E.g., unused functions or <code>console.log</code>)',

    js_logic_legend: '🧠 Logic',
    js_checklist_logic_1: 'All branches tested?',
    js_checklist_logic_1_small:
      '(Check <code>if/else</code>, <code>switch</code>, loops)',
    js_checklist_logic_2: 'Used <code>===</code> instead of <code>==</code>?',
    js_checklist_logic_2_small: '(Strict equality avoids errors)',
    js_checklist_logic_3: 'All edge cases handled?',
    js_checklist_logic_3_small:
      '(Check <code>null</code>, <code>undefined</code>, empty arrays)',
    js_checklist_logic_4: 'Asynchronous code tested?',
    js_checklist_logic_4_small:
      '(Ensure <code>async/await</code> handles errors)',

    js_comments_legend: '📜 Comments',
    js_checklist_comments_1: 'Comments present where needed?',
    js_checklist_comments_1_small: '(Comment complex logic, e.g., closures)',
    js_checklist_comments_2: "Comments explain 'why,' not 'what'?",
    js_checklist_comments_2_small:
      "(E.g., '// For caching' is better than '// Stores result')",
    js_checklist_comments_3: 'Code clear without comments?',
    js_checklist_comments_3_small: '(Clear names reduce the need for comments)',

    js_testing_legend: '🧪 Testing',
    js_checklist_testing_1: 'Code tested in action?',
    js_checklist_testing_1_small: '(Run and verify results)',
    js_checklist_testing_2: "Doesn't break existing logic?",
    js_checklist_testing_2_small: '(Check old functions after changes)',
    js_checklist_testing_3: 'Tested manually or with automated tests?',
    js_checklist_testing_3_small:
      '(Use <code>Jest</code> or <code>Mocha</code>)',

    js_security_legend: '🔒 Security',
    js_checklist_security_1: 'Checked for vulnerabilities (XSS, injections)?',
    js_checklist_security_1_small:
      '(Sanitize data, e.g., via <code>DOMPurify</code>)',
    js_checklist_security_2: 'Used safe access methods?',
    js_checklist_security_2_small:
      '(E.g., avoid <code>eval</code> or <code>innerHTML</code>)',
    js_optimization_legend: '⚡ Optimization',
    js_checklist_optimization_1: 'Code optimized for performance?',
    js_checklist_optimization_1_small:
      '(E.g., use <code>forEach</code> instead of <code>for</code> for readability)',
    js_checklist_optimization_2: 'Avoided excessive resource usage?',
    js_checklist_optimization_2_small:
      '(Check for memory leaks in closures or event listeners)',
    js_checklist_optimization_3: 'Used strict mode?',
    js_checklist_optimization_3_small:
      '(Add <code>"use strict";</code> at the file start)',

    // PHP Principles
    php_principles_h2: '🔟 Key Principles of Clean PHP Code',
    php_principle_1:
      '<strong>Follow PSR Standards</strong><br />Use <code>PSR-12</code> for code formatting.',
    php_principle_2:
      '<strong>Clear Variable and Method Names</strong><br /><code>$userRepository</code> is better than <code>$repo</code>.',
    php_principle_3:
      '<strong>One Function — One Responsibility</strong><br />For example, <code>getUserData</code> only fetches data.',
    php_principle_4:
      '<strong>DRY — Don’t Repeat Yourself</strong><br />Use functions or classes for repeated code.',
    php_principle_5:
      '<strong>Use Type Hints</strong><br />For example: <pre><code>function add(int $a, int $b): int { return $a + $b; }</code></pre>',
    php_principle_6:
      '<strong>Minimize Nesting</strong><br />Use early <code>return</code>: <pre><code>if (!$user) return null;</code></pre>',
    php_principle_7:
      '<strong>Handle Errors</strong><br />Use <code>try/catch</code> for exceptions.',
    php_principle_8:
      "<strong>Comments Explain 'Why'</strong><br />For example: <pre><code>// Used for caching\nprivate $cache = [];</code></pre>",
    php_principle_9:
      '<strong>Use Composer</strong><br />Organize dependencies via <code>composer.json</code>.',
    php_principle_10:
      '<strong>Avoid Global Variables</strong><br />Pass data through parameters instead.',

    // PHP Checklist
    php_checklist_h2: '✅ Clean PHP Code Checklist',
    php_names_legend: '🔡 Names & Variables',
    php_checklist_names_1: 'Clear variable and method names?',
    php_checklist_names_1_small:
      '(E.g., <code>$userService</code> is better than <code>$s</code>)',
    php_checklist_names_2: 'Magic values extracted to constants?',
    php_checklist_names_2_small: '(E.g., <code>const MAX_USERS = 100;</code>)',
    php_checklist_names_3: 'No similar names causing confusion?',
    php_checklist_names_3_small:
      '(E.g., <code>$user</code> and <code>$users</code>)',
    php_structure_legend: '🧩 Structure',
    php_checklist_structure_1: 'One line — one action?',
    php_checklist_structure_1_small: '(E.g., <code>$sum = $a + $b;</code>)',
    php_checklist_structure_2: 'Methods small and focused on one task?',
    php_checklist_structure_2_small: '(Up to 20-30 lines)',
    php_checklist_structure_3: 'Minimal nesting?',
    php_checklist_structure_3_small:
      '(Early <code>return</code> instead of nested <code>if</code>)',
    php_repetition_legend: '♻️ Repetition',
    php_checklist_repetition_1: 'Avoided code duplication?',
    php_checklist_repetition_1_small: '(Extract to functions or classes)',
    php_checklist_repetition_2: 'Similar tasks are handled identically?',
    php_checklist_repetition_2_small: '(E.g., consistent log formatting)',
    php_formatting_legend: '🧼 Formatting',
    php_checklist_formatting_1: 'Followed PSR-12?',
    php_checklist_formatting_1_small:
      "(<a href='https://www.php-fig.org/psr/psr-12/' target='_blank' rel='noopener'>PSR-12</a>)",
    php_checklist_formatting_2: 'Consistent indents and formatting?',
    php_checklist_formatting_2_small: '(Check via formatter)',
    php_checklist_formatting_3: 'Removed unused code?',
    php_checklist_formatting_3_small: '(E.g., old functions)',

    php_logic_legend: '🧠 Logic',
    php_checklist_logic_1: 'All branches tested?',
    php_checklist_logic_1_small: '(Check <code>if/else</code>, loops)',
    php_checklist_logic_2: 'Exceptions handled?',
    php_checklist_logic_2_small: '(Use <code>try/catch</code>)',
    php_checklist_logic_3: 'Edge cases checked?',
    php_checklist_logic_3_small: '(E.g., empty data, <code>null</code>)',

    php_comments_legend: '📜 Comments',
    php_checklist_comments_1: 'Comments present where needed?',
    php_checklist_comments_1_small: '(Comment complex logic)',
    php_checklist_comments_2: "Comments explain 'why'?",
    php_checklist_comments_2_small: "(E.g., '// For security')",
    php_checklist_comments_3: 'Code clear without comments?',
    php_checklist_comments_3_small: '(Clear names reduce comment need)',

    php_testing_legend: '🧪 Testing',
    php_checklist_testing_1: 'Code tested in action?',
    php_checklist_testing_1_small: '(Run and verify)',
    php_checklist_testing_2: "Doesn't break existing logic?",
    php_checklist_testing_2_small: '(Check old functions)',
    php_checklist_testing_3: 'Tested with automated tests?',
    php_checklist_testing_3_small: '(E.g., <code>PHPUnit</code>)',

    php_security_legend: '🔒 Security',
    php_checklist_security_1: 'Checked for SQL injections and XSS?',
    php_checklist_security_1_small: '(Use prepared statements)',
    php_checklist_security_2: 'Used safe methods?',
    php_checklist_security_2_small: '(E.g., <code>htmlspecialchars</code>)',

    php_optimization_legend: '⚡ Optimization',
    php_checklist_optimization_1: 'Optimized for performance?',
    php_checklist_optimization_1_small: '(Avoid unnecessary DB queries)',
    php_checklist_optimization_2: 'Avoided excessive resource usage?',
    php_checklist_optimization_2_small: '(Check caching)',

    // Python Principles
    py_principles_h2: '🔟 Key Principles of Clean Python Code',
    py_principle_1:
      '<strong>Follow PEP 8</strong><br />Use <code>flake8</code> for formatting.',
    py_principle_2:
      '<strong>Clear Variable Names</strong><br /><code>user_profile</code> is better than <code>u</code>.',
    py_principle_3:
      '<strong>Functions Do One Thing</strong><br />For example, <code>get_user_data</code> only fetches data.',
    py_principle_4:
      '<strong>DRY — Don’t Repeat Yourself</strong><br />Use functions or classes for repetition.',
    py_principle_5:
      '<strong>Use List Comprehensions</strong><br />For example: <pre><code>[x*2 for x in numbers]</code></pre>',
    py_principle_6:
      '<strong>Minimize Nesting</strong><br />Use early <code>return</code>: <pre><code>if not user: return None</code></pre>',
    py_principle_7:
      '<strong>Handle Exceptions</strong><br />Use <code>try/except</code> for errors.',
    py_principle_8:
      "<strong>Comments Explain 'Why'</strong><br />For example: <pre><code># Cache for optimization\ncache = {}</code></pre>",
    py_principle_9:
      '<strong>Use Virtual Environments</strong><br />For example, <code>venv</code> or <code>poetry</code>.',
    py_principle_10:
      '<strong>Write Self-Documenting Code</strong><br />Clear names reduce the need for comments.',
    // Python Checklist
    py_checklist_h2: '✅ Clean Python Code Checklist',

    py_names_legend: '🔡 Names & Variables',
    py_checklist_names_1: 'Clear variable names?',
    py_checklist_names_1_small:
      '(E.g., <code>user_data</code> is better than <code>d</code>)',
    py_checklist_names_2: 'Magic values extracted?',
    py_checklist_names_2_small: '(E.g., <code>MAX_USERS = 100</code>)',
    py_checklist_names_3: 'No similar names?',
    py_checklist_names_3_small:
      '(E.g., <code>user</code> and <code>users</code>)',

    py_structure_legend: '🧩 Structure',
    py_checklist_structure_1: 'One line — one action?',
    py_checklist_structure_1_small: '(E.g., <code>total = a + b</code>)',
    py_checklist_structure_2: 'Functions small and focused on one task?',
    py_checklist_structure_2_small: '(Up to 20-30 lines)',
    py_checklist_structure_3: 'Minimal nesting?',
    py_checklist_structure_3_small: '(Early <code>return</code>)',

    py_repetition_legend: '♻️ Repetition',
    py_checklist_repetition_1: 'Avoided code duplication?',
    py_checklist_repetition_1_small: '(Extract to functions)',
    py_checklist_repetition_2: 'Similar tasks implemented consistently?',
    py_checklist_repetition_2_small: '(E.g., consistent log formatting)',

    py_formatting_legend: '🧼 Formatting',
    py_checklist_formatting_1: 'Followed PEP 8?',
    py_checklist_formatting_1_small:
      "(<a href='https://peps.python.org/pep-0008/' target='_blank' rel='noopener'>PEP 8</a>)",
    py_checklist_formatting_2: 'Consistent indents and formatting?',
    py_checklist_formatting_2_small: '(Check via <code>flake8</code>)',
    py_checklist_formatting_3: 'Removed unused code?',
    py_checklist_formatting_3_small: '(E.g., old functions)',

    py_logic_legend: '🧠 Logic',
    py_checklist_logic_1: 'All branches tested?',
    py_checklist_logic_1_small: '(Check <code>if/else</code>, loops)',
    py_checklist_logic_2: 'Exceptions handled?',
    py_checklist_logic_2_small: '(Use <code>try/except</code>)',
    py_checklist_logic_3: 'Edge cases checked?',
    py_checklist_logic_3_small: '(E.g., empty data, <code>None</code>)',

    py_comments_legend: '📜 Comments',
    py_checklist_comments_1: 'Comments present where needed?',
    py_checklist_comments_1_small: '(Comment complex logic)',
    py_checklist_comments_2: "Comments explain 'why'?",
    py_checklist_comments_2_small: "(E.g., '// For caching')",
    py_checklist_comments_3: 'Code clear without comments?',
    py_checklist_comments_3_small: '(Clear names reduce comment need)',

    py_testing_legend: '🧪 Testing',
    py_checklist_testing_1: 'Code tested in action?',
    py_checklist_testing_1_small: '(Run and verify)',
    py_checklist_testing_2: "Doesn't break existing logic?",
    py_checklist_testing_2_small: '(Check old functions)',
    py_checklist_testing_3: 'Tested with automated tests?',
    py_checklist_testing_3_small: '(E.g., <code>pytest</code>)',

    py_security_legend: '🔒 Security',
    py_checklist_security_1: 'Checked for vulnerabilities?',
    py_checklist_security_1_small:
      '(Sanitize data, e.g., <code>html.escape</code>)',
    py_checklist_security_2: 'Used safe methods?',
    py_checklist_security_2_small: '(E.g., prepared DB queries)',
    py_optimization_legend: '⚡ Optimization',
    py_checklist_optimization_1: 'Optimized for performance?',
    py_checklist_optimization_1_small: '(Avoid unnecessary loops)',
    py_checklist_optimization_2: 'Avoided excessive resource usage?',
    py_checklist_optimization_2_small: '(Check caching)',
  },
};

// DOM елементи
const checklists = document.querySelectorAll('.checklist');
const languageToggles = document.querySelectorAll('.language-toggle');
const translateToggles = document.querySelectorAll('.translate-toggle');
const result = document.querySelector('.result');
const progressCount = document.getElementById('progress-count');
const totalCount = document.getElementById('total-count');
const themeToggle = document.getElementById('theme-toggle');
const resetChecklist = document.getElementById('reset-checklist');

// Оновлення перекладів
function updateTranslations(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      if (element.tagName === 'META') {
        element.setAttribute('content', translations[lang][key]);
      } else if (element.tagName === 'TITLE') {
        document.title = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });

  // Оновлення тексту кнопки теми
  updateThemeButtonText();
  console.log(`Language set to: ${lang}`);
}

// Оновлення тексту кнопки теми
function updateThemeButtonText() {
  const textSpan = themeToggle.querySelector('.theme-text');
  if (textSpan) {
    const lang = document.documentElement.getAttribute('lang') || 'uk';
    textSpan.innerHTML = document.body.classList.contains('light-theme')
      ? translations[lang].theme_toggle
      : translations[lang].theme_toggle;
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
let activeTranslateLang = localStorage.getItem('translateLang') || 'uk';
showChecklist(activeLanguage);
loadCheckboxes(activeLanguage);
updateTranslations(activeTranslateLang);

// Обробка перемикання мови чеклістів
languageToggles.forEach(button => {
  button.addEventListener('click', () => {
    activeLanguage = button.dataset.language;
    localStorage.setItem('activeLanguage', activeLanguage);
    showChecklist(activeLanguage);
    loadCheckboxes(activeLanguage);
  });
});

// Обробка перемикання мови інтерфейсу
translateToggles.forEach(button => {
  button.addEventListener('click', () => {
    activeTranslateLang = button.dataset.translateLang;
    localStorage.setItem('translateLang', activeTranslateLang);
    updateTranslations(activeTranslateLang);
    translateToggles.forEach(btn => {
      btn.classList.toggle(
        'active',
        btn.dataset.translateLang === activeTranslateLang
      );
    });
    updateProgress(activeLanguage); // Оновлюємо прогрес, щоб відобразити перекладений текст
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
