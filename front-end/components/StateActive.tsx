import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./StateActive.module.css";

type StateActiveType = {
  /** Style props */
  stateActivePosition?: CSSProperties["position"];
  stateActiveFlexShrink?: CSSProperties["flexShrink"];
};

const StateActive: NextPage<StateActiveType> = ({
  stateActivePosition,
  stateActiveFlexShrink,
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
        Operating System Concepts
      </div>
    </div>
  );
};

export default StateActive;
