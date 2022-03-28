export async function mapbox() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2liaWV0aWNpIiwiYSI6ImNrenM1Z2gwdjZ6aHUydm16dzBldXJmcjIifQ.ugFvlWIvOLmyqr7v__e_Ug';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [10.75, 59.91], // starting position [lng, lat]
    zoom: 14 // starting zoom
    });

    const bikesStations = await getStations();

    const featuresBikes = bikesStations.map(station => {
        return {
            type: 'Feature',
            properties: {
                message: station.title
            },
            geometry: {
                type: 'Point',
                coordinates: [station.center.longitude, station.center.latitude]
            }
        }
    });

    const geojson = {
            'type': 'FeatureCollection',
            'features': featuresBikes
    };

    // Add markers to the map.
    for (const marker of geojson.features) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        el.className = 'marker';
        
        el.addEventListener('click', () => {
        window.alert(marker.properties.message);
        });
        
        // Add markers to the map.
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    };
    // here we check our position and show where we are
    navigator.geolocation.getCurrentPosition((position) => {
        new mapboxgl.Marker()
        .setLngLat([position.coords.longitude, position.coords.latitude])
        .addTo(map);
    });
};

async function getStations() {
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent('https://data-legacy.urbansharing.com/legacy-api/stations.json')}`;
    //const url = 'https://data-legacy.urbansharing.com/legacy-api/stations.json';
    
    try {
        const response = await fetch(url); // fetch er en promise
        const data = await response.json(); // json er en promise
        const stations = JSON.parse(data.contents).stations;
        return stations;
    } catch (error) {
        return 'noen gikk galt!'
    }
};
