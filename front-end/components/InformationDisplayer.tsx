import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Copy from "./Copy";
import styles from "./InformationDisplayer.module.css";

import clipboard from 'clipboard-polyfill';

type InformationDisplayerType = {
  text?: string;

  /** Style props */
  informationDisplayerPosition?: CSSProperties["position"];
  informationDisplayerTop?: CSSProperties["top"];
  informationDisplayerLeft?: CSSProperties["left"];
};

const InformationDisplayer: NextPage<InformationDisplayerType> = ({
  text = "Operating system Concepts",
  informationDisplayerPosition,
  informationDisplayerTop,
  informationDisplayerLeft,
}) => {
  const informationDisplayerStyle: CSSProperties = useMemo(() => {
    return {
      position: informationDisplayerPosition,
      top: informationDisplayerTop,
      left: informationDisplayerLeft,
    };
  }, [
    informationDisplayerPosition,
    informationDisplayerTop,
    informationDisplayerLeft,
  ]);

  const copyValue = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        alert("Value copied");
      }
    } catch (err) {
      console.error(err);
    } 
  };

  return (
    <div
      className={styles.informationDisplayer}
      style={informationDisplayerStyle}
    >
      <div className={styles.operatingSystemConcepts}>{text}</div>
      <div onClick={copyValue}>
        <Copy copyPosition="absolute" copyTop="8px" copyLeft="696px" />
      </div>
    </div>
  );
};

export default InformationDisplayer;
