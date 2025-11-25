import styles from "../ComponentPack.module.css";

export default function BottomList() {
  return (
    <div className={styles.extraList}>
      <a href="">Privacy</a>·<a href=""> Terms </a>·<a href="">Advertising</a>·
      <a href="">Ad Choices</a>·<a href="">Cookies</a>· More
    </div>
  );
}
