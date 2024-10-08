import styles from "./AppLayout.module.css";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";
import { useEffect, useState } from "react";
import Switchbar from "../components/SwitchBar";

export default function AppLayout() {
  const [currentWindow, setCurrentWindow] = useState("cities");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleWindowChange(option) {
    if (option === currentWindow) return;
    setCurrentWindow(option);
  }
  return (
    <div className={styles.app}>
      <User />
      {windowWidth < 640 ? (
        <MobileLayout currentWindow={currentWindow} />
      ) : (
        <DesktopLayout />
      )}
      {/* {windowWidth < 640 && currentWindow === "cities" ? <Sidebar /> : <Map />} */}
      {windowWidth < 640 && (
        <Switchbar
          currentWindow={currentWindow}
          handleWindowChange={handleWindowChange}
        />
      )}
      {/* <Map /> */}
    </div>
  );
}

function DesktopLayout() {
  return (
    <>
      <Sidebar />
      <Map />
    </>
  );
}

function MobileLayout({ windowWidth, currentWindow }) {
  return currentWindow === "cities" ? <Sidebar /> : <Map />;
}
