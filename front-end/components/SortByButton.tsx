import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./SortByButton.module.css";

type SortByButtonType = {
  /** Style props */
  sortByButtonPosition?: CSSProperties["position"];
  sortByButtonTop?: CSSProperties["top"];
  sortByButtonLeft?: CSSProperties["left"];
};

const SortByButton: NextPage<SortByButtonType> = ({
  sortByButtonPosition,
  sortByButtonTop,
  sortByButtonLeft,
}) => {
  const sortByButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: sortByButtonPosition,
      top: sortByButtonTop,
      left: sortByButtonLeft,
    };
  }, [sortByButtonPosition, sortByButtonTop, sortByButtonLeft]);

  return (
    <div className={styles.sortbyButton} style={sortByButtonStyle}>
      <div className={styles.sortFrame} />
      <div className={styles.sortBy}>sort By</div>
      <img className={styles.expandDownIcon} alt="" src="/expand-down.svg" />
    </div>
  );
};

export default SortByButton;
