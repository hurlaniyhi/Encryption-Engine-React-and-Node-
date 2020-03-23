var React = require('react');
var createReactClass = require('create-react-class')
var {NavLink,Link} = require('react-router-dom');
var Inside = require('./inside.js')


var Start = createReactClass({
    render:function(){
        var habeeb="ridwan"
        return (
            <div>
                <h1>let get started</h1>
                <Inside coder = "ridwan"/>
                
                {/* <NavLink to = "/startme/inside.js"><button onPress = {()=>{this.props.navigation.navigate{habeeb: this.ridwan}}}>click me</button></NavLink> */}
            </div>
        )
    }
})

module.exports = Start;
