import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Breadcrumb,BreadcrumbItem,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
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
    function RenderCard({item}){

        return(
            <FadeTransform in
            transformProps={{exitTransform:'scale(0.5) translateY(-50%)'}}>
            
           
               <Link to={`/categories/${item.id}`} style={{textDecoration:"none"}}>
               <Card key={item.id}>
               <CardImg src={item.image} alt={item.name} />
               <CardBody>
               <CardTitle>{item.name}</CardTitle>
               <StarRatingComponent
                name={item.name}
                starCount={7}
                value={item.rating}
                editing={false}
                />
               <hr></hr>
               <CardText>
               <h4>
               <span >{item.label=="hot"?<i className="fas fa-fire"></i>:<i className="fas fa-fire"></i>}</span>
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
        <div className="col-12 col-md-3 asd">
         <RenderCard item={category}/>
         </div>

     );


    });
       return(
        <div>
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
        <div className="container">
        <div className="row align-items-start" style={{backgroundColor:"#EAEAEA",marginTop:"100px",marginBottom:"70px"}}>
        <div className="col-12" style={{margin:"auto",width:"fit-content",textAlign:"center"}}>
        <h1> {props.category} Section! </h1>
        </div>
          
          {category}

            
            
        </div>
        </div>
    </div>
        
        
       );
   
}
export default CategoryDetail;