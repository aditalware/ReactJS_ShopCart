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
import {CLOTHES} from '../data/clothes';
import {FURNITURE} from '../data/furniture';
import {GROCERY} from '../data/grocery';
import {ELECTRONICS} from '../data/electronics';
import {ALLITEMS} from '../data/allitems';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';




function component (){}


class Main extends Component{


    constructor(props){
        super(props);

        this.state={
            clothes:CLOTHES,
            furniture:FURNITURE,
            grocery:GROCERY,
            electro:ELECTRONICS,
            allitems:ALLITEMS,
            username:'',
            password:'',
            cartitems:[],
            isloggedin:false

        };
        this.setidentity=this.setidentity.bind(this);
        this.appendcartitems=this.appendcartitems.bind(this);
        this.clearcart=this.clearcart.bind(this);
        this.deletecartitem=this.deletecartitem.bind(this);
    }
     
    setidentity(username,password){

        this.setState({username:username},()=>{alert(this.state.username) });
        this.setState({password:password});

        if(username=='' || password=='')
        {
            this.setState({isloggedin:false});
            this.clearcart();
        }
        else{
            this.setState({isloggedin:true});
        }
        
    }
   

    appendcartitems(item){

        this.setState({cartitems: this.state.cartitems.concat(item)});
    }
    deletecartitem(item){
      var myArray=[];
     
     
      myArray = this.state.cartitems.filter(function( obj ) {
        return obj.id !== item.id;
    });
     
      this.setState({cartitems:myArray});
         
    }

    clearcart(){
        this.setState({cartitems:[]});
    }
    render(){

        const Homepage=()=>{
            return(
                <Home  cloth={this.state.clothes.filter((cloth)=>cloth.featured)[0]} 
                furniture={this.state.furniture.filter((furniture)=>furniture.featured)[0]}
                grocery={this.state.grocery.filter((grocery)=>grocery.featured)[0]}
                electronic={this.state.electro.filter((electro)=>electro.featured)[0]}
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
                cloth={this.state.clothes} 
                furniture={this.state.furniture}
                grocery={this.state.grocery}
                electronic={this.state.electro}
                />
            );
        }

        const ClothesPage=()=>{

            return(
                <CategoryDetail item={this.state.clothes} 
                       category='Clothes and Garments'
                />
            );
        }
        const SelectedItems=({match})=>{

            return(
                <SelectedItem 
                item={this.state.allitems.filter((item)=>item.id===parseInt(match.params.itemId,10))[0]} 
                 appendcartitems={this.appendcartitems}
                />
            );
        }
        
        const FurniturePage=()=>{

            return(
                <CategoryDetail item={this.state.furniture}
                category='Furniture'
                />
            );
        }
        const GroceryPage=()=>{

            return(
                <CategoryDetail item={this.state.grocery}
                category='Grocery'
                />
            );
        }
        const ElectronicsPage=()=>{

            return(
                <CategoryDetail item={this.state.electro}
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
                item={this.state.allitems.filter((item)=>item.id===100)[0]} 

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
            item={ this.state.allitems.filter((item)=>item.id===101)[0]} 
            isloggedin={this.state.isloggedin}
            clearcart={this.clearcart}
            setidentity={this.setidentity}
            itemLogined={this.state.allitems.filter((item)=>item.id===102)[0]}
            itemLogout={this.state.allitems.filter((item)=>item.id===103)[0]}
            
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

export default Main;