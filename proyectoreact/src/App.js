import React from 'react';
import './assets/css/App.css';

//importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';


function App() {
  var buttonString = "Ver mas";

  return (
    <div className="App">
      <Header />

      <Slider
        title ="Curso de React hecho por JMP"
        btn ={buttonString}
       />

      <div className="center">

        <SeccionPruebas />

        <Sidebar />
        <div className="clearfix"></div>

      </div> {/* END DIV CENTER  */}

      <Footer />

    </div>
  );
}

export default App;
