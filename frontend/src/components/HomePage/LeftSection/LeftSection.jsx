import ComponentPack from "./LeftSectionComPack/ComponentPack";
import styles from "../HomePage.module.css";

export default function LeftSection() {
  return (
    <div className={styles.leftSection} id="leftSection">
      <ComponentPack />
    </div>
  );
}
