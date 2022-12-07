import React from "react";
import classes from './../Dialog.module.css'
import { NavLink } from "react-router-dom";

const PersonItem = (props) => {
    const path = `/dialog/'${props.id}`

    return(
        <div className={classes.personItem}>
            <img className={classes.avatar} src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
            <NavLink to={path} className={ el => el.isActive ? classes.active : classes.person}>{props.name}</NavLink> 
        </div>
    )
}


export default PersonItem;