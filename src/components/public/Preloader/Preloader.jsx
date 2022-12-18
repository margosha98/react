import preloader from '../Preloader/preloader.gif'
import React from "react";
import classes from './Preloader.module.css';

let Preloader = () => {
    return <div>
        <img src={preloader} className={classes.gif} />
    </div>
}

export default Preloader;