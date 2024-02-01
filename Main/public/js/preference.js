const citySelect = document.getElementById('citySelect');
const POIOption = document.getElementById('option1');
const activityOption = document.getElementById('option2');
const poiListContainer = document.getElementById('POIList');
const activityListContainer = document.getElementById('activityList');

document.addEventListener("click", async function () {
  try {
    const selectedCity = citySelect.value;

    if (POIOption.checked) {
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
    } else if (activityOption.checked) {
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
    }
  } catch (error) {
    console.error('Error making API requests:', error.message);
  }
});
