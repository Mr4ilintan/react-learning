import React from 'react'
import dial from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  return (
    <div className={dial.dialog + " " + dial.active}>
      <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={dial.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  let messagesElements = props.state.messagesData.map(message => <Message message={message.message} />)

  return <div className={dial.dialogs}>
    <div className={dial.dialogsItem}>
      {dialogsElements}
    </div>
    <div className={dial.messages}>
      {messagesElements}
    </div>
  </div>

}

export default Dialogs;