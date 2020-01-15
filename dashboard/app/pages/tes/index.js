import React, { Component } from 'react'
import Example from './example'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default class index extends Component {
    render() {
        return (
            <div>
                <DndProvider backend={HTML5Backend}>
                    <Example />
                </DndProvider>
            </div>
        )
    }
}

export default Index