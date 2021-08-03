const api = '9ce157141208c7f7d8b28e7e79719ed2';
const error = document.getElementById('error');
const temp = document.getElementById('temp');
const minTemp1 = document.getElementById('min-temp');
const maxTemp = document.getElementById('max-temp');
const cel = document.getElementById('cel');
const fah = document.getElementById('fah');
const image = document.getElementById('image');
const getData = (city) => {
  const data = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api}&units=metric`).then((res) => res.json());
  return data;
};

function picture(data) {
  if (data.main.temp < 0) {
    image.src = 'https://kottke.org/plus/misc/images/vt-winter-wonderland.jpg';
  } else if (data.main.temp < 12) {
    image.src = 'https://previews.123rf.com/images/detry/detry1910/detry191000043/132331566-cold-autumn-weather-10-degrees-celsius-thermometer-in-the-autumn-cold-weather-in-the-leaves-shows-lo.jpg';
  } else if (data.main.temp < 20) {
    image.src = 'https://www.cardiomyopathy.org/images/news-section/sunshine_cropped_694_300.jpg';
  } else if (data.main.temp > 20) {
    image.src = 'https://amayei.nyc3.digitaloceanspaces.com/2019/02/hot-weather-temperatures.jpg';
  }
}

function converter(num) {
  return ((num * 9) / 5) + 32;
}

function weather() {
  const city = document.getElementById('city').value;

  getData(city).then((data) => {
    if (data.name === undefined) {
      error.innerHTML = 'Write the correct city!';
      return;
    }
    error.innerHTML = '';

    const city1 = document.getElementById('city-1');
    const weatherCast = document.getElementById('weather-cast');
    city1.innerHTML = data.name;
    weatherCast.innerHTML = data.weather[0].description;
    temp.innerHTML = `Temp = ${data.main.temp.toFixed(1)} Celsius`;
    picture(data);
    minTemp1.innerHTML = `Min-temp = ${data.main.temp_min.toFixed(1)} Celsius`;
    maxTemp.innerHTML = `Max-temp = ${data.main.temp_max.toFixed(1)} Celsius`;
  });
}

function fahrenheit() {
  const city = document.getElementById('city').value;

  getData(city).then((data) => {
    if (data.name === undefined) {
      error.innerHTML = 'Write the correct city!';
      return;
    }
    error.innerHTML = '';

    temp.innerHTML = `Temp = ${converter(data.main.temp).toFixed(1)} Fahrenheit`;
    minTemp1.innerHTML = `Min-temp = ${converter(data.main.temp_min).toFixed(1)} Fahrenheit`;
    maxTemp.innerHTML = `Max-temp = ${converter(data.main.temp_max).toFixed(1)} Fahrenheit`;
  });
}

fah.addEventListener('click', fahrenheit);
cel.addEventListener('click', weather);
const btn = document.getElementById('btn');
btn.addEventListener('click', weather);
