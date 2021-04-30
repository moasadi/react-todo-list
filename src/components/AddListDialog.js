import React, { Component } from 'react';

import { Button, Modal, Form } from 'react-bootstrap';

export class AddListDialog extends Component {

    close = () => {
        this.props.close();
    }
    addList = () => {
        this.props.addList(this.state.name);
    }
    state = {
        name: ""
    }
 

    render() {


        let show = this.props.show;
        let onInput = ({ target: { value } }) => this.setState({ name: value })

  

        return (
            <Modal show={show} onHide={this.close} animation={false}>
                <Modal.Header>
                    <Modal.Title>add list</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group style={{ margin: "10px" }}>
                        <Form.Control onChange={onInput}
                            value={this.state.name} type="text" placeholder="list name" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                </Form>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.close}>
                        close
                                     </Button>
                    <Button variant="primary" onClick={this.addList}>
                        save
                                  </Button>
                </Modal.Footer>
            </Modal>
        )
    }

}
export default AddListDialog;