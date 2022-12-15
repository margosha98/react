import React from "react";
import classes from './Music.module.css'
const Music = (props) => {
    return <div>
            {
                props.musicPage.music.map( m => <div key={m.id}>
                        <img className={classes.img} src={m.musicIcon} />
                        <span> {m.aboutSong.singer}  -  {m.aboutSong.song}</span>
                        <div>
                        { m.added 
                        ? <button onClick={ () => {props.addMusic(m.id)} }>Удалить</button> 
                        : <button onClick={ () => {props.deleteMusic(m.id)} }>Добавить</button>
                        }
                        </div>
                    </div>
                )
            }
        </div>
}

export default Music;