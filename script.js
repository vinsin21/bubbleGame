

let hitval;

function createBubble() {
    let cluster = "";
    let screenWidth = window.innerWidth
    let screenHeight = window.innerHeight



    let numberOfBubbles = Math.floor(screenHeight * screenWidth / 5000)


    for (let i = 0; i < numberOfBubbles; i++) {
        let rnd = Math.floor(Math.random() * 10);
        cluster += ` <div class="bubble">${rnd}</div>`
        document.querySelector(".panel-bottom").innerHTML = cluster
    }

}


function randomHit() {
    hitval = Math.floor(Math.random() * 10);
    document.querySelector(".hit-val").textContent = hitval;
}

let timer = 15;
let timeout;
function timmer() {

    timeout = setInterval(() => {
        if (timer > 0) {
            timer--
            document.querySelector(".timmer").textContent = timer;
        } else {
            document.querySelector(".panel-bottom").innerHTML = ` 
            <h1>SCROE:${document.querySelector(".score").textContent}</h1>
            `
            clearInterval(timeout)

        }
    }, 1000);
}

let score = 0;
function increaseScore() {
    score += 10
    document.querySelector(".score").textContent = score;
}

function CorrectHit() {

    let bubbles = document.querySelectorAll(".bubble");
    bubbles.forEach((bubble) => {
        bubble.addEventListener("click", function (dets) {
            console.log("cliked")
            console.log(bubbles)
            console.log(hitval, Number(bubble.textContent))
            if (Number(bubble.textContent) === Number(hitval)) {
                increaseScore();
                randomHit();
                createBubble();
                CorrectHit()

            }

        })
    })
}


createBubble()
randomHit()
timmer()
CorrectHit()



