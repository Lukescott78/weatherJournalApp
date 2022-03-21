// Personal API Key for OpenWeatherMap API
// const apiKey = '&appid=4ba79dfb82caa1589f048952db3f6d9f';
// const baseURL = 'https://api.openweathermap.org/='
const apiKey = 'api.openweathermap.org/data/2.5/forecast?id=524901&appid={4ba79dfb82caa1589f048952db3f6d9f}';
const newEntryHolder = document.getElementById('entryHolder').value;
// Event listener to add function to existing HTML DOM element
/* Function called by event listener */
document.getElementById('generate').addEventListener('click', performAction);
/* Function to GET Web API Data*/
function performAction(e){
  getJournalEntry(newEntryHolder, apiKey)
}
/* Function to POST data */
const getJournalEntry = async (url = '', data = {})=>{

    const response = await fetch(url, {
      method:'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    try {
      const newData = await response.json();
        return newData
    }catch(error){
      console.log("error", error);
    }
}

// postData('/addEntry', {date: 26/02/2009, temp: 30"c", content: "old and hot"})

/* Function to GET Project Data */



/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
