import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Button,Table,Breadcrumb,BreadcrumbItem} from 'reactstrap';
    import {Link,useHistory} from 'react-router-dom';
   
    import {} from 'react-animation-components';



function RenderRow(props){
  
    return(
        <tr>
          
          <td>{props.item.id}</td>
          <td>{props.item.name}</td>
          <td>{props.item.quantity}</td>
          <td>{props.item.netprice}</td>
          <td><Button color="danger" onClick={()=>props.deletecartitem(props.item)}><span className="fa fa-lg fa-remove"></span>Remove Item</Button></td>
        </tr>
    
        
    );
}



function handlesubmit(username,cartitems,clearcart){
 
  
    var r = Math.floor(Math.random() * 100) + 1;
    var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    for( var el in cartitems ) {
        
       
        fetch(`http://localhost:4000/orders?oid=${r}&iid=${cartitems[el].id}&quantity=${cartitems[el].quantity}&netprice=${cartitems[el].netprice}`)
        .catch(e=>console.log('error' + e));

    }
    fetch(`http://localhost:4000/cust_order?username=${username}&oid=${r}&date=${date}&time=${time}`)
    .catch(e=>console.log('error' + e));

   clearcart();
   alert('Thanks for paying ' + username);
  
   

 
  

}

function Cart(props){
   
   
  let history=useHistory();

    const category=props.cartitems.map((item)=>{
           
        return(
            <RenderRow item={item} deletecartitem={props.deletecartitem} />
 
        );
   
   
       });
       function sum( obj ) {
        var sum = 0;
        for( var el in obj ) {
        
            sum += parseFloat( obj[el].netprice );
          
        }
        return sum;
      }
     


       return(
        <div>
        <div className="container">
        <div className="row ">
        <Breadcrumb>
        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
        <BreadcrumbItem active>MyCart</BreadcrumbItem>
    </Breadcrumb>
          <div className="col-12 ">
          <h1>  Welcome To your own Shopping Cart {props.username} </h1>
          <br></br>
          </div>
        
        </div>
        <div className="row align-items-start">
             
        <Table striped>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Item Quantity</th>
            <th>Net Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        {category}
       
        <tr>
          
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

       
      <tr>
          
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
          
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
          
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
          
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
          
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
          </Table>
         
            
        </div>
        <div className="row">
        <Link to={'/categories'}>
        <Button  onClick={()=>props.clearcart()} color="warning">
        <span className="fa fa-lg fa-remove"></span>
        Clear Cart
         </Button>
        </Link>
        
        
        <div className="col-5">
        <Card>
        <CardBody>
        <CardText>  
                The total price:{sum(props.cartitems)} Rs/-
        </CardText>
        </CardBody>
        </Card>
        </div>
        
        <Button  onClick={()=>
          {
             if(props.username=='')
           {
            alert('Login is Required');
            props.clearcart();
            history.push('/home');
          } 
          else if(props.cartitems.length==0)
          {
            alert('Cart is empty!');
            history.push('/home');
          }
           else{
            handlesubmit(props.username,props.cartitems,props.clearcart);
            props.clearcart();

           history.push('/payment');
             
           }
          }
            } color="success">
        <span className="fa fa-lg fa-credit-card"></span>
        PayNow
         </Button>
        
        
        </div>

        
        </div>
    </div>
        
        
       );
   
}

export default Cart;