import styles from './Button.module.css'

function Button(props){

    return (
    <button type='button' className={styles.btn} onClick={props.onClick}>{props.text}</button>
    
    )
}

export default Button