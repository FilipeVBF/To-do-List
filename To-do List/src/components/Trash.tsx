import styles from './Trash.module.css';

import { PlusCircle } from '@phosphor-icons/react';

export function Trash() {
  return (
    <button className={styles.button}>
      Criar
      <PlusCircle className={styles.plus}/>
    </button>
  )
}