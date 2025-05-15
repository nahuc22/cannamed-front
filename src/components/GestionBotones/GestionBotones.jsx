import React from 'react';
import '../GestionBotones/GestionBotones.css';
class GestionBotones extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seleccionado: 0
        };
    }

    seleccionarBoton(id) {
        this.setState({
            seleccionado: id
        });
    }

    render() {
        return (
<div class="botones-container">
                <button id="boton1" onClick={() => this.seleccionarBoton(1)}>Elaboración</button>
                <button id="boton2" onClick={() => this.seleccionarBoton(2)}>Asesoramiento</button>
                <button id="boton3" onClick={() => this.seleccionarBoton(3)}>Servicios</button>
            </div>
        );
    }
}

export default GestionBotones;