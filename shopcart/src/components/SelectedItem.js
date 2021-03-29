import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardHeader,Badge,Row,Label,Col,Button, CardFooter,Breadcrumb,BreadcrumbItem} from 'reactstrap';
    import {LocalForm ,Control} from 'react-redux-form';
    import {Link} from 'react-router-dom';
    import ButtonGroup from 'react-bootstrap/ButtonGroup'
    import StarRatingComponent from 'react-star-rating-component';
    import {FadeTransform} from 'react-animation-components';
    import SideButtons from './SideButtons';


    function Renderoffers({item}){

        return(
            <FadeTransform in
            transformProps={{exitTransform:'scale(0.5) translateY(-50%)'}}>
            <Card>
            <Link to={`/categories/${item.id}`}>
            <CardImg src={item.image} alt={item.name} height="300" width="100" />
            </Link>
            </Card>
            </FadeTransform>
            
        );
    }
function RenderItem({item})
     {
         return(
            <Card key={item.id}>
            <CardImg width="100%" src={item.image} alt={item.name}/>
            <CardBody>
            
            </CardBody>
            <CardFooter style={{textAlign:"center",fontWeight:"700",fontSize:"20px"}} >
                {item.name}
            </CardFooter>
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
    this.setState({netprice:(parseInt(values)* this.props.item.price>0)?parseInt(values)* this.props.item.price:this.state.netprice});
    this.setState({quantity:parseInt(values)});

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
             <SideButtons/>

             <div className="col-1 hotdeals" >
                    <div className="col-12 d-sm-none d-md-none d-lg-block as " >
                        <Renderoffers item={{image:"/assests/images/hotdeals.jpg",name:"hotdeals"}}  
                        />
                    </div>
                    <div className="col-12  d-sm-none d-md-none d-lg-block as">
                        <Renderoffers item={{image:"/assests/images/fifty.jpg",name:"fifty"}} 
                        />
                    </div>
                    <div className="col-12 d-sm-none d-md-none d-lg-block as">
                        <Renderoffers item={{image:"/assests/images/thirty.jpg",name:"thirty"}} 
                        />
                    </div>
                    <div className="col-12 d-sm-none d-md-none d-lg-block as">
                    <Renderoffers item={{image:"/assests/images/ten.jpg",name:"ten"}} 
                    />
                </div>
                <div className="col-12 d-sm-none d-md-none d-lg-block as">
                    <Renderoffers item={{image:"/assests/images/special.jfif",name:"special"}} 
                    />
                </div>
                
             </div>
            <div className="container" style={{marginTop:"100px",marginBottom:"200px"}}>
        
         <div className="row selecteditem" >
         
             <div className="col-12 col-md-5 m-1 asdf">
                 < RenderItem item={this.props.item}/>
             </div >
             <div className="col-12 offset-md-1 col-md-6 m-1">
               

             
             <div>
             <Card key={this.props.item.id} style={{height:"546px"}}>
             <CardBody>
             <CardText >
                 <div className="row">



             <h4 className="col-6">
             <Badge color="success">In Stock</Badge>
             <div>

             <label  className="pricemoney">MRP:  </label>
             <Badge color="danger"  className="pricemoney"><i className="fa fa-inr"></i> {this.props.item.price+25}/-</Badge> 

             </div>

             <div>

             <label  className="pricemoney">Deal Price:  </label>
             <Badge color="primary"  className="pricemoney"><i className="fa fa-inr"></i> {this.props.item.price}/-</Badge> 
       
             </div>

             <div>
             <label  className="pricemoney">You Save :  </label>
             <Badge color="success" className="pricemoney">{String((25/(this.props.item.price+25))*100).substr(0,4)} <i className="fa fa-percent"></i> </Badge> 

             </div>
             </h4>




             <h4 className="col-6">
                 <div style={{marginBottom:"30px",marginTop:"20px"}}>

                    <label  className="pricemoney"  style={{width:"80px"}}>Quantity</label>
                    <select onChange={(e)=>{this.handleSubmit(e.target.value)}} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                 </div>

                 <div>

                        <label  className="pricemoney" style={{width:"150px"}}>Net Amount: </label>
                        <span  > <i className="fa fa-inr"></i> {this.state.netprice}</span>
                 </div>
             </h4>
                 </div>
             <small style={{ color:"red" }}>* All the prices are valid per pack/entity.</small>
            

            <div className="star">
                <label>Overall Rating: {this.props.item.rating}/7 </label>
                <StarRatingComponent 
                    name={this.props.item.name}
                    starCount={7}
                    value={this.props.item.rating}
                    editing={false}
                    style={{fontSize:"20px"}}
                    />

            </div>

            <div>
                    <strong>
                       FREE delivery: {String(new Date()).split(' ')[0]}day , {String(new Date()).split(' ')[1]}  {(parseInt(String(new Date()).split(' ')[2])+1)%31} 
                    </strong>
                    <br></br>
                    <strong>
                    Fastest delivery: {String(new Date()).split(' ')[0]}day , {String(new Date()).split(' ')[1]}  {(parseInt(String(new Date()).split(' ')[2]))%31}
                    </strong>
                    <br></br>
                    Order within <strong>12 hrs</strong> and <strong>23 mins </strong>
            </div>
            <div style={{display:"inline-flex",marginTop:"20px"}}>
                        <div className="icons" style={{backgroundColor:"#1400e07d"}}>

                    <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
                        </div>
                        <div className="icons" style={{backgroundColor:"#fba200f0"}}>

                    <i class="fa fa-truck" aria-hidden="true"></i>
                        </div>
                        <div className="icons" style={{backgroundColor:"#008000a3"}}>

                    <i class="fa fa-leaf" aria-hidden="true" ></i>
                        </div>
                        <div className="icons" style={{backgroundColor:"#ff2a00a8"}}>
                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>

                        </div>


            </div>

         
            <Button   onClick={()=>this.addcart()} className="addcart">
              Add to Cart
             </Button>

             <div>
             {this.props.item.description} 
             </div>
         
             </CardText>
             </CardBody>

            
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