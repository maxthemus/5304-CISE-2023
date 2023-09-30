import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./AcceptButton.module.css";

type AcceptButtonType = {
  /** Style props */
  acceptButtonPosition?: CSSProperties["position"];
  acceptButtonTop?: CSSProperties["top"];
  acceptButtonLeft?: CSSProperties["left"];
};

const AcceptButton: NextPage<AcceptButtonType> = ({
  acceptButtonPosition,
  acceptButtonTop,
  acceptButtonLeft,
}) => {
  const acceptButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: acceptButtonPosition,
      top: acceptButtonTop,
      left: acceptButtonLeft,
    };
  }, [acceptButtonPosition, acceptButtonTop, acceptButtonLeft]);

  return (
    <div className={styles.acceptButton} style={acceptButtonStyle}>
      <div className={styles.accept}>Accept</div>
    </div>
  );
};

export default AcceptButton;
