import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./AnalyseButton.module.css";

type AnalyseButtonType = {
  /** Style props */
  analyseButtonPosition?: CSSProperties["position"];
  analyseButtonFlexShrink?: CSSProperties["flexShrink"];

  /** Action props */
  onAnalyseButtonContainerClick?: () => void;
};

const AnalyseButton: NextPage<AnalyseButtonType> = ({
  analyseButtonPosition,
  analyseButtonFlexShrink,
  onAnalyseButtonContainerClick,
}) => {
  const analyseButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: analyseButtonPosition,
      flexShrink: analyseButtonFlexShrink,
    };
  }, [analyseButtonPosition, analyseButtonFlexShrink]);

  return (
    <div
      className={styles.analyseButton}
      onClick={onAnalyseButtonContainerClick}
      style={analyseButtonStyle}
    >
      <div className={styles.analyze}>Analyze</div>
    </div>
  );
};

export default AnalyseButton;
