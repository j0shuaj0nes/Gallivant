const dropdownButton = document.querySelector('.dropdown-button');
const citySelect = document.querySelector('.dropdown-options');
const citySelectOptions = document.querySelectorAll('.dropdown-option');


dropdownButton.addEventListener('click', () => {
  citySelect.style.display = citySelect.style.display === 'none' ? 'block' : 'none';
});

  citySelectOptions.forEach(option => {
    option.addEventListener('click', function() {
      const selectedCity = option.innerText;
      console.log("Selected City:", selectedCity);

      // Redirect to the preference handlebar using window.location.href
      window.location.href = "./preference";
    });
  });
