import React, { Component } from 'react';

import { Jumbotron, Button } from 'react-bootstrap';
import styles from '../styles/home.css'; 

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <Jumbotron >
                    <h1>خوش آمدید</h1>
                    <p>
                        برای مشاهده و ویرایش لیست انجام کار خود میتوانید روی گزینه زیر کلیک کنید و همچنین قابلیت افزودن یا حذف کار را نیز دارا می باشید
                    </p>
                    
                        <Button variant="primary">مشاهده لیست</Button>
                    
                </Jumbotron>
            </div>
        )
    }

}
export default Home;