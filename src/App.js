import './style/App.css';
import Presentation from "./pages/Presentation";
import Logo from "./components/Logo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Router from "./pages/Router";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="App">
        <BrowserRouter> {/* Attention, avec le router, tous le code de App doit se trouver dans BrowserRouter  */}
            <header>
                <Logo/>
                <h1>React - POE Java</h1>
            </header>
            <Navigation/>
            <main className="main">
                <Routes>
                    <Route path="/" element={<Presentation/>} />
                    <Route path="/routing" element={<Router />}  />
                </Routes>
            </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
