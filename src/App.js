import React from "react";
import QuoteBox from "./components/QuoteBox";

const quoteData = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandelas",
  },
  {
    text: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
    author: "Steve Jobs",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor",
    author: "Eleanor Roosevelt",
  },
  {
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ",
    author: "Oprah Winfrey",
  },
  {
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Camerons",
  },
];
const getRandom = (max) => 
  Math.round(Math.random() * ((quoteData.length-1) - 0) + 0);

function App() {
  
  const [quote, setQuote] = React.useState(quoteData[getRandom()]);
  const handleQuote = () => {
    setQuote(quoteData[getRandom()]);
  };

  console.log(quote);

  return (
    <div className="center">
      <QuoteBox quote={quote} handleQuote={handleQuote} />
    </div>
  );
}

export default App;
