import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Furniture from './components/FurnitureList';

function App() {
  return (
    <div className="App">
     <Header/> 
     <Furniture/>
     <Footer/>

    </div>
  );
}

export default App;
