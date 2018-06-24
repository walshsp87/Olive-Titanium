import React from 'react'
import './Navigation.css'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand className="Navigation-brand">
        Personal Finance
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>

        <LinkContainer to="/dashboard">
          <NavItem>
            Dashboard
          </NavItem>
        </LinkContainer>

        <LinkContainer to="/categories">
          <NavItem>
            Categories
          </NavItem>
        </LinkContainer>

        <LinkContainer to="/transactions">
          <NavItem>
            Transactions
          </NavItem>
        </LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
