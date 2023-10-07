import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./StateActive.module.css";

type StateActiveType = {
  /** Style props */
  stateActivePosition?: CSSProperties["position"];
  stateActiveFlexShrink?: CSSProperties["flexShrink"];
  text: string;
};

const StateActive: NextPage<StateActiveType> = ({
  stateActivePosition,
  stateActiveFlexShrink,
  text="..."
}) => {
  const stateActiveStyle: CSSProperties = useMemo(() => {
    return {
      position: stateActivePosition,
      flexShrink: stateActiveFlexShrink,
    };
  }, [stateActivePosition, stateActiveFlexShrink]);

  return (
    <div className={styles.stateactive} style={stateActiveStyle}>
      <div className={styles.operatingSystemConcepts}>
        {text}
      </div>
    </div>
  );
};

export default StateActive;
