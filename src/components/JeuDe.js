import React, { Component } from 'react'
import de from '../images/Dé.png'
import face1 from '../images/face1.png'
import face2 from '../images/face2.png'
import face3 from '../images/face3.png'
import face4 from '../images/face4.png'
import face5 from '../images/face5.png'
import face6 from '../images/face6.png'
import defaultFace from '../images/defaultFace.png'
import '../index.css';

export class JeuDe extends Component {
    constructor(props) {
        super(props);
        this.state = { face: null, compteur: 0, fin: false };
    }
    getImage() {
        console.log("getImage method : "+this.state.face);
        switch (this.state.face) {
            case 1:
                return face1;
            case 2:
                return face2
            case 3:
                return face3
            case 4:
                return face4
            case 5:
                return face5
            case 6:
                return face6
            default:
                return defaultFace
        }
    }
    jouer() {
        if (this.state.fin == false) {
            const valeur = Math.floor(Math.random() * 6) + 1;
            var compteur = this.state.compteur;
            this.setState({ face: valeur, compteur: compteur + 1, fin: false });
            console.log(valeur);
            console.log(this.props.cache);
            if (valeur == this.props.cache) {
                this.setState({ fin: true });

                console.log("Congratulation");
            } else {
                console.log("Try again");
            }
        }
        //completer le code
    }
    initialiser() {
        this.setState({ face: null, compteur: 0, fin: false });
    }
    render() {
        const styleImage = { width: "60px", height: "60px" };
        return (
            <div>
                <img className="jouer_img" src={de} />
                <h1>Jeu de Dé...</h1>
                <h2>face: {this.state.face}</h2>
                <img src={this.getImage()} style={styleImage} />
                <h2>nombre d'essais {this.state.compteur}</h2>
                {this.state.fin == false ? <button onClick={() => this.jouer()}>jouer</button> : ""}
                {this.state.fin ? <p>Bravo vous avez trouvez la face cachée.....</p> : ""}
                {this.state.fin ? <button onClick={() => this.initialiser()}>Initialiser</button> : ""}
            </div>
        )
    }
}

export default JeuDe