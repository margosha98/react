import react from "react";
import classes from './FriendItem.module.css';

const FriendItem = (props) => {
console.log(props)
    return(
      <div className={classes.friendItem}>
        <div>
          <img className={classes.avatar} src={props.state.img}></img>
        </div>
        <div>{props.state.name}</div>
      </div>
    );
}

export default FriendItem;