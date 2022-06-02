import { useState } from 'react'
import options from './options.json'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import styles from './Sorter.module.scss'
import { ISorter } from '..'

interface Props {
    sorter: ISorter,
    setSorter: React.Dispatch<React.SetStateAction<ISorter>>
}

export function Sorter({ sorter, setSorter }: Props) {

    const [isOpen, setIsOpen] = useState(false);
    let sorterName = "";



    return (
        <button className={`${styles.sorter} ${sorter.value !== '' && styles['sorter--active']}`}
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}>
            <span>{sorter.name || 'Ordenar por'}</span>
            {isOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={`${styles.sorter__options} ${styles['sorter__options--active']}`}>
                {isOpen && options.map(option => {
                    return (
                        <div key={option.value}
                            onClick={() => setSorter(option)}
                            className={styles.sorter__option}>
                            {option.name}
                        </div>)
                })}
            </div>
        </button>
    )
}
