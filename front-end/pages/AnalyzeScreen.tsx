import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import MainAnalyze from "../components/MainAnalyze";
import styles from "./AnalyzeScreen.module.css";

const AnalyzeScreen: NextPage = () => {
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
    <div className={styles.analyzeScreen}>
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
      <MainAnalyze
        searchBar="/searchbar3.svg"
        mainAnalyzePosition="absolute"
        mainAnalyzeTop="70px"
        mainAnalyzeLeft="100px"
      />
    </div>
  );
};

export default AnalyzeScreen;
