import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
       'click .submit' : 'handleSubmit',

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


    console.log(this.model.asked[0].answers);



    return `<div>
    <p>hello ${this.model.asked[0].text}</p>
    <button class="submit">Start Quiz</button>    
    </div>    `

    
  }



  template() {
    let html = '';
    console.log(this.model.active);
    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    }
    else if (this.model.active) {
      console.log('test condition for generteQuiz');

      html = this._generateQuiz();

    }
    
    return html;
  }

  handleStart() {
    this.model.startGame();
  }

  handleSubmit() {
    this.model.nextQuestion();
    this.model.getCurrentQuestion();
  }
}

export default QuizDisplay;
