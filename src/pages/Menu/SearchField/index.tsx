import styles from './Search.module.scss'

interface props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function SearchField({ search, setSearch }: props) {
  return (
    <input type='text' className={styles.search} onChange={(e) => setSearch(e.target.value)} value={search}/>
  )
}
