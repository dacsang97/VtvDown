import React, { Component, PropTypes } from 'react'
import {
  Panel, FormGroup, ControlLabel, FormControl,
  InputGroup, Button, HelpBlock,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { getLink } from '../actions'

class VideoForm extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      valid: false,
      touched: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(evt) {
    const text = evt.target.value
    this.setState({
      value: text,
    })
    const pat = /vtv\.vn\/video.*/g
    if (pat.test(text)) {
      this.setState({ valid: true })
    } else {
      this.setState({ valid: false })
    }
  }
  handleClick() {
    this.props.getLink(this.state.value)
  }
  handleSubmit(evt) {
    evt.preventDefault()
  }
  render() {
    return (
      <Panel>
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="formBasicText"
            className={`${this.state.touched && !this.state.valid ? 'has-error' : ''}`}
          >
            <ControlLabel>Video URL</ControlLabel>
            <InputGroup >
              <InputGroup.Addon>
                <i className="fa fa-link" aria-hidden="true" />
              </InputGroup.Addon>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
                onClick={() => { this.setState({ touched: true }) }}
              />
            </InputGroup>
            <FormControl.Feedback />
            <HelpBlock>
              {`${this.state.touched && !this.state.valid ?
                  'Vui lòng đúng link từ website vtv.vn/video' : ''}`}
            </HelpBlock>
          </FormGroup>
          <Button
            type="submit" bsStyle="primary" bsSize="large" block
            onClick={this.handleClick}
            // disabled={!this.state.valid}
          >
            <i className="fa fa-download" aria-hidden="true" /> Get Link
          </Button>
        </form>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    link: state.page,
  }
}

VideoForm.propTypes = {
  getLink: PropTypes.func,
}

export default connect(mapStateToProps, { getLink })(VideoForm)
