import React from'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
    import {Link} from 'react-router-dom';
    import {FadeTransform} from 'react-animation-components';



function RenderCard({item}){

    return(
        <FadeTransform in
        transformProps={{exitTransform:'scale(0.5) translateY(-50%)'}}>
        <Card>
        <Link to={`/categories/${item.id}`}>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
        </CardBody>
        </Link>
           
        </Card>
        </FadeTransform>
        
    );
}

function Home(props){
        return(
            
            <div className="container">
            <div className="row ">
            <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
              <div className="col-12 col-md-6 offset-md-3">
              <h1> Our Featured Section!</h1>
              </div>
            
            </div>
            <div className="row align-items-start">
                 
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.cloth} 
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.furniture}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.grocery} 
                     />
                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.electronic} 
                 />
            </div>
            </div>
        </div>
        
        );

}

export default Home;