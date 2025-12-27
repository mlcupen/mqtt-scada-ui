// Located at: mqtt-scada-ui/src/components/DeviceDialog.tsx
// Dialog component for displaying device information
// MAINTAINER: MLADEN čUPEN

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Switch,
  FormControlLabel,
  Button,
} from "@mui/material";
import hr from "../i18n/hr";
import mqttClient from "../mqtt/client";

export default function DeviceDialog({ open, onClose, deviceId, data }: any) {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    mqttClient.publish(
      `zigbeekordinatormqtt/${deviceId}/set`,
      JSON.stringify({ state: event.target.checked })
    );
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{deviceId}</DialogTitle>
      <DialogContent>
        <FormControlLabel
          control={
            <Switch checked={!!data.state} onChange={handleToggle} />
          }
          label={hr.device.state}
        />

        <pre>{JSON.stringify(data, null, 2)}</pre>

        <Button onClick={onClose}>{hr.actions.close}</Button>
      </DialogContent>
    </Dialog>
  );
}
