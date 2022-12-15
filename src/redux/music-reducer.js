let ADDED_MUSIC = 'ADDED_MUSIC'
let DELETE_MUSIC = 'DELETE_MUSIC'

let initialState = {
    music: [
        {
            id:1,
            musicIcon: 'https://cdn-icons-png.flaticon.com/128/1382/1382065.png',
            added: true,
            aboutSong: {
                song: 'Freakout',
                singer: 'Gianni Canetti'
            }
        },
        {
            id:2,
            musicIcon: 'https://cdn-icons-png.flaticon.com/128/1382/1382065.png',
            added: false,
            aboutSong: {
                song: 'Мама, я люблю',
                singer: 'Anacondaz'
            }
        },
        {
            id:3,
            musicIcon: 'https://cdn-icons-png.flaticon.com/128/1382/1382065.png',
            added: false,
            aboutSong: {
                song: 'Bad Guy',
                singer: 'Billie Eilish'
            }
        },
    ]
}

export let musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED_MUSIC:
            return {
                ...state,
                music: state.music.map( m => {
                    if (m.id === action.id) {
                        return {...m, added:true}
                    }
                    return {...m}
                })
            }
        case DELETE_MUSIC:
            return {
                ...state,
                music: state.music.map( m => {
                    if (m.id === action.id) {
                        return {...m, added:false}
                    }
                    return {...m}
                })
            }
        default:
            return state;
    }
}

export let addMusicAC = (id) => {
    return {
        type: ADDED_MUSIC, id
    }
}
export let deleteMusicAC = (id) => {
    return {
        type: DELETE_MUSIC, id
    }
}