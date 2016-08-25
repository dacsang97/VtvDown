import React, { PropTypes } from 'react'
import { ResponsiveEmbed, Panel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const VideoPlayer = (props) => {
  if (!props.title) {
    return (<h3>...</h3>)
  }
  const footer = (<a href={props.linkDown}>
    <Button>
      <i className="fa fa-download" aria-hidden="true" /> Download
    </Button>
  </a>)
  return (
    <Panel header={props.title} footer={footer} bsStyle="info">
      <ResponsiveEmbed a16by9>
        <iframe width="560" height="315" src={props.source} allowFullScreen />
      </ResponsiveEmbed>
    </Panel>
  )
}

function mapStateToProps(state) {
  return {
    title: state.page.title,
    source: state.page.source,
    linkDown: state.page.linkDown,
  }
}

VideoPlayer.propTypes = {
  title: PropTypes.string,
  source: PropTypes.string,
  linkDown: PropTypes.string,
}

export default connect(mapStateToProps)(VideoPlayer)
