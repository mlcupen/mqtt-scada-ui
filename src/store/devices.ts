// src/store/devices.ts
// Store za upravljanje stanjima uređaja
// MAINTAINER: Mladen Čupen

import { create } from "zustand";

interface DeviceStore {
  devices: Record<string, any>;
  updateFromMqtt: (topic: string, payload: string) => void;
}

export const useDeviceStore = create<DeviceStore>((set) => ({
  devices: {},

  updateFromMqtt: (topic, payload) => {
    try {
      const parts = topic.split("/");
      if (parts.length < 2) return; // Topic not in expected format

      const deviceId = parts[1];
      const data = JSON.parse(payload);

      set((state) => ({
        devices: {
          ...state.devices,
          [deviceId]: {
            ...state.devices[deviceId], // Keep existing properties
            ...data, // Overlay new data from payload
            friendly_name: data.friendly_name || deviceId, // Use friendly_name from payload or deviceId
          },
        },
      }));
    } catch (error) {
      console.error("Failed to parse MQTT payload or update device store:", error);
      // Optionally, handle non-JSON messages or other errors
    }
  },
}));
