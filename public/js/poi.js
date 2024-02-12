const savedCity = localStorage.getItem('savedCity');

//Get request to fetch the point of interest based on the city selected by the user
const poi = async () => {
  const response = await fetch(`/api/poi/${savedCity}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);

  const data = await response.json();
  console.log(data);

  var poiDisplay = document.getElementById('poiDisplay');

  // Clear existing content
  poiDisplay.innerHTML = '';

  // Create an unordered list
  const poiList = document.createElement('ul');

  // Loop through the first 10 items in the data array and append list items
  for (let i = 0; i < Math.min(10, data.data.length); i++) {
    const poiItem = data.data[i];
    const listItem = document.createElement('li');

    // Create elements for name and category
    const nameElement = document.createElement('div');

    // Add a bullet point to the name
    nameElement.innerHTML = `&#8226; ${poiItem.name}`;

    // Append name and category elements to the list item
    listItem.appendChild(nameElement);

    // Append the list item to the unordered list
    poiList.appendChild(listItem);
  }

  // Append the ul element to poiDisplay
  poiDisplay.appendChild(poiList);

  var cityNameDisplay = document.getElementById('savedCity');
  cityNameDisplay.textContent = savedCity;

//   var homeDisplay = document.getElementById('homeBtn');
//   homeDisplay.addEventListener('click', () => {
//     document.location.replace('/');
//   });
};

poi();
