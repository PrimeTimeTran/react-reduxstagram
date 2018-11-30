import React, { Component } from 'react'
import Photo from './Photo'

export default class PhotoGrid extends Component {
  render() {
    return (
      <div className='photo-grid'>
        <pre>
          {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
        </pre>
      </div>
    )
  }
}
