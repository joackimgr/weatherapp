function loadWeather(data) {
    if (!data) return;
    const content = document.getElementById('content');

    const oldWeather = document.querySelector('.todayWeatherCont');
    if (oldWeather) oldWeather.remove();

    const today = loadToday(data.days[0], data.resolvedAddress);

    content.append(today);
}

function loadToday(today, location) {
    const temp = document.createElement('p');
    temp.textContent = `${today.temp}° C`;
    const cond = document.createElement('p');
    cond.textContent = today.conditions;
    const city = document.createElement('h2');
    city.textContent = location;
    const icon = document.createElement('img');
    icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color/${today.icon}.svg`;
    icon.alt = `${today.icon}`;

    const todayText = document.createElement('h2');
    todayText.textContent = 'Today';
    const container = document.createElement('div');
    container.className = 'todayWeatherCont';
    const weatherDiv = document.createElement('div');
    weatherDiv.className = 'todayWeatherDiv';
    const weather = document.createElement('div');
    weather.className = 'todayWeather';

    weather.append(todayText, temp, cond);
    weatherDiv.append(weather, icon);
    container.append(city, weatherDiv);

    return container;
}

export {loadWeather}