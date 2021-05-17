import './App.css';
import SongTableContainer from './containers/SongTableContainer';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router';

function App() {

  const genres = [
    {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
    {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
    {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
    {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}
  ]

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <SongTableContainer genres={genres}/>
          )
        }} />
      </Switch>
    </div>
  );
}

export default App;
