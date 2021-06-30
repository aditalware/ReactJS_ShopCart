import React from 'react';
import { Button,Table} from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
import {} from 'react-animation-components';
import SideButtons from './SideButtons';
import axios from 'axios';



function RenderRow(props){
  
    return(
        <tr>
          
          <td>{props.item.itemId}</td>
          <td>{props.item.itemName}</td>
          <td>{props.item.itemQuantity}</td>
          <td>{props.item.itemNetPrice}</td>
          <td><Button color="danger" onClick={()=>props.deletecartitem(props.item)}><span className="fa fa-lg fa-remove"></span>Remove Item</Button></td>
        </tr>
    
        
    );
}



async function handlesubmit(username,cartitems,clearcart){
 
    let items=[];
    let netSum=0;
    alert(JSON.stringify(cartitems))
    for( var el in cartitems ) {
        
        items.push({
          itemId:cartitems[el].itemId,
          itemQuantity:cartitems[el].itemQuantity,
          itemNetPrice:cartitems[el].itemNetPrice
        })
        netSum+=cartitems[el].itemNetPrice

    }
  
    const order={
      username:username,
      products:items,
      orderTotal:netSum
    }
    console.log(order)
    axios.post('https://backend-ecommerce-adit.herokuapp.com/api/order',order).then((data)=>{
      console.log(data);
      if(data.error){
        alert('Failed to place order' + username);
      }
      else{
        clearcart();
      }
    })
    .catch((err)=>console.log(err))
   

   

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
            sum += parseFloat( obj[el].itemNetPrice );
        }
        return sum;
      }



       return(
        <div>
        <div className="container">
        <div className="row ">
       <SideButtons/>

          <div className="col-12 " className="shopcart">
          <h1>  Welcome To your own Shopping Cart {props.username} </h1>
          <br></br>
          </div>
        
        </div>
        <div className="row align-items-start" style={{height:"500px",border:"15px solid",borderColor:"#EAEAEA"}}>
            
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
        <tbody>

        {category}
        </tbody>
       
       
          </Table>
         
          
        </div>
        <div className="row">
                <Link to={'/categories'}>
            <Button  onClick={()=>props.clearcart()} className="clearcartbtn">
            <span className="fa fa-lg fa-remove"></span>
              Clear Cart
            </Button>
            </Link>
            
        
        
       
        
        <Button className="paynowbtn" onClick={()=>
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

            history.push('/payment');
             
           }
          }
            } color="success">
        <span className="fa fa-lg fa-credit-card"></span>
                  PayNow
         </Button>

         <div className="totalamt" >
            <strong> The total price: </strong> {sum(props.cartitems)} Rs/-
          </div>
        
        
        </div>

        
        </div>
    </div>
        
        
       );
   
}

export default Cart;