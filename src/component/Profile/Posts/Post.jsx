import React from 'react'
import post from './Post.module.css'

const Post = (props) => {

    return <div className={post.motto}>
        <img src="https://i.redd.it/567ev5bc79951.jpg" />  {props.message} {props.sabaka}
        <div className={post.item}>
            <span>like</span>
        </div>
    </div>
}

export default Post 