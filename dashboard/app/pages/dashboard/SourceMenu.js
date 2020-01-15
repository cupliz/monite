import React, { useState, useCallback } from 'react'
import { DragSource } from 'react-dnd'
import ItemType from './ItemTypes'
import { Button } from 'antd'

const Menu = ({
  isDragging,
  connectDragSource,
  forbidDrag,
  name,
  backgroundColor
}) => {
  const opacity = isDragging ? 0.4 : 1
  return connectDragSource(
    <samp
      style={Object.assign({}, { backgroundColor }, { opacity, cursor: forbidDrag ? 'default' : 'move', })}
    >
      <Button style={{backgroundColor }} size='large' type="primary">
        {name}
      </Button>
    </samp>
  )
}

const SourceBox = DragSource(
  ItemType.BOX,
  {
    canDrag: props => !props.forbidDrag,
    beginDrag: props => ({
      name: props.name,
      backgroundColor: props.backgroundColor,
    })
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()

  }),
)(Menu)
const StatefulSourceBox = props => {
  const [forbidDrag, setForbidDrag] = useState(false)
  const handleToggleForbidDrag = useCallback(() => {
    setForbidDrag(!forbidDrag)
  }, [forbidDrag])
  return (
    <SourceBox
      {...props}
      forbidDrag={forbidDrag}
      onToggleForbidDrag={() => handleToggleForbidDrag()}
    />
  )
}
export default StatefulSourceBox