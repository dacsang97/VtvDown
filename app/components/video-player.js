import React, { PropTypes, Component } from 'react'
import { ResponsiveEmbed, Panel, Button } from 'react-bootstrap'
import Loader from 'halogen/SyncLoader'
import { connect } from 'react-redux'
import { onLoaded } from '../actions'

class VideoPlayer extends Component {
  constructor() {
    super()
    this.handleOnload = this.handleOnload.bind(this)
  }
  handleOnload() {
    this.props.onLoaded()
  }
  render() {
    // if (!this.state.loaded) {
    //   return (<h3>Loading</h3>)
    // }
    const footer = (<a href={this.props.linkDown} target="_blank" rel="noopener noreferrer">
      <Button>
        <i className="fa fa-download" aria-hidden="true" /> Download
      </Button>
    </a>)
    return (
      <div>
        <div style={{ display: `${this.props.loaded ? 'none' : ''}` }}>
          <Panel bsStyle="info">
            <div className="text-center">
              <Loader color="#26A65B" size="16px" margin="4px" />
            </div>
          </Panel>
        </div>
        <div style={{ display: `${this.props.loaded ? '' : 'none'}` }}>
          <Panel header={this.props.title} footer={footer} bsStyle="info">
            <ResponsiveEmbed a16by9>
              <iframe
                width="560" height="315" src={this.props.source}
                allowFullScreen
                onLoad={this.handleOnload}
              />
            </ResponsiveEmbed>
          </Panel>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.page.title,
    source: state.page.source,
    linkDown: state.page.linkDown,
    loaded: state.page.loaded,
  }
}

VideoPlayer.propTypes = {
  title: PropTypes.string,
  source: PropTypes.string,
  linkDown: PropTypes.string,
  loaded: PropTypes.bool,
  onLoaded: PropTypes.func,
}

export default connect(mapStateToProps, { onLoaded })(VideoPlayer)
