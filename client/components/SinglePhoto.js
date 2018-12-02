import React, { Component } from 'react'
import Photo from './Photo'

import Comments from './Comments'

export default class SinglePhoto extends Component {
  render() {
    const {
      posts,
      params,
      comments
    } = this.props

    const { postId } = params
    const i = posts.findIndex(post => post.code === postId)
    const post = posts[i]
    const postComments = comments[postId] || []

    return (
      <div className='photo-grid'>
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
}
