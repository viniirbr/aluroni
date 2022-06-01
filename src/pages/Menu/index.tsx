import styles from './Menu.module.scss'
import logo from '../../assets/logo.svg'
import { SearchField } from './SearchField'
import { useState } from 'react'

export default function Menu() {

  const [search, setSearch] = useState('');

  return (
    <main>
      <nav className={styles.menu}>
        <img src={logo} />
      </nav>
      <header className={styles.header}>
        <h2 className={styles.header__text}>A casa do código e da massa!</h2>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <SearchField search={search} setSearch={setSearch}/>
      </section>
    </main>
  )
}
