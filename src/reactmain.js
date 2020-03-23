import {FaUser} from 'react-icons/fa';
import {FaStar} from 'react-icons/fa';
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')


var Test =createReactClass({
    getInitialState: function(){
        return {
            Name: "",
            Amount: 0,
            Balance: 0,
        }
    },
    nameOnclick: function(e){
        e.target.value =""
        
    },
    handleName: function(e){
        var name = e.target.value   
       this.setState({Name: name})
       
    },
    amountOnclick: function(e){
        e.target.value =""
    
    },
    handleAmount: function(e){
        var amount = e.target.value
        this.setState({Amount: amount})
    },
    handleSendMoney: function(){
        this.setState({Balance: Number(this.state.Balance) - Number(this.state.Amount)})
    },
    handleAddMoney: function(){
        this.setState({Balance: Number(this.state.Balance) + Number(this.state.Amount)})
    },
    
    render: function(){
        
        var styles = {
            //textAlign: "center",
            border: "3px solid orange",
            borderRadius: "20px",
            marginLeft: "460px",
            marginTop: "0px",
            marginRight: "470px",
            marginBottom: "40px",
            
        }
        var secDiv={
            paddingLeft: "30px",
            color: "white",
            border: "1px solid orange",
            marginLeft:"20px",
            marginRight:"20px",
            borderRadius: "5%",
            background: "orange",
            marginBottom: "50px",
        
        
        }
        var input = {
            height: "45px",
            width: "365px",
            //textAlign: "center",
            marginLeft: "28px",
            borderRadius: "100px",
            paddingLeft: "20px",
            borderTopStyle: "outset",
            borderLeftStyle: "outset"
        }
        var button1 = {
            marginLeft: "34px",
            width: "155px",
            height: "50px",
            borderRadius: "100px",
            background: "orange",
            borderRightStyle: "hidden",
            borderBottomStyle: "hidden",
            color: "white",
            
        }
        var button2 = {
            marginLeft: "40px",
            width: "155px",
            height: "50px",
            borderRadius: "100px",
            background: "orange",
            borderRightStyle: "hidden",
            borderBottomStyle: "hidden",
            color: "white"
            
        }
        var button3 =  {
            marginLeft: "280px",
            width: "90px",
            height: "80px",
            borderRadius: "100%",
            background: "orange",
            fontSize: "10px",
            borderRightStyle: "hidden",
            borderBottomStyle: "hidden",
            color: "white"
            
        }
        var button4 = {
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            width: "200px",
            height: "45px",
            background: "orange",
            borderRightStyle: "hidden",
            borderBottomStyle: "hidden",
            color: "white",
        }
        var button5 = {
            marginLeft: "10px",
            width: "200px",
            height: "45px",
            background: "orange",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            borderRightStyle: "hidden",
            borderBottomStyle: "hidden",
            color: "white"
 
        }
        var secdivc= (
        <div style={{marginTop: "0px"}}>
            <button onClick={this.cancel} style={{margingLeft: "200px",color: "white",background: "orange",border: "hidden",height: "5px",paddingLeft:"320px"}}>x</button>
            <p style={{paddingBottom: "0px",fontSize: "12px"}}>Wallet balance</p>
            <p style={{fontWeight: "bold"}}>NGN {this.state.Balance} <FaStar className= "starme" style={{fontSize:"20px",display: "inline",marginLeft: "220px"}}/></p>
            <p style={{fontSize:"12px"}}>Remember to increase your device<br/>volume to send and receive</p>
        </div>
        )


        return (
         
            <div style={styles}>
                <FaUser fa-rotate-90 style={{color: "orange",fontSize: "55px",paddingTop: "25px",paddingLeft: "30px"}} />
                <h4 style={{paddingLeft: "15px",paddingTop: "5px",paddingBottom:"0px",display: "inline"}}>Hello <strong>{this.state.Name},</strong></h4>
                <p style={{paddingLeft: "70px",paddingBottom: "0px"}}>Good morning</p>
                <div style={secDiv}>
                    {secdivc}
                </div>
                <input type="text" defaultValue="Enter user name to send" style={input} onClick={this.nameOnclick} onChange={this.handleName} Required/><br/><br/>
                <input type="text" defaultValue="Enter Amount" style={input} onClick={this.amountOnclick} onChange={this.handleAmount}/><br/><br/>
                <button style={button1}>Request</button>
                <button style={button2} onClick={this.handleSendMoney}>Send</button><br/><br/>
                <button style={button3} onClick={this.handleAddMoney}><strong style={{fontSize: "30px"}}>+</strong><br/>Add to wallet</button><br/><br/><br/>
                <button style={button4}>History</button>
                <button style={button5}>Message</button>

            
            
        </div>

        
        )
    }
})
//document.querySelector("#container")
ReactDOM.render(<Test/>,document.getElementById('stores'))