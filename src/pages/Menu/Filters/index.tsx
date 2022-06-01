import filters from './filters.json'
import styles from './Filters.module.scss'

type IOption = typeof filters[0];

interface Props {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>,
}

export function Filters({ filter, setFilter }: Props) {

    const selectFilter = (option: IOption) => {
        if (option.id === filter) {
            setFilter(null);
        } else {
            setFilter(option.id)
        }
    }

    return (
        <div className={styles.filters}>
            {filters.map(filterOption =>
                <button
                    key={filterOption.id}
                    className={`${styles.filters__filter} 
                    ${filter === filterOption.id && styles['filters__filter--active']}`}
                    onClick={() => selectFilter(filterOption)}>
                    {filterOption.label}
                </button>
            )}
        </div>
    )
}

