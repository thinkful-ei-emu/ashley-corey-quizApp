import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'submit #input-submit': 'handleSubmit'
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
  
  _generateEndOfQuiz(){
    
    console.log('End Game! You lose! and Win!');
    return `
    <div>
    <p>
      END GAME
    </p> 
       
  </div>
    `
    //generate button
    
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
    else if (this.model.active === true) {
      
      html = this._generateQuiz();
    }
    else if (this.model.asked.length === 5 && this.model.active === false ){
      console.log('reached end game condition')

      html = this._generateEndOfQuiz();
    } 
    
    return html;
  }

  handleSubmit() {
    event.preventDefault();
    //console.log(event.target.answer.value);
    const valuePosition = event.target.answer.value;
    this.model.answerCurrentQuestion(valuePosition);
    //console.log(this.getAnswerStatus(),'answer status');    
    this.model.nextQuestion();    
    this.model.update();
    if(this.model.asked.length === 5){
      this.model.endGame();
      this.model.update();
    }
    
  }

  handleStart() {
    this.model.startGame();
  }

  handleEnd() {
    //once button is pressed go to  _generateIntro() 
  }
}

export default QuizDisplay;
