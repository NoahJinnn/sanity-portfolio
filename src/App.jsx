import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import SinglePost from "./component/SinglePost";
import Post from "./component/Post";
import Project from "./component/Project";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/post/:slug">
            <SinglePost />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
