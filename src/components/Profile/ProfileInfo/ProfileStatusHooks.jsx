import React, { useEffect, useState } from "react";

let ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(true)
    }

    useEffect( () => {
        setStatus(props.status)},
        [props.status]
    )

    let deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    let onStatuschange = (e) => {
        setStatus(e.currentTarget.value)
    }
     
        return (
            <div>
                {!(editMode) && 
                    <div>
                        <span onDoubleClick={activateEditMode}>{status} </span>
                    </div>
                }
        
                {(editMode) && 
                    <div>
                        <input  autoFocus={true}  onBlur={deActivateEditMode} onChange={onStatuschange} defaultValue={status}/>
                    </div>
                }
            </div>
        )

}

export default ProfileStatusHooks