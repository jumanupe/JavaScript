import React, { Component } from 'react';
import Pelicula from './Pelicula';


class Peliculas extends Component {
    state = {};

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        // var random = Math.floor(Math.random() * 3)
        peliculas[0].titulo = "Donnie Darko 2";

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => {
        console.log("FAVORITA MARCADA");
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });
    }


    componentWillMount(){
        // alert("Se va a montar el componente");
        this.setState({
            peliculas: [
                { titulo: 'Donnie Darko', image: 'https://i1.wp.com/www.caninomag.es/wp-content/uploads/2017/04/Donnie-Cover-min.jpg?resize=634%2C358&ssl=1' },
                { titulo: 'Prisoners', image: 'https://i.pinimg.com/originals/9b/a6/6a/9ba66a3cfc410b8f2af5700d964723ba.jpg' },
                { titulo: 'Interstellar', image: 'https://estaticos.elperiodico.com/resources/jpg/9/1/escena-interstellar-1568859222219.jpg' }
            ],
            nombre: 'Juanma Pereyra',
            favorita: {}
        });
    }

    componentDidMount(){
        //alert("Ya se ha montado el componente");
    }

    componentWillUnmount(){
        //alert("Me voy a desmontar");
    }


    render() {
        var pStyle = {

            background: 'green',
            color: 'white',
            padding: '10px'
        };

        var favorita;
        if(this.state.favorita.titulo){
            favorita = (
                <p className="favorita" style={pStyle}>

                        <strong>La pelicula favorita es: </strong>
                        <span>{this.state.favorita.titulo}</span>
                </p>
            );
        } else {
            favorita = (
                <p>NO HAY PELICULA FAVORITA</p>
            )
        }

        return (
            <div id='content' className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
                <p>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar titulo de Donnie Darko
                    </button>

                </p>

                {/*this.state.favorita.titulo ? (
                        <p className="favorita" style={pStyle}>

                            <strong>La pelicula favorita es: </strong>
                            <span>{this.state.favorita.titulo}</span>

                        </p>
                    ) : (
                        <p>NO HAY PELICULA FAVORITA</p>
                    )
                */}
                {favorita}


                {/*Creando componente de peliculas*/}

                <div id="articles" className="peliculas">

                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    indice={i}
                                    marcarFavorita={this.favorita}
                                />
                            )
                        })
                    }

                </div>


            </div >
        );
    }
}

export default Peliculas;