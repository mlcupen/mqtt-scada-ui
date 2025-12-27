// Located at: mqtt-scada-ui/src/pages/Logs.tsx
// Logs page
// MAINTAINER: MLADEN čUPEN

import { Typography, Box } from "@mui/material";
import hr from "../i18n/hr";

export default function Logs() {
  return (
    <Box>
      <Typography variant="h4">{hr.menu.logs}</Typography>
      <Typography variant="body1">
        {hr.logs.description}
      </Typography>
      {/* Logs content will go here */}
    </Box>
  );
}
