


class Quiz {

    static DEFAULT_QUIZ_LENGTH = 2;
  
    constructor() {
      // Array of Question instances
      this.unasked = [];
      // Array of Question instances
      this.asked = [];
      this.active = false;
      this.score = 0;
      this.scoreHistory = [];
  
      // TASK: Add more props here per the exercise
  
    }
  
    // Example method:
    startGame() {
      this.active = true;
    }
}


class Question {
    
    constructor() {
        this.text = '';
        this.answers = [];
        this.correct_Answer= '',
        this.userAnswer = null      
        
    }

    submitAnswer() {
        // for(let i=0; i < this.answers.length; i++){
        //     if(answer[i] === this.correct_Answer){
        //         return this.correct_Answer
        //     }

        // }

        if(this.userAnswer === correct_Answer){
            console.log(`Good job! You got it`)
        }
        else{
            console.log(`Sorry, that's incorrect. You answered: ${this.userAnswer}. The correct answer is ${correct_Answer}`)
        }      
        
    }

    answerStatus() {

        
    }

    

}




class TriviaApi {

}

