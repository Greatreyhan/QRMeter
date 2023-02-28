import { Scanning, Splash, Home, Signup, Login, TopUp, Invoice, FirebaseTest, MenuTopUp} from "./pages";
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/topup" element={<MenuTopUp />} />
        <Route path="/scanning" element={<Scanning />} />
        <Route path="/invoice" elemet={<Invoice />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
