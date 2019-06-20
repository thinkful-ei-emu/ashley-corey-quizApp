import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'submit #input-submit': 'handleSubmit',
      'click .try-again': 'handleEnd',
      'click .continue': 'handleNextQuestion'
    };
  }

  _generateIntro() {
    return `
      <div>
        <p>
          Welcome to the Trivia Quiz
        </p>
        <p>
          Test your smarts and see how high you can score!
        </p>
      </div>
      <div class="buttons">
        <button class="start-quiz">Start Quiz</button>
      </div>
    `;
  }

  _generateQuiz() {
    
    //we need to display comparison of useranswser and correct anwser --> separte genrate fucntion?
    console.log(this.model.asked);

    // if(this.model.asked.length === 5){
    //   this.model.active = false;
    // }
    
    return `
        <form role="form" id="input-submit" name="form-submit">
          <p>${this.model.asked[0].text}</p>
          ${this._generateInputs()}
          <button type"submit" value="submit">Submit</button>
        </form>
          `;
  
  }
  
  _generateQuizAnswer(){

    // let answerStatusValue =  this.model.getAnswerStatus();
    // console.log(anserStatusValue);

    if(this.model.getCurrentQuestion().getAnswerStatus() === -1) {
      return `        
          <p>${this.model.asked[0].text}</p>
          <p>Please select an answer</p>
          <button class="continue">Continue</button>
       
          `;
    }
    else if(this.model.getCurrentQuestion().getAnswerStatus() === 0) {
      return `
        
          <p>${this.model.asked[0].text}</p>
          <p>Sorry that was incorrect. You answered:</p>
          <p>${this.model.asked[0].userAnswer}</p>
          <p>The correct answer is:</p>
          <p>${this.model.asked[0].correctAnswer}</p>
          <button class="continue">Continue</button>       
          `;
    }
    else if(this.model.getCurrentQuestion().getAnswerStatus() === 1) {
      return `
        <p>${this.model.asked[0].text}</p>
        <p>You got it! The correct answer was:</p>      
        <p>${this.model.asked[0].correctAnswer}</p>
        <button class="continue">Continue</button>       
      `;
    }

    
    

  }
  
  _generateEndOfQuiz(){
    
    
    return `
    <div>
    <p>Good Job!</p>
    <p>Your final score was ${this.model.score} out of 5</p>       

  </div>
  <div>
  <button class="try-again">Play Again</button>
  </div>
    `
   
    
  }

  _generateInputs() {
    return this.model.asked[0].answers.map((input,i) => (`<input type="radio" name="answer" value="${this.model.asked[0].answers[i]}">${this.model.asked[0].answers[i]}<br>`)).join('');
  }


  template() {
    let html = '';
    //let currentQ = this.model.currentQuestion();
    
    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    } 
    if (this.model.active === true) {
      
      html = this._generateQuiz();
    }
    if (this.model.asked.length > 0 && this.model.asked[0].userAnswer !== null){
       
      html = this._generateQuizAnswer();
    }
    if (this.model.asked.length === 5 && this.model.active === false ){
      console.log(this.model.asked);
      console.log('reached end game condition');
      
      

      html = this._generateEndOfQuiz();
    } 
    
    return html;
  }

  handleSubmit(event) {
    event.preventDefault();    
    const answer = new FormData(event.target).get('answer')    
    this.model.answerCurrentQuestion(answer);   
    this.model.update();
    
  }


  handleStart() {
    this.model.startGame();    
  }

  handleNextQuestion() {
    if (this.model.asked.length < 5){      
      this.model.nextQuestion();  
    }

    else if(this.model.asked.length === 5){     
      this.model.endGame();
     
      
            
    }
    this.model.update();

  }

  handleEnd() {
    this.model.startGame();    
  }

}

export default QuizDisplay;
