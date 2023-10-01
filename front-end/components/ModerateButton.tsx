import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./ModerateButton.module.css";

type ModerateButtonType = {
  moderate?: string;

  /** Style props */
  moderateButtonPosition?: CSSProperties["position"];
  moderateButtonFlexShrink?: CSSProperties["flexShrink"];
  moderateButtonBackgroundColor?: CSSProperties["backgroundColor"];
  moderateButtonWidth?: CSSProperties["width"];
  moderateButtonHeight?: CSSProperties["height"];
  moderateButtonCursor?: CSSProperties["cursor"];
  moderateButtonTop?: CSSProperties["top"];
  moderateButtonLeft?: CSSProperties["left"];
  moderateTop?: CSSProperties["top"];
  moderateLeft?: CSSProperties["left"];
  moderateFontSize?: CSSProperties["fontSize"];
  moderateColor?: CSSProperties["color"];
  moderateTextAlign?: CSSProperties["textAlign"];

  /** Action props */
  onModerateButtonContainerClick?: () => void;
};

const ModerateButton: NextPage<ModerateButtonType> = ({
  moderateButtonPosition,
  moderateButtonFlexShrink,
  onModerateButtonContainerClick,
  moderateButtonBackgroundColor,
  moderateButtonWidth,
  moderateButtonHeight,
  moderateButtonCursor,
  moderateButtonTop,
  moderateButtonLeft,
  moderate="Moderate",
  moderateTop,
  moderateLeft,
  moderateFontSize,
  moderateColor,
  moderateTextAlign,
}) => {
  const moderateButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: moderateButtonPosition,
      flexShrink: moderateButtonFlexShrink,
      backgroundColor: moderateButtonBackgroundColor,
      width: moderateButtonWidth,
      height: moderateButtonHeight,
      cursor: moderateButtonCursor,
      top: moderateButtonTop,
      left: moderateButtonLeft,
    };
  }, [
    moderateButtonPosition,
    moderateButtonFlexShrink,
    moderateButtonBackgroundColor,
    moderateButtonWidth,
    moderateButtonHeight,
    moderateButtonCursor,
    moderateButtonTop,
    moderateButtonLeft,
  ]);

  const moderateStyle: CSSProperties = useMemo(() => {
    return {
      top: moderateTop,
      left: moderateLeft,
      fontSize: moderateFontSize,
      color: moderateColor,
      textAlign: moderateTextAlign,
    };
  }, [
    moderateTop,
    moderateLeft,
    moderateFontSize,
    moderateColor,
    moderateTextAlign,
  ]);

  return (
    <div
      className={styles.moderateButton}
      onClick={onModerateButtonContainerClick}
      style={moderateButtonStyle}
    >
      <div className={styles.moderate} style={moderateStyle}>
        {moderate}
      </div>
    </div>
  );
};

export default ModerateButton;
