import React from 'react'
import { ResponsiveEmbed, Panel } from 'react-bootstrap'

const VideoPlayer = () => {
  return (
    <Panel>
      <ResponsiveEmbed a16by9>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jN4wOYh7Cjo" allowFullScreen />
      </ResponsiveEmbed>
    </Panel>
  )
}

export default VideoPlayer
