class Box {
    x: number;
    y: number;
    tempX: number;
    tempY: number;
    tempx: number;
    tempy: number;
    direction: string;
    


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.direction = "right"

    }


    setPosition(x: number, y: number) {
        this.y = y;
        this.x = x;
    }
    setTempPosition(x: number, y: number) {
        this.tempX = x;
        this.tempY = y;
    }
    setTemp(x: number, y: number) {
        this.tempx = x;
        this.tempy = y;
    }
    setDirection(direction: string) {
        this.direction = direction;
    }
    moveUp() {
        try {
            console.log("up");
            if (this.y === undefined)
                this.y = 1;
            if (head.y <= 1)
                head.y = 499;


            head.y = head.y - 25;

        } catch (error) {
            console.log("error moveUp");

        }
    }
    moveRight() {
        try {
            console.log("right");
            if (this.x === undefined)
                this.x = 1;
            if (head.x >= 499)
                head.x = 1;
            head.x = head.x + 25;

        } catch (error) {
            console.log("error moveRight")
        }
    }
    moveLeft() {
        try {
            console.log("left");
            if (this.x === undefined)
                this.x = 1;
            if (head.x <= 1)
                head.x = 499;
            head.x = head.x - 25;

        } catch (error) {
            console.log("error moveLeft")
        }
    }
    moveDown() {
        try {
            console.log("down");
            if (this.y === undefined)
                this.y = 1;
            if (head.y >= 499)
                head.y = 1;

            head.y = head.y + 25;

        } catch (error) {
            console.log("error moveDown");

        }
    }
}
class Apple {
    x: number;
    y: number;
    counter: number;


    constructor() {
        this.x = (Math.floor(Math.random() * 21) * 25);
        this.y = (Math.floor(Math.random() * 21) * 25);
        this.counter = 0;
    }
    resetCounter() {
        this.counter = 0;
    }
    newPosition() {
        this.x = (Math.floor(Math.random() * 21) * 25);
        this.y = (Math.floor(Math.random() * 21) * 25);
        this.counter = this.counter + 1;
    }

}

const head=new Box(0,0);
head.setDirection('right')
const snake: Box[]=[head];
renderStart();
const root = document.querySelector('#page') as HTMLElement;
const apple=new Apple();


//renders the start button, to start the game .
function renderStart() {
    document.querySelector<HTMLDivElement>('#page')!.innerHTML = `
  <div class="start_button">
      <button id="start" type="button" onclick="handleDirection('${head.direction}')">Start game</button>
  </div>
`
}

//when clicking on "Play Again" this function restarts all parameters
function restart() {
    intervalId = null;
    clearInterval(undefined);
    snake.splice(1);
    head.setDirection('right');
    head.setPosition(0, 0);
    head.setTempPosition(0,0);
    head.setTemp(0,0);
    apple.resetCounter();
    apple.newPosition();
    handleDirection(head.direction);
    renderSnake(snake);
    
}


//renders the snake position and apple position
function renderBox(box: Box) {
    let html = `<div class="box" style="background-color:black;position:absolute; top:${box.y}px; left:${box.x}px; height:20px; width:20px; border-radius:5px 5px 5px 5px"></div>
    <div class="apple" style="background-color:red;position:absolute; top:${apple.y}px; left:${apple.x}px; height:10px; width:10px;"></div>
    <div class="counter" style="position:absolute;top:520px; left:250px; color:white;"><label class="score">Score: ${apple.counter} </label></div>`;
    if (head.direction === 'stop') {
        html = `<div class="box" style="background-color:black;position:absolute; top:${box.y}px; left:${box.x}px; height:20px; width:20px; border-radius:5px 5px 5px 5px"></div>
    <div class="apple" style="background-color:red;position:absolute; top:${apple.y}px; left:${apple.x}px; height:10px; width:10px;"></div>
    <div class="counter" style="position:absolute;top:250px; left:250px;"><label class="score" style="color:white;">Score: ${apple.counter} </label></div>
    <div class="start_button">
        <button id="start" type="button" onclick="restart()" style="position:absolute;top:270px; left:230px;">Play Again</button>
    </div>`;
    }

    return html;
}

//a function that saves each snake segment position to pass it on to the next segment.
function renderSnake(snake: Box[]) {
    let html = '';
    for (let i = 0; i < snake.length; i++) {
        if (i === 0) {

        } else {
            snake[i].setTemp(snake[i].x, snake[i].y);
            snake[i].setPosition(snake[i - 1].tempX, snake[i - 1].tempY);
            snake[i].setTempPosition(snake[i].tempx, snake[i].tempy);


        }
        checkCollision();
        html += renderBox(snake[i]);
        root.innerHTML = html;



    }

}

//event listener for keyboard arrow. for moving the snake
let intervalId: number | null = null;
document.addEventListener('keydown', (event: KeyboardEvent) => {

    switch (event.key) {
        case 'ArrowUp':
            if (head.direction === 'stop') {
                break;
            }
            if (head.direction === 'down')
                break;
            head.setDirection("up");
            head.setTempPosition(head.x, head.y);
            head.moveUp();
            renderSnake(snake);
            handleDirection(head.direction);

            break;
        case 'ArrowDown':
            if (head.direction === 'stop') {
                break;
            }
            if (head.direction === 'up')
                break;
            head.setDirection("down");
            head.setTempPosition(head.x, head.y);
            head.moveDown();
            renderSnake(snake);
            handleDirection(head.direction);

            break;
        case 'ArrowLeft':
            if (head.direction === 'stop') {
                break;
            }
            if (head.direction === 'right')
                break;
            head.setDirection("left");
            head.setTempPosition(head.x, head.y);
            head.moveLeft();
            renderSnake(snake);
            handleDirection(head.direction);
            break;
        case 'ArrowRight':
            if (head.direction === 'stop') {
                break;
            }
            if (head.direction === 'left')
                break;

            head.setDirection("right");
            head.setTempPosition(head.x, head.y);
            head.moveRight();
            renderSnake(snake);
            handleDirection(head.direction);
            break;
        default:
            return;
    }


});

//a function that moves the snake in a specific direction every 100ms.
function handleDirection(direction: string) {
    if (intervalId != null) {
        console.log(head.direction);
        clearInterval(intervalId);
        intervalId = null;
    }
    if (head.direction === 'stop') {

        return;
    }

    intervalId = setInterval(() => {
        if (head.direction === 'stop') {
            intervalId = null;
            handleDirection(head.direction);
            return;
        }

        if (direction === 'up') {
            head.setTempPosition(head.x, head.y);
            head.moveUp();
        }
        if (direction === 'down') {
            head.setTempPosition(head.x, head.y);
            head.moveDown();
        }
        if (direction === 'right') {
            head.setTempPosition(head.x, head.y);
            head.moveRight();
        }
        if (direction === 'left') {
            head.setTempPosition(head.x, head.y);
            head.moveLeft();
        }


        isEaten();
        renderSnake(snake);

    }, 100);
}

//function that checks if the "head" of the snake eats the apple by comapring the positions.
function isEaten(){
    const tolerance = 25; 

    if (Math.abs(head.x - apple.x) < tolerance && Math.abs(head.y - apple.y) < tolerance) {
        apple.newPosition();
        const audioEat = document.querySelector('#eat') as HTMLAudioElement;
        audioEat.play();
        addSnake();
    }
}

//a function that adds a segment to a snake if apple was eaten
function addSnake() {
    snake.push(new Box(head.tempX, head.tempY));
}

//a function the checks if the snake ate himself, which is a gameover.
function checkCollision() {

    for (let i = 3; i < snake.length; i++) {
        if ((Math.floor(head.y / 25) + 1 === Math.floor(snake[i].y / 25) + 1) && (Math.floor(head.x / 25) + 1 === Math.floor(snake[i].x / 25) + 1)) {
            head.setDirection("stop");


        }
    }
}

