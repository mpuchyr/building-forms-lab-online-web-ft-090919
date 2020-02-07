import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

const addBand = band => {
  return {
    type: 'ADD_BAND',
    payload: band
  }
}

class BandsContainer extends Component {

  render() {
    return(
      <div>
        BandsContainer
        <ul>
          
        </ul>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, { addBand })(BandsContainer)
