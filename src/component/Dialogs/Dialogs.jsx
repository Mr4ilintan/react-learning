import React from 'react'
import dial from './Dialogs.module.css'

const Dialogs = (props) => {
    return <div className={dial.dialogs}>
      <div className={dial.dialogsItem}>
        <div className={dial.dialog}>
          Kosteg
        </div>
        <div className={dial.dialog}>
          Dmytro
        </div>
        <div className={dial.dialog}>
          Sashko
        </div>
        <div className={dial.dialog}>
          Sergei
        </div>
        <div className={dial.dialog}>
          Max
        </div>
      </div>
      <div className={dial.messages}>
        <div className={dial.message}>Hey</div>
        <div className={dial.message}>Sup</div>
        <div className={dial.message}>Yo</div>
      </div>
    </div>

}

export default Dialogs;