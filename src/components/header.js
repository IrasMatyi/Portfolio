// src/components/header.js
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// ────────────────────────────────────────────────────────────────────────────────
// 1) Container
// ────────────────────────────────────────────────────────────────────────────────
const HeaderWrapper = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'sticky')};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid #eee;
  z-index: 1000;
`


// ────────────────────────────────────────────────────────────────────────────────
// 2) Brand (left)
// ────────────────────────────────────────────────────────────────────────────────
const Brand = styled.div`
  h1 {
    font-size: 1.5rem;
    margin: 0;
  }
  span {
    font-size: 1.1rem;
    color: #666;
  }
`

// ────────────────────────────────────────────────────────────────────────────────
// 3) Nav (right)
// ────────────────────────────────────────────────────────────────────────────────
const NavLinks = styled.nav`
  ul {
    display: flex;
    gap: 2.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    position: relative;
    text-decoration: none;
    font-size: 1.1rem;
    color: #333;
    font-weight: 500;
    padding-bottom: 0.25rem;
    transition: color 0.2s;

    &.active {
      color: #d6336c;
    }
    &.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background: #d6336c;
    }

    &:hover {
      color: #d6336c;
    }
  }
`

// ────────────────────────────────────────────────────────────────────────────────
// 4) Scroll-Spy Logic
// ────────────────────────────────────────────────────────────────────────────────
const SECTION_IDS = ['home', 'about', 'projects', 'education', 'experience']

export default function Header({ fixed = false }) {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          // pick the section with the largest visible area
          const mostVisible = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          )
          setActiveId(mostVisible.target.id)
        }
      },
      {
        rootMargin: '-40% 0px -60% 0px', // adjust these to fine-tune
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    )

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <HeaderWrapper fixed={fixed}>
      <Brand>
        <h1>Matyas Iras</h1>
        <span>Bioinformatics & Data Science</span>
      </Brand>

      <NavLinks>
        <ul>
          {SECTION_IDS.map(id => {
            const label = id === 'home'
              ? 'Home'
              : id.charAt(0).toUpperCase() + id.slice(1)
            const to = id === 'home' ? '/' : `/#${id}`

            return (
              <li key={id}>
                <Link
                  to={to}
                  className={activeId === id ? 'active' : ''}
                  onClick={() => setActiveId(id)}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </NavLinks>
    </HeaderWrapper>
  )
}
