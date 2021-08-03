import { useState } from "react";
import styles from "./drop-down-menu.module.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

interface DropDownOption {
  readonly key: string;
  readonly description: string;
}

interface DropDownMenuData {
  readonly title: string;
  readonly menuOptions: Array<DropDownOption>;
  onChange?(key: string | null | undefined): any;
}

function DropDownMenu(props: DropDownMenuData) {
  const classes = useStyles();
  const { title, menuOptions, onChange, ...rest } = props;
  const [state, setState] = useState<{ openPopup: boolean }>({
    openPopup: false,
  });
  const handleChange = (event: React.MouseEvent<HTMLElement>) => {
    if (onChange) {
      const key: string | null | undefined = event.currentTarget.dataset?.key;
      onChange(key);
    }
    setState({ ...state, openPopup: !state.openPopup });
  };
  const clickedOnOverlay = () => {
    setState({ ...state, openPopup: !state.openPopup });
  };
  if (!title) {
    throw new Error("Title is required for drop down menu");
  }
  if (!menuOptions) {
    throw new Error("menu options are required for drop down menu");
  }
  const keysArray = menuOptions.map((x) => x.key);
  const keysSet = new Set(keysArray);
  if (keysSet.size !== keysArray.length) {
    throw new Error("keys must be unique in menu options array");
  }
  return (
    <div {...rest}>
      <div
        className={styles.dropDownMenu}
        style={{ cursor: "pointer" }}
        onClick={() => setState({ ...state, openPopup: !state.openPopup })}
      >
        <span>{title || "none"}</span>
        <span className={styles.downArrow}>&#9660;</span>
        {state.openPopup ? (
          <div className={styles.popup}>
            <ul className={styles.ul}>
              {menuOptions &&
                menuOptions.map((item) => (
                  <li className={styles.ulItem} key={item.key}>
                    <button
                      className={styles.btn}
                      onClick={handleChange}
                      data-key={item.key}
                    >
                      {item.description}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      {state.openPopup ? (
        <div className={styles.overlay} onClick={clickedOnOverlay}></div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DropDownMenu;
