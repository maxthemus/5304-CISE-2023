import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import MainSearch from "../components/MainSearch";
import NavBar from "../components/NavBar";
import styles from "./index.module.css";

const SearchScreen: NextPage = () => {
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
    <div className={styles.searchScreen}>
      <MainSearch
        searchBar="/searchbar.svg"
        mainSearchPosition="absolute"
        mainSearchTop="70px"
        mainSearchLeft="100px"
      />
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
    </div>
  );
};

export default SearchScreen;
