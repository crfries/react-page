import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Nav = () => {
  const { pathname } = useLocation()

  return (
    <NavStyle>
      <h1>
        <Link to='/' id='logo'>
          Phoenix Agency
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            inital={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '30%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/work'>Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            inital={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '35%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            inital={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '35%' : '0%' }}
          />
        </li>
      </ul>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 5;

  a {
    color: white;
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-size: 1.6rem;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  h1 {
    font-family: 'Varela', sans-serif;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
`

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 70%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`

export default Nav
