import React from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavbarStyledComponent';
import IEEE from './ieee-logo 1.png';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        {/* Use the IEEE logo instead of DiCssdeck */}
        <NavLogo to='/'>
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            <img
              src={IEEE}
              alt="IEEE Logo"
              style={{ width: '30px', height: 'auto', }} // Adjust size as needed
            />
            <Span>IEEE</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Explore</NavLink>
          <NavLink href="#">News</NavLink>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Join Us</NavLink>
          <NavLink href="#">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Home
            </MobileLink>
            <MobileLink
              href="#"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Explore
            </MobileLink>
            <MobileLink
              href="#"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              News
            </MobileLink> <MobileLink
              href="#"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About Us
            </MobileLink> <MobileLink
              href="#"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Join Us
            </MobileLink><MobileLink
              href="#"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>

          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
