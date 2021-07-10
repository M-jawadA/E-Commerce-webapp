import React, { Component } from 'react'
import "./LoginForm.css"
class LoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             UserName:'',
             password:""
        }
    }
    handleUserNameChange=(event)=>{
        this.setState({
            UserName:event.target.value
        })
    }
    handlePasswordChange=event=>{
        this.setState({
            password:event.target.value
        })
    }
    handleSubmit=event=>{
        alert(`${"Welcome "}   ${this.state.UserName}`)
        event.perventDefault()

    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                
                <div class="form-groupusername">
                
                     
                     <input type="input" value={this.state.UserName} 
                    onChange={this.handleUserNameChange} placeholder="username" name="name" id='name' required />
                      
                </div>
                <div class="pass">
                    
                    <input placeholder="password"type="password" value={this.state.password} onChange={this.handlePasswordChange} required></input>
                </div>
                <div className="buttton-style">
                <button type="submit">Login</button>
                </div>
            </form>
        )
    }
}

export default LoginForm
