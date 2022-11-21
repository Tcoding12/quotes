import React from "react";

function QuoteBox({ quote, handleQuote }) {
  return (
    <div id="quote-box" className="container">
      <div id="text" className="quotes">
        {quote?.text}
      </div>
      <div className="autor" id="author">
        {quote?.author}
      </div>

      <div className="buttonsContainer">
        <button onClick={handleQuote} id="new-quote">
          New Quote
        </button>

        <a
          target="_blank"
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
        >
          Tweet
        </a>
      </div>
    </div>
  );
}

export default QuoteBox;
