const onClick = document.querySelector('#click');
const text = document.querySelector('#text');
const author = document.querySelector('#author');
let i = 0;
let quotes = [
  {
    quote: 'My tastes are simple: I am easily satisfied with the best.',
    person: 'Winston Churchill',
  },
  {
    quote:
      'You have power over your mind not outside events. Realize this, and you will find strength.',
    person: 'Marcus Aurelius',
  },
  {
    quote: 'Jealousy is a weak emotion.',
    person: 'Jay-Z',
  },
  {
    quote: 'The best thing I did was to choose the right heroes.',
    person: 'Warren Buffett',
  },
  {
    quote:
      "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
    person: 'Bill Gates',
  },
  {
    quote: 'Do, or do not. There is no try.',
    person: 'Yoda',
  },
  {
    quote:
      'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    person: 'Ralph Waldo Emerson',
  },
  {
    quote: 'Talk is cheap. Show me the code.',
    person: 'Linus Torvalds',
  },
];

function generator(e) {
  if (quotes[i] < quotes.length - 1) {
    i = 0;
  } else {
    i++;
  }
  text.innerText = quotes[i].quote;
  console.log(quotes[i].quote);
  author.innerText = quotes[i].person;
  console.log(quotes[i].person);
  e.preventDefault();
}
onClick.addEventListener('click', generator);
