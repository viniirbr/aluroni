import styles from './Item.module.scss'
import logo from '../../../../assets/logo.svg'
import menu from './../menu.json'

type Props = typeof menu[0]

export function Item({ title, description, size, serving, price, category, photo }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt="imagem" />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={`${styles.item__type} ${styles[`item__type__${category.label.toLocaleLowerCase()}`]}`}>
            {category.label}
          </div>
          <div className={styles.item__porcao}>{size}g</div>
          <div className={styles.item__qtdpessoas}>Serve {serving} pessoa{serving >= 2 && 's'}</div>
          <div className={styles.item__valor}>R$ {price}</div>
        </div>
      </div>
    </div>
  );
}
