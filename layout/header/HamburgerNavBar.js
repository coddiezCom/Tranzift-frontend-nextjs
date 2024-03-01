// import React
import React, { useState, useMemo } from "react";
// import MUI
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
// Import icons
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
// Import Image
import Image from "next/image";
// Import Link
import Link from "next/link";
// Import Scss
import styles from "./styles.module.scss";

const MobileNav = React.memo(({ mobileLinks, toggleNavigationBar }) => (
  <Box
    role="presentation"
    onClick={toggleNavigationBar(false)}
    onKeyDown={toggleNavigationBar(false)}
    className={styles.__mobileNavContainer}
    sx={{ width: "100%" }}
  >
    <List className={styles.__list}>
      <ListItem disablePadding className={styles.__LogoList}>
        <ListItemButton sx={{ "&:hover": { background: "none" } }} className={styles.__LogoListContainer}>
          <Link href={"/"} className={styles.__logoContainer}>
            <Image src={"/logo.png"} width={400} height={400} alt="logo" />
            <h3>TRANZIFT</h3>
          </Link>
          <button
            className={`${styles.closeMobileSideBar} text-3xl font-bold text-gray-500 `}
            onClick={toggleNavigationBar(false)}
          >
            <RxCross2 />
          </button>
        </ListItemButton>
      </ListItem>

      {mobileLinks.map((content, index) => (
        <React.Fragment key={index}>
          <ListItem
            className={styles.__navItems}
            disablePadding
            style={{ margin: content?.icon || content?.subtitle || content?.icon ? "" : " 0.1em 0" }}
          >
            <ListItemButton className={styles.__navItemContainer}>
              {content?.icon && <ListItemIcon className={styles.__navItemIcon}>{content?.icon}</ListItemIcon>}

              <ListItemText
                primary={content?.head || content?.title}
                secondary={content?.head ? content?.title : content?.subtitle}
                className={styles.__navItemText}
              />
            </ListItemButton>
          </ListItem>
          {content?.icon || content?.subtitle || content?.icon ? <Divider /> : null}
        </React.Fragment>
      ))}
    </List>
  </Box>
));
MobileNav.displayName = "MobileNav";

const HamburgerNavBar = ({ mobileLinks }) => {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const toggleNavigationBar = (open) => () => {
    if (!open) {
      setToggleNavBar(false);
    } else {
      setToggleNavBar(true);
    }
  };
  return (
    <div className={styles.__hamburgerNavBarContainer}>
      <Box sx={{ display: "flex" }} className={styles.__mobileNavBtn}>
        <span>
          <Image src={"/logo.png"} width={500} height={500} alt="logo" />
          <h3>TRANZIFT</h3>
        </span>
        <span>
          <IconButton onClick={toggleNavigationBar(true)} aria-label="hamburger">
            <GiHamburgerMenu />
          </IconButton>
        </span>
      </Box>
      <Drawer open={toggleNavBar} onClose={toggleNavigationBar(false)} className={styles.__mobileDrawer}>
        <MobileNav mobileLinks={mobileLinks} toggleNavigationBar={toggleNavigationBar} />
      </Drawer>
    </div>
  );
};

export default HamburgerNavBar;
