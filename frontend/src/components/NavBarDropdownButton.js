import React from 'react';
import { NavDropdown, Image } from 'react-bootstrap';

const NavbarDropdownButton = ({ user, handleLogout }) => {
  return (
    <NavDropdown
      title={
        <>
          <Image
            src={user.photoURL || 'https://cdn11.bigcommerce.com/s-dl22izwaan/images/stencil/1280w/products/677/22372/42_1K__76704.1633021257.jpg?c=1'} // Provide a default profile image
            roundedCircle
            width="30"
            height="30"
            className="me-2"
          />
          {user.username}
        </>
      }
      id="basic-nav-dropdown"
      align="end"
    >
      <NavDropdown.Item href="/profile">Edit Profile</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
    </NavDropdown>
  );
};

export default NavbarDropdownButton;