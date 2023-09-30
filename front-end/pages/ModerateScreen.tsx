import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import MainModerate from "../components/MainModerate";
import styles from "./ModerateScreen.module.css";

const ModerateScreen: NextPage = () => {
  const router = useRouter();

  const onSearchButtonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSPEEDLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onModerateButtonContainerClick = useCallback(() => {
    router.push("/ModerateScreen");
  }, [router]);

  const onAnalyseButtonContainerClick = useCallback(() => {
    router.push("/AnalyzeScreen");
  }, [router]);

  const onAddButtonContainerClick = useCallback(() => {
    router.push("/AddArticleScreen");
  }, [router]);

  return (
    <div className={styles.moderateScreen}>
      <NavBar
        navBarPosition="absolute"
        navBarTop="0px"
        navBarLeft="0px"
        onSearchButtonContainerClick={onSearchButtonContainerClick}
        onSPEEDLogoContainerClick={onSPEEDLogoContainerClick}
        onModerateButtonContainerClick={onModerateButtonContainerClick}
        onAnalyseButtonContainerClick={onAnalyseButtonContainerClick}
        onAddButtonContainerClick={onAddButtonContainerClick}
      />
      <MainModerate
        mainModeratePosition="absolute"
        mainModerateTop="70px"
        mainModerateLeft="100px"
      />
    </div>
  );
};

export default ModerateScreen;
