import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./SPEEDLogo.module.css";

type SPEEDLogoType = {
  /** Style props */
  sPEEDLogoPosition?: CSSProperties["position"];
  sPEEDLogoTop?: CSSProperties["top"];
  sPEEDLogoLeft?: CSSProperties["left"];
  sPEEDLogoCursor?: CSSProperties["cursor"];

  /** Action props */
  onSPEEDLogoContainerClick?: () => void;
};

const SPEEDLogo: NextPage<SPEEDLogoType> = ({
  sPEEDLogoPosition,
  sPEEDLogoTop,
  sPEEDLogoLeft,
  sPEEDLogoCursor,
  onSPEEDLogoContainerClick,
}) => {
  const sPEEDLogoStyle: CSSProperties = useMemo(() => {
    return {
      position: sPEEDLogoPosition,
      top: sPEEDLogoTop,
      left: sPEEDLogoLeft,
      cursor: sPEEDLogoCursor,
    };
  }, [sPEEDLogoPosition, sPEEDLogoTop, sPEEDLogoLeft, sPEEDLogoCursor]);

  return (
    <div
      className={styles.speedLogo}
      style={sPEEDLogoStyle}
      onClick={onSPEEDLogoContainerClick}
    >
      <div className={styles.speed}>SPEED</div>
    </div>
  );
};

export default SPEEDLogo;
