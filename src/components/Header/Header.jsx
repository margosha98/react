import react from "react";
import classes from './Header.module.css'

const Header = () => {
    return(
        <header className={classes.header}> 
            <img src='https://static.wixstatic.com/media/080735_fb4667a2fa4645c7992752c9a530b532~mv2.png/v1/fill/w_800,h_800,al_c/080735_fb4667a2fa4645c7992752c9a530b532~mv2.png'/>
        </header>
    );
}

export default Header;