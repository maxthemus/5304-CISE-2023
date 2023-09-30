import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Copy from "./Copy";
import styles from "./InformationDisplayer.module.css";

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

  return (
    <div
      className={styles.informationDisplayer}
      style={informationDisplayerStyle}
    >
      <div className={styles.operatingSystemConcepts}>{text}</div>
      <Copy copyPosition="absolute" copyTop="8px" copyLeft="696px" />
    </div>
  );
};

export default InformationDisplayer;
