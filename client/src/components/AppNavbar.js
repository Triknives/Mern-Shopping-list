import React, {Component} from 'react';
import{
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';
import Login from './auth/Login';

class AppNavbar extends Component {
  state = {
    isOpen: false,
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return(
    <div>
      <Navbar color="black" dark expand="sm" className="mb-5" id="nav">
        <Container>
          <NavbarBrand href="/">Toshou</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className= "ml-auto" navbar>
              <NavItem>
                <RegisterModal/>
              </NavItem>
              <NavItem>
                <Logout/>
              </NavItem>
              <NavItem>
                <Login/>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
    </Navbar>
  </div>
  );
}
}


export default AppNavbar;
