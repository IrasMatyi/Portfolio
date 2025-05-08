// src/components/header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// 1) Container
const HeaderWrapper = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: white;
  border-bottom: 1px solid #eee;
  z-index: 1000;
`;

// 2) Brand (left)
const Brand = styled.div`
  h1 { font-size: 1.5rem; margin: 0; }
  span { font-size: 1.1rem; color: #666; }
`;

// 3) Nav (right)
const NavLinks = styled.nav`
  display: flex;
  gap: 2.5rem;

  a {
    position: relative;
    text-decoration: none;
    font-size: 1.1rem;
    color: #333;
    font-weight: 500;
    padding-bottom: 0.25rem;
    transition: color 0.2s;

    &:hover {
      color: #d6336c;
    }
  }

  /* active tab styling */
  a.active {
    color: #d6336c;
  }
  a.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: #d6336c;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      {/* Left: your name */}
      <Brand>
        <h1>Mátyás Irás</h1>
        <span>Bioinformatics & Data Science</span>
      </Brand>

      {/* Right: nav links */}
      <NavLinks>
        {/* Home: only active when path is exactly "/" */}
        <Link
          to="/"
          getProps={({ location }) =>
            location.pathname === '/' && !location.hash
              ? { className: 'active' }
              : null
          }
        >
          Home
        </Link>

        {/* In-page anchors on the index page */}
        <Link
          to="/#about"
          getProps={({ location }) =>
            location.pathname === '/' && location.hash === '#about'
              ? { className: 'active' }
              : null
          }
        >
          About
        </Link>
        <Link
          to="/#projects"
          getProps={({ location }) =>
            location.pathname === '/' && location.hash === '#projects'
              ? { className: 'active' }
              : null
          }
        >
          Projects
        </Link>
        <Link
          to="/#education"
          getProps={({ location }) =>
            location.pathname === '/' && location.hash === '#education'
              ? { className: 'active' }
              : null
          }
        >
          Education
        </Link>
        <Link
          to="/#experience"
          getProps={({ location }) =>
            location.pathname === '/' && location.hash === '#experience'
              ? { className: 'active' }
              : null
          }
        >
          Experience
        </Link>
      </NavLinks>
    </HeaderWrapper>
  );
}
