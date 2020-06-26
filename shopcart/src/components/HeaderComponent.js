import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron,Nav,NavbarToggler,
    Collapse,NavItem,Modal,ModalBody, ModalHeader,Button,FormGroup,Row,Col,Input,Label,Card ,CardImg} from 'reactstrap';
import {NavLink} from 'react-router-dom';


import {LocalForm ,Control,Errors,actions} from 'react-redux-form';

//form validation
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function  Logout(props){

    if(props.isloggedin)
    {   
        return(
            <Button color="primary" onClick={()=>{props.setidentity('',''); props.toggleLogout()  }}>
            Logout
            </Button>

        );
    }else{
        return(
            <div></div>
        );
    }
  
    
  
    }
    function  Login(props){
        // alert(props.isloggedin);
        //islogged is false than only login option
            if(!props.isloggedin)
            {
                return(
                    <Button onClick={props.toggleModal} color="warning">
                      <span className="fa fa-sign-in fa-lg"></span>Login
                       </Button>
                   
        
                );
            }else{
                return(
                    <div></div>
                );
            }
          
            
          
            }


class Header extends Component {

    constructor(props){
        super(props);
    
        this.state={
       isNavOpen:false,
       isModalOpen:false,
       isSignupOpen:false,
       isIncorrect:false,
       isCorrect:false,
       isLoggedOut:false,
       username:'',
       password:''
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
        this.toggleSignup=this.toggleSignup.bind(this);
        this.handleSignup=this.handleSignup.bind(this);
        this.toggleIncorrect=this.toggleIncorrect.bind(this);
        this.toggleCorrect=this.toggleCorrect.bind(this);
        this.toggleLogout=this.toggleLogout.bind(this);
    }

    toggleNav()
  {
    this.setState({isNavOpen:!this.state.isNavOpen});
  }

  toggleModal()
  {
    this.setState({isModalOpen:!this.state.isModalOpen});
  }

  toggleSignup()
  {
    this.setState({isSignupOpen:!this.state.isSignupOpen});
  }
  toggleIncorrect()
  {
    this.setState({isIncorrect:!this.state.isIncorrect});
  }
  toggleCorrect()
  {
    this.setState({isCorrect:!this.state.isCorrect});
  }
  toggleLogout()
  {
      this.setState({isLoggedOut:!this.state.isLoggedOut});
  }
 
  

  handleLogin(values){
    
    const setidentity=this.props.setidentity;
    const toggleIncorrect=this.toggleIncorrect;
    const toggleCorrect=this.toggleCorrect;
     async function log (username,password)
    {
      let response = await fetch(`http://localhost:4000/logins`,{
        method:'POST',
        mode:'cors',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username:username,
          password:password
        })
      });

      
      let data = await response.json();
      if(data.success=='true')
      {
        setidentity(username,password);
       toggleCorrect();
      }
      else{
          setidentity('','');
          toggleIncorrect();
      }


     
    }
    
    log(values.username,values.password,setidentity,toggleIncorrect,toggleCorrect);
    
        
    
    
    this.toggleModal();
  }
  handleSignup(values){
    var r = Math.floor(Math.random() * 100) + 1;

    this.toggleSignup();
    fetch(`http://localhost:4000/signupcustpriv?cid=${r}&username=${values.username}`)
    .catch(err=>console.log("hy"+err));
    fetch(`http://localhost:4000/signupcustomer?cid=${r}&cfirstname=${values.cfirstname}&clastname=${values.clastname}&cDob=${values.cDob}&cEmail=${values.cEmail}`)
    .catch(err=>console.log("hy"+err));
    fetch(`http://localhost:4000/signupprivatedata?username=${values.username}&passwords=${values.password}`)
    .catch(err=>console.log("hy"+err));
    
   
  }

  render() {
    return(
    <>
      <Navbar dark expand="md">
        <div className="container">

        <NavbarToggler onClick={this.toggleNav}/>

        <NavbarBrand href="/">Universal Shopping Center</NavbarBrand>

            
      <Collapse isOpen={this.state.isNavOpen} navbar>
      <Nav navbar>
      <NavItem>
          <NavLink className="nav-link" to="/home">
             <span className="fa fa-home fa-lg"></span>
             Home
          </NavLink>
      </NavItem>
      <NavItem>
          <NavLink className="nav-link" to="/aboutus">
             <span className="fa fa-info fa-lg"></span>
             Aboutus
          </NavLink>
      </NavItem>
      <NavItem>
          <NavLink className="nav-link" to="/categories">
             <span className="fa fa-list fa-lg"></span>
             Categories
          </NavLink>
      </NavItem>
      <NavItem>
          <NavLink className="nav-link" to="/contactus">
             <span className="fa fa-address-card fa-lg"></span>
             Contactus
          </NavLink>
      </NavItem>
      <NavItem>
          <NavLink className="nav-link" to="/mycart">
             <span className="fa fa-shopping-cart fa-lg"></span>
             MyCart
          </NavLink>
      </NavItem>
   </Nav>
   <Nav className="ml-auto" navbar>
        <NavItem>
        
          <Login isloggedin={this.props.isloggedin} toggleModal={this.toggleModal}/>
          <Logout isloggedin={this.props.isloggedin} toggleLogout={this.toggleLogout}  setidentity={this.props.setidentity} />

         </NavItem>
   </Nav>
   
   
</Collapse>
      
        </div>
      </Navbar>


      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Universal Shopping Center</h1>
                       <h3 >Welcome to the magnificient world of shopping! Unlimated products and nasty quality!</h3>
                   </div>
                   <div className="col-12 col-sm-6">
                       <Card >
                       <CardImg src={this.props.item.image} alt={this.props.item.name}>
                       </CardImg>
                       </Card>
                   </div>
               </div>
           </div>
       </Jumbotron>

       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>LogIn</ModalHeader>
                <ModalBody>
                

                        <LocalForm onSubmit={this.handleLogin}>
                        <Row className="form-group">
                        <Label htmlFor="username" md={2}>UserName</Label>
                        <Col md={10}>
                            <Control.text model=".username" id="username" name="username"
                                placeholder="Username"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(5), maxLength: maxLength(20)
                                }}
   
                             />
                             <Errors
                             className="text-danger"
                             model=".username"
                             show="touched"
                             messages={{
                                 required: 'Required* ',
                                 minLength: 'Must be greater than 4 characters ',
                                 maxLength: 'Must be 20 characters or less '
                             }}
                              />
                             </Col>
                            </Row>

                            <Row className="form-group">
                        <Label htmlFor="password" md={2}>Password</Label>
                        <Col md={10}>
                            <Control type="password" model=".password" id="password" name="password"
                                placeholder="Password"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(5), maxLength: maxLength(20)
                                }}
   
                             />
                             <Errors
                             className="text-danger"
                             model=".password"
                             show="touched"
                             messages={{
                                 required: 'Required* ',
                                 minLength: 'Must be greater than 4 characters ',
                                 maxLength: 'Must be 20 characters or less '
                             }}
                              />
                             </Col>
                            </Row>
                            <Row className="form-group">
                            <Col md={{size: 10, offset: 2}}>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                            <hr>
                            </hr>
                            <Button onClick={this.toggleSignup} color="success">Signup</Button>
                            </Col>
                            </Row>
                        </LocalForm>
                        

                </ModalBody>
             
             </Modal>


             <Modal isOpen={this.state.isSignupOpen} toggle={this.toggleSignup}>
             <ModalHeader>Hello New User!</ModalHeader>
             <ModalBody>
             

                     <LocalForm onSubmit={this.handleSignup}>
                     <Row className="form-group">
                     <Label htmlFor="cfirstname" md={2}>First Name</Label>
                     <Col md={10}>
                         <Control.text model=".cfirstname" id="cfirstname" name="cfirstname"
                             placeholder="First Name"
                             className="form-control"
                             validators={{
                                 required, minLength: minLength(3), maxLength: maxLength(20)
                             }}

                          />
                          <Errors
                          className="text-danger"
                          model=".cfirstname"
                          show="touched"
                          messages={{
                              required: 'Required* ',
                              minLength: 'Must be greater than 2 characters ',
                              maxLength: 'Must be 20 characters or less '
                          }}
                           />
                          </Col>
                         </Row>

                         <Row className="form-group">
                         <Label htmlFor="clastname" md={2}>Last Name</Label>
                         <Col md={10}>
                             <Control.text model=".clastname" id="clastname" name="clastname"
                                 placeholder="Last Name"
                                 className="form-control"
                                 validators={{
                                     required, minLength: minLength(5), maxLength: maxLength(20)
                                 }}
    
                              />
                              <Errors
                              className="text-danger"
                              model=".clastname"
                              show="touched"
                              messages={{
                                  required: 'Required* ',
                                  minLength: 'Must be greater than 4 characters ',
                                  maxLength: 'Must be 20 characters or less '
                              }}
                               />
                              </Col>
                             </Row>

                             <Row className="form-group">
                             <Label htmlFor="cDob" md={2}>Dob</Label>
                             <Col md={10}>
                                 <Control type="date" model=".cDob" id="cDob" name="cDob"
                                     placeholder="2020-06-27"
                                     className="form-control"
                                     validators={{
                                         required
                                     }}
                                     
                                 />
                                 <Errors
                                             className="text-danger"
                                             model=".cDob"
                                             show="touched"
                                             messages={{
                                                 required: 'Required* ',
                                             }}
                                          />
     
                             </Col>
                         </Row>

                             <Row className="form-group">
                             <Label htmlFor="cEmail" md={2}>Email</Label>
                             <Col md={10}>
                                 <Control.text model=".cEmail" id="cEmail" name="cEmail"
                                     placeholder="Email"
                                     className="form-control"
                                     validators={{
                                         required, validEmail
                                     }}
                                     
                                 />
                                 <Errors
                                             className="text-danger"
                                             model=".cEmail"
                                             show="touched"
                                             messages={{
                                                 required: 'Required* ',
                                                 validEmail: 'Invalid Email Address'
                                             }}
                                          />
     
                             </Col>
                         </Row>

                         <Row className="form-group">
                         <Label htmlFor="username" md={2}>UserName</Label>
                         <Col md={10}>
                             <Control.text model=".username" id="username" name="username"
                                 placeholder="Username"
                                 className="form-control"
                                 validators={{
                                     required, minLength: minLength(5), maxLength: maxLength(20)
                                 }}
    
                              />
                              <Errors
                              className="text-danger"
                              model=".username"
                              show="touched"
                              messages={{
                                  required: 'Required* ',
                                  minLength: 'Must be greater than 4 characters ',
                                  maxLength: 'Must be 20 characters or less '
                              }}
                               />
                              </Col>
                             </Row>

                             <Row className="form-group">
                         <Label htmlFor="password" md={2}>Password</Label>
                         <Col md={10}>
                             <Control type="password" model=".password" id="password" name="password"
                                 placeholder="Password"
                                 className="form-control"
                                 validators={{
                                     required, minLength: minLength(5), maxLength: maxLength(20)
                                 }}
    
                              />
                              <Errors
                              className="text-danger"
                              model=".password"
                              show="touched"
                              messages={{
                                  required: 'Required* ',
                                  minLength: 'Must be greater than 4 characters ',
                                  maxLength: 'Must be 20 characters or less '
                              }}
                               />
                              </Col>
                             </Row>

                        <Row className="form-group">
                        <Col md={{size: 10, offset: 2}}>
                         <Button type="submit" value="submit" color="primary">Register</Button>
                         </Col>
                         </Row>
                         
                     </LocalForm>
                     

             </ModalBody>
          
          </Modal>

          <Modal isOpen={this.state.isIncorrect} toggle={this.toggleIncorrect}>
          <ModalHeader>Sorry!</ModalHeader>
          <ModalBody>
          Incorrect Username or Password!
          Please try Again!
          </ModalBody>
          <ModalBody>
           

          </ModalBody>
          </Modal>

          <Modal isOpen={this.state.isCorrect} toggle={this.toggleCorrect}>
          <ModalHeader>Welcome! </ModalHeader>
          <ModalBody>
         
          <Card>
          <CardImg src={this.props.itemLogined.image}
          />
          </Card>
          </ModalBody>
          <ModalBody>
          </ModalBody>
          </Modal>
          
          <Modal isOpen={this.state.isLoggedOut} toggle={this.toggleLogout}>
          <ModalHeader>Thankyou for Choosing us! </ModalHeader>
          <ModalBody>
          
          </ModalBody>
          <Card>
          <CardImg src={this.props.itemLogout.image}/>
          </Card>
          <ModalBody>
          </ModalBody>
          </Modal>

    </>
    );
  }
}

export default Header;