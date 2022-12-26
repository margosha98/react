import react from "react";
import { connect } from "react-redux";
import {getUserLoginThunk} from '../../redux/auth-reducer'
import Header from "./Header";


class HeaderContainer extends react.Component {
    componentDidMount() {
        this.props.getUserLoginThunk()
    }

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


export default connect(mapStateToProps, {getUserLoginThunk}) (HeaderContainer);