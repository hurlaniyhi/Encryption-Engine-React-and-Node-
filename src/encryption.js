import axios from 'axios'
import './encryption.css'
var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');




var Encryption = createReactClass({
    getInitialState: function(){
        return {
            inputData: "",
            encryptedData: "",
            channel: ""
        }
    },
    handleChange: function(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    },
    
    post: function(e){
        
        e.preventDefault()
        const data = {
            inputData: this.state.inputData,
            channel: this.state.channel
        }

        axios.post('http://localhost:3001', data).then((res)=>{
            //alert("Data successfully encrypted")
            
            
            this.setState({
                encryptedData: res.data
            })
            
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
        
    },
    render: function(){
        return(
            <div>
            <h3><i>Fintech And Innovation Division</i></h3>
            <h2>Encrypt Your Data</h2>
            <div id="container">
                <form onSubmit={this.post}>
                
                <select id="lunch" name="channel" onChange={this.handleChange}>
                    <option value="select" style={{display: "none"}}>Select Channel</option>
                    <option value="TCPAPIC">TC_APIC Channel</option>
                    <option value="others">Other Channels</option>
                </select><br/>
                

                    <label className="dtel" for="dte"><h4>Data To Encrypt</h4></label><br/>
                    <input type="text" id="dte" onChange={this.handleChange} name="inputData"/><br/><br/>
                    <button className="send" type="submit">Encrypt</button><br/><br/><br/><br/>
                    <label className="edl" for="ed"><h4>Encrypted Data</h4></label><br/>
                    <textarea type="text" id="ed" name="encryptedData" value={this.state.encryptedData} />
                </form>
            </div>
            </div>
        )
    }
})

export default Encryption