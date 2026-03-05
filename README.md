# Should I walk the Dog?

## Overview
This project uses the Visual Crossing API to determine if weather conditions are suitable for walking a dog.

## Technical Implementation

### 1. Data Fetching
The app uses the JavaScript `fetch` API to retrieve a JSON object from Visual Crossing. 
* **Endpoint:** `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`
* **Data Points used:** `temp`, `precip`, and `windspeed`.

### 2. Logic & Conditions
The app evaluates the `currentConditions` object through a series of conditional statements:
* **Rain:** `precip > 0.01` returns a "No" (prevents wet dog smell/discomfort).
* **Heat:** `temp > 85°F` returns a "No" (protects paws from hot pavement).
* **Cold:** `temp < 32°F` returns a "No" (prevents salt/ice irritation).
* **Wind:** `windspeed > 25mph` returns a "No" (safety for smaller breeds).



### 3. UI/UX Features
* **Sidebar Navigation:** A sidebar with common cities allows for quick API calls without typing. I initially wanted all the cities listed then I realised that was quite complex so I did major cities instead.
* **Dynamic Styling:** The UI uses "Neubrutalism" (thick borders, flat shadows). 
* **State Management:** Background colors and text content update dynamically based on the API response to reflect the weather's "mood."

## Setup
1. Clone the files into a single directory.
2. Insert your Visual Crossing key into the `API_KEY` variable in `script.js`.
3. Open `index.html` in a browser.
