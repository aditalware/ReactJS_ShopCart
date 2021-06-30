import React ,{Component} from 'react';
import {LocalForm ,Control} from 'react-redux-form';
import { Card, CardImg, CardText, CardBody,
    CardHeader,Badge,Row,Label,Col,Button, CardFooter,Breadcrumb,BreadcrumbItem} from 'reactstrap';
    import {Link} from 'react-router-dom';

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component{

    constructor(props){
        super(props);

        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleSubmit(values)
  {     
      var r = Math.floor(Math.random() * 100) + 1;

    alert('Thanks for feedback');
    fetch(`http://localhost:4000/contact?fid=${r}&username=${this.props.username}&ratings=${values.ratings}&message=${values.message}`)
    .catch(e=>console.log('error' + e));


  }
    render()
   { 
       return(
           <div className="container contact" style={{marginTop:"100px",marginBottom:"200px"}}>
         
           <h3 className="shopcart" style={{padding:"20px"}} > Please Give us your valuable Feedback! {this.props.username}</h3>
           <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
         
           <Row className="form-group">
           <Label htmlFor="ratings" md={2}>Ratings</Label>
           <Col md={6}>
                <Control.select model=".ratings" name="ratings"
                     className="form-control"> 
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                 </Control.select>
           </Col >
           </Row>

           <Row className="form-group">
                        <Label htmlFor="message" md={2}>Your Feedback</Label>
                        <Col md={6}>
                            <Control.textarea model=".message" id="message" name="message"
                                rows="12"
                                className="form-control"/>
                                
                        </Col>
                        
             </Row>
             <Row className="form-group">
             <Col md={{size: 5, offset: 2}}>
                 <Button type="submit" color="primary">
                     Send Feedback
                 </Button>
             </Col>
             </Row>

           
           
           </LocalForm>
       </div>
       );
   } 
}
export default Contact;