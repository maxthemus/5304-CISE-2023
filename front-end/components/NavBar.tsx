import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import SPEEDLogo from "./SPEEDLogo";
import NavButtons from "./NavButtons";
import styles from "./NavBar.module.css";

type NavBarType = {
  /** Style props */
  navBarPosition?: CSSProperties["position"];
  navBarTop?: CSSProperties["top"];
  navBarLeft?: CSSProperties["left"];

  /** Action props */
  onSearchButtonContainerClick?: () => void;
  onSPEEDLogoContainerClick?: () => void;
  onModerateButtonContainerClick?: () => void;
  onAnalyseButtonContainerClick?: () => void;
  onAddButtonContainerClick?: () => void;
};

const NavBar: NextPage<NavBarType> = ({
  navBarPosition,
  navBarTop,
  navBarLeft,
  onSearchButtonContainerClick,
  onSPEEDLogoContainerClick,
  onModerateButtonContainerClick,
  onAnalyseButtonContainerClick,
  onAddButtonContainerClick,
}) => {
  const navBarStyle: CSSProperties = useMemo(() => {
    return {
      position: navBarPosition,
      top: navBarTop,
      left: navBarLeft,
    };
  }, [navBarPosition, navBarTop, navBarLeft]);

  return (
    <div className={styles.navbar} style={navBarStyle}>
      <SPEEDLogo
        sPEEDLogoPosition="absolute"
        sPEEDLogoTop="5px"
        sPEEDLogoLeft="7px"
        sPEEDLogoCursor="pointer"
        onSPEEDLogoContainerClick={onSPEEDLogoContainerClick}
      />
      <NavButtons
        navButtonsPosition="absolute"
        navButtonsTop="0px"
        navButtonsLeft="181px"
        onSearchButtonContainerClick={onSearchButtonContainerClick}
        onModerateButtonContainerClick={onModerateButtonContainerClick}
        onAnalyseButtonContainerClick={onAnalyseButtonContainerClick}
      />
      <div className={styles.addButton} onClick={onAddButtonContainerClick}>
        <div className={styles.addArticle}>Add Article</div>
      </div>
    </div>
  );
};

export default NavBar;
