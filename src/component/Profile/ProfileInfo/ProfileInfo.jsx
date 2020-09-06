import React from 'react'
import prof from './Profile.module.css'
import dog from '../dog.jpg'



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={dog} />
            </div>
            <div>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;