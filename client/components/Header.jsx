import React from 'react';
import { Image, Navbar, Form, Dropdown, Nav, Button } from 'react-bootstrap';

const Header = props => {
    const assets = '/client/assets/';
    const myPic = assets + props.userInfo.pictureurl;
    const visavis = assets + 'visavis.jpg';
    return (
        <Navbar className="nav" expand="lg">
            <Navbar.Brand ><Image src={visavis} width='40%' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <Form inline className="justify-content-end">
                        <Dropdown>
                            <Dropdown.Toggle className="m-3" variant="outline-dark" id="dropdown-basic">
                                <Image src={myPic} width="10%" height='auto' className="roundedCircle" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Past Matches</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button className="m-3" variant="outline-dark">Current Match</Button>
                        <Button className="m-3" variant="outline-dark" onClick={props.userLogout}>Logout</Button>
                    </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;