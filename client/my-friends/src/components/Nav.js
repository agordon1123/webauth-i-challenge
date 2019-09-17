import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { axiosWithCookies } from '../functions/axiosWithCookies';

const Navigation = () => {
    const [state, setState] = useState({ collapsed: true });

    const toggleNavbar = () => {
        setState({ collapsed: !state.collapsed })
    }

    const logout = () => {
        axiosWithCookies()
            .get('http://localhost:7200/api/logout')
            .then(success => console.log(success))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
                <NavbarToggler onClick={() => toggleNavbar()} className="mr-2" />
                <Collapse isOpen={!state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className='nav-link' to="/register">Register</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className='nav-link' to="/login">Login</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className='nav-link' onClick={() => logout()}>Logout</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className='nav-link' to='/dashboard'>Dashboard</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;
