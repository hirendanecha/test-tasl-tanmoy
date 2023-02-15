import {
  Box,
  Card,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MDBox from "components/MDBox";
import React from "react";

const SideSettingMenu = ({ items = [] }) => {
  return (
    <MDBox mb={5} sx={{ position: "sticky", top: "11%" }}>
      <Card
        sx={{
          position: "relative",
          mt: 2,
          p: 2,
          opacity: 0.9,
        }}
      >
        <List sx={{ opacity: 1 }}>
          {items.map((item, idx) => (
            <ListItem key={idx + "_idx_" + item?.id}>
              <ListItemButton href={`#${item.id}`} component={Link}>
                <Box alignItems={"center"} mr={1}>
                  {item?.icon}
                </Box>
                <Typography sx={{ fontSize: "0.9rem" }} component="span">
                  {item?.text}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </MDBox>
  );
};

export default SideSettingMenu;
