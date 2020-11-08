import React from "react";
import Navbar from "./components/Navbar/Navbar";
import QuoteCard from "./components/QuoteCard/QuoteCard";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <QuoteCard
            quote="Shoplifting is a victimless crime, like punching someone in the dark."
            character="Nelson Muntz"
            image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
        />
        <QuoteCard
            quote="Last night's 'Itchy and Scratchy' was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world."
            character="Comic Book Guy"
            image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970"
        />
    </div>
  );
}

export default App;
