import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./AddButton.module.css";

type AddButtonType = {
  /** Style props */
  addButtonPosition?: CSSProperties["position"];
  addButtonTop?: CSSProperties["top"];
  addButtonLeft?: CSSProperties["left"];

  /** Action props */
  onAddButtonContainerClick?: () => void;
};

const AddButton: NextPage<AddButtonType> = ({
  addButtonPosition,
  addButtonTop,
  addButtonLeft,
  onAddButtonContainerClick,
}) => {
  const addButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: addButtonPosition,
      top: addButtonTop,
      left: addButtonLeft,
    };
  }, [addButtonPosition, addButtonTop, addButtonLeft]);

  return (
    <div
      className={styles.addButton}
      onClick={onAddButtonContainerClick}
      style={addButtonStyle}
    >
      <div className={styles.addArticle}>Add Article</div>
    </div>
  );
};

export default AddButton;
