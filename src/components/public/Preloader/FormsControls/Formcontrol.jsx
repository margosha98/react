
import classes from './FormControl.module.css';

export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return(
        <div>
            <textarea
            {...input} {...meta}
            className={hasError && classes.error}> </textarea>
            <div>
            { (hasError) && <span>{hasError}</span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return(
        <div>
            <input
            {...input} {...meta}
            className={(hasError) ? classes.error : ''}/>
            <div>
            { (hasError) && <span>{hasError}</span>}
            </div>
        </div>
    )
}
