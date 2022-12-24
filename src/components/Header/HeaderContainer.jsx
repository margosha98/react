import axios from "axios";
import react from "react";
import { connect } from "react-redux";
import {setAuthData} from '../../redux/auth-reducer'
import Header from "./Header";


class HeaderContainer extends react.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode===0) {
                    let {id, login, email} = response.data.data
                    debugger
                    this.props.setAuthData(id, login, email);
                }
            })
    }


    render() {
        debugger
        return(
            <Header {...this.props}/>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setAuthData}) (HeaderContainer);