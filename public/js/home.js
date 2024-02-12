const dropdownButton = document.querySelector('.dropdown-button');
const citySelect = document.querySelector('.dropdown-options');
const citySelectOptions = document.querySelectorAll('.dropdown-option');

//Event listener for the city selected by the user
dropdownButton.addEventListener('click', () => {
  citySelect.style.display = citySelect.style.display === 'none' ? 'block' : 'none';
});

citySelectOptions.forEach(option => {
  option.addEventListener('click', async function() { 
    const selectedCity = option.innerText;
    console.log("Selected City:", selectedCity);

//the selected city is saved to local storage
    if (selectedCity) {
      localStorage.setItem("savedCity",selectedCity)
      document.location.replace('/preference');
  
     }
  });
});




    
