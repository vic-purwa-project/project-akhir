import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios'
import swal from 'sweetalert2'

const URL_API = 'http://localhost:9999/'


class Signin extends Component {
  state = {
    inputUsername: '',
    inputPassword: '',
    username: '',
    errMsg: ''
  }

  onBtnLogin = () => {
    Axios.get(URL_API + 'auth/Login', {
      params:{
          username:this.state.inputUsername,
          password:this.state.inputPassword,

      }
    })
    .then((res)=>{
      console.log(res.data)
      if(res.data.status === '404' || res.data.status === '401'){
        this.setState({ errMsg: res.data.message })
      } else if (res.data.status === '200'){
        swal ('Success!', 'You have been logged in success!', 'success')
        this.setState({ username: res.data.username })
      }

    }).catch((err)=>{
      console.log(err);
      
   })
  }




    render() {
        return (
            <div>
                
                <div className='col-sm-4 mx-auto card mt-5'>
                <Form>
                <h2 className='text-center border-bottom border-dark' style={{fontFamily: 'Acme, sans-serif', fontSize:'25px', color:'Black'}}> * Sign In * </h2>
            <FormGroup>
              <Label for="exampleEmail">Email or Username</Label>
              <Input onChange={e => this.setState({inputUsername: e.target.value})} type="email" name="email" id="exampleEmail" placeholder="email or username" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input onChange={e => this.setState({inputPassword: e.target.value})}type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
            
            
              <Button onClick={this.onBtnLogin} className='btn-block my-2'>Sign In</Button>
            
          </Form>
                </div>
            </div>
          
        );
      } 
    



    

}
export default Signin