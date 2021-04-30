import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
        props.isDragDisabled
            ? 'lightgrey'
            : props.isDragging
                ? 'lightgreen'
                : 'white'};
`

export default class Todo extends React.Component {
    render() {

        return (
            <Draggable
                draggableId={this.props.todo.id + ""}
                index={this.props.index}

            >
                {(provided, snapshot) => (
                    <Container
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}

                    >
                        {this.props.todo.title}
                    </Container>
                )}
            </Draggable>
        )
    }
}
