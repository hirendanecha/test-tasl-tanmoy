/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect, useMemo } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import { maxWidth } from "@mui/system";
import { Box, Switch, Typography } from "@mui/material";
import SideSettingMenu from "../SideSettingMenu";

function SettingContent({ children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  const menuItems = useMemo(
    () => [
      {
        icon: <Icon fontSize="small">person</Icon>,
        text: "Profile",
        id: "profile",
      },
      {
        icon: <Icon fontSize="small">receipt_long</Icon>,
        text: "Basic Info",
        id: "basic_info",
      },
      {
        icon: <Icon fontSize="small">lock</Icon>,
        text: "Change Password",
        id: "change_password",
      },
      {
        icon: <Icon fontSize="small">security</Icon>,
        text: "2FA",
        id: "2fa",
      },
      {
        icon: <Icon fontSize="small">badge</Icon>,
        text: "Accounts",
        id: "accounts",
      },
      {
        icon: <Icon fontSize="small">campaign</Icon>,
        text: "Notifications",
        id: "noti",
      },
      {
        icon: <Icon fontSize="small">settings_applications</Icon>,
        text: "Sessions",
        id: "sessions",
      },
      {
        icon: <Icon fontSize="small">delete</Icon>,
        text: "Delete Account",
        id: "del_acc",
      },
    ],
    []
  );

  return (
    <MDBox position="relative" mb={5}>
      <Box sx={{ maxWidth: "350px" }}>
        <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
          <Tab label="Messages" />
          <Tab label="Social" />
          <Tab label="Notification" />
          <Tab label="Backup" />
        </Tabs>
      </Box>
      <MDBox mt={5} mb={3}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <SideSettingMenu items={menuItems} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Card
              sx={{
                position: "relative",
                mt: 2,
                mx: 3,
                py: 2,
                px: 2,
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item>
                  <MDAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" />
                </Grid>
                <Grid item>
                  <MDBox height="100%" mt={0.5} lineHeight={1}>
                    <MDTypography variant="h5" fontWeight="medium">
                      Richard Davis
                    </MDTypography>
                    <MDTypography variant="button" color="text" fontWeight="regular">
                      CEO / Co-Founder
                    </MDTypography>
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
                  <Box sx={{ display: "flex", alignItems: "center", lineHeight: 1 }}>
                    <Typography
                      component={"span"}
                      sx={{
                        margin: 0,

                        fontSize: "0.75rem",
                        lineHeight: "1.25",
                        letterSpacing: "0.03em",
                        opacity: 1,
                        textTransform: "none",
                        verticalAlign: "unset",
                        textDecoration: "none",
                        fontWeight: 400,
                      }}
                    >
                      Switch to {visible ? "in" : ""}visible
                    </Typography>
                    <Switch checked={visible} onChange={() => setVisible(!visible)} />
                  </Box>
                </Grid>
              </Grid>
            </Card>
            {children}
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// Setting default props for the SettingContent
SettingContent.defaultProps = {
  children: "",
};

// Typechecking props for the SettingContent
SettingContent.propTypes = {
  children: PropTypes.node,
};

export default SettingContent;
