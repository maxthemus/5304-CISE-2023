import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./AnalyseButton.module.css";

type AnalyseButtonType = {
  analyze?: string;

  /** Style props */
  analyseButtonPosition?: CSSProperties["position"];
  analyseButtonFlexShrink?: CSSProperties["flexShrink"];
  analyseButtonBackgroundColor?: CSSProperties["backgroundColor"];
  analyseButtonWidth?: CSSProperties["width"];
  analyseButtonHeight?: CSSProperties["height"];
  analyseButtonCursor?: CSSProperties["cursor"];
  analyseButtonTop?: CSSProperties["top"];
  analyseButtonLeft?: CSSProperties["left"];
  analyzeTop?: CSSProperties["top"];
  analyzeLeft?: CSSProperties["left"];
  analyzeFontSize?: CSSProperties["fontSize"];
  analyzeColor?: CSSProperties["color"];
  analyzeTextAlign?: CSSProperties["textAlign"];

  /** Action props */
  onAnalyseButtonContainerClick?: () => void;
};

const AnalyseButton: NextPage<AnalyseButtonType> = ({
  analyseButtonPosition,
  analyseButtonFlexShrink,
  onAnalyseButtonContainerClick,
  analyseButtonBackgroundColor,
  analyseButtonWidth,
  analyseButtonHeight,
  analyseButtonCursor,
  analyseButtonTop,
  analyseButtonLeft,
  analyze="Analyze",
  analyzeTop,
  analyzeLeft,
  analyzeFontSize,
  analyzeColor,
  analyzeTextAlign,
}) => {
  const analyseButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: analyseButtonPosition,
      flexShrink: analyseButtonFlexShrink,
      backgroundColor: analyseButtonBackgroundColor,
      width: analyseButtonWidth,
      height: analyseButtonHeight,
      cursor: analyseButtonCursor,
      top: analyseButtonTop,
      left: analyseButtonLeft,
    };
  }, [
    analyseButtonPosition,
    analyseButtonFlexShrink,
    analyseButtonBackgroundColor,
    analyseButtonWidth,
    analyseButtonHeight,
    analyseButtonCursor,
    analyseButtonTop,
    analyseButtonLeft,
  ]);

  const analyzeStyle: CSSProperties = useMemo(() => {
    return {
      top: analyzeTop,
      left: analyzeLeft,
      fontSize: analyzeFontSize,
      color: analyzeColor,
      textAlign: analyzeTextAlign,
    };
  }, [
    analyzeTop,
    analyzeLeft,
    analyzeFontSize,
    analyzeColor,
    analyzeTextAlign,
  ]);

  return (
    <div
      className={styles.analyseButton}
      onClick={onAnalyseButtonContainerClick}
      style={analyseButtonStyle}
    >
      <div className={styles.analyze} style={analyzeStyle}>
        {analyze}
      </div>
    </div>
  );
};

export default AnalyseButton;
