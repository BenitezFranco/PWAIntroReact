import Home from './Paginas/Home/Home.js';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetalleReceta from './Paginas/Recetas/Recetas.js';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/receta/:id" component={DetalleReceta} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));