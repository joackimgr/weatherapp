import { getData } from "./apiReq";
import { loadWeather } from "./renderForecast";

function getCity() {
    const form = document.querySelector('.searchContainer');
    const searchQuery = document.getElementById('citySearch');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let city = searchQuery.value;
        city = city.charAt(0).toUpperCase() + city.slice(1);
        const data = await getData(city);
        loadWeather(data);
        searchQuery.value = '';
    })
}

export {getCity}