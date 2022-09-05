const url = window.location.href
console.log('detail.js, line 2 --->', url);

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}   

let id = getParameterByName('id');
console.log(id);

fetch(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=0a27eede2714b9c80c604a4f1ad0c88a`)
    .then((response) => response.json())
    .then((data) => {
        const laptopImg = document.getElementById('img2')
        laptopImg.src = 'https://pcfy.redberryinternship.ge/' + data.data.laptop.image;
    })


