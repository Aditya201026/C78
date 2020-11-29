var reasons = ["Aditya R Shankar", "Setty Dakshayani (Mother)", "Ravi shankar N (Father)", "Chetty Nirmala (GrandMother)", "Cheety veerappa (GrndFather)", "", "", "S Nagaraj (GrandFather)", "Nagratana (GrandMother)", "Shreyas Thuppad (Cousin Brother)", "Setty Annanpurna (Aunt)", "Satish Thuppad (Uncle)", "Sivananda (Mama)", "Friends", "Ardarsh (Cousin Brother)", "Ashwika(Cousin Sister)", "Avani (Cousin Sister)", "Hitvik (Cousin Brother)"];
var images = ["https://www.linkpicture.com/q/Aditya_3.jpg", "https://www.linkpicture.com/q/Chick_2.png", "https://www.linkpicture.com/q/Appa_1.jpg", "https://www.linkpicture.com/q/aaaaaaaaaaajjjjjjjjjjiiiiiiiiiiiiiiii.jpg", "https://www.linkpicture.com/q/ttaattaa11.jpg", "https://www.linkpicture.com/q/Amma-Family.jpg", "https://www.linkpicture.com/q/Appa-Family.jpg", "https://www.linkpicture.com/q/tata-2-crop.jpg", "https://www.linkpicture.com/q/Aji-2-crop.jpg", "https://www.linkpicture.com/q/Shreyas.jpg", "https://www.linkpicture.com/q/Dadama.jpg", "https://www.linkpicture.com/q/Dodapa.jpg", "https://www.linkpicture.com/q/Uncle.jpg", "", "https://www.linkpicture.com/q/Adarsh.jpg", "https://www.linkpicture.com/q/Ashvica.jpg", "https://www.linkpicture.com/q/Avani.jpg", "https://www.linkpicture.com/q/Hitu.jpg"];
var i = 0;

function nextslide() {

    if (i == reasons.length) {
        i = reasons.length-1;
    }
    document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
    document.getElementById("audio").play();
}

function previousslide() {
    if (i < 0) {
        i = 0;
    }
    document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i--;
    document.getElementById("audio").play();
}