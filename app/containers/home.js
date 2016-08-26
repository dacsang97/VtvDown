import React, { Component } from 'react'
import { Row, Grid, Col } from 'react-bootstrap'
import Header from '../components/navbar'
import VideoPlayer from '../components/video-player'
import VideoForm from '../components/video-form'
import Sidebar from '../components/sidebar'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      mounted: false,
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <VideoPlayer />
              <VideoForm />
            </Col>
            <Col xs={12} md={4} >
              <Sidebar />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Home
