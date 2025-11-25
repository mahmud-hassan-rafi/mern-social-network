import Story from "./Story";
import styles from "./StorySection.module.css";

export default function StorySection() {
  return (
    <div className={styles.storySection}>
      <Story src="../src/assets/story1.jpg" />
      <Story src="../src/assets/story3.jpg" />
      <Story src="../src/assets/story1.jpg" />
      <Story src="../src/assets/story3.jpg" />
      <Story src="../src/assets/story1.jpg" />
    </div>
  );
}
