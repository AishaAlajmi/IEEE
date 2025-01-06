import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;

  @media (max-width: 640px) {
    padding: 0 10px;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    padding: 5px 10px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    background-color: #0b0d32;
    color: white;
    font-size: 14px;

    &::placeholder {
      color: #d1d5db;
    }
  }

  svg {
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileSearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  input {
    padding: 5px 10px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    background-color: #0b0d32;
    color: white;
    font-size: 14px;
    width: 100%;

    &::placeholder {
      color: #d1d5db;
    }
  }

  svg {
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;
