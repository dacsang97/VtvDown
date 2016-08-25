import React from 'react'
import { Panel, Button } from 'react-bootstrap'

const Sidebar = () => {
  const footer = (<a href="https://fb.com/messages/dacsang97">
    <Button block bsStyle="primary">
      Send Message
    </Button>
  </a>)
  const header = (<h4><i className="fa fa-inbox" aria-hidden="true" /> Contact Me</h4>)
  return (
    <Panel header={header} footer={footer} bsStyle="primary">
      <p>
        Developed by
        <a href="https://www.facebook.com/dacsang97" title="SangND"> SangND
        </a>  with <i aria-hidden="true" className="fa fa-heart" />.
      </p>
    </Panel>
  )
}

export default Sidebar
