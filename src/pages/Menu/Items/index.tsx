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

    const sortByCategory = (category: string, list: Array<typeof menu[0]>) => {
        switch(category) {
            case 'porcao':
                return list.sort((a,b) => a['size'] > b['size'] ? 1 : -1);
            case 'qtd_pessoas':
                return list.sort((a,b) => a['serving'] > b['serving'] ? 1 : -1);
            case 'preco':
                return list.sort((a,b) => a['price'] > b['price'] ? 1 : -1);
        }
        return list;
    }

    return (
        <div className={styles.items}>
            {sortByCategory(sorter.value, menu
            .filter((item) => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            .filter((item) => {
                if (filter) {
                    return item.category.id === filter;
                } else return true;
            }))
            .map((item) =>
                <Item
                {...item}/>)
            }
        </div>
    )
}
