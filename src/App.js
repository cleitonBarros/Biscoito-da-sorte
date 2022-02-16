import React, {Component} from 'react';
import './estilo.css'



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            texto:''
        }
        this.quebraBiscoito =  this.quebraBiscoito.bind(this)
        this.frases = [`Je pense, donc je suis.(René Descartes)`,
        `Connais-toi toi-même.`,
       ` L'homme est un pont, non une fin. (Friedrich Nietzsche)`,
        `La liberté est le droit de faire tout ce que les lois permettent. (Montesquieu)`, 
        `Rien de grand ne s'est fait dans le monde sans passion(Hegel)`]
    }
    quebraBiscoito(){
        let state =  this.state;
        let rand = Math.floor(Math.random() * this.frases.length);
        state.texto = this.frases[rand];

        this.setState(state)

    }
    render(){
        return(
            <div className="Container">
              <img src={require('./assets/biscoito.png') } className="img"></img>
              <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
              <h3 className="texto">{this.state.texto}</h3>
            </div>
        )
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
          </div>
        )
    }
}

export default App;