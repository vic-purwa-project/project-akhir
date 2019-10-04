import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {
    render() {
        return (
            <div>
                
                <div className='col-sm-4 mx-auto card mt-5'>
                <Form>
                <h2 className='text-center border-bottom border-dark' style={{fontFamily: 'Acme, sans-serif', fontSize:'25px', color:'Black'}}> * Sign Up * </h2>
                <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input type="username" name="username" id="exampleusername" placeholder="username" />
                </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Confirm Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password" />
                </FormGroup>
            
            <Button className='btn-block my-2'>Sign Up</Button>
          </Form>
                </div>
            </div>
        )
    }
}
    

export default Signup