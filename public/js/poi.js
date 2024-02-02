const POIOption = document.querySelector('.poi');

const poiListContainer = document.getElementById('POIList');




  POIOption.addEventListener("click", async function () {
   try {
      
      
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
  
