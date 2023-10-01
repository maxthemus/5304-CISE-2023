import type { NextPage } from "next";
import { useMemo, type CSSProperties, useState, ChangeEvent } from "react";
import styles from "./SizeSmall.module.css";

type SizeSmallType = {
  sizeSmallSizeSmall?: string;
  updateFilter: Function;

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
  updateFilter
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
  const [value, setValue] = useState<string>("");


  const update = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setValue(newValue);

    updateFilter(newValue);
  };


  return (
    <div style={{ }}>
      <img
        className={styles.sizesmallIcon}
        alt=""
        src={sizeSmallSizeSmall}
        style={sizeSmallIconStyle}
      />
      <input type="text" onChange={update} value={value} style={{zIndex: "100", position: "relative", top:"65px", left: "0px", height: "60px", width: "500px", border:"none", backgroundColor: "transparent", fontSize: "20px"}}/>
    </div>
  );
};

export default SizeSmall;
