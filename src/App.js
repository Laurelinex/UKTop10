import './App.css';
import SongTableContainer from './containers/SongTableContainer';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router';

function App() {

  const genres = [
    {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=10/json"},
    {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=10/genre=21/json"},
    {name: "Rap", url: "https://itunes.apple.com/gb/rss/topsongs/limit=10/genre=18/json"},
    {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=10/genre=17/json"},
    {name: "R&B", url: "https://itunes.apple.com/gb/rss/topsongs/limit=10/genre=15/json"},
    {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=10/genre=6/json"}
  ]

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <SongTableContainer genres={genres[0]}/>
          )
        }} />
        <Route exact path="/rock" render={() => {
          return (
            <SongTableContainer genres={genres[1]}/>
          )
        }} />
        <Route exact path="/rap" render={() => {
          return (
            <SongTableContainer genres={genres[2]}/>
          )
        }} />
        <Route exact path="/dance" render={() => {
          return (
            <SongTableContainer genres={genres[3]}/>
          )
        }} />
        <Route exact path="/rnb" render={() => {
          return (
            <SongTableContainer genres={genres[4]}/>
          )
        }} />
        <Route exact path="/country" render={() => {
          return (
            <SongTableContainer genres={genres[5]}/>
          )
        }} />
      </Switch>
    </div>
  );
}

export default App;
