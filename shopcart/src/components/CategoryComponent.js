import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Breadcrumb,BreadcrumbItem,Button} from 'reactstrap';
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

function RenderCard({item}){

    return(
        <FadeTransform in
        transformProps={{exitTransform:'scale(0.5) translateY(-50%)'}}>
        <Card height="300" width="200" >
        <Link to={`/categories/${item.category}`} style={{textDecoration:"none"}}>
            <CardImg src={item.image} alt={item.name} />
            <StarRatingComponent 
                name={item.name} 
                starCount={7}
                value={item.rating}
                editing={false}
                />
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
           <div className="container" >
         
           <div className="row align-items-start rt" style={{backgroundColor:"#EAEAEA",marginTop:"100px",marginBottom:"100px"}}>
                        <div className="col-12" style={{margin:"auto",width:"fit-content",textAlign:"center"}}>
                                    <h1> Categories</h1>
                                </div>
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