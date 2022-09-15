import MainPage from "./page/Main";
import './App.css'
import AboutPage from "./page/About";
import { KatalogPage } from "./page/Katalog";


function App() {
  return (
    <div className="App">
      <MainPage/>
      <AboutPage/>
      <KatalogPage/>
    </div>
  );
}

export default App;
