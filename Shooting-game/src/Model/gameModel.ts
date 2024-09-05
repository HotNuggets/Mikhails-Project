export class Level{
    goal:number;
    playerScore:number;
    time:number;

    constructor(goal:number,time:number){
        this.goal=goal;
        this.time=time;
        this.playerScore=0;
    }
    reduceTime(){
        this.time-=1;
    }
    downScore(){
        if(this.playerScore ===0){
      
        }
        else{
        this.playerScore -= 5;
        }
      }
    updateScore() {
        this.playerScore += 5;
      }
    nulifyScore(){
        this.playerScore=0;
    }
}