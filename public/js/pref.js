
const savedCity = localStorage.getItem('savedCity');

var cityNameDisplay = document.getElementById('savedCity');
cityNameDisplay.textContent = savedCity;

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