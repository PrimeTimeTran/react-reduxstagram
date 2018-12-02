import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

export default class Photo extends Component {
  render() {
    const {
      i,
      post,
      comments
    } = this.props

    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className='grid-photo' />
          </Link>
          <CSSTransitionGroup transitionName='like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p>{post.caption}</p>
          <div className='control-buttons'>
            <button onClick={this.props.increment.bind(null, i)} className='likes'>❤️ {post.likes}</button>
            <Link className='button' to={`/${post.code}`}>
              <span className='comment-count'>
              <span className='speech-bubble'> </span>
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
}
