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

const drawData = ( id , value) => {
    const valueElem = document.getElementById(id);
    console.log(valueElem, id)
    valueElem.innerText = value;
}

fetch(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=0a27eede2714b9c80c604a4f1ad0c88a`)
    .then((response) => response.json())
    .then((data) => {
        const laptopImg = document.getElementById('img2')
        laptopImg.src = 'https://pcfy.redberryinternship.ge/' + data.data.laptop.image;
        console.log(data)
        const laptop = data.data.laptop;
        const cpu = laptop.cpu
        const user =  data.data.user;
        
        const laptopName =  laptop.name;
        const userName = user.name;
        const teamId = user.team_id;
        const positionId = user.position_id;
        const email = user.email;
        const telNum = user.phone_number;
        const laptopBrand = laptop.brand_id;
        const ram = laptop.ram;
        const memoryType = laptop.hard_drive_type;
        const cpuName = cpu.name;
        const cpuCore = cpu.cores;
        const cpuFlow = cpu.threads;
        const price = laptop.price;
        const state = laptop.state;
        const purchaseDate = laptop.purchase_date;

        const userNameElement = document.getElementById('name');
        userNameElement.innerText= userName;
        console.log(teamId, team)
        drawData("team",teamId);
        drawData("position",positionId);
        drawData("email",email);
        drawData("team",teamId);
        drawData("number",telNum);
        drawData("laptopNameId",laptopName)
        drawData("laptopBrand",laptopBrand)
        drawData("laptopRam",ram)
        drawData("cpuType",cpuName)
        drawData("cpuCoreId",cpuCore)
        drawData("cpuFlowId",cpuFlow)
        drawData("laptopPriceId",price)
        drawData("laptopStateId",state)
        drawData("pulledDateId", purchaseDate)
    })


    function getSelectOptions(selectName, subUrl, valueProperty = 'id') {
        if(!selectName) {
            console.error('No selectName provided!');
            return;
        }
        const select = document.getElementById(selectName);
        if(!select) {
            console.error(`select with name (${selectName}) not found`)
            return;
        }       
    }
    fetch(`https://pcfy.redberryinternship.ge/api/${subUrl}`)
    .then((response) => response.json())
    .then((data) => {
        const options = data.data;
        console.log(options)
    })







