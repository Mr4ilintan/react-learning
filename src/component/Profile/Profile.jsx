import React from 'react'
import prof from './Profile.module.css'
import Post from './Posts/Post'
import dog from './dog.jpg'


const Profile = () => {
    return <div className={prof.content}>
        <img src={dog} />
        <div className='posts'>
            <Post message='Yo' />
            <Post message='First message' sabaka='kekw' />
        </div>

    </div>
}

export default Profile;