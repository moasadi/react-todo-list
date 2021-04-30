import React from 'react'
import styled from 'styled-components'
import Todo from './Todo'
import { Droppable } from 'react-beautiful-dnd'
import { Button } from 'react-bootstrap';

const Container = styled.div`
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 2px;

  width:400px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding-left: 8px;
`
const Text = styled.p`
  padding-left: 8px;
`
const Row = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
  padding:10px;
  background-color: antiquewhite;
  `

const TodoList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? 'skyblue' : 'white'}
  flex-grow: 1;
  min-height: 100px;
  max-height:500px;
 overflow: auto;
 

`

export default class List extends React.Component {
  deleteList = () => {
    this.props.deleteList(this.props.index);
  }
  render() {
    return (
      <Container>
        <Row>

          <div>
            <Button variant="danger" onClick={this.deleteList}>remove</Button>
            
          </div>
          <div>
            <Title>{this.props.todos.name}</Title>
            <Text> {this.props.todos.createDate} :createdAt</Text>
            <Text> {this.props.todos.lastModify} :updateAt</Text>
          </div>
        </Row>

        <Droppable droppableId={this.props.index + ""} type="TODO">
          {(provided, snapshot) => (
            <TodoList
              ref={provided.innerRef}

              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.todos.items.map((todo, index) => (
                <Todo key={index} todo={todo} index={index} />
              ))}
              {provided.placeholder}
            </TodoList>
          )}
        </Droppable>

      </Container>
    )
  }
}
