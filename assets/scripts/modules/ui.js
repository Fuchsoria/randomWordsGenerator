export default class Ui {
  constructor(resultContainer, textContainer, template) {
    this.resultContainer = resultContainer;
    this.textContainer = textContainer;
    this.template = template;
  }
  renderWords(words) {
    if (!words) {
      alert('Input your text before words generate!');
      return;
    }
    words.forEach(word => {
      let child = this.template.content.cloneNode(true);
      child.querySelector('.result__word').textContent = word;
      this.resultContainer.appendChild(child);
    });
  }
  clearWords() {
    this.resultContainer.innerHTML = '';
  }
  clearTextContainer() {
    this.textContainer.value = '';
  }
}
