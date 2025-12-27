// Located at: mqtt-scada-ui/src/components/DeviceCard.tsx
// Card component for displaying device summary
// MAINTAINER: MLADEN čUPEN

import { Card, CardContent, Typography, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf, faBatteryFull, faWifi } from "@fortawesome/free-solid-svg-icons";
import hr from "../i18n/hr";

export default function DeviceCard({ id, data, onClick }: any) {
  return (
    <Card onClick={onClick} sx={{ cursor: "pointer", mb: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
          {data.friendly_name || id}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          <FontAwesomeIcon icon={faWifi} style={{ marginRight: 8 }} />
          <Typography variant="body2">
            {hr.device.state}: {data.state ? hr.device.on : hr.device.off}
          </Typography>
        </Box>
        {data.temperature !== undefined && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
            <FontAwesomeIcon icon={faTemperatureHalf} style={{ marginRight: 8 }} />
            <Typography variant="body2">
              {hr.device.temperature}: {data.temperature}°C
            </Typography>
          </Box>
        )}
        {data.battery !== undefined && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
            <FontAwesomeIcon icon={faBatteryFull} style={{ marginRight: 8 }} />
            <Typography variant="body2">
              {hr.device.battery}: {data.battery}%
            </Typography>
          </Box>
        )}
        {/* Add more device attributes here as needed */}
      </CardContent>
    </Card>
  );
}
