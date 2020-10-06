import React, { Component } from 'react';
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {

    contador = 0;

    state = {
        contador: 0
    };

    //var HolaMundo = () => {}
    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>
        );
        return presentacion;
    }

    sumar = () => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = () => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }


    render() {
        var nombre = "Juanma Pereyra";

        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Curso de react!!
                </p>

                <h2 className="subheader">Funciones y JSX basico</h2>
                {this.HolaMundo(nombre, 28)}

                <h2 className="subheader">Componentes</h2>
                <section className="components">

                    <MiComponente />
                    <MiComponente />

                </section>

                <h2 className="subheader">Estado</h2>
                <p>
                    Contado: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar} />
                    <input type="button" value="Restar" onClick={this.restar} />
                </p>


            </ section>
        );
    }
}

export default SeccionPruebas;