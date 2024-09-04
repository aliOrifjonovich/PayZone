import React from "react";
import styles from "./Profile.module.scss";
import {
  Box,
  Button,
  Container,
  Divider,
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
import { Link, Outlet, useLocation } from "react-router-dom";

const drawerdata = [
  {
    icon: (props) => <PaymentProfileIcon {...props} />,
    title: "My payments",
    link: "my-payments",
  },
  {
    icon: (props) => <PaymentMethod {...props} />,
    title: "Payment methods",
    link: "payment-methods",
  },
];

const Profile = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation("common");

  const drawer = (
    <div className={styles.list}>
      <Link to="/profile">
        <div
          className={`${styles.list_item} ${
            pathname === "/profile" && styles.list_item_active
          }`}
        >
          <UserIcon fill={pathname === "/profile" ? "#00d44a" : "#869AB2"} />
          <h4>Profile</h4>
        </div>
      </Link>
      <p className={styles.list_payments_title}>Payments</p>
      <div className={styles.list_payments}>
        {drawerdata?.map((data) => (
          <Link key={data.link} to={data.link}>
            <div
              className={`${styles.list_item} ${
                pathname.includes(data.link) && styles.list_item_active
              }`}
            >
              {data.icon({
                stroke: pathname.includes(data.link) ? "#00d44a" : "#869AB2",
              })}
              <h4>{data.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.profile_sidebar}>
          <div className={styles.profile_sidebar_inner}>{drawer}</div>
        </div>
        <Container>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - 100px)` },
            }}
          >
            <div className={styles.profile_wrapper}>
              <Outlet />
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Profile;
