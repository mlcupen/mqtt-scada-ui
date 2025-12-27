// Located at: mqtt-scada-ui/src/pages/Dashboard.tsx
// Dashboard page displaying a grid of device cards
// MAINTAINER: MLADEN čUPEN

import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDeviceStore } from "../store/devices";
import DeviceCard from "../components/DeviceCard";

export default function Dashboard() {
  const devices = useDeviceStore((s) => s.devices);
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/device/${id}`);
  };

  return (
    <Grid container spacing={2}>
      {Object.entries(devices).map(([id, data]) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
          <DeviceCard id={id} data={data} onClick={() => handleCardClick(id)} />
        </Grid>
      ))}
    </Grid>
  );
}
