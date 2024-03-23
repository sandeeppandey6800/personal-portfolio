import react from 'react';
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";


export const Footer = () => {
    return (
        <footer className="footer" id='Footer'>
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <p>@Copyright 2024 . All Rights Reserved By  <strong>Sandeep Pandey</strong></p>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="Icon" /></a>
                            <a href="#"><img src={navIcon2} alt="Icon" /></a>
                            
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;