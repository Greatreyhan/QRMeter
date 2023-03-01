import { Scanning, Splash, Home, Signup, Login, TopUp, Invoice, FirebaseTest, MenuTopUp, Laporan, Riwayat, Edit} from "./pages";
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
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/topup" element={<MenuTopUp />} />
        <Route path="/scanning" element={<Scanning />} />
        <Route path="/invoice" elemet={<Invoice />} />
        <Route path="/ewallet" elemet={<TopUp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
