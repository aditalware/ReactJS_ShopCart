import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardHeader,Badge,Row,Label,Col,Button, CardFooter,Breadcrumb,BreadcrumbItem} from 'reactstrap';
    import {LocalForm ,Control} from 'react-redux-form';
    import {Link} from 'react-router-dom';
   
function RenderItem({item})
     {
         return(
            <Card key={item.id}>
            <CardImg width="100%" src={item.image} alt={item.name}/>
            <CardBody>
            
            </CardBody>
            </Card>
         );
     }
  
class SelectedItem extends Component{

    constructor(props){
        super(props);
        this.state={
        netprice:props.item.price,
        quantity:1,
        message:'Fill the details above to proceed!',
        
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.addcart=this.addcart.bind(this);
    }

  handleSubmit(values)
  {
    this.setState({netprice:(parseInt(values.quantity)* this.props.item.price>0)?parseInt(values.quantity)* this.props.item.price:this.state.netprice});
    this.setState({quantity:parseInt(values.quantity)});

  }

  addcart(){
      this.setState({message:'Your Item has been Added Successfully!'})
    //   fetch(`http://localhost:4000/add?itemno=${this.props.item.id}&itemname=${this.props.item.name}&quantity=${this.state.quantity}`)
        // .catch(err=>console.log("hy"+err))
        const obj={id:this.props.item.id,name:this.props.item.name,quantity:this.state.quantity,netprice:this.state.netprice}
        this.props.appendcartitems(obj);



      }
  
    render(){
        return(
            <>
            <div className="container">
            <Breadcrumb>
         <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
         <BreadcrumbItem><Link to="/categories">Categories</Link></BreadcrumbItem>
         <BreadcrumbItem active>{this.props.item.name}</BreadcrumbItem>
         </Breadcrumb>
         <div className="row">
         
             <div className="col-12 col-md-5 m-1">
                 < RenderItem item={this.props.item}/>
             </div >
             <div className="col-12 offset-md-1 col-md-6 m-1">
               

             
             <div>
             <Card key={this.props.item.id}>
             <CardHeader>{this.props.item.name}</CardHeader>
             <CardBody>
             <CardText>
             <h4>
             <Badge color="success">In Stock</Badge>
             <br></br> 
             <Badge color="primary">Rs.{this.props.item.price}/-</Badge> 
             </h4>
             <small style={{ color:"red" }}>* All the prices are valid per pack/entity.</small>
             <br></br>
              <br></br>
             <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
         
             <Row className="form-group">
             <Label htmlFor="quantity" md={3}>Quantity</Label>
             <Col md={10}>
                  <Control.select model=".quantity" name="quantity" value="1"
                       className="form-control"> 
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>
                   </Control.select>
             </Col >
             </Row>
             <Row>
             <div className="col-12 ">
             <small style={{color:"red"}}>Click the button below to get the cost of the item!</small>
             </div>

             </Row>
              
             <Row className="form-group">
              <Col  md={4}>
             
             <Button type="submit" color="success">
                 Amount Payable 
             </Button>

             </Col>
             <Col md={4}>
             <div>
             <strong style={{color:"blue"}}>  Rs {this.state.netprice} /-
             </strong>
             </div>
             </Col>
             </Row>
             
             <Row className="form-group">
              <Col >
             <Button  onClick={()=>this.addcart()} color="warning">
            Add to Cart
             </Button>
             </Col>
             </Row>
             
             
             </LocalForm>
         
         
             <blockquote>
             " {this.props.item.description} "
             
             </blockquote>
             <br></br>
         
             </CardText>
             </CardBody>

             <CardFooter  >
             <div  >
             <Button color="success">
             {this.state.message}

             </Button>

             </div>
             </CardFooter>
             </Card>
             
             
             </div>

             </div>
            
           
         </div>
         </div>
         </>
        );
     

    }
  

}
export default SelectedItem;