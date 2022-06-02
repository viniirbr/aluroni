import styles from './Menu.module.scss'
import logo from '../../assets/logo.svg'
import { SearchField } from './SearchField'
import { useState } from 'react'
import { Filters } from './Filters';
import { Sorter } from './Sorter';

export type ISorter = {
  name: string,
  value: string
}

export default function Menu() {

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState<ISorter>({name: '', value: ''});

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
          <Sorter sorter={sorter} setSorter={setSorter}/>
        </div>
      </section>
    </main>
  )
}
