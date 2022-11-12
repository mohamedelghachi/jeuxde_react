import React, { Component } from 'react'
import de from '../images/Dé.png'
import '../index.css';

export class JeuDe extends Component {
    constructor(props) {
        super(props);
        this.state = { face: null, compteur: 0, fin: false };
    }
    jouer() {
        if (this.state.fin == false) {
            const valeur = Math.floor(Math.random() * 6) + 1;
            var compteur = this.state.compteur;
            this.setState({ face: valeur, compteur: compteur + 1, fin: false });
            console.log(valeur);
            console.log(this.props.cache);
            if (valeur == this.props.cache) {
                this.setState({fin: true });

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
        return (
            <div>
                <img className="jouer_img" src={de} />
                <h1>Jeu de Dé...</h1>
                <h2>face: {this.state.face}</h2>
                <h2>nombre d'essais {this.state.compteur}</h2>
                {this.state.fin == false?<button onClick={() => this.jouer()}>jouer</button>:""}
                {this.state.fin?<p>Bravo vous avez trouvez la face cachée.....</p>:""}
                {this.state.fin?<button onClick={() => this.initialiser()}>Initialiser</button>:""}
            </div>
        )
    }
}

export default JeuDe