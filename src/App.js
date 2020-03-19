import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character"
import LocationsList from "./components/LocationsList.js";
import Location from "./components/Location"


export default function App() {
  return (
    <main>
      <Header />
      <div className="content">
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters/" component={CharacterList} />
        <Route path="/character/:id" component={Character} />
        <Route exact path="/locations/" component={LocationsList} />
        <Route path="/location/:id" component={Location} />
      </div>
    </main>
  );
}
