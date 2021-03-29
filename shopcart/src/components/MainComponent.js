import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Category from './CategoryComponent';
import Contact from './ContactComponent';
import CategoryDetail from './CategoryDetailComponent';
import SelectedItem from './SelectedItem';
import CartComponent from './CartComponent';
import PaymentComponent from './PaymentComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
    return{
        clothes:state.clothes,
        furniture:state.furniture,
        grocery:state.grocery,
        electronics:state.electronics,
        allitems:state.allitems
    }
}


class Main extends Component{


    constructor(props){
        super(props);

        this.state={
            // clothes:CLOTHES,
            // furniture:FURNITURE,
            // grocery:GROCERY,
            // electro:ELECTRONICS,
            // allitems:ALLITEMS,
            username:'',
            password:'',
            cartitems:[],
            isloggedin:false

        };
        this.setidentity=this.setidentity.bind(this);
        this.setupcart=this.setupcart.bind(this);
        this.appendcartitems=this.appendcartitems.bind(this);
        this.clearcart=this.clearcart.bind(this);
        this.deletecartitem=this.deletecartitem.bind(this);
    }
     
    
    setupcart(cart){

        
        if(this.state.username!='')
        {
        this.setState({cartitems: cart});
        }
        else{
            var newcart=[];
            this.setState({cartitems: newcart });
        }
        
    
    }

    setidentity(username,password){

        this.setState({username:username});
        this.setState({password:password});

        if(username=='' || password=='')
        {
            this.setState({isloggedin:false});
        }
        else{
            this.setState({isloggedin:true});
        }
        const setupcart=this.setupcart;

        async function getcart(username)
        {
          let response = await fetch(`http://localhost:4000/getcart`,{
            method:'POST',
            mode:'cors',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              username:username,
          
            })
          });

          let data = await response.json();
       
          setupcart(data.cart);
        }

       getcart(this.state.username,setupcart);
        
       
        
    }
   

    appendcartitems(item){
        const setupcart=this.setupcart;

        async function updatecart(username,item,setupcart)
        {
          let response = await fetch(`http://localhost:4000/addtocart`,{
            method:'POST',
            mode:'cors',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              username:username,
              itemid:item.id,
              itemname:item.name,
              itemquantity:item.quantity,
              itemnetprice:item.netprice
            })
          });

          let data = await response.json();
          setupcart(data.cart);
         
        }
        updatecart(this.state.username,item,setupcart)

        
    }
    deletecartitem(item){

        const setupcart=this.setupcart;
      async function updatecart(username,item,setupcart)
      {  
        let response = await fetch(`http://localhost:4000/deletefromcart`,{
          method:'POST',
          mode:'cors',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            username:username,
            itemid:item.id
          })
        });
        
        let data = await response.json();

        setupcart(data.cart);
       
      }
      updatecart(this.state.username,item,setupcart);

    }

    clearcart(){
        
        const setupcart=this.setupcart;
      async function updatecart(username,setupcart)
      {  
        let response = await fetch(`http://localhost:4000/clearcart`,{
          method:'POST',
          mode:'cors',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            username:username,
          })
        });
        
        let data = await response.json();

        setupcart(data.cart);
       
      }
      updatecart(this.state.username,setupcart);
    }
    render(){

        const Homepage=()=>{
            return(
                <Home 
                 cloth={this.props.clothes.filter((cloth)=>cloth.featured)} 
                furniture={this.props.furniture.filter((furniture)=>furniture.featured)}
                grocery={this.props.grocery.filter((grocery)=>grocery.featured)}
                electronic={this.props.electronics.filter((electro)=>electro.featured)}
                />
            );
        }

        const AboutPage=()=>{
            return(
                <About/>
            );
        }

        const CategoryPage=()=>{
            return(
                <Category
                cloth={this.props.clothes} 
                furniture={this.props.furniture}
                grocery={this.props.grocery}
                electronic={this.props.electronics}
                />
            );
        }

        const ClothesPage=()=>{

            return(
                <CategoryDetail item={this.props.clothes} 
                       category='Clothes and Garments'
                />
            );
        }
        const SelectedItems=({match})=>{

            return(
                <SelectedItem 
                username={this.username}
                item={this.props.allitems.filter((item)=>item.id===parseInt(match.params.itemId,10))[0]} 
                 appendcartitems={this.appendcartitems}
                />
            );
        }
        
        const FurniturePage=()=>{

            return(
                <CategoryDetail item={this.props.furniture}
                category='Furniture'
                />
            );
        }
        const GroceryPage=()=>{

            return(
                <CategoryDetail item={this.props.grocery}
                category='Grocery'
                />
            );
        }
        const ElectronicsPage=()=>{

            return(
                <CategoryDetail item={this.props.electronics}
                category='Electronics'
                />
            );
        }
        const MyCart=()=>{
            return(
                <CartComponent 
                cartitems={this.state.cartitems}
                clearcart={this.clearcart}
                username={this.state.username}
                deletecartitem={this.deletecartitem}
      
                />
            )
        }
        const Pay=()=>{
            return(
                <PaymentComponent
                username={this.state.username}
                item={this.props.allitems.filter((item)=>item.id===100)[0]} 

                />
            )
        }

        const ContactPage=()=>{
            return(
                <Contact
                username={this.state.username}

                />          );

        }
        
    
        return(
            <>
            <Header  
            item={ this.props.allitems.filter((item)=>item.id===101)[0]} 
            isloggedin={this.state.isloggedin}
            clearcart={this.clearcart}
            setidentity={this.setidentity}
            itemLogined={this.props.allitems.filter((item)=>item.id===102)[0]}
            itemLogout={this.props.allitems.filter((item)=>item.id===103)[0]}
            />
            <Switch>
            
            <Route path="/home" component={Homepage}></Route>
            <Route exact path="/categories" component={CategoryPage}/>
            <Route exact path='/categories/Clothes' component={ClothesPage} />
            <Route path='/categories/Furnitures' component={FurniturePage} />
            <Route path='/categories/Grocery' component={GroceryPage} />
            <Route path='/categories/Electronics' component={ElectronicsPage} />
            <Route path='/mycart' component={MyCart} />
            <Route path='/payment' component={Pay} />
            <Route exact path='/categories/:itemId' component={SelectedItems} />
            <Route exact path="/contactus" component={ContactPage}/>  
            <Route exact path="/aboutus" component={AboutPage}/>
            <Redirect to="/home"/>
            </Switch>
            
            <Footer/>
            </>
            
        );
    }

}

export default withRouter(connect(mapStateToProps)(Main));