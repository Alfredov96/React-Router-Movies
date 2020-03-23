import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
const [films, setFilms] = useState(MovieList)

  return (
    <div>
      {/* <div className='navBar'>
        <Link to='/'>Home</Link>
        <Link to='./Movies/MovieList'>Movie list </Link>
        <Link to='./Saved-List'>Saved Movies</Link>
      </div> */}
    <Route exact path='/'>
      <Movie />
    </Route>

    <Route path='./Movies/MovieList'>
      <MovieList />
    </Route>

    <Route path='./Saved-List'>
      <SavedList />
    </Route>

    </div>
    
  );
};

export default App;
