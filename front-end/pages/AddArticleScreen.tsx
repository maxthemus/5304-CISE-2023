import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import AddArticleModal from "../components/AddArticleModal";
import styles from "./AddArticleScreen.module.css";

const AddArticleScreen: NextPage = () => {
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

  const onModerationButtonContainerClick = useCallback(() => {
    router.push("/ModerationScreen");
  }, [router]);

  return (
    <div className={styles.addArticleScreen}>
      <NavBar
        navBarPosition="absolute"
        navBarTop="0px"
        navBarLeft="0px"
        onSearchButtonContainerClick={onSearchButtonContainerClick}
        onSPEEDLogoContainerClick={onSPEEDLogoContainerClick}
        onModerateButtonContainerClick={onModerateButtonContainerClick}
        onAnalyseButtonContainerClick={onAnalyseButtonContainerClick}
        onAddButtonContainerClick={onAddButtonContainerClick}
        onModerationButtonContainerClick={onModerationButtonContainerClick}
      />
      <AddArticleModal
        addArticleModalPosition="absolute"
        addArticleModalTop="70px"
        addArticleModalLeft="100px"
      />
    </div>
  );
};

export default AddArticleScreen;
