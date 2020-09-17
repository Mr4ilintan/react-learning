import React from 'react'
import prof from './Profile.module.css'
import Post from './Posts/Post'
import dog from './dog.jpg'


const Profile = (props) => {
      let postElements = props.state.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

      let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
      }

      let newPostElement = React.createRef();

    return <div className={prof.content}>
        <img src={dog} />
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={ addPost } >Add post</button>
            </div>
        </div>
        <div className='posts'>
            {postElements}
        </div>

    </div>
}

export default Profile;