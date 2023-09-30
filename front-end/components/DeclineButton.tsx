import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./DeclineButton.module.css";

type DeclineButtonType = {
  /** Style props */
  declineButtonPosition?: CSSProperties["position"];
  declineButtonTop?: CSSProperties["top"];
  declineButtonLeft?: CSSProperties["left"];
};

const DeclineButton: NextPage<DeclineButtonType> = ({
  declineButtonPosition,
  declineButtonTop,
  declineButtonLeft,
}) => {
  const declineButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: declineButtonPosition,
      top: declineButtonTop,
      left: declineButtonLeft,
    };
  }, [declineButtonPosition, declineButtonTop, declineButtonLeft]);

  return (
    <div className={styles.declineButton} style={declineButtonStyle}>
      <div className={styles.decline}>Decline</div>
    </div>
  );
};

export default DeclineButton;
