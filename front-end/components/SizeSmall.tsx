import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./SizeSmall.module.css";

type SizeSmallType = {
  sizeSmallSizeSmall?: string;

  /** Style props */
  sizeSmallIconWidth?: CSSProperties["width"];
  sizeSmallIconHeight?: CSSProperties["height"];
  sizeSmallIconPosition?: CSSProperties["position"];
  sizeSmallIconTop?: CSSProperties["top"];
  sizeSmallIconLeft?: CSSProperties["left"];
};

const SizeSmall: NextPage<SizeSmallType> = ({
  sizeSmallSizeSmall,
  sizeSmallIconWidth,
  sizeSmallIconHeight,
  sizeSmallIconPosition,
  sizeSmallIconTop,
  sizeSmallIconLeft,
}) => {
  const sizeSmallIconStyle: CSSProperties = useMemo(() => {
    return {
      width: sizeSmallIconWidth,
      height: sizeSmallIconHeight,
      position: sizeSmallIconPosition,
      top: sizeSmallIconTop,
      left: sizeSmallIconLeft,
    };
  }, [
    sizeSmallIconWidth,
    sizeSmallIconHeight,
    sizeSmallIconPosition,
    sizeSmallIconTop,
    sizeSmallIconLeft,
  ]);

  return (
    <img
      className={styles.sizesmallIcon}
      alt=""
      src={sizeSmallSizeSmall}
      style={sizeSmallIconStyle}
    />
  );
};

export default SizeSmall;
