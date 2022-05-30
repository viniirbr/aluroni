import styles from './Menu.module.scss'
import logo from '../../assets/logo.svg'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <img src={logo} />
        <p>Teste</p>
    </nav>
  )
}
