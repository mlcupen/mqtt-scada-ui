// Layout.tsx
// Importing Croatian translations
// for use in the layout component
// Located at: mqtt-scada-ui/src/Layout.tsx
// MAINTAINER: MLADEN čUPEN

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Drawer, List, ListItemButton, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faList, faCogs } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Logs from "../pages/Logs";
import DevicePage from "../pages/DevicePage"; // Import DevicePage
import NavBar from "./NavBar";
import hr from "../i18n/hr";

const drawerWidth = 220;

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItemButton component={NavLink} to="/" onClick={handleDrawerToggle}
          sx={{
            "&.active": {
              backgroundColor: (theme: Theme) => theme.palette.action.selected,
            },
          }}
        >
          <FontAwesomeIcon icon={faTableColumns} style={{ marginRight: 16 }} />
          <Typography variant="body2">{hr.menu.dashboard}</Typography>
        </ListItemButton>
        <ListItemButton component={NavLink} to="/logs" onClick={handleDrawerToggle}
          sx={{
            "&.active": {
              backgroundColor: (theme: Theme) => theme.palette.action.selected,
            },
          }}
        >
          <FontAwesomeIcon icon={faList} style={{ marginRight: 16 }} />
          <Typography variant="body2">{hr.menu.logs}</Typography>
        </ListItemButton>
        <ListItemButton component={NavLink} to="/settings" onClick={handleDrawerToggle}
          sx={{
            "&.active": {
              backgroundColor: (theme: Theme) => theme.palette.action.selected,
            },
          }}
        >
          <FontAwesomeIcon icon={faCogs} style={{ marginRight: 16 }} />
          <Typography variant="body2">{hr.menu.settings} 🔒</Typography>
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar onSidebarToggle={handleDrawerToggle} />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
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
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/device/:id" element={<DevicePage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
