import { connect } from "react-redux"
import { addMusicAC, deleteMusicAC } from "../../redux/music-reducer"
import Music from "./Music"


let mapStateToProps = (state) => {
    return {
        musicPage: state.musicPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMusic: (id) => {
            dispatch(addMusicAC(id))
        },
        deleteMusic: (id) => {
            dispatch(deleteMusicAC(id))
        }
    }
}

let MusicContainer = connect(mapStateToProps, mapDispatchToProps) (Music)

export default MusicContainer;