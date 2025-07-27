import styles from './MyInput.module.css'

export default function MyInput(props) {
  return <input {...props} type="text" className={styles.myInput} />
}
