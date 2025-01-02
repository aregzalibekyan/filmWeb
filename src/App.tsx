import Main from "./routes/Main";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

function App() {  
    // dispatch(removeTodo({todo:"new todo"}));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;