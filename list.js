
fetch(`https://pcfy.redberryinternship.ge/api/laptops?token=0a27eede2714b9c80c604a4f1ad0c88a`)
.then((response) => response.json())
.then((data) => {
 console.log(data.data);
 const listProfiles = data.data;
 const list = document.getElementById('list');
 for(let profile of listProfiles){
    const boxElement = `
    <div class="box">
    <img class="boxImg" src="https://pcfy.redberryinternship.ge/${profile.laptop.image}" alt="">
    <div class="text">
        <div class="listName">
            <p>${profile.user.name} ${profile.user.surname}</p>
        </div>
        <div class="listCpu">
            <p>pentinum II</p>
        </div>
        <div class="seemore">   
            <a href="./detail.html?id=${profile.laptop.id}">მეტის ნახვა</a>
        </div>
        
    </div>
    
    </div>
    `
    list.innerHTML += boxElement;
 }
})