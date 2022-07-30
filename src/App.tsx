import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import routes from './route-config';
import configureValidations from './Validations';

configureValidations();

function App() {
    
  return (
    
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Switch>
          {routes.map(route => 
          <Route key={route.path} path={route.path} exact={route.exact}>
            <route.component />
          </Route>)}
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

//we installed bootstrap by "npm install bootstrap@5.0"
// after installing bootstrap, we import to index.tsx "import '../node_modules/bootstrap/dist/css/bootstrap.css'"