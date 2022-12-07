import react from "react";
import FriendItem from "./FriendItem/FriendItem";
import classes from './Friends.module.css';

const Friends = (props) => {

    return(
      <div>
        <h1>Friends</h1>
        <div className={classes.allFriends}>
          <FriendItem state={props.state[0]}/>
          <FriendItem  state={props.state[1]}/>
          <FriendItem  state={props.state[2]}/>
        </div>
      </div>
    );
}

export default Friends;