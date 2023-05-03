import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Link,
  Avatar,
  Typography,
  TextField,
  Toolbar,
  Box,
  Autocomplete,
  Stack,
  FormControl,
  MenuItem,
  Select,
  ExtendButtonBase,
  IconButtonTypeMap,
} from "@mui/material";

import {
  SearchOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  Menu,
} from "@mui/icons-material";

const HamburgerIcon: ExtendButtonBase<IconButtonTypeMap<{}, "button">> = (
  props: React.PropsWithChildren
) => (
  <IconButton color="inherit" aria-label="open drawer" edge="start" {...props}>
    <Menu />
  </IconButton>
);

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];

const Navigation: React.FC = () => {
  return (
    <Fragment>
      <AppBar color="default" position="sticky" elevation={1}>
        <Toolbar
          sx={{
            paddingLeft: {
              sm: "24px",
              md: "24px",
            },
          }}
        >
          <HamburgerIcon />

          <Stack
            direction="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" flex={1}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Movie" />
                )}
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <IconButton
                onClick={() => {
                  console.log("set dark or light mode");
                }}
              >
                {/* {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />} */}
                <DarkModeOutlined />
              </IconButton>
              <Stack
                direction="row"
                gap="4px"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="subtitle2">Tomas Escamez</Typography>
                <Avatar src="https://i.pravatar.cc/150" alt="Tomas Escamez" />
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
