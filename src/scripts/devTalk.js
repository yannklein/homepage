/* eslint-disable no-console */
const talkToDevs = () => {
  const answerStyle = `
    background: rgba(9,9,121,0.6);
    color: white; 
    border-radius: 0 8px 8px 0;
    border: 1px dotted white;
    padding: 4px 16px;`;

  const welcomeStyle = `background: linear-gradient( -70deg, rgba(9,9,121,0.6) 11.2%, rgba(144,6,161,0.6) 53.7%, rgba(0,212,255,0.6) 100.2% ); 
  padding: 16px;
  border-radius: 0 16px 16px 0;
  border: 1px dotted white;
  box-shadow: 8px 8px px rgba(255,255,255,0.5)`;

  setTimeout(() => {
    console.log(
      '%cHey 🤘 I knew you would come here. What are you searching for? inspiration|geekies|yanns_email',
      welcomeStyle
    );
  }, 2000);

  Object.defineProperty(window, 'inspiration', {
    get() {
      fetch(
        'https://gist.githubusercontent.com/yannklein/a5d5847c513389812b41c3fe7dad789d/raw/53d3bdf60960faba66ee7503a0c205b2cb18ea6e/inspiration-quotes.json'
      )
        .then(r => r.json())
        .then(data => {
          const quotes = data.results;
          const randomQuote = quotes[Math.floor(Math.random(quotes.length))]
          console.log(`%c${randomQuote.content}\n${randomQuote.author}`, answerStyle);
        });
      return 'Here you go:';
    }
  });
  Object.defineProperty(window, 'geekies', {
    get() {
      fetch('https://raw.githubusercontent.com/yannklein/prog-quotes/main/quotes.json')
        .then(r => r.json())
        .then(data => {
          const quote = data[Math.floor(Math.random() * data.length)];
          console.log(`%c${quote.en}\n${quote.author}`, answerStyle);
        });
      return 'Here you go:';
    }
  });
  Object.defineProperty(window, 'yanns_email', {
    get() {
      setTimeout(() => console.log('%cyann.klein [at] me.com', answerStyle), 500);
      return 'Here you go:';
    }
  });
};

export default talkToDevs;
