import Model from './lib/Model';
import Renderer from './lib/Renderer';

class QuizStatus extends Renderer {
  template() {
    // return some HTML here, utilizing `this.model`

    // const test = `${this.model}`;

    console.log(test);

    return `
      <div>
      <p>TEST RUN</p>
      </div>
    `;


   

  }

  
}

// this.model.update();

export default QuizStatus;