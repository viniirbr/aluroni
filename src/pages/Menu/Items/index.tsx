import { Item } from './Item'
import menu from './menu.json'
import styles from './Items.module.scss'
import { ISorter } from '..'

interface Props {
    search: string,
    filter: number | null,
    sorter: ISorter
}

export function Items({ search, filter, sorter }: Props) {
    return (
        <div className={styles.items}>
            {menu
            .filter((item) => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            .filter((item) => {
                if (filter) {
                    return item.category.id === filter;
                } else return true;
            })
            .map((item) =>
                <Item
                {...item}/>)
            }
        </div>
    )
}
