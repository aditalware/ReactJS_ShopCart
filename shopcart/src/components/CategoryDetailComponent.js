import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {FadeTransform} from 'react-animation-components'
    function RenderCard({item}){

        return(
            <FadeTransform in
            transformProps={{exitTransform:'scale(0.5) translateY(-50%)'}}>
            
           
               <Link to={`/categories/${item.id}`}>
               <Card key={item.id}>
               <CardImg src={item.image} alt={item.name} />
               <CardBody>
               <CardTitle>{item.name}</CardTitle>
               <hr></hr>
               <CardText>
               <h4>
               <span class="badge badge-danger">{item.label}</span>
               <br></br> 
               <span class="badge badge-pill badge-success">Rs.{item.price}</span> 
               </h4>
               <br></br>
               <blockquote>
               " {item.description} "
               
               </blockquote>
                </CardText>
               </CardBody>
           </Card>
               </Link>
               
            </FadeTransform>
            
        );
    }
function CategoryDetail (props){

    const category=props.item.map((category)=>{

     return(
        <div className="col-12 col-md-3 ">
         <RenderCard item={category}/>
         </div>

     );


    });
       return(
        <div>
        <div className="container">
        <div className="row ">
        <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/categories">Categories</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.category}</BreadcrumbItem>
        </Breadcrumb>
          <div className="col-12 col-md-8 offset-md-3">
          <h1> {props.category} Section! </h1>
          <br></br>
          </div>
        
        </div>
        <div className="row align-items-start">
             
          
          {category}

            
            
        </div>
        </div>
    </div>
        
        
       );
   
}
export default CategoryDetail;