function loadWeather(data) {
    if (!data) return;
    const content = document.getElementById('content');

    const oldWeather = document.querySelector('.todayWeatherCont');
    const oldForecast = document.querySelector('.nextForecastContainer');

    if (oldWeather) {
        oldWeather.remove();
    }

    if (oldForecast) {
        oldForecast.remove();
    }
    
    setTimeout(() => {
        const today = loadToday(data.days[0], data.resolvedAddress);
        const forecast = loadForecast(data);
        content.append(today, forecast);
    }, 100);
    
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

function loadForecast(data) {
    const container = document.createElement('div');
    container.className = 'nextForecastContainer';
    for (let i = 1; i < 5; i++) {
        let date = document.createElement('h2');
        const dateObj = new Date(data.days[i].datetime);
        date.textContent = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
        let icon = document.createElement('img');
        icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color/${data.days[i].icon}.svg`;
        icon.alt = `${data.days[i].icon}`;
        let temp = document.createElement('p');
        temp.textContent = `${data.days[i].temp}° C`;
        const div = document.createElement('div');
        div.className = 'nextForecast';
        div.append(date, icon, temp);
        container.appendChild(div);
    }
    return container;
}

export {loadWeather}