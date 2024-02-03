const activityOption = document.querySelector('.activity');

activityOption.addEventListener("click", async function () {
    try {
    
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