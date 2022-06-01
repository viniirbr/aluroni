import styles from './Menu.module.scss'
import logo from '../../assets/logo.svg'
import { SearchField } from './SearchField'
import { useState } from 'react'
import { Filters } from './Filters';

export default function Menu() {

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);

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
        <SearchField search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter}/>
        </div>
      </section>
    </main>
  )
}
