import Story from "./Story";
import styles from "./StorySection.module.css";
import story1 from "../../../../../assets/story1.jpg";
import story3 from "../../../../../assets/story3.jpg";

export default function StorySection() {
  return (
    <div className={styles.storySection}>
      <Story src={story1} />
      <Story src={story3} />
      <Story src={story1} />
      <Story src={story3} />
      <Story src={story1} />
    </div>
  );
}
