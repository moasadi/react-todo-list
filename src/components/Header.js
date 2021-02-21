import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../pages/Home';
import TodoList from '../pages/TodoList';


import { Navbar, Nav} from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Router>
                    <div>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="/">لیست انجام کار</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="/">خانه</Nav.Link>
                                <Nav.Link href="/todo-list">مشاهده لیست</Nav.Link>
                            </Nav>
                        </Navbar>
                        <Switch>
     
                            <Route path="/">
                                <Home />
                            </Route>
                            <Route path="/todo-list">
                                <TodoList />
                            </Route>
                            
                        </Switch>
                    </div>
                </Router>
            </header>
        )
    }

}
export default Header;