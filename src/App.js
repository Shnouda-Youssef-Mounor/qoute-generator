import './App.css';
import React, {useState} from 'react';
import { FacebookShareButton,WhatsappShareButton,LinkedinShareButton  } from 'react-share';
import Footer from './footer';


const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Shnouda Youssef"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <div className='section'>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
          <div className='shareFace'>
            <FacebookShareButton quote={quote.content} url={url}>
              <button className='font'> Share on Facebook </button>
            </FacebookShareButton>
            <WhatsappShareButton title={quote.content} url={url}>
              <button className='font'>Share on WhatsApp</button>
            </WhatsappShareButton>
          </div>
          <LinkedinShareButton title={quote.content} url={url}>
              <button className='font'>Share on Linkedin</button>
            </LinkedinShareButton>
        </div>

      </div>
      <Footer/>
    </div>
  )
}


export default App;
