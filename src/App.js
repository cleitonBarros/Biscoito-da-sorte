import React, {Component} from 'react';
import './estilo.css'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero:0,
            botaotxt:'go'
        }
        this.timer = null
        this.go =  this.go.bind(this)
        this.clear = this.clear.bind(this)
    }
    go(){
        let state =  this.state
        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null;
            state.botaotxt = 'go'
        } else{
        this.timer = setInterval(()=>{
            let state =  this.state;
            state.numero += 0.1
            this.setState(state)
        },100)
        state.botaotxt = 'Pause'
    }
        this.setState(state)

    }
    clear(){
        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null;
            
        }
        let state =  this.state;
        state.numero = 0;
        state.botaotxt = 'Go'
        this.setState(state);

    }
    render(){
        return(
            <div className="Container">
              <img scr={require('./assets/cronometro.png') }className="img"></img>
              <a className="timer">{this.state.numero.toFixed(1)}</a>
              <div className="areabtn">
                  <a className="btn" onClick={this.go}>{this.state.botaotxt}</a>
                  <a className="btn" onClick={this.clear}>Clear</a>
              </div>
            </div>
        )
    }
}


export default App;