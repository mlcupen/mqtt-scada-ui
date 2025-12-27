// Located at: mqtt-scada-ui/src/pages/DevicePage.tsx
// Device details page
// MAINTAINER: MLADEN čUPEN

import { useParams } from "react-router-dom";
import { Typography, Box, Paper } from "@mui/material";
import { useDeviceStore } from "../store/devices";
import hr from "../i18n/hr";

export default function DevicePage() {
  const { id } = useParams<{ id: string }>();
  const device = useDeviceStore((state) => state.devices[id || ""]);

  if (!device) {
    return (
      <Box>
        <Typography variant="h4">{hr.device.notFound}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {device.friendly_name || id}
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">{hr.device.details}</Typography>
        <pre>{JSON.stringify(device, null, 2)}</pre>
        {/* More detailed device controls and information will go here */}
      </Paper>
    </Box>
  );
}
