import './App.css';
import SongContainer from './containers/SongContainer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/songs" component={SongContainer}/>
      </Switch>
    </div>
  );
}

export default App;
