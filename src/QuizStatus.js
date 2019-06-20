import Model from './lib/Model';
import Renderer from './lib/Renderer';

class QuizStatus extends Renderer {
  template() {
    // return some HTML here, utilizing `this.model`    
    
    //write conditionals and instance of quizStatus
    //status.template 
    this.model.handleScoreHistory()
    let highScore;
    if(this.model.scoreHistory.length === 0){ 
       
      highScore = 0;
          
    }    
    else {      
      highScore = this.model.scoreHistory.find(score => score >= this.model.score);
      
    }
    
    
    

    
    return `
      <div>
        <header>
      
          <p>Score: ${this.model.score}</p>
          <p>High Score: ${highScore}</p>
          <p>Progress: ${this.model.asked.length} of 5</p>

        </header>
      </div>
    `;

  }



  
}

// this.model.update();

export default QuizStatus;