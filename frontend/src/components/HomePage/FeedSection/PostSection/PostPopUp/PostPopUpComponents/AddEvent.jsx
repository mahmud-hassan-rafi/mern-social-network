import styles from "../PostPopUp.module.css";
import { MdPhotoLibrary, MdTagFaces } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { usePostURL } from "../../../../../../store/contextAPI";

export default function AddEvent() {
  const { postPhotoURL, setPostPhotoURL } = usePostURL();

  const handleFileChange = (event) => {
    console.log(event);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      console.log(reader);
      reader.onload = () => setPostPhotoURL(reader.result);
      reader.readAsDataURL(file);
    }
    console.log(postPhotoURL);
  };

  return (
    <div className={` ${styles.addEvent}`}>
      <p>Add to your post</p>
      <ul className={`${styles.eventIcons}`}>
        <li>
          <input
            type="file"
            name="media"
            id="upload"
            accept="image/*"
            hidden
            // multiple
            onChange={handleFileChange}
          />
          <label htmlFor="upload">
            <MdPhotoLibrary className={styles.icon} />
          </label>
        </li>
        <li>
          <FaUserTag />
        </li>
        <li>
          <MdTagFaces />
        </li>
        <li>
          <FaLocationDot />
        </li>
        <li>GIF</li>
        <li>···</li>
      </ul>
    </div>
  );
}
