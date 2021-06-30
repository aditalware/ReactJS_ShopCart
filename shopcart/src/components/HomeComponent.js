import React from'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Jumbotron} from 'reactstrap';
import {Link} from 'react-router-dom';
import {FadeTransform} from 'react-animation-components';
import { Fade, Stagger } from 'react-animation-components'
import SideButtons from './SideButtons';
import StarRatingComponent from 'react-star-rating-component';
import CarouselComponent from './CarouselComponent';
function RenderCard({item}){

    return(
        <Fade in>
        <Card>
        <Link to={`/categories/${item.id}`} style={{textDecoration:"none"}}>
        <CardImg src={item.image} alt={item.name} height="330" width="200" />
        <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <StarRatingComponent 
          name={item.name} 
          starCount={7}
          value={item.rating}
          editing={false}
        />
        <CardText>{item.description}</CardText>
        </CardBody>
        </Link>
           
        </Card>
        </Fade>
        
    );
}
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

function Home(props){
        return(<>
            <Jumbotron>
           <CarouselComponent/>
           </Jumbotron>

            <SideButtons/>

            <Stagger in delay={4000}>

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
            </Stagger>

            <div className="container">
            <div className="row ">
                   
           
             
            
            </div>
            <div className="row align-items-start homecomp" style={{backgroundColor:"#EAEAEA"}}>
                <div className="col-12" style={{margin:"auto",width:"fit-content",textAlign:"center"}}>
                     <h1> Featured Section</h1>
                </div>
                {
                    props.cloth.map((cloth)=>{
                        return(
                            <div className="col-12 col-md-3 " >
                    <RenderCard item={cloth} 
                    />
                         </div>
                        );
                    })
                }
                 {
                    props.furniture.map((furniture)=>{
                        return(
                            <div className="col-12 col-md-3 ">
                    <RenderCard item={furniture}
                    />
                </div>
                        );
                    })
                }
                {
                    props.grocery.map((grocery)=>{
                        return(
                            <div className="col-12 col-md-3 ">
                    <RenderCard item={grocery} 
                     />
                </div>
                        );
                    })
                }
                {
                    props.electronic.map((electronic)=>{
                        return(
                            <div className="col-12 col-md-3 ">
                <RenderCard item={electronic} 
                 />
               </div>
                        );
                    })
                }

            </div>
        </div>
        </>
        );

}


export default Home;