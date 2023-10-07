import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import ArticleInfoModal from "../components/ArticleInfoModal";
import styles from "./ArticleScreen.module.css";



const ArticleScreen: NextPage = () => {
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
    <div className={styles.articleScreen}>
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
      <ArticleInfoModal
        ratingFrame="/ratingframe1.svg"
        articleInfoModalPosition="absolute"
        articleInfoModalTop="70px"
        articleInfoModalLeft="100px"
      />
    </div>
  );
};

export default ArticleScreen;
