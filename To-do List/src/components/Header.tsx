import styles from "./Header.module.css";

import logoToDo from "../assets/logo.svg";
import { Input } from "./Input";
import { Trash } from "./Trash";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoToDo} alt="Logo todo do todo" />
      <div className={styles.task}>
        <Input />
        <Trash />
      </div>
    </header>
  );
}
