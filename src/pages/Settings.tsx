// Located at: mqtt-scada-ui/src/pages/Settings.tsx
// Settings page
// MAINTAINER: MLADEN čUPEN

import { Typography, Box } from "@mui/material";
import hr from "../i18n/hr";

export default function Settings() {
  return (
    <Box>
      <Typography variant="h4">{hr.menu.settings}</Typography>
      <Typography variant="body1">
        {hr.settings.description}
      </Typography>
      {/* Settings content will go here */}
    </Box>
  );
}
