import React from 'react'
import prof from './Profile.module.css'
import Post from './Posts/Post'
import dog from './dog.jpg'


const Profile = () => {

    let postData = [
        {id: 1, message: "Yo", likesCount: 12},
        {id: 2, message: "First message", likesCount:18},
       
      ]

    return <div className={prof.content}>
        <img src={dog} />
        <div className='posts'>
            <Post message={postData[0].message} likesCount={postData[0].likesCount} />
            <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        </div>

    </div>
}

export default Profile;