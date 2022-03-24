export const dataGet = async () => {
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent('https://data-legacy.urbansharing.com/legacy-api/stations.json')}`;
    //const url = 'https://data-legacy.urbansharing.com/legacy-api/stations.json';
    
    try {
        const response = await fetch(url); // fetch er en promise
        const data = await response.json(); // json er en promise
        //console.log(data);
        const stations = JSON.parse(data.contents);
        console.log(stations.stations);
        return data;
    } catch (error) {
        return 'noen gikk galt!'
    }
}
//myAsyncFunc();

//console.log(dataGet())