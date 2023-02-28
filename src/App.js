import { Scanning, Splash, Home, Signup, Login, TopUp} from "./pages";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/top-up" element={<TopUp />} />
        <Route path="/scanning" element={<Scanning />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
