import { Item } from './Item'
import menu from './menu.json'

export function Items() {
    return (
        <div>
            {menu.map(({ id, title, description, size, serving, price, category }) =>
                <Item
                key={id}
                title={title}
                description={description}
                size={size}
                serving={serving}
                price={price}
                category={category}/>)
            }
        </div>
    )
}
