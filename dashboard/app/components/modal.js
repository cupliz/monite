import React, { Component } from 'react'
import { Modal, Slider, Row, Col, Select } from 'antd'
import { volcano, greekblue } from "./colors.js"

const Option = Select.Option;
export default class Box5 extends Component {
    render() {
        const { visible, handleOk, handleCancel, onChangeNumber, colorNumber, onChangeName, backgroundColor } = this.props
        return (
            <div>
                <Modal
                    title="Setting you Box"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    zIndex={1000}
                    style={{ padding: 40 }}
                >
                    <Row style={{ textAlign: 'center' }}>
                        <Col span={4}>
                            <p>Color</p>
                        </Col>
                        <Col span={14}>
                            <Slider
                                min={0}
                                max={9}
                                onChange={onChangeNumber}
                                value={typeof colorNumber === 'number' ? colorNumber : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <Select defaultValue={backgroundColor} style={{ width: 80, marginLeft: 16 }} onChange={onChangeName}>
                                <Option value="red" style={{ backgroundColor: "red", height: 30 }}>red</Option>
                                <Option value="volcano" style={{ backgroundColor: volcano[5], height: 30 }}>volcano</Option>
                                <Option value="orange" style={{ backgroundColor: "orange", height: 30 }}>orange</Option>
                                <Option value="gold" style={{ backgroundColor: "gold", height: 30 }}>gold</Option>
                                <Option value="yellow" style={{ backgroundColor: "yellow", height: 30 }}>yellow</Option>
                                <Option value="lime" style={{ backgroundColor: "lime", height: 30 }}>lime</Option>
                                <Option value="green" style={{ backgroundColor: "#73d13d", height: 30 }}>green</Option>
                                <Option value="cyan" style={{ backgroundColor: "cyan", height: 30 }}>cyan</Option>
                                <Option value="blue" style={{ backgroundColor: "blue", height: 30 }}>blue</Option>
                                <Option value="greekblue" style={{ backgroundColor: greekblue[5], height: 30 }}>greekblue</Option>
                                <Option value="purple" style={{ backgroundColor: "purple", height: 30 }}>purple</Option>
                                <Option value="magenta" style={{ backgroundColor: "magenta", height: 30 }}>magenta</Option>
                                <Option value="gray" style={{ backgroundColor: "gray", height: 30 }}>gray</Option>
                            </Select>
                        </Col>
                    </Row>
                    {this.props.children}
                </Modal>
            </div>
        )
    }
}