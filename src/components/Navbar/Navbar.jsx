import react from "react";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
import classes from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={classes.nav}>
        <div>
          <NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.item}>Profile </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialog" className={navData => navData.isActive ? classes.active : classes.item}>Messages </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/news' className={navData => navData.isActive ? classes.active : classes.item}>News </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/music" className={navData => navData.isActive ? classes.active : classes.item}>Music </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings" className={navData => navData.isActive ? classes.active : classes.item}>Settings </NavLink>
        </div>
        {/* <div>
          <Friends state={props.state.friends}/>
        </div> */}
        <div className={classes.item}>
        <NavLink to="/users" className={navData => navData.isActive ? classes.active : classes.item}>Users </NavLink>
        </div>
      </nav>
    );
}

export default Navbar;