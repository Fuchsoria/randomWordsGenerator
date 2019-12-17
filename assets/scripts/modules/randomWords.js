export default class RandomWords {
  constructor() {
    this.setWords = this.setWords.bind(this);
  }
  setWords(text) {
    if (!text || !text.includes(' ')) {
      return '';
    }

    this.words = text.split(' ');
    this.words = this.words.filter((word) => word.length > 3);
    return this.generateWords();
  }
  sliceWord(word) {
    const firstPart = word.slice(0, word.length / 2);
    const secondPart = word.slice(word.length / 2);
    return { firstPart, secondPart };
  }
  getRandomNumber(max) {
    return Math.floor(Math.random() * (max - 1)) + 1;
  }
  getRandomWord() {
    return this.sliceWord(this.words[this.getRandomNumber(this.words.length)]);
  }
  generateWords() {
    const generatedWords = [];

    for (let i = 0; i < this.words.length; i++) {
      let firstWord = this.getRandomWord();
      let secondWord = this.getRandomWord();

      generatedWords.push(
        firstWord.firstPart.concat(secondWord.secondPart),
        firstWord.secondPart.concat(secondWord.firstPart)
      );
    }

    return [...new Set(generatedWords)];
  }
}
