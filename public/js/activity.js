const savedCity = localStorage.getItem('savedCity');

//A GET request for the activities based on the selected city by the user 
const activity = async () => {
  const response = await fetch(`/api/activities/${savedCity}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);

  const data = await response.json();
  console.log(data);

  var activityDisplay = document.getElementById('activityDisplay');

  // Clear existing content
  activityDisplay.innerHTML = '';
  
  // Create an unordered list
  const activityList = document.createElement('ul');
  
  // Loop through the first 5 items in the data array and append list items 
  for (let i = 0; i < Math.min(5, data.data.length); i++) {
    const activityItem = data.data[i];
  
    // Create list item
    const listItem = document.createElement('li');
  
    // Create elements for name and booking link
    const nameElement = document.createElement('div');
    
    // Add a bullet point to the name
    nameElement.innerHTML = `&#8226; ${activityItem.name}`;
    
    const bookingLinkElement = document.createElement('a');
    bookingLinkElement.textContent = 'Booking Link';
    bookingLinkElement.href = activityItem.bookingLink;
    // Set target='_blank' to open the link in a new tab
    bookingLinkElement.target = '_blank';
  
    // Append name and booking link elements to the list item
    listItem.appendChild(nameElement);
    listItem.appendChild(bookingLinkElement);
  
    // Append the list item to the unordered list
    activityList.appendChild(listItem);
  }
  
  // Append the ul element to activityDisplay
  activityDisplay.appendChild(activityList);

  var cityNameDisplay = document.getElementById('savedCity');
  cityNameDisplay.textContent = savedCity;
};

activity();

