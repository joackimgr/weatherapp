async function getData(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.WEATHER_API_KEY}&unitGroup=metric`)
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error(`Error fetching weather: ${error}`)
        return null
    }
}

export { getData };