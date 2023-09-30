import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./ModerateButton.module.css";

type ModerateButtonType = {
  /** Style props */
  moderateButtonPosition?: CSSProperties["position"];
  moderateButtonFlexShrink?: CSSProperties["flexShrink"];

  /** Action props */
  onModerateButtonContainerClick?: () => void;
};

const ModerateButton: NextPage<ModerateButtonType> = ({
  moderateButtonPosition,
  moderateButtonFlexShrink,
  onModerateButtonContainerClick,
}) => {
  const moderateButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: moderateButtonPosition,
      flexShrink: moderateButtonFlexShrink,
    };
  }, [moderateButtonPosition, moderateButtonFlexShrink]);

  return (
    <div
      className={styles.moderateButton}
      onClick={onModerateButtonContainerClick}
      style={moderateButtonStyle}
    >
      <div className={styles.moderate}>Moderate</div>
    </div>
  );
};

export default ModerateButton;
