import './style/App.css';
import Presentation from "./pages/Presentation";
import Logo from "./components/Logo";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Router from "./pages/Router";
import Navigation from "./components/Navigation";
import StaticData from "./pages/StaticData";
import Props from "./pages/Props";
import Reactivity from "./pages/Reactivity";
import Formulaire from "./pages/Formulaire";
import Data from "./pages/Data";
import EffetBord from "./pages/EffetBord";
import Crud from "./pages/Crud";
import Authentication from "./pages/Authentication";
import Secret from "./pages/Secret";
import Redux from "./pages/Redux";


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
                    <Route path="/static" element={<StaticData />} />
                    <Route path="/props" element={<Props/>} />
                    <Route path='/reactivity' element={<Reactivity/>} />
                    <Route path='/form' element={<Formulaire/>} />
                    <Route path='/effect' element={<EffetBord/>} />
                    <Route path='/crud' element={<Crud/>} />
                    <Route path='/data' element={<Data/>} />
                    <Route path='/auth' element={<Authentication/>} />
                    <Route path='/secret' element={
                        <ProtectedRoute>
                            <Secret/>
                        </ProtectedRoute>
                    } />
                    <Route path='/accueil' element={<Navigate to='/' replace/>} />
                    <Route path='/redux' element={<Redux/>} />
                </Routes>
            </main>
        </BrowserRouter>
    </div>
  );
}

export default App;


const ProtectedRoute = ({children}) => {
    if(!localStorage.getItem('token')) {
        window.alert('Vous devez être connecté !');
        return <Navigate to="/auth" replace />
    }
    return children;
}
