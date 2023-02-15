import React from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Overview page components
import SettingContent from "./components/SettingContent";
import BasicInfo from "./components/BasicInfo";
import ChangePassword from "./components/ChangePassword";

const Settings = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <SettingContent>
        <BasicInfo />
        <ChangePassword />
      </SettingContent>
      <Footer />
    </DashboardLayout>
  );
};

export default Settings;
