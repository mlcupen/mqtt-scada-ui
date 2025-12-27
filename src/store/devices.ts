// src/store/devices.ts
// Store za upravljanje stanjima uređaja
// MAINTAINER: Mladen Čupen

import { create } from "zustand";

export interface NormalizedDevice {
  id: string;
  state: Record<string, any>;
  availability?: "online" | "offline";
  meta?: Record<string, any>;
  lastUpdate: number;
}

interface DeviceStore {
  devices: Record<string, NormalizedDevice>;
  updateFromMqtt: (topic: string, payload: string) => void;
}

export const useDeviceStore = create<DeviceStore>((set) => ({
  devices: {},

  updateFromMqtt: (topic, payload) => {
    let data: any;

    try {
      data = JSON.parse(payload);
    } catch {
      return; // ignoriraj ne-JSON
    }

    const parts = topic.split("/");

    // očekujemo barem: base/device
    if (parts.length < 2) return;

    const base = parts[0];
    const deviceId = parts[1];
    const subTopic = parts[2]; // undefined | availability | set | ...

    // ignoriraj bridge i set
    if (deviceId === "bridge" || subTopic === "set") return;

    set((state) => {
      const existing = state.devices[deviceId] ?? {
        id: deviceId,
        state: {},
        lastUpdate: Date.now(),
      };

      // availability poruka
      if (subTopic === "availability") {
        return {
          devices: {
            ...state.devices,
            [deviceId]: {
              ...existing,
              availability: data.state,
              lastUpdate: Date.now(),
            },
          },
        };
      }

      // normalna state poruka
      const { device, ...cleanState } = data;

      return {
        devices: {
          ...state.devices,
          [deviceId]: {
            ...existing,
            state: {
              ...existing.state,
              ...cleanState,
            },
            meta: device ?? existing.meta,
            lastUpdate: Date.now(),
          },
        },
      };
    });
  },
}));
