import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../pages/Home';
import TodoList from '../pages/TodoList';


import { Navbar, Nav } from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Router>
                    <div>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="/">To-do list</Navbar.Brand>
                            <Nav className="mr-auto">

                                <Nav.Link href="/">home</Nav.Link>
                                <Nav.Link href="/todo-list">View list</Nav.Link>
                            </Nav>
                        </Navbar>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/todo-list" component={TodoList} />

                        </Switch>
                    </div>
                </Router>
            </header>
        )
    }

}
export default Header;