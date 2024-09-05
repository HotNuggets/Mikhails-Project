import { Weapon } from "../Model/WeaponModel";
import { Target } from "../Model/TargetModel";
import { Level } from "../Model/gameModel";
import { renderStart } from "./startbutton";


export function renderHomeScreen(weapon: Weapon,root: HTMLElement,targets: Target[],level:Level) {
    let gameOver = false; // Flag to check if the game is over
  root.innerHTML = `
        <div class="window">
            <div class="curtains"></div>
            <div class="weaponBox" style="width:150px;height:150px;right:0;bottom:0;position:absolute;">
                <img src="${weapon.image}" class="${weapon.name}" style="height:100%;width:100%;">
            </div>
        </div>
        <div id="score" style="position:absolute; top:20px; right:20px; font-size:24px; color:white;">Score: ${level.playerScore}</div>
        <div id="goal" style="position:absolute; top:20px; right:50vw; font-size:24px; color:white;">Goal:${level.goal}</div>
         <div id="timer" style="position:absolute; top:20px; left:20px; font-size:24px; color:white;">Time: ${level.time}</div>`;

    // background music
        const gameAudio = new Audio(`/src/audio/gameAudio.mp4`);
        gameAudio.play();
        gameAudio.addEventListener('ended', () => {
            gameAudio.currentTime = 0; 
            gameAudio.play(); 
        });
        //``````````````````````````````````````````````````````

   //shooting audio and shooting holes 
  const windowElement = root.querySelector(".window") as HTMLElement;

  windowElement.addEventListener("click", (event: MouseEvent) => {
    if (gameOver) return;
    const x = event.clientX - windowElement.offsetLeft;
    const y = event.clientY - windowElement.offsetTop;

    const bulletHole = document.createElement("img");
    bulletHole.src = "/src/images/weapons/bulletHole.png";
    bulletHole.style.position = "absolute";
    bulletHole.style.width = "30px";
    bulletHole.style.height = "30px";
    bulletHole.style.left = `${x - 15}px`;
    bulletHole.style.top = `${y - 15}px`;
    bulletHole.style.pointerEvents = "none";

    windowElement.appendChild(bulletHole);

    setTimeout(() => {
      windowElement.removeChild(bulletHole);
    }, 500);

    const audioShoot = new Audio(`${weapon.shootingAudio}`);
    audioShoot.play();
    //```````````````````````````````````````````````````````````````````````   
    
    //}
    
    //setInterval(randomizeTargets(i), 5000);
    //hitting and render targets
   
   /* let hitTarget = false;

    targets.forEach((target) => {
        const targetBounds = target.gameContainer.getBoundingClientRect(); 
        const windowBounds = windowElement.getBoundingClientRect(); 
    
        const clickX = event.clientX - windowBounds.left; 
        const clickY = event.clientY - windowBounds.top;
    
        
        if (
          clickX > targetBounds.left &&
          clickX < targetBounds.right &&
          clickY > targetBounds.top &&
          clickY < targetBounds.bottom
        ) {
          handleTargetHit(target);  
          hitTarget = true;
        }
    });
    if (hitTarget) {
        const audioShoot = new Audio(`${weapon.shootingAudio}`);
        audioShoot.play();
      }*/
  });
  
  const targetElement = document.createElement("img");
    targetElement.className = "targetImg";
    targetElement.style.position = "absolute";
    targetElement.style.height = "300px";
    targetElement.style.width = "150px";
    windowElement.appendChild(targetElement);
  
    // Function to render a random target

    let currentTarget: Target | null = null; // Store the current target for comparison

    // Function to render a random target
    const renderRandomTarget = () => {
        if (gameOver) return;
        const randomIndex = Math.floor(Math.random() * targets.length);
        currentTarget = targets[randomIndex];  // Store the current target
        currentTarget.setRandomPosition();
        targetElement.src = currentTarget.image;
        targetElement.style.left = `${currentTarget.position.x}px`;
        targetElement.style.top = `${currentTarget.position.y}px`;
    };
  
    renderRandomTarget();
    const targetInterval = setInterval(() => {
      renderRandomTarget();
    }, 1000);

    const updateScoreDisplay = () => {
        const scoreElement = root.querySelector("#score") as HTMLElement;
        scoreElement.textContent = `Score: ${level.playerScore}`;
    };

    targetElement.addEventListener("click", () => {
        if(currentTarget&&currentTarget.name==="cat")
            level.downScore();
        else
        level.updateScore();
        updateScoreDisplay();
    });    


    const timerElement = root.querySelector("#timer") as HTMLElement;
    const timerInterval = setInterval(() => {
        level.reduceTime();
        timerElement.textContent = `Time: ${level.time}`;

        if (level.time <= 0) {
            clearInterval(timerInterval);
            clearInterval(targetInterval);
            gameOver = true;
            gameAudio.pause();
            targetElement.style.display = "none";
            if(level.playerScore>=level.goal){
                alert("You Have Won");
                level.nulifyScore();
               renderStart(root);
            

            }
            else
            endGame();
        }
    }, 1000);

   
    const endGame = () => {
     
        alert("Game Over!"); 
        level.nulifyScore();
        renderStart(root);

    };
  //const targetContainer = document.createElement("div");
 // targetContainer.classList.add("grid-container");
 // root.appendChild(targetContainer);

  //renderTarget(targets, targetContainer);
  
}
