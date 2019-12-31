const memeUrl = "https://api.imgflip.com/get_memes"

$(document).ready(() => {
    axios.get(memeUrl)
        .then(response => {
            const data = response.data.data
            data.memes.forEach(meme => {
                $('#memes').append(`<div><button id="${meme.id}">${meme.name}</button><br /><img src='${meme.url}' id='${meme.id + meme.width}' width='${meme.width}' height='${meme.height}' /></div>`)
                $(`#${meme.id}`).click(() => $(`#${meme.id + meme.width}`).toggle())
                $(`#${meme.id + meme.width}`).click(() => $(`#${meme.id + meme.width}`).toggle())

            });
        })
        .catch(error => console.log(error))
});
