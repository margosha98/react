import react from "react";
import { connect } from "react-redux";
import {toLogout} from '../../redux/auth-reducer'
import Header from "./Header";


class HeaderContainer extends react.Component {

    render() {
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


export default connect(mapStateToProps, {toLogout}) (HeaderContainer);