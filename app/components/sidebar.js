import React, { Component } from 'react'
import { Panel, Button, ListGroup, ListGroupItem, Alert, Fade } from 'react-bootstrap'

class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      alertVisible: false,
    }
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
    this.handleAlertShow = this.handleAlertShow.bind(this)
  }
  handleAlertDismiss() {
    this.setState({ alertVisible: false })
  }
  handleAlertShow() {
    this.setState({ alertVisible: true })
  }
  render() {
    const footerContact = (<a href="https://fb.com/messages/dacsang97">
      <Button block bsStyle="primary">
        Send Message
      </Button>
    </a>)
    const headerContact = (<h4><i className="fa fa-inbox" aria-hidden="true" /> Contact Me</h4>)
    const headerStore = (<h4><i className="fa fa-cloud-download" aria-hidden="true" /> Store</h4>)
    return (
      <div>
        <Panel header={headerStore} bsStyle="primary">
          <ListGroup>
            <ListGroupItem onClick={this.handleAlertShow}>
                iOS <i className="fa fa-apple pull-right" aria-hidden="true" />
            </ListGroupItem>
            <ListGroupItem onClick={this.handleAlertShow}>
                Android <i className="fa fa-android pull-right" aria-hidden="true" />
            </ListGroupItem>
          </ListGroup>
        </Panel>
        <Panel header={headerContact} footer={footerContact} bsStyle="primary">
          <p>
            Developed by
            <a href="https://www.facebook.com/dacsang97" title="SangND"> SangND
            </a>  with <i aria-hidden="true" className="fa fa-heart" />.
          </p>
        </Panel>
        <Fade in={this.state.alertVisible}>
          <div className={`vtv-alert ${this.state.alertVisible ? '' : 'hide'}`}>
            <Alert bsStyle="info" onDismiss={this.handleAlertDismiss}>
              <h4>Stay tuned...</h4>
              <p>We are coming soon...</p>
              <p>
                <Button bsSize="small" onClick={this.handleAlertDismiss}>Hide Alert</Button>
              </p>
            </Alert>
          </div>
        </Fade>
      </div>
    )
  }
}

export default Sidebar
