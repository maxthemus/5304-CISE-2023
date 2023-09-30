import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import SearchButton from "./SearchButton";
import ModerateButton from "./ModerateButton";
import AnalyseButton from "./AnalyseButton";
import styles from "./NavButtons.module.css";

type NavButtonsType = {
  /** Style props */
  navButtonsPosition?: CSSProperties["position"];
  navButtonsTop?: CSSProperties["top"];
  navButtonsLeft?: CSSProperties["left"];

  /** Action props */
  onSearchButtonContainerClick?: () => void;
  onModerateButtonContainerClick?: () => void;
  onAnalyseButtonContainerClick?: () => void;
};

const NavButtons: NextPage<NavButtonsType> = ({
  navButtonsPosition,
  navButtonsTop,
  navButtonsLeft,
  onSearchButtonContainerClick,
  onModerateButtonContainerClick,
  onAnalyseButtonContainerClick,
}) => {
  const navButtonsStyle: CSSProperties = useMemo(() => {
    return {
      position: navButtonsPosition,
      top: navButtonsTop,
      left: navButtonsLeft,
    };
  }, [navButtonsPosition, navButtonsTop, navButtonsLeft]);

  return (
    <div className={styles.navButtons} style={navButtonsStyle}>
      <SearchButton
        searchButtonPosition="relative"
        searchButtonFlexShrink="0"
        onSearchButtonContainerClick={onSearchButtonContainerClick}
      />
      <ModerateButton
        moderateButtonPosition="relative"
        moderateButtonFlexShrink="0"
        onModerateButtonContainerClick={onModerateButtonContainerClick}
      />
      <AnalyseButton
        analyseButtonPosition="relative"
        analyseButtonFlexShrink="0"
        onAnalyseButtonContainerClick={onAnalyseButtonContainerClick}
      />
    </div>
  );
};

export default NavButtons;
