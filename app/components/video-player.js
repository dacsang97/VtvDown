import React, { PropTypes } from 'react'
import { ResponsiveEmbed, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

const VideoPlayer = (props) => {
  if (!props.link) {
    return (<h3>Loading...</h3>)
  }
  return (
    <Panel header={props.link}>
      <ResponsiveEmbed a16by9>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jN4wOYh7Cjo" allowFullScreen />
      </ResponsiveEmbed>
    </Panel>
  )
}

function mapStateToProps(state) {
  return {
    link: state.page,
  }
}

VideoPlayer.propTypes = {
  link: PropTypes.string,
}

export default connect(mapStateToProps)(VideoPlayer)
