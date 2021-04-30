import React, { Component } from 'react';

import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
export class Home extends Component {
    render() {
        return (
            <div className="container">
                <Jumbotron >
                    <h1>welcome</h1>
                    <p>
                    To view and edit your to-do list, you can click on the option below, and you can also add or remove work.                    </p>

                    <Link to="/todo-list">
                        <Button variant="primary">View list</Button>
                    </Link>
                </Jumbotron>
            </div>
        )
    }

}
export default Home;