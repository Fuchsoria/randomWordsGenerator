import RandomWords from './modules/randomWords';
import Ui from './modules/ui';

const textContainer = document.querySelector('.text');
const generateForm = document.querySelector('.generate-form');
const resultContainer = document.querySelector('.result');
const template = document.querySelector('#result-template');

const wordsGenerator = new RandomWords();
const ui = new Ui(resultContainer, textContainer, template);

generateForm.addEventListener('submit', e => {
  e.preventDefault();
  Promise.resolve()
    .then(ui.clearWords())
    .then(ui.renderWords(wordsGenerator.setWords(textContainer.value)))
    .then(ui.clearTextContainer())
    .catch(err => console.log(err));
});
