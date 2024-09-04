import React, { useState } from "react";
import styles from "./Profile.module.scss";
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  PaymentMethod,
  PaymentProfileIcon,
  SignoutIcon,
  UserIcon,
} from "helpers/Protected/icons";
import { useTranslation } from "react-i18next";
import ProfilePage from "Components/UI/ProfilePage/ProfilePage";
import Payments from "Components/UI/Payments/Payments";
import PaymentCard from "Components/UI/PaymentCard/PaymentCard";

const drawerdata = ["My payments", "Payment methods"];

const Profile = (props) => {
  const { t } = useTranslation("common");

  const drawerWidth = 221;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const drawer = (
    <div className={styles.box}>
      <Toolbar />
      <Divider />
      <List className={styles.list}>
        <ListItem disablePadding className={styles.listItem}>
          <ListItemButton>
            <ListItemIcon>
              <UserIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding className={styles.listItem}>
          <p className={styles.paymentTitle}>Payments</p>
          {drawerdata?.map((text, index) => (
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <PaymentProfileIcon /> : <PaymentMethod />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </ListItem>

        <ListItem disablePadding>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "10px",
            }}
          >
            {t("Sign out")}
            <SignoutIcon />
          </Button>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className={styles.profile}>
        <Container>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <div className={styles.profile_wrapper}>
              <ProfilePage />

              <Payments />

              <PaymentCard />
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Profile;
