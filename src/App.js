import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Squad from "./Pages/Squad";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Squad" exact component={Squad} />
    </BrowserRouter>
  );
}

export default App;
