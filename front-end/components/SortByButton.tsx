import type { NextPage } from "next";
import { useMemo, type CSSProperties, useEffect, useState } from "react";
import styles from "./SortByButton.module.css";

type SortByButtonType = {
  /** Style props */
  sortByButtonPosition?: CSSProperties["position"];
  sortByButtonTop?: CSSProperties["top"];
  sortByButtonLeft?: CSSProperties["left"];

  updateSEFilter: Function;
  currentSEFIlter?: string;
  SEFilters?: Array<string>;
};

const SortByButton: NextPage<SortByButtonType> = ({
  sortByButtonPosition,
  sortByButtonTop,
  sortByButtonLeft,
  updateSEFilter=(() => null),
  currentSEFIlter = "ALL",
  SEFilters=[]
}) => {
  const sortByButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: sortByButtonPosition,
      top: sortByButtonTop,
      left: sortByButtonLeft,
    };
  }, [sortByButtonPosition, sortByButtonTop, sortByButtonLeft]);
    const [currentFilter, setCurrentFilter] = useState("");
    const [openDropDown, setOpenDropDown] = useState(false); //Default the drop down isn't open

    useEffect(() => {
      setCurrentFilter(currentSEFIlter);
    }, [currentSEFIlter]);
    
    const handleClickFilter = (value:string) => {
      setCurrentFilter(value);
      updateSEFilter(value);
    }


    //Maps SE filters to drop down components
    const mapSEFilters = () => {
      return SEFilters.filter((value) => value !== currentFilter).map((value, index) => { 
        return (
          <div key={index} onClick={() => handleClickFilter(value)} style={{ backgroundColor: "green", width: "215px"}} >
            <p>{value}</p>
          </div>
        )  
      });
    }

  return (
      <div className={styles.sortbyButton} style={sortByButtonStyle} >
        <div onClick={() => setOpenDropDown((value) => !value)}>
          <div className={styles.sortFrame} onClick={() => "HERE"} />
          <div className={styles.sortBy}>{currentFilter}</div>
          <img className={styles.expandDownIcon} alt="" src="/expand-down.svg" />
        </div>
       {
          (openDropDown === true) ? 
            <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", position: "absolute", overflow: "auto", zIndex: "1" }}>
              {mapSEFilters()}
            </div>
          : 
          null
        }
     </div>
 );
};

export default SortByButton;
