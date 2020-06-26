import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
    import {Link} from 'react-router-dom';
    import {FadeTransform} from 'react-animation-components';

function RenderCard({item}){

    return(
        <FadeTransform in
        transformProps={{exitTransform:'scale(0.5) translateY(-50%)'}}>
        <Card>
        <Link to={`/categories/${item.category}`}>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.category}</CardTitle>
            <CardText>{item.label}</CardText>
            </CardBody>
        </Link>
        </Card>
        </FadeTransform>
    );
}
function Category(props){

    
       return(
           <div>
           <div className="container">
           <div className="row ">
           <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Categories</BreadcrumbItem>
                    </Breadcrumb>
             <div className="col-12 col-md-6 offset-md-4">
             <h1> Categories!!!</h1>
             <br></br>
             </div>
           
           </div>
           <div className="row align-items-start">
                
               <div className="col-12 col-md m-1">
               <RenderCard item={props.cloth.filter((cloth)=>cloth.chosen)[0]}
               />
               </div>
               <div className="col-12 col-md m-1">
                   <RenderCard item={props.furniture.filter((furn)=>furn.chosen)[0]}
                   />
               </div>
               <div className="col-12 col-md m-1">
                   <RenderCard item={props.grocery.filter((groc)=>groc.chosen)[0]} 
                    />
               </div>
               <div className="col-12 col-md m-1">
               <RenderCard item={props.electronic.filter((elec)=>elec.chosen)[0]} 
                />
           </div>
           </div>
       </div>
           
           </div>
       );
   } 

export default Category;