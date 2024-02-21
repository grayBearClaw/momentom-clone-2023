const quotes = [
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: "Confucius",
  },
  {
    quote: "Youth isn't always all it's touted to be.",
    author: "Lawana Blackwell",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "This too shall pass.",
    author: "Et hoc transibit",
  },
  {
    quote: "Life is unfair, get used to it.",
    author: "Bill Gates",
  },
  {
    quote:
      "Success is not final, failure is not fatal. It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote: "It is kind of fun to do the impossible.",
    author: "Walt Disney",
  },
  {
    quote:
      "I didn't get there by wishing for it or hoping for it, but by working for it.",
    author: "Estee Lauder",
  },
  {
    quote: "I find that the harder I work, the more luck ?I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "Grind Hard, Shine Hard.",
    author: "Dwayne Johnson",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
