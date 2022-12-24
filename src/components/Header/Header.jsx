import react from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'

const Header = (props) => {
    debugger
    return(
        <header className={classes.header}> 
            { props.isAuth
                ? <p className={classes.link}>{props.login}</p>
                : <NavLink className={classes.link} to={'/login'}>Login</NavLink>}    
            <img className={classes.img} src='https://cdn-icons-png.flaticon.com/512/4228/4228707.png'/>
        </header>
    );
}

export default Header;