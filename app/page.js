import Image from "next/image";
import styles from "./page.module.css";

import Src from "./components/Src.jsx";
export default function Home() {
  return (
    <div className={styles.page}>
      <Src />
    </div>
  );
}
