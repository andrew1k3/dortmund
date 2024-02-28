// object with the data of the Borrusia Dortmund first team
const teamData = { 
    "team" : [
        {"number": 18, "name": "Youssoufa Moukoko", "age":18, "nationality": "Cameroon", "position": "Striker", "img":"Images/Team/Youssoufa-Moukoko_bvbprofilbild_regular.jpg"},
        {"number": 9,  "name": "Sebastien Haller", "age":22, "nationality": "France", "position": "Striker", "img":"Images/Team/Sebastien-Haller_bvbprofilbild_regular.jpg"},
        {"number": 27, "name": "Karim Adeyemi", "age":21, "nationality": "Germany", "position": "Forward", "img":"Images/Team/Karim-Adeyemi_bvbprofilbild_regular.jpg"},
        {"number": 7,  "name": "Giovanni Reyna", "age":20, "nationality": "United States", "position": "Winger", "img":"Images/Team/Giovanni-Reyna_bvbprofilbild_regular.jpg"},
        {"number": 11, "name": "Marco Reus", "age":38, "nationality": "Germany", "position": "Midfield", "img":"Images/Team/Marco-Reus_bvbprofilbild_regular.jpg"},
        {"number": 29, "name": "Emre Can", "age":23, "nationality": "Germany", "position": "Midfield", "img":"Images/Team/Emre-Can_bvbprofilbild_regular.jpg"},
        {"number": 19, "name": "Julian Brandt", "age":26, "nationality": "Germany", "position": "Winger", "img":"Images/Team/Julian-Brandt_bvbprofilbild_regular.jpg"},
        {"number": 22, "name": "Jude Bellingham", "age":19, "nationality": "England", "position": "Midfield", "img":"Images/Team/Jude-Bellingham_bvbprofilbild_regular.jpg"},
        {"number": 13, "name": "Raphael Guerreiro", "age":29, "nationality": "France", "position": "Full Back", "img":"Images/Team/Raphael-Guerreiro_bvbprofilbild_regular.jpg"},
        {"number": 4,  "name": "Nico Schlotterbeck", "age":23, "nationality": "Germany", "position": "Center Back", "img":"Images/Team/Nico-Schlotterbeck_bvbprofilbild_regular.jpg"},
        {"number": 15, "name": "Mats Hummels", "age":34, "nationality": "Germany", "position": "Center back", "img":"Images/Team/Mats-Hummels_bvbprofilbild_regular.jpg"},
        {"number": 25, "name": "Niklas Sule", "age":27, "nationality": "Germany", "position": "Center Back", "img":"Images/Team/Niklas-Suele_bvbprofilbild_regular.jpg"},
        {"number": 1,  "name": "Gregor Kobel", "age":25, "nationality": "Switzerland", "position": "Goalkeeper", "img":"Images/Team/Gregor-Kobel_bvbprofilbild_regular.jpg"}
    ] 
}

// updateInfo replaces the innerHTML of "info-div" with the player clicked
function updateInfo(number) {
    let player = teamData.team[number]; // index of player in object
    let infoTemplate = 
    `
    <div class="info"> 
        <h2>Click a player for more information!</h2>
        <img class="info-image" src="${player.img}">
        <h2 class="info-num">${player.number}</h2>
        <h3 class="info-name">${player.name}</h3>
        <br> Age: ${player.age} | Nationality: ${player.nationality} | Position: ${player.position}
    </div>
    `; // template HTML
    document.getElementById("info-div").innerHTML = infoTemplate; // update innerHTML with updated template
    document.getElementById("team-label").scrollIntoView(true);
}


// footer and ball code
window.onscroll=function() {
    let scrollTop = document.documentElement.scrollTop;
    let footer = document.getElementById('footer');
    let ball1 = document.getElementById('ball-div');
    let ball2 = document.getElementById('ball2-div');
    let logo = document.getElementsByClassName('spinner');
    if (scrollTop < 150) {
        footer.style.display = 'none';
    }
    else {
        slideUp(footer, scrollTop);
    }

    if (scrollTop < 1000) {
        console.log(ball1.style.left);
        ball1.style.left = `${(scrollTop-200)/8}vw`;
        ball1.style.transform = `rotate(${scrollTop}deg)`;
    }

    if (scrollTop > 1200 && scrollTop < 2500) {
        console.log(ball1.style.right);
        ball2.style.right = `${(scrollTop-1500)/8}vw`;
        ball2.style.transform = `rotate(${-scrollTop}deg)`;
    }
    for (i = 0; i < logo.length; i++) {
        logo[i].style.transform = `rotate(${((i-2.5)*scrollTop)/5}deg)`;
    }
}

function slideUp(element, n) {
    element.style.display = 'flex';
    if (n > 375) {
        element.style.bottom = `0px`;
    }
    else {
        element.style.bottom = `${((n/1.5)-250)}px`;
    }
}