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
    if (this.model.asked[0].answers.length <= 2) {
      return `
      <p>${this.model.asked[0].text}</p>
      <input type="radio" name="option" value="1">${this.model.asked[0].answers[0]}<br>
      <input type="radio" name="option" value="2">${this.model.asked[0].answers[1]}<br>
      <button>Submit</button>
      </div>
      `;
    } 
    return `
        <form role="form" id="input-submit" name="form-submit">
          <p>${this.model.asked[0].text}</p>
          <input type="radio" name="answer" value="${this.model.asked[0].answers[0]}">${this.model.asked[0].answers[0]}<br>
          <input type="radio" name="answer" value="${this.model.asked[0].answers[1]}">${this.model.asked[0].answers[1]}<br>
          <input type="radio" name="answer" value="${this.model.asked[0].answers[2]}">${this.model.asked[0].answers[2]}<br>
          <input type="radio" name="answer" value="${this.model.asked[0].answers[3]}">${this.model.asked[0].answers[3]}<br>
          <button type"submit" value="submit">Button</button>
        </form>
          `;
  
  }    
  

  // _gernerateNextQuestion() {

  // }


  // _generateEndOfTest() {
    
  // }

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
    console.log(event.target.answer.value);
    //const valusePosition = event
    //answerCurrentQuestion();
    
  }

  handleStart() {
    this.model.startGame();
  }

  handleSubmit() {
    // this.model.nextQuestion();
    // this.model.getCurrentQuestion();
    event.preventDefault();
    console.log("hello");
  }
}

export default QuizDisplay;
