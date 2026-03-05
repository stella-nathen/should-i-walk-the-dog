const API_KEY = 'LE5SNXR8CKEQ6XHJCTXFVDNJE'; 

const cityInput = document.getElementById('cityInput');
const checkBtn = document.getElementById('checkBtn');
const cityListItems = document.querySelectorAll('#cityList li');


checkBtn.addEventListener('click', () => {
    fetchWeather(cityInput.value);
});


cityListItems.forEach(item => {
    item.addEventListener('click', () => {
        cityInput.value = item.innerText; 
        fetchWeather(item.innerText);     
    });
});

async function fetchWeather(city) {
    if (!city) return;
    
    const status = document.getElementById('status');
    status.innerText = "Checking the sky...";

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${API_KEY}&contentType=json`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        
        showVerdict(data.currentConditions);
        status.innerText = `Showing results for: ${city}`;
    } catch (err) {
        status.innerText = "Error! Check your spelling";
    }
}

function showVerdict(weather) {
    const box = document.getElementById('resultBox');
    const verdict = document.getElementById('verdict');
    const reason = document.getElementById('reason');

    box.classList.remove('hidden');

    // Thresholds
    if (weather.precip > 0.01) {
        verdict.innerText = "NO.";
        reason.innerText = "It is wet. Wet paws.";
        box.style.background = "#70a1ff";
    } else if (weather.temp > 85) {
        verdict.innerText = "WAIT.";
        reason.innerText = "Too hot for the dog. Stay home.";
        box.style.background = "#ff7f50";
    } else if (weather.temp < 32) {
        verdict.innerText = "BRRRR.";
        reason.innerText = "Too cold! Frozen paws.";
        box.style.background = "#a29bfe";
    } else {
        verdict.innerText = "YES!";
        reason.innerText = "The weather is dog-approved!";
        box.style.background = "#55efc4";
    }

    document.getElementById('tempDisp').innerText = weather.temp + "°F";
    document.getElementById('windDisp').innerText = weather.windspeed + "mph";
}