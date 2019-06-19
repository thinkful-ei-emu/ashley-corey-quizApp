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
    // if (this.model.asked[0].answers.length <= 2) {
    //   return `
    //   <p>${this.model.asked[0].text}</p>
    //   <input type="radio" name="option" value="1">${this.model.asked[0].answers[0]}<br>
    //   <input type="radio" name="option" value="2">${this.model.asked[0].answers[1]}<br>
    //   <button>Submit</button>
    //   </div>
    //   `;
    // } 
    console.log(this.model.asked);
    
    return `
        <form role="form" id="input-submit" name="form-submit">
          <p>${this.model.asked[0].text}</p>
          ${this._generateInputs()}
          <button type"submit" value="submit">Submit</button>
        </form>
          `;
  
  }    
  
  // _generateEndOfQuiz(){
  //   if( this.model.asked[0].answer.length === 5 ) {
  //     return console.log('End Game! You lose! and Win!');
  //   }
  // }

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
      // for (let i = 0; i < this.answers.length; i++){
      //   console.log(this.answers[i]);
      // }
      html = this._generateQuiz();
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
  }

  handleStart() {
    this.model.startGame();
  }

  // handleEnd() {
  //   this.model.endGame();
  // }
}

export default QuizDisplay;
