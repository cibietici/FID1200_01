const key = 'vcn9f4MIGYnuB8ByoR2TgcRFhmDTe88c';
const url = `https://app.ticketmaster.com/discovery/v1/events.json?apikey=${key}`;
const corsUrl = `http://api.allorigins.win/get?url=${encodeURIComponent(`https://app.ticketmaster.com/discovery/v2/events.json?city=[oslo]&apikey=${key}`)}`;

export async function tm() {
    const response = await fetch(corsUrl);
    const result = await response.json();
    const events = JSON.parse(result.contents);
    console.log(events._embedded.events)
}