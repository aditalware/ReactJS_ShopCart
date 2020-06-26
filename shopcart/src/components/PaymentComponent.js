import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Breadcrumb,BreadcrumbItem} from 'reactstrap';
    import {Link} from 'react-router-dom';
    import {FadeTransform} from 'react-animation-components'

class Payement extends Component
{
    constructor(props)
    {
        super(props);
        this.state={

        }
    }
   
    render(){
        return(
            <div className="container">
            <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Payment gateway</BreadcrumbItem>
        </Breadcrumb>
            
            <FadeTransform in
            transformProps={{exitTransform:'scale(0.5) translateY(-50%)'}}>
            <Card>
            <CardTitle></CardTitle>
            <CardImg src={this.props.item.image} alt={this.props.item.name}></CardImg>
            <CardBody>
            <CardText>
            <div className="col-12 d-flex justify-content-center ">
            <Link to={'/about'}>
            <Button color="warning" >
            Thank you for shopping with SEA AND SHOP !
            </Button>
            </Link>
            
            </div>

            <div className="col-12 d-flex justify-content-center ">
            We’ve sent you an email !
            </div>
            <div className="col-12 d-flex justify-content-center ">
            <span className="badge badge-pill badge-warning">
            Check the coupon code/your file download link/your voucher"</span>
            </div>
            <div className="col-12 d-flex justify-content-center ">
            Please enjoy, and let us know if there’s anything We can help You!
            </div>
             <Link to={'/contactus'}>
            
               <div className="col-12 d-flex justify-content-center">
               <Button color="primary">
               FeedBack
               </Button>
               </div>
            
             </Link>
              

             </CardText>
            </CardBody>
            </Card>
            </FadeTransform>
            </div>
        );
    }
}
export default Payement;