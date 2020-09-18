import { rerenderEntireTree } from "../render"
import { newPostElement } from "../component/Profile/Profile"

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Yo", likesCount: 12 },
      { id: 2, message: "First message", likesCount: 18 },
    ]
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Kosteg" },
      { id: 2, name: "Dmytro" },
      { id: 3, name: "Sashko" },
      { id: 4, name: "Sergei" },
      { id: 5, name: "Max" }
    ],
    messagesData: [
      { id: 1, message: "Sup" },
      { id: 2, message: "YO" },
      { id: 3, message: "Hei" },
      { id: 4, message: "Hi" },
      { id: 5, message: "Wzap" }
    ]
  }
}


export let addPost = (postMessage) => { 
  let newPost = {
    id:3,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(newPost);
}

export default state