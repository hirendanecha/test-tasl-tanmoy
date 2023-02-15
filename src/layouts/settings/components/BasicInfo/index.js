import { Autocomplete, Card, Grid, MenuItem } from "@mui/material";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import React, { useMemo } from "react";

const BasicInfo = () => {
  const genders = useMemo(
    () => [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "Female",
      },
    ],
    []
  );
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
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
      <MDBox px={2} id="basic_info">
        <MDTypography sx={{ py: 1 }} variant="h5" fontWeight="medium">
          Basic Info
        </MDTypography>

        <MDBox component="form" role="form">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} xl={6}>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="First Name"
                  variant="standard"
                  placeholder="Alec"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Last Name"
                  variant="standard"
                  placeholder="Thomson"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <MDBox mb={2}>
                <Autocomplete
                  disablePortal
                  options={genders}
                  defaultValue="Male"
                  placeholder="Thomson"
                  fullWidth
                  renderInput={(params) => (
                    <MDInput
                      {...params}
                      variant="standard"
                      label="I'm"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <MDBox mb={2}>
                <Autocomplete
                  disablePortal
                  options={[...Array(12).keys()].map((i) => ({
                    label: monthNames[i],
                    value: i + 1,
                  }))}
                  fullWidth
                  renderInput={(params) => (
                    <MDInput
                      {...params}
                      variant="standard"
                      label="Birth Date"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={4} xl={2}>
              <MDBox mb={2}>
                <Autocomplete
                  disablePortal
                  options={[...Array(30).keys()].map((i) => ({
                    label: i + 1,
                    value: i + 1,
                  }))}
                  defaultValue=""
                  fullWidth
                  renderInput={(params) => <MDInput {...params} variant="standard" label=" " />}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={4} xl={2}>
              <MDBox mb={2}>
                <Autocomplete
                  disablePortal
                  options={[...Array(53).keys()].map((i) => ({
                    label: i + 1970,
                    value: i + 1970,
                  }))}
                  defaultValue=""
                  fullWidth
                  renderInput={(params) => <MDInput {...params} variant="standard" label=" " />}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <MDBox mb={2}>
                <MDInput
                  type="email"
                  label="Email"
                  variant="standard"
                  placeholder="example@email.com"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <MDBox mb={2}>
                <MDInput
                  type="email"
                  label="confirmation email"
                  variant="standard"
                  placeholder="example@email.com"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="your location"
                  variant="standard"
                  placeholder="Sydney, AUS"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <MDBox mb={2}>
                <MDInput
                  type="number"
                  label="Phone Number"
                  variant="standard"
                  placeholder="+40 123 123 123"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Language"
                  variant="standard"
                  placeholder="English"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <MDBox mb={2}>
                <Autocomplete
                  multiple
                  options={["react", "angular", "vue", "javascript", "vite"].map((i) => ({
                    label: i,
                    value: i,
                  }))}
                  defaultValue={["react", "angular"]}
                  fullWidth
                  renderInput={(params) => <MDInput {...params} label=" " variant="standard" />}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default BasicInfo;
