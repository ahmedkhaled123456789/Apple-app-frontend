import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";
 

import "./Footer.css";
const Footer = () => {
  const year = new Date().getFullYear;
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="3" className="mb-4" md="6">
            <div className="logo">
              
              <div>
                <h1 className="text-white">Apple Store</h1>
              </div>
            </div>
            <h2 className="footer_text md-3 mt-3 mb-4">Subscribe</h2>
            <p className="text-white mb-4">Get 10% off your first order</p>
             
          </Col>
          <Col lg="3" className="mb-4" md="3">
            <div className="footer_quick_links">
              <h4 className="quick_links_title">Support</h4>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>Apple@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </Col>
          <Col lg="3" className="mb-4" md="3">
            <div className="footer_quick_links">
              <h4 className="quick_links_title"> Account</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">My Account</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Login / Register</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Wishlist</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Shop</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className="mb-4" md="3">
            <div className="footer_quick_links">
              <h4 className="quick_links_title"> Quick Link</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Terms Of Use</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">FAQ</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Contact</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer_copyright">
              CopyRight Ahmed Khaled {year} . All right reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
