import React from "react";
import Profile from "./Profile";

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: ' ',
            password: '',
            user: {},
            isLoggedIn: false,
            userType: 'customer'
        }
    }

    nameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    userTypeHandler = (e) => {
        this.setState({
            userType: e.target.value
        })
    }

    submitHandler = async (e) => {
        e.preventDefault();

        const {name, email, password, userType} = this.state;
        const {type} = this.props;
        
        const userObj = { 
            name,
            email,
            password
        };

        const response = await fetch(`http://localhost:8000/${userType}/${type}`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const parsedRes = await response.json();
        console.log(parsedRes);

        if(response.status === 200){
            this.setState({
                isLoggedIn: true,
                user: parsedRes.client
            })
        }
    }

    render(){
        const {name, email, password, user, isLoggedIn} = this.state;
        const {type} = this.props;

        return(
        <>
        {isLoggedIn ? <Profile user = {user}/> : <>  {type === "signup" ? <h1> {type} Form - Hello {name} </h1> : <h1> {type} Form</h1>}
          <form onSubmit={this.submitHandler} >
            {type === "signup" && <>Name:- <input name="name" type="text" placeholder="Jhon Dev" value={name} onChange={this.nameChangeHandler}/></>}
            <br/>
            E-mail:- <input name="email" type="email" placeholder="user@gmail.com" value={email} onChange={this.emailChangeHandler}/>
            <br/>
            Password:- <input name="password" type="password" placeholder="Enter Password" value={password} onChange={this.passwordChangeHandler}/>
            <br/>
            <button type="submit">{type}</button>
          </form>
          <br/>
            <div>
                Client<input type="radio" name="userType" value="client" onChange={this.userTypeHandler}/>
                <br/>
                Customer<input type="radio" name="userType" value="customer" onChange={this.userTypeHandler}/>
            </div>
        </>
        }
        </>
        )
    }
}

export default Form;