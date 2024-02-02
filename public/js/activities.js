const activityOption = document.querySelector('.activity');

activityOption.addEventListener("click", async function () {
    try {
      const selectedCity = citySelect.value;
  
      window.location.href = "./activities";
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