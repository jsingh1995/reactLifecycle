import first from './first.jpg';
import './App.css';
import sec from './sec.jpg';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/topics">Data</Link>
                    </li>

                    <li>
                        <Link to="/about">Cool Picture</Link>
                    </li>

                </ul>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/topics">
                        <Topics />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2 class = 'box1'></h2>
            <h2 class='box2'></h2>
            <h2 class='box3'></h2>

        </div>
    );
}

function About() {
    return <h2><img src= {first} alt="first" /></h2>;
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>DATA</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/Name = Jaspreet Singh, Age = 25, Color = Red, ID = 1`}>Name = Jaspreet Singh, Age = 25, Color = Red, ID = 1;</Link>
                </li>
                <li>
                    <Link to={`${match.url}/Name = John Cena, Age = 35, Color = Pink, ID = 2;`}>
                        Name = John Cena, Age = 35, Color = Pink, ID = 2;
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/Name = The Undertaker, Age = 37, Color = Black, ID = 3;`}>
                        Name = The Undertaker, Age = 37, Color = Black, ID = 3;
                    </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a one of the options.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>{topicId}</h3>;
}

