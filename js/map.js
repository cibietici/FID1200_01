export function mapbox() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2liaWV0aWNpIiwiYSI6ImNrenM1Z2gwdjZ6aHUydm16dzBldXJmcjIifQ.ugFvlWIvOLmyqr7v__e_Ug';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [10.75, 59.91], // starting position [lng, lat]
    zoom: 12 // starting zoom
    });

    const geojson = {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Station 1 addressen'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [10.75, 59.91]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Station 2 addressen'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [10.72, 59.914]
                    }
                },
            ]
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
};
