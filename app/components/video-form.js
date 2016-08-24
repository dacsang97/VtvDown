import React, { Component } from 'react'
import {
  Panel, FormGroup, ControlLabel, FormControl,
  InputGroup, Button,
} from 'react-bootstrap'

class VideoForm extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }
  handleChange(evt) {
    this.setState({
      value: evt.target.value,
    })
  }
  render() {
    return (
      <Panel>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Video URL</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>
              <i className="fa fa-link" aria-hidden="true" />
            </InputGroup.Addon>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </InputGroup>
          <FormControl.Feedback />
        </FormGroup>
        <Button bsStyle="primary" bsSize="large" block>
          <i className="fa fa-download" aria-hidden="true" /> Get Link
        </Button>
      </Panel>
    )
  }
}

export default VideoForm
