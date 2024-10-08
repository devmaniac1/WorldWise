import styles from "./SwitchBar.module.css";

export default function Switchbar({ currentWindow, handleWindowChange }) {
  return (
    <div className={styles.switchbar}>
      <p
        className={currentWindow === "cities" ? styles.active : ""}
        onClick={() => handleWindowChange("cities")}
      >
        Cities
      </p>
      <p
        className={currentWindow === "map" ? styles.active : ""}
        onClick={() => handleWindowChange("map")}
      >
        Map
      </p>
    </div>
  );
}
