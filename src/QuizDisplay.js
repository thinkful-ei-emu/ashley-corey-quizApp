import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
       'submit #form-submit' : 'handleSubmit'

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
    // for (let i = 0; i < this.answers.length; i++){
    //   console.log(this.answers[i]);

    // let answers = asked.answers;

    if (this.model.asked[0].answers.length <= 2) {
      return `
      <p>${this.model.asked[0].text}</p>
      <input type="radio" name="option" value="1">${this.model.asked[0].answers[0]}<br>
      <input type="radio" name="option" value="2">${this.model.asked[0].answers[1]}<br>
      <button>Submit</button>
      </div>
      `;
    } 
    else {
    return `
        <form role="form" id="form-submit" name="form-submit">
          <p>${this.model.asked[0].text}</p>
          <input type="radio" name="answer" value="1">${this.model.asked[0].answers[0]}<br>
          <input type="radio" name="answer" value="2">${this.model.asked[0].answers[1]}<br>
          <input type="radio" name="answer" value="3">${this.model.asked[0].answers[2]}<br>
          <input type="radio" name="answer" value="4">${this.model.asked[0].answers[3]}<br>
          <input type="submit" value="submit">
        </form>
          `;
  }
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
