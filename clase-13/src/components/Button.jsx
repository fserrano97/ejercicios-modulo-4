import styles from "./Button.module.css"

const Button = () => {
  return (
    <div><button className={styles.primary}>Click</button>
    <button className={styles.btn}>Click</button>
    <button className={styles.secundary}>Click</button>
    </div>
  )
}

export default Button