const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const result = document.querySelector('.result');

      function updateResult() {
        const allChecked = [...checkboxes].every(cb => cb.checked);
        result.style.display = allChecked ? 'block' : 'none';
      }

      checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
          cb.parentElement.classList.toggle('checked', cb.checked);
          updateResult();
        });
      });
      updateResult();
