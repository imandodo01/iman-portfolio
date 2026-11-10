import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.shell}>
      <p className={styles.eyebrow}>Development foundation · v0.1</p>
      <h1>Iman</h1>
      <p className={styles.description}>Personal Software Engineering Portfolio</p>
      <p className={styles.note}>
        The application foundation is in place. The approved visual design and
        content will be implemented in the next development stage.
      </p>
    </main>
  );
}
