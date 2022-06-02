import styles from './Item.module.scss'
import logo from '../../../../assets/logo.svg'

interface Props {
    title: string,
    description: string,
    size: number,
    serving: number,
    id: number,
    price: number,
    category: {id: number, label: string}
}
/*
title={title}
                description={description}
                size={size}
                serving={serving}
                price={price}
                category={category}
*/

export function Item({ title, description, size, serving, id, price, category}: Props) {
    return (
        <div className={styles.item}>
          <div className={styles.item__image}>
            <img src={logo} alt="imagem" />
          </div>
          <div className={styles.item__description}>
            <div className={styles.item__title}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className={styles.item__tags}>
              <div className={styles.item__tipo}>{category.label}</div>
              <div className={styles.item__porcao}>{size}g</div>
              <div className={styles.item__qtdpessoas}>Serve {serving} pessoa{serving >= 2 && 's'}</div>
              <div className={styles.item__valor}>R$ {price}</div>
            </div>
          </div>
        </div>
      );
}
