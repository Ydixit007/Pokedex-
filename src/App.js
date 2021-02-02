import React from "react";
import Pokemon from "./pokemon";
import Pokedex from "./pokedex";
import { Route ,  Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Pokedex {...props} />} />
        <Route exact path="/:pokemonId" render={(props) => <Pokemon {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
