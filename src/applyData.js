import getApiData from './getApiData';

async function applyData() {
  const data = await getApiData();
  const city = document.querySelector('div.header h1#city');
  const image = document.querySelector('div.header img');
  const weather = document.querySelector('div.header h3#weather');
  const time = document.querySelector('div.header p#time');

  const temperature = document.querySelector('div.temp h1#temp');
  const feelLike = document.querySelector('ul.value li#feelValue');
  const humidity = document.querySelector('ul.value li#humValue');
  const wind = document.querySelector('ul.value li#windValue');
  const pressure = document.querySelector('ul.value li#pressValue');

  const refresh = document.querySelector('div.header i');
  refresh.setAttribute('style', 'visibility:hidden');

  city.textContent = data.name + ',' + data.sys.country;
  weather.textContent = data.weather[0].main;
  time.textContent = new Date(data.dt * 1000).toUTCString();

  temperature.textContent = Math.ceil(data.main.temp - 273) + '°C';

  feelLike.textContent = Math.ceil(data.main.feels_like - 273) + '°C';
  humidity.textContent = data.main.humidity;
  wind.textContent = data.wind.speed;
  pressure.textContent = data.main.pressure + 'hPa';
  image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

export default applyData;
