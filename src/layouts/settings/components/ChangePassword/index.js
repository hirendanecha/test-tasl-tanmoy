import { Card, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import React from "react";

const ChangePassword = () => {
  return (
    <Card
      sx={{
        position: "relative",
        mt: 2,
        mx: 3,
        py: 2,
        px: 2,
      }}
    >
      <MDBox px={2} id="change_password">
        <MDTypography sx={{ py: 1 }} variant="h5" fontWeight="medium">
          Change Password
        </MDTypography>

        <MDBox component="form" role="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MDBox my={1}>
                <MDInput type="text" label="Current Password" variant="outlined" fullWidth shrink />
              </MDBox>
            </Grid>
            <Grid item xs={12}>
              <MDBox mb={1}>
                <MDInput type="text" label="New Password" variant="outlined" fullWidth shrink />
              </MDBox>
            </Grid>
            <Grid item xs={12}>
              <MDBox mb={1}>
                <MDInput
                  type="text"
                  label="Confirm New Password"
                  variant="outlined"
                  fullWidth
                  shrink
                />
              </MDBox>
            </Grid>
          </Grid>

          <MDBox mt={3}>
            <MDTypography sx={{ py: 1 }} variant="h5" fontWeight="medium">
              Password requirements
            </MDTypography>
          </MDBox>
          <MDBox>
            <MDTypography sx={{ py: 1 }} variant="h6" fontWeight="light">
              Please follow this guide for a strong password
            </MDTypography>
          </MDBox>
          <MDBox sx={{ display: "flex" }}>
            <MDBox ml={2}>
              <MDBox component="ul" sx={{ opacity: 0.7 }}>
                <MDBox component="li">
                  <MDTypography sx={{ fontSize: ".9rem" }} component="span">
                    One special characters
                  </MDTypography>
                </MDBox>
                <MDBox component="li">
                  <MDTypography sx={{ fontSize: ".9rem" }} component="span">
                    Min 6 characters
                  </MDTypography>
                </MDBox>
                <MDBox component="li">
                  <MDTypography sx={{ fontSize: ".9rem" }} component="span">
                    One number (2 are recommended)
                  </MDTypography>
                </MDBox>
                <MDBox component="li">
                  <MDTypography sx={{ fontSize: ".9rem" }} component="span">
                    Change it often
                  </MDTypography>
                </MDBox>
              </MDBox>
            </MDBox>
            <MDBox mt="auto" ml="auto">
              <MDButton variant="gradient" color="dark">
                Update Password
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default ChangePassword;
