/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(() => { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/
        "./src/index.js":
            /*!**********************!*\
              !*** ./src/index.js ***!
              \**********************/
            /***/
            (() => {

                eval("var api = \"9ce157141208c7f7d8b28e7e79719ed2\";\nvar error = document.getElementById('error');\nvar temp = document.getElementById('temp');\nvar minTemp1 = document.getElementById('min-temp');\nvar maxTemp = document.getElementById('max-temp');\nvar cel = document.getElementById('cel');\nvar fah = document.getElementById('fah');\nvar image = document.getElementById('image');\n\nvar getData = function getData(city) {\n  var data = fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\".concat(city, \"&APPID=\").concat(api, \"&units=metric\")).then(function (res) {\n    return res.json();\n  });\n  return data;\n};\n\nfunction picture(data) {\n  if (data.main.temp < 0) {\n    image.src = 'https://kottke.org/plus/misc/images/vt-winter-wonderland.jpg';\n  } else if (data.main.temp < 12) {\n    image.src = 'https://previews.123rf.com/images/detry/detry1910/detry191000043/132331566-cold-autumn-weather-10-degrees-celsius-thermometer-in-the-autumn-cold-weather-in-the-leaves-shows-lo.jpg';\n  } else if (data.main.temp < 20) {\n    image.src = 'https://www.cardiomyopathy.org/images/news-section/sunshine_cropped_694_300.jpg';\n  } else if (data.main.temp > 20) {\n    image.src = 'https://amayei.nyc3.digitaloceanspaces.com/2019/02/hot-weather-temperatures.jpg';\n  }\n}\n\nfunction converter(num) {\n  return num * 9 / 5 + 32;\n}\n\nfunction weather() {\n  var city = document.getElementById('city').value;\n  getData(city).then(function (data) {\n    if (data.name === undefined) {\n      error.innerHTML = 'Write the correct city!';\n      return;\n    }\n\n    error.innerHTML = '';\n    var city1 = document.getElementById('city-1');\n    var weatherCast = document.getElementById('weather-cast');\n    city1.innerHTML = data.name;\n    weatherCast.innerHTML = data.weather[0].description;\n    temp.innerHTML = \"Temp = \".concat(data.main.temp.toFixed(1), \" Celsius\");\n    picture(data);\n    minTemp1.innerHTML = \"Min-temp = \".concat(data.main.temp_min.toFixed(1), \" Celsius\");\n    maxTemp.innerHTML = \"Max-temp = \".concat(data.main.temp_max.toFixed(1), \" Celsius\");\n  });\n}\n\nfunction fahrenheit() {\n  var city = document.getElementById('city').value;\n  getData(city).then(function (data) {\n    if (data.name === undefined) {\n      error.innerHTML = 'Write the correct city!';\n      return;\n    }\n\n    error.innerHTML = '';\n    temp.innerHTML = \"Temp = \".concat(converter(data.main.temp).toFixed(1), \" Fahrenheit\");\n    minTemp1.innerHTML = \"Min-temp = \".concat(converter(data.main.temp_min).toFixed(1), \" Fahrenheit\");\n    maxTemp.innerHTML = \"Max-temp = \".concat(converter(data.main.temp_max).toFixed(1), \" Fahrenheit\");\n  });\n}\n\nfah.addEventListener('click', fahrenheit);\ncel.addEventListener('click', weather);\nvar btn = document.getElementById('btn');\nbtn.addEventListener('click', weather);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

                /***/
            })

        /******/
    });
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module can't be inlined because the eval devtool is used.
    /******/
    var __webpack_exports__ = {};
    /******/
    __webpack_modules__["./src/index.js"]();
    /******/
    /******/
})();
