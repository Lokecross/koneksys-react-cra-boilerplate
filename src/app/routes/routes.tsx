import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from '../../presentation/pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export { Routes };
