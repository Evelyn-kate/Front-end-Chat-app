import React from 'react';
import { Form, FormGroup, Label} from 'reactstrap';
import { Container,Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image';



class LoginComponent extends React.Component {
     
    constructor () {
        super();
        this.state = {
            err: ''
        }
    }



    login (e) {
       e.preventDefault ();
       var username = e.target.elements.username.value;
       var password = e.target.elements.password.value;
       if(username === 'abc' && password === '123') {
            this.props.history.push('/welcome/' + username);
       } else {
            this.setState({
                err: 'Invalid'
            });
       } 
    }
    render(){
        let format = {
            color: "red"
        };
        return (
             <Form class="login-page" style={{backgroundColor: "blue",}}>
                      <h4>
                       <span className ="font-weight-cold" >TEX-IT</span>
                     </h4>
                    <h3 className= "text-center">Login</h3>
                {/* <div class="imgcontainer">
                   <img src="F:\Simple Chat\my-app\src\components\LoginPage\User_Avatar_2.png" alt="Avatar" class="avatar"/>
                 </div> */}
                 <Container>
                  <Row>
                  <Col xs={6} md={4}>
                   <Image src="User_Avatar2.png" roundedCircle />
                  </Col>
                  </Row>
                 </Container> 
                      
                  <span style = {format}>{this.state.err !== '' ? this.state.err : ''}</span>
                
                     <FormGroup>
                      <Label>Username</Label> 
                       <input type="text" name="username" />
                     <br/>
                      <Label>Password</Label>
                       <input type="password" name="password" required/>
                     <br/>
                    {/* <input type="submit" value="Submit"/> 
                     <button type='submit' variant='primary'> Submit</button>*/}
                    <button className="btn btn-success">Submit</button>
                     <span class="psw">Forgot <a href="https://github.com">password?</a></span>

                     </FormGroup>
                     
                     </Form>
                 
           
            
        );
    }
}

export default LoginComponent;