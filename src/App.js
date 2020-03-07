import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './layout/Nav'
import NewsPage from './components/NewsPage'
import NotFound from './routes/NotFound'

const App = () => {

    return (
        <div>
            <Router basename='/react-news'>
                <Nav />
                <Switch>
                    <Route path='/:category?' component={NewsPage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;