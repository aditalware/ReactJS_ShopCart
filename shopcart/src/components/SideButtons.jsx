import React, { Component } from 'react'
import { Fade, Stagger } from 'react-animation-components'
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,Breadcrumb,BreadcrumbItem,Jumbotron,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class SideButtons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Stagger in>
            <ButtonGroup vertical className="home-buttons">

                <Fade in>
                    <Link to="/categories/Clothes"><Button className="btn-styles1 button-glow" >Clothes</Button> </Link>
                </Fade>
                <Fade in>

                    <Link to="/categories/Grocery" style={{marginLeft:"120px"}}><Button className="btn-styles2  button-glows">Grocery</Button> </Link>
                </Fade>
                <Fade in>

                    <Button className="btn-styles5 button-glow"></Button>
                </Fade>
                <Fade in>

                    <Link to="/categories/Electronics"><Button className="btn-styles3  button-glow">Electronics</Button> </Link>
                </Fade>
                <Fade in>

                    <Button className="btn-styles6 button-glows" ></Button>
                </Fade>
                <Fade in>

                    <Link to="/categories/Furnitures" style={{marginLeft:"80px"}}><Button className="btn-styles4  button-glows">Furniture</Button> </Link>
                </Fade>
                <Fade in>

                    <Button className="btn-styles7  button-glows" ></Button>
                </Fade>
                <Fade in>
                <Button className="btn-styles8  button-glow">Gifts</Button>

                </Fade>


             </ButtonGroup>
                </Stagger>
        )
    }
}

export default SideButtons