
import React, { Component } from 'react';
import './App.css';
import SenseCard from './components/ProductCard';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightOn: false,
      smellOn: false,
      windOn: false
    }
  }

  componentDidMount() {
    // Obtener estado actual de las funcionalidades
    this.getLight();
    this.getSmell();
    this.getWind();
  }


  render() {
    const { lightOn } = this.state;
    const { smellOn } = this.state;
    const { windOn } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Probe of Concept - BISOFT-36 Sistemas Colaborativos - Universidad Cenfotec</h1>
        </header>
        <div class="py-lg-5">
        <img src="https://i.ibb.co/9w8MQYy/David.png" alt=""></img>
        </div>
        <p className="App-intro">
          Simulador de sensasiones humanas - Raspberry Pi
        </p>

        <div class="row">
          <div class="col-1 ms-5"></div>
          <div class="col-3 d-flex aligns-items-center justify-content-center ms-4">
            <SenseCard
              photos={['https://i.ibb.co/yRKr4zF/beach.png']}
              productName='Temperatura'
              description='El usuario entra a un ambiente virtual con un incremento gradual en la temperatura'
              activated={lightOn}
              onClick= { lightOn ? () => this.setLight('on') : () => this.setLight('off') }
            />
          </div>
          <div class="col-3 d-flex aligns-items-center justify-content-center">
          <SenseCard
              photos={['https://i.ibb.co/hmrYTYR/fire.png']}
              productName='Olfato'
              description='El usuario detecta que algo se está quemando en su oficina virtual'
              activated={smellOn}
              onClick= { smellOn ? () => this.setSmell('on') : () => this.setSmell('off') }
            />
    
          </div>
          <div class="col-3 d-flex aligns-items-center justify-content-center">
          <SenseCard
              photos={['https://i.ibb.co/fMTKKMJ/driving.png']}
              productName='Aire'
              description='El usuario viaja en el metaverso en un auto con la ventana abierta'
              activated={windOn}
              onClick= { windOn ? () => this.setWind('on') : () => this.setWind('off') }
            />
          </div>
          <div class="col-1"></div>
        </div>
    
        
      </div>
    );
  }

  // setLightOn hace llamada al api para setear el estado actual de la luz.
  setLight(value) {
    if (value ==='off') {
      this.setState({ lightOn: true });
      console.log("Encendiendo Luz...");
      /*fetch(
        `/api/setlight/on`, { method: 'POST' }
      ).then(
        (response) => {
          return response.json();
        }
      ).then(
        (response) => {
          if (response.status !== on) {
            this.setState({ smellOn: response.status });
          }
        }
      );*/
    }
    else {
      this.setState({ lightOn: false });
      console.log("Apagando Luz...");
      /*fetch(
        `/api/setlight/off`, { method: 'POST' }
      ).then(
        (response) => {
          return response.json();
        }
      ).then(
        (response) => {
          if (response.status !== on) {
            this.setState({ smellOn: response.status });
          }
        }
      );*/
    }
    
  }

   // setWindOn hace llamada al api para setear el estado actual del ventilador.
   setWind(value) {
    if (value ==='off') {
      this.setState({ windOn: true });
      console.log("Encendiendo Ventilador...");
      /*fetch(
        `/api/setventilador/on`, { method: 'POST' }
      ).then(
        (response) => {
          return response.json();
        }
      ).then(
        (response) => {
          if (response.status !== on) {
            this.setState({ windOn: response.status });
          }
        }
      );*/
    }
    else {
      this.setState({ windOn: false });
      console.log("Apagando Ventilador...");
      /*fetch(
        `/api/setventilador/off`, { method: 'POST' }
      ).then(
        (response) => {
          return response.json();
        }
      ).then(
        (response) => {
          if (response.status !== on) {
            this.setState({ windOn: response.status });
          }
        }
      );*/
    }
}
    

   // setSmellOn hace llamada al api para setear el estado actual del spray.
   setSmell(value) {

    if (value ==='off') {
      this.setState({ smellOn: true });
      console.log("Encendiendo Aspersor...");
      /*fetch(
        `/api/setsmell/on`, { method: 'POST' }
      ).then(
        (response) => {
          return response.json();
        }
      ).then(
        (response) => {
          if (response.status !== on) {
            this.setState({ smellOn: response.status });
          }
        }
      );*/
    }
    else {
      this.setState({ smellOn: false });
      console.log("Apagando Aspersor...");
      /*fetch(
        `/api/setsmell/off`, { method: 'POST' }
      ).then(
        (response) => {
          return response.json();
        }
      ).then(
        (response) => {
          if (response.status !== on) {
            this.setState({ smellOn: response.status });
          }
        }
      );*/
    }
   
  }

  // getLightOn hace una llamada al API para saber el estado actual de la luz.
  getLight() {
    console.log("Luz:" + this.state.lightOn);
    /*fetch(
      '/api/getlight', { method: 'GET' }
    ).then(
      (response) => {
        return response.json();
      }
    ).then(
      (response) => {
        this.setState({ lightOn: response.status });
      }
    );*/
  }

  // getSpray hace una llamada al API para saber si la funcionalidad de olor está encendida.
getSmell() {
  console.log("Olor:" + this.state.smellOn);
  /*fetch(
    '/api/getspray', { method: 'GET' }
  ).then(
    (response) => {
      return response.json();
    }
  ).then(
    (response) => {
      this.setState({ smellOn: response.status });
    }
  );*/
}

  // getWind hace una llamada al API para saber el estado actual del ventilador.
  getWind() {
    console.log("Ventilador:" + this.state.windOn);
    /*fetch(
      '/api/getwind', { method: 'GET' }
    ).then(
      (response) => {
        return response.json();
      }
    ).then(
      (response) => {
        this.setState({ windOn: response.status });
      }
    );*/
  }
}

export default App;
