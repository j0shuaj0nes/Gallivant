const savedCity = localStorage.getItem('savedCity');

// displays selected city 
var cityNameDisplay = document.getElementById('savedCity');
cityNameDisplay.textContent = savedCity;

//Get request to the points of interest route if points of interest button is clicked
  const poi = async () => {
    const response = await fetch(`/api/poi/${savedCity}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  console.log(response)

  const data = await response.json()
  console.log(data)
 
  };
  document.querySelector('.poi').addEventListener('click', poi);

//Get request to the activities route if activity button is clicked
  const activity = async () => {
    const response = await fetch(`/api/activity/${savedCity}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    console.log(response)

  const data = await response.json()
  console.log(data)
};
  document.querySelector('.activity').addEventListener('click', activity);
