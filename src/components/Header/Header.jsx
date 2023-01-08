import react from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'



const Header = (props) => {
    let logout = () => {
        props.toLogout()
    }    

    return(
        <header className={classes.header}> 
            { props.isAuth
                ? <div> 
                    <p className={classes.link}>{props.login}</p>
                    <button onClick={logout}>Выйти</button>
                </div>
                : <NavLink className={classes.link} to={'/login'}>Login</NavLink>}    
            <img className={classes.img} src='https://cdn-icons-png.flaticon.com/512/4228/4228707.png'/>
        </header>
    );
}

export default Header;