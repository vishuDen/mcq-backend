import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";


function App() {

  return (
    <Router>
      <main className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
