import React from "react";
import "./styles.css";
import Simpsons from "./simpsons.png";

export default function App() {
  return (
    <div className="App">
      <QuotesContainer />
    </div>
  );
}

// componente contenedor
class QuotesContainer extends React.Component {
  state = {
    quotes: null
  };

  componentDidMount() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3")
      .then(res => {
        console.log(res);

        return res.json();
      })
      .then(quotes => this.setState({ quotes }));
  }

  render() {
    const { quotes } = this.state;
    return <Quotes quotes={quotes} />;
  }
}

// componente de presentación
function Quotes({ quotes }) {
  console.log(quotes);

  if (!quotes) return <p>Loading quotes...</p>;

  return (
    <div>
      <img width="40%" src={Simpsons} alt="simpsons-logo" />
      <ul>
        {quotes.map(({ image, character, quote }, index) => (
          <li key={index}>
            <img src={image} alt="Simpson Character" />
            <p>{character}</p>"{quote}"
          </li>
        ))}
      </ul>
    </div>
  );
}
