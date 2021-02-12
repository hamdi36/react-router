import './App.css';
import React, { useState } from 'react';
import Main from './component/Main';
import { moviesData } from './component/MoviesData'
import Header from './component/Header/Header';
import { Route, Switch } from "react-router-dom";
import Home from './component/Home';
function App(props) {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("")
  const AddNewMovie = (x) => {
    setMovies([...movies, x])
  }

  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <Switch>
        {/* <Route exact path="/" > */}
          <Main movies={movies.filter((el) =>
            el.name.toLowerCase().includes(search.trim()))}
            AddNewMovie={AddNewMovie} />
    
          <Route exact path="/Home/:id" render={(props) => (<Home {...props} movies={movies} />)} />
     </Switch>
    
    </div>
  );
}

export default App;
