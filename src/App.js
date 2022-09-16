import MainPage from "./page/Main";
import './App.css'
import AboutPage from "./page/About";
import { KatalogPage } from "./page/Katalog";
import AdvantagePage from "./page/Advantages";
import ItemsPage from "./page/Items";


function App() {
  return (
    <div className="App">
      <MainPage/>
      <AboutPage/>
      <KatalogPage/>
      <AdvantagePage/>
      <ItemsPage/>
    </div>
  );
}

export default App;
