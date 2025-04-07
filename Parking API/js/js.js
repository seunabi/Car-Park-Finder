
let map, lightTheme, darkTheme, markers = [];


function initMap() {
    const mapElement = document.getElementById('map') || document.getElementById('home-map');
    if (!mapElement) return; 

   
    map = L.map(mapElement, {
        attributionControl: false 
    }).setView([51.4545, -2.5879], 12); 

    lightTheme = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">Carto</a>',
        subdomains: 'abcd',
        maxZoom: 20
    });

    darkTheme = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">Carto</a>',
        subdomains: 'abcd',
        maxZoom: 20
    });

    applySavedTheme();

    if (mapElement.id === 'map' || mapElement.id === 'home-map') {
        fetchCarParks();
    }
}

function toggleTheme() {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    setTimeout(() => {
        location.reload();
    }, 100);
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkTheme.addTo(map);
    } else {
        document.body.classList.remove("dark-mode");
        lightTheme.addTo(map);
    }
}

function fetchCarParks() {
    let url = "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/5/query?outFields=*&where=1%3D1&f=geojson";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.features) {
                displayCarParks(data.features);
            } else {
                console.error("Unexpected API response:", data);
            }
        })
        .catch(err => console.error("Fetch error:", err));
}

const purpleIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function displayCarParks(features) {
    if (!map) return;

    let tbody = document.getElementById("results");
    if (tbody) tbody.innerHTML = ""; 

    markers.forEach(marker => map.removeLayer(marker)); 
    markers = [];

    features.forEach(feature => {
        let attributes = feature.properties;
        let carPark = attributes.NAME || "Unknown";
        let spaces = attributes.SPACES || "N/A";
        let type = attributes.TYPE_DESCRIPTION || "N/A";
        let operator = attributes.OPERATOR_NAME || "N/A";
        let lat = feature.geometry.coordinates[1];
        let lon = feature.geometry.coordinates[0];

        if (tbody) {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${carPark}</td><td>${spaces}</td><td>${type}</td><td>${operator}</td>`;
            tbody.appendChild(row);
        }

        if (lat && lon) {
            let googleMapsLink = `https://www.google.com/maps?q=${lat},${lon}`;

            let marker = L.marker([lat, lon], { icon: purpleIcon }).addTo(map)
                .bindPopup(
                    `<b>${carPark}</b><br>
                    Spaces: ${spaces}<br>
                    Type: ${type}<br>
                    Operator: ${operator}<br>
                    <a href="${googleMapsLink}" target="_blank" style="color: purple; text-decoration: underline;">
                        Google Maps
                    </a>`
                );

            markers.push(marker);
        }
    });
}

function searchCarParks() {
    let searchValue = document.getElementById("search-bar").value.toLowerCase();
    let rows = document.querySelectorAll("#results tr");

    rows.forEach(row => {
        let text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchValue) ? "" : "none";
    });
}

document.addEventListener("DOMContentLoaded", initMap);
