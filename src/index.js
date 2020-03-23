import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import createReactClass from 'create-react-class';
import Encryption from './encryption.js'
import {HashRouter as Router,NavLink,Switch,Route} from 'react-router-dom';
import Start from './startme.js';
import End from './endme.js';
import Inside from './inside.js'


var AllOver = createReactClass({
    render: function(){
        return (
            // <Router>
            //     <div>
            //         <NavLink activeStyle={{color: "Red"}} to = "/startme.js"><h5>start</h5></NavLink>
            //         <NavLink activeStyle={{color: "Red"}} to = "/endme.js"><h5>End</h5></NavLink>
            //     </div>
            //     <div>
            //         <Switch>
            //             <Route path = "/" exact component = {Home}/>
            //             <Route path = "/startme.js" exact component = {Start}/>
            //             <Route path = "/endme.js" component = {End}/>
            //             <Route path = "/startme/inside.js" component = {Inside}/>
            //         </Switch>
            //     </div>
            // </Router>
            <div>
                <Encryption />
            </div>
        )
    }
})

// var Home = createReactClass({
//     render: function(){
//         return <h3>Home page</h3>
//     }
// })


ReactDOM.render(<AllOver />, document.getElementById('root'))


/*var Test = require('./reactmain.js')

//ReactDOM.render(<App />, document.getElementById('root'));






var MakeScreen = createReactClass({
    getInitialState: function(){
        return {
            name: "",
            Amount: "",
            store: 0,
        }
    },
    handleChange: function(newAmount){
        this.setState({
            Amount: newAmount
        })
    },
    handleOnchange: function(newname){
        this.setState({
            name: newname,
        })

    },
   
    render: function(){
        return(
            <div>
                <Test name={this.state.name} onChange={this.handleOnchange} onChange={this.handleChange} amount={this.state.Amount}/>
            </div>
        )
    }
})

*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
