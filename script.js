window.addEventListener("load", main);
let left = 0;
let flyRight = true;


/* All functions */
function main() {
    flyingBird()
}

/* Start interval to move bird*/
function flyingBird () {
    setInterval(moveBird, 12);
}

function moveBird() {
    if (flyRight) {
        moveBirdToTheRight();
    } else {
        moveBirdToTheLeft();
    }
}

function moveBirdToTheRight() {
    const bird = document.querySelector("img");
    left += 0.1;
    bird.style.left = left + "%";

if (left > 90) {
    bird.style.transform = "scaleX(-1)";
    flyRight = false;
    }
}

function moveBirdToTheLeft() {
    const bird = document.querySelector("img");
    left -= 0.1; 
    bird.style.left = left + "%";

    if (left < 0) {
        bird.style.transform = "scaleX(1)";
        flyRight = true;
    }
}



   


