const dropdownButton = document.querySelector('.dropdown-button');
const citySelect = document.querySelector('.dropdown-options');
const citySelectOptions = document.querySelectorAll('.dropdown-option');
const POIOption = document.querySelector('.poi');
const activityOption = document.querySelector('.attract');
const poiListContainer = document.getElementById('POIList');
const activityListContainer = document.getElementById('activityList');

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

  POIOption.addEventListener("click", async function () {
    try {
      
      window.location.href = "./poi";
      // Make a request to the POI API route
      const poiResponse = await axios.get(`/api/pois?city=${selectedCity}`);
      console.log('Points of Interest:', poiResponse.data);
  
      // Display the fetched POIs in the container
      poiListContainer.innerHTML = '';
      poiResponse.data.forEach(poi => {
        const poiItem = document.createElement('div');
        poiItem.innerHTML = `
          <h3>${poi.name}</h3>
        `;
        poiListContainer.appendChild(poiItem);
      });
    } catch (error) {
      console.error('Error making POI API requests:', error.message);
    }
  });
  
  activityOption.addEventListener("click", async function () {
    try {
      const selectedCity = citySelect.value;
  
      window.location.href = "./attractions";
      // Make a request to the Activity API route
      const activityResponse = await axios.get(`/api/activities?city=${selectedCity}`);
      console.log('Activities:', activityResponse.data);
  
      // Display the fetched activities in the container
      activityListContainer.innerHTML = '';
      activityResponse.data.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.innerHTML = `
          <h3>${activity.name}</h3>
          <p>${activity.description}</p>
          <p>Price: ${activity.price}</p>
          <p>Duration: ${activity.duration}</p>
          <img src="${activity.picture}" alt="${activity.name}">
          <a href="${activity.bookingLink}" target="_blank">Book Now</a>
        `;
        activityListContainer.appendChild(activityItem);
      });
    } catch (error) {
      console.error('Error making Activity API requests:', error.message);
    }
  });