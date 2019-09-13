import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signin extends Component {
    render() {
        return (
            <div>

                <div className='col-sm-4 mx-auto card mt-5'>
                <Form>
            <FormGroup>
              <Label for="exampleEmail">Email or Username</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="email or username" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
            
            <Button>Sign In</Button>
          </Form>
                </div>
            </div>
          
        );
      } 
    



    

}
export default Signin