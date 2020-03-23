var React = require('react');
var createReactClass = require('create-react-class')
var {Link} = require('react-router-dom');



var Inside = createReactClass({
    render: function(){
        
        return (
            <div>
                <h1>why did you come inside me {this.props.location.data}</h1>
            </div>
        )
    }
})

module.exports = Inside;