import Model from './lib/Model';
import Renderer from './lib/Renderer';

class QuizStatus extends Renderer {
  template() {
    // return some HTML here, utilizing `this.model`    
    
    //write conditionals and instance of quizStatus
    //status.template 

    
    return `
      <div>
        <header>
      
          <p>Score: ${this.model.score}</p>
          <p>High Score: ${this.model.scoreHistory}</p>
          <p>Progress: ${this.model.asked.length} of 5</p>

        </header>
      </div>
    `;

  }

  
}

// this.model.update();

export default QuizStatus;