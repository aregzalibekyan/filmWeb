import Main from "./routes/Main";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Single from "./routes/Single";

function App() {  
    // dispatch(removeTodo({todo:"new todo"}));
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/film/:data" element={<Single />}></Route>
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;