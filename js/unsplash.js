export async function getImage() {
    const url = 'https://api.unsplash.com/photos/random?client_id=gQw2Teb2E-s-Ftyuzvl3fjRQOUJJXNE3jeJq8ld4QwY';
    const urlSearch = 'https://api.unsplash.com//search/photos?page=1&query=oslo rain&client_id=gQw2Teb2E-s-Ftyuzvl3fjRQOUJJXNE3jeJq8ld4QwY';
    
    const response = await fetch(urlSearch);
    const result = await response.json();
    console.log(result.results[0]);
    const returnedImg = result.results[2].urls.regular;
    const container = document.querySelector('.app');
    const image = document.createElement('img');
    //image.setAttribute('src', result.urls.regular);
    image.setAttribute('src', returnedImg);
    image.setAttribute('alt', `image by ${result.results[2].user.name}`);
    console.log(image);
    container.append(image)
}