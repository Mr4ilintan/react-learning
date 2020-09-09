import React from 'react'
import dial from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  return(
  <div className={dial.dialog + " " + dial.active}>
    <NavLink to={"/dialogs/"+ props.id}> {props.name} </NavLink>
  </div>
  )}

const Message = (props) => {
  return(
    <div className={dial.dialog}>{props.message}</div>
  )
}

let dialogsData = [
  {id: 1, name: "Kosteg"},
  {id: 2, name: "Dmytro"},
  {id: 3, name: "Sashko"},
  {id: 4, name: "Sergei"},
  {id: 5, name: "Max"}
]

let messagesData = [
  {id: 1, message: "Sup"},
  {id: 2, message: "YO"},
  {id: 3, message: "Hei"},
  {id: 4, message: "Hi"},
  {id: 5, message: "Wzap"}
]
  
let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/> ) 
 
let messagesElements = messagesData.map(message => <Message message={message.message}/>) 


const Dialogs = (props) => {
  return <div className={dial.dialogs}>
    <div className={dial.dialogsItem}>

    {dialogsElements}

      {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
      <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
      <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
      <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
      <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/> */}
    </div>
    <div className={dial.messages}>
      {messagesElements}

      {/* <Message message={messagesData[0].message} />
      <Message message={messagesData[1].message} />
      <Message message={messagesData[2].message} />
      <Message message={messagesData[3].message} />
      <Message message={messagesData[4].message} /> */}
    </div>
  </div>

}

export default Dialogs;