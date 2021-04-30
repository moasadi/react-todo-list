import React, { Component } from 'react';

import List from '../components/List';
import { Button } from 'react-bootstrap';
import AddListDialog from '../components/AddListDialog'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
`

export class TodoList extends Component {
    state = {
        items: [],
        isLoaded: false,
        show: false,

    }

    onDragEnd = result => {
        const { destination, source } = result
      
        if (!destination) {
            return
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }
        let items= this.state.items;
     
        let src= items[source.droppableId];
        let dest=items[destination.droppableId];
        let value=src.items[source.index];
        src.items.splice(source.index, 1)
        src.lastModify=new Date().toLocaleString();
        dest.lastModify=new Date().toLocaleString();
        dest.items.push(value)
        
        this.setState({
            items: items,
            isLoaded: true

        });
        this.setItems(items);

    }
    render() {
        const handleClose = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });
        const handelAddList = (name) => {
            let mItems = this.state.items;
            mItems.push({ name,createDate:new Date().toLocaleString(),lastModify:new Date().toLocaleString(), items: [] })

            this.setState({
                items: mItems,

            });
            this.setItems(mItems)
            handleClose();
        };
        const handelDeleteList = (index) => {
            let items = this.state.items;
            items.splice(index,1)
            if(items.length===0){
                items=[];
            }
            this.setState({
                items: items,

            });
            this.setItems(items)
            handleClose();
        };
        if (!this.state.isLoaded) {
            return <div>loading...</div>;
        } else {
            return (
                <div className="column">
                    <div style={{ margin: "10px" }}>
                        <Button variant="primary" onClick={handleShow}>add list</Button>
                        <AddListDialog show={this.state.show} close={handleClose} addList={handelAddList}></AddListDialog>
                    </div>
                    <div className="container-fluid">

                        <div className="row">
                            <DragDropContext onDragEnd={this.onDragEnd}>
                                <Container>
                                    {this.state.items.map((item, i) => {
                                        return (
                                            <List key={i} todos={item}  deleteList={handelDeleteList} index={i} />
                                        )
                                    })}
                                </Container>
                            </DragDropContext>

                        </div>

                    </div>

                </div>
            )
        }
    }
    componentDidMount() {
        let saveItems = this.getItems();
        if (!saveItems || saveItems.length<=0) {
            fetch('https://jsonplaceholder.typicode.com/todos/')
                .then(res => res.json())
                .then((data) => {
                    let mItems = [];
                    mItems.push({ name: "todo typicode",createDate:new Date().toLocaleString(),lastModify:new Date().toLocaleString(), items: data })
                    this.setItems(mItems)
                    this.setState({
                        items: mItems,
                        isLoaded: true

                    });
                    this.isFetching = false;
                })
                .catch(console.log)
        } else {
            this.setState({
                items: saveItems,
                isLoaded: true

            });
        }

    }

    getItems() {
        return JSON.parse(localStorage.getItem('items'));
    }
    setItems(items) {
        localStorage.setItem('items', JSON.stringify(items));
    }

}
export default TodoList;