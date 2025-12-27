import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import hr from "../i18n/hr";

interface NavBarProps {
  onSidebarToggle: () => void;
}

export default function NavBar({ onSidebarToggle }: NavBarProps) {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onSidebarToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {hr.app.title}
        </Typography>
        {/* Placeholder for other NavBar elements like LanguageSwitcher, ThemeSwitcher, Notifications */}
        <Box sx={{ flexGrow: 1 }} />
        {/* <LanguageSwitcher /> */}
        {/* <ThemeSwitcher /> */}
        {/* <Notifications /> */}
      </Toolbar>
    </AppBar>
  );
}
