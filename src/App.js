import Dex from "./Dex"
import css from "./App.css"
import { useState } from "react";
function App() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  function getPokemon(poke) {
    
    // dude I should study promises and async ASAP
    fetch(baseUrl + poke)
    .then(response => response.json())
    .then(data => {
      setPokemon({...data});
    })
    .catch(err => console.log(err));

  }

  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState(null);

  return (
    <main className="container">
      PokéDex
      <div className="search">
        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="nome do pokémon"/>
        <button className="search__button" onClick={() => getPokemon(input)}>Search</button>
      </div>
      <Dex poke={pokemon}/>
    </main>
  );
}

export default App;
