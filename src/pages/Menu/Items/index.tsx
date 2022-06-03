import { Item } from './Item'
import menu from './menu.json'
import styles from './Items.module.scss'

export function Items() {
    return (
        <div className={styles.items}>
            {menu.map((item) =>
                <Item
                {...item}/>)
            }
        </div>
    )
}
