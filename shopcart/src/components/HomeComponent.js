import React from'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,Breadcrumb,BreadcrumbItem,Jumbotron,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {FadeTransform} from 'react-animation-components';
import { Fade, Stagger } from 'react-animation-components'
import SideButtons from './SideButtons';
import Carousel from 'react-bootstrap/Carousel'
import StarRatingComponent from 'react-star-rating-component';

function RenderCard({item}){

    return(
        <Fade in
        >
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
            <div className="container">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src="/assests/images/ad8.png"
                        alt="Super Sale"
                        height="500"
                        />
                        <Carousel.Caption>
                        <h3>Amazing deals</h3>
                        <p>Enhance the power of listening</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="/assests/images/ad6.jpg"
                        alt="Second slide"
                        height="500"
                        />
                        <Carousel.Caption>
                        <h3>Super Exciting</h3>
                        <p>Worth a deal</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/assests/images/ad3.jpg"
                        alt="Third slide"
                        height="500"
                        />
                        <Carousel.Caption>
                        <h3>Mind Blowing Sale</h3>
                        <p>Worth a deal</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/assests/images/ad4.jpg"
                        alt="Third slide"
                        height="500"

                        />
                        <Carousel.Caption>
                        <h3>Mind Blowing Sale</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/assests/images/ad1.jpg"
                        alt="Third slide"
                        height="500"

                        />
                        <Carousel.Caption>
                        <h3>Mind Blowing Sale</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/assests/images/ad2.jpg"
                        alt="Third slide"
                        height="500"

                        />
                        <Carousel.Caption>
                        <h3>Mind Blowing Sale</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/assests/images/ad7.jpg"
                        alt="Third slide"
                        height="500"

                        />
                        <Carousel.Caption>
                        <h3>Mind Blowing Sale</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/assests/images/ad5.jpg"
                        alt="Third slide"
                        height="500"

                        
                        />
                        <Carousel.Caption>
                        <h3>Mind Blowing Sale</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
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