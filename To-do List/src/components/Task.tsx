import { ClipboardText } from '@phosphor-icons/react';
import styles from './Task.module.css';

export function Task() {
  return (
    <section className={styles.section}>
      <header className={styles.info}>
        <div className={styles.created}>
          <span>Tarefas criadas</span>
          <div>
            <p>0</p>
          </div>
        </div>
        <div className={styles.done}>
          <span>Concluídas</span>
          <div>
            <p>0</p>
          </div>
        </div>
      </header>
      <div className={styles.container}>
        <ClipboardText size={56} />
        <span className={styles.empty}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </span>
      </div>

    </section>
  )
}