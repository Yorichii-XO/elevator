function openDoor() {
    const door1 = document.getElementById('door1');
    const door2 = document.getElementById('door2');
    door1.style.animation = 'openToLeft 0.5s forwards';
    door2.style.animation = 'openToRight 0.5s forwards';
}

function closeDoor() {
    const door1 = document.getElementById('door1');
    const door2 = document.getElementById('door2');
    door1.style.animation = 'closeToLeft 0.5s forwards';
    door2.style.animation = 'closeToRight 0.5s forwards';
}


async function moveElevator(destination) {
    const elevator = document.getElementById('spanToMove');
    const caseElement = document.querySelector(`.case${destination}`);
    const caseHeight = caseElement.clientHeight; 
    const destinationPosition = caseElement.offsetTop + caseHeight / 2;
    elevator.style.transition = 'top 0.8s ease-in-out';
    elevator.style.top = `${destinationPosition}px`;
   
}

document.addEventListener('DOMContentLoaded', function() {
    const foo0Div = document.querySelector('.foo0');
    const header = document.querySelector('.header');
    let head0Displayed = false; 

    foo0Div.addEventListener('click', async function() {
        await moveElevator(0);
        setTimeout(openDoor, 1000); 
        setTimeout(closeDoor, 2000);
        setTimeout(() => {
            if (!head0Displayed) {
                const head0 = document.querySelector('.head0').cloneNode(true); 
                header.appendChild(head0); 
                head0Displayed = true;
            } else {
                const lastHead0 = header.lastElementChild;
                head0Displayed = false; 
            }
        }, 2000); 
    });


   
    });
    const foo1Div = document.querySelector('.foo1');
    let head1Displayed = false; 

   
    
    
    foo1Div.addEventListener('click', async function() {
        await moveElevator(1);
        setTimeout(openDoor, 1000); 
        setTimeout(closeDoor, 2000);
            for (let i = 1; i <= 1; i++) { 
            setTimeout(() => {
                const head1 = document.querySelector(`.head${i}`); 
                head1.style.display = "block";
            }, (i + 1) * 300); 
        }
           
    });
    

    const foo2Div = document.querySelector('.foo2');
    foo2Div.addEventListener('click', async function() {
        await moveElevator(2);
        setTimeout(openDoor, 1000); 
        setTimeout(closeDoor, 2000);
    
        for (let i = 1; i <= 2; i++) { 
            setTimeout(() => {
                const head = document.querySelector(`.head${i}`); 
                head.style.display = "block";
            }, (i + 1) * 300); 
        }
    });
    
    const foo3Div = document.querySelector('.foo3');
    foo3Div.addEventListener('click', async function() {
        await moveElevator(3);
        setTimeout(openDoor, 1000); 
        setTimeout(closeDoor, 2000);
    
        for (let i = 1; i <= 3; i++) { 
            setTimeout(() => {
                const head = document.querySelector(`.head${i}`); 
                head.style.display = "block";
            }, (i + 1) * 300); 
        }
    });
    
    const foo4Div = document.querySelector('.foo4');
    foo4Div.addEventListener('click', async function() {
        await moveElevator(4);
        setTimeout(openDoor, 2000); 
        setTimeout(closeDoor, 3000);
        for (let i = 1; i <= 4; i++) { 
            setTimeout(() => {
                const head = document.querySelector(`.head${i}`); 
                head.style.display = "block";
            }, (i + 1) * 300); 
        }
});

document.addEventListener('DOMContentLoaded', function() {
    const foo0Div = document.querySelector('.foo0');
    foo0Div.addEventListener('click', async function() {
        await moveElevator(0);
        const head0 = document.querySelector('.head0'); 
        head0.style.display = "block"; 

    });
})

function Start() {
    const startButton = document.getElementById("start-button");
    const fooDivs = document.querySelectorAll('.foo');
    startButton.disabled = true; 
    fooDivs.forEach(div => {
        div.onclick = null; 
    });
}

function Reset() {
    location.reload(); 
}
