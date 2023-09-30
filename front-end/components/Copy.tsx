import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./Copy.module.css";

type CopyType = {
  /** Style props */
  copyPosition?: CSSProperties["position"];
  copyTop?: CSSProperties["top"];
  copyLeft?: CSSProperties["left"];
};

const Copy: NextPage<CopyType> = ({ copyPosition, copyTop, copyLeft }) => {
  const copyStyle: CSSProperties = useMemo(() => {
    return {
      position: copyPosition,
      top: copyTop,
      left: copyLeft,
    };
  }, [copyPosition, copyTop, copyLeft]);

  return (
    <div className={styles.copy} style={copyStyle}>
      <img className={styles.copyChild} alt="" src="/rectangle-38.svg" />
      <div className={styles.copyItem} />
    </div>
  );
};

export default Copy;
