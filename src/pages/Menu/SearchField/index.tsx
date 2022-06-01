import styles from './Search.module.scss'
import { CgSearch } from 'react-icons/cg'

interface props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function SearchField({ search, setSearch }: props) {
    return (
        <div className={styles.search}>
            <input
                type='text'
                onChange={(e) => setSearch(e.target.value)}
                value={search} 
                placeholder='Buscar'/>
            <CgSearch />
        </div>
    )
}
