import passCity from './passCity';

async function getApiData() {
  const api = '8d0cb7a10b7b5e8f46f261981765799a';
  const data =await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${passCity()}&APPID=${api}`,
    { mode: 'cors' }
  );
  const response = await data.json();
  return response
}


export default getApiData;
