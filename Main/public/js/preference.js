const citySelect = document.getElementById('citySelect');
const POIOption = document.getElementById('option1');
const tourOption = document.getElementById('option2');
const poiListContainer = document.getElementById('poiList'); 

document.addEventListener("click", async function () {
  try {
    const selectedCity = citySelect.value; 
    const selectedPOI = POIOption.value; 
    const selectedTour = tourOption.value;

    const poiResponse = await axios.get(`/api/pois?city=${selectedCity}&selectedPOI=${selectedPOI}`);
    console.log('Points of Interest:', poiResponse.data);

    const tourResponse = await axios.get(`/api/tours-and-activities?city=${selectedCity}&selectedTour=${selectedTour}`);
    console.log('Tours and Activities:', tourResponse.data);


    // Display the fetched POIs in the designated container
    poiListContainer.innerHTML = ''; 
    poiResponse.data.forEach(poi => {
      const poiItem = document.createElement('div');
      poiItem.textContent = poi.name;
      poiListContainer.appendChild(poiItem);
    });

  } catch (error) {
    console.error('Error making API requests:', error.message);
   
  }
});
