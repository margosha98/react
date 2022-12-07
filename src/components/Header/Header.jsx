import react from "react";
import classes from './Header.module.css'

const Header = () => {
    return(
        <header className={classes.header}> 
            <img className={classes.img} src='https://cdn-icons-png.flaticon.com/512/4228/4228707.png'/>
        </header>
    );
}

export default Header;