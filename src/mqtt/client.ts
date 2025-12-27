import mqtt from "mqtt";
import { useDeviceStore } from "../store/devices";

const client = mqtt.connect("ws://192.168.88.133:9001");

client.on("connect", () => {
  console.log("MQTT povezan");
  client.subscribe("zigbeekordinatormqtt/#");
});

client.on("message", (topic, payload) => {
  console.log("MQTT:", topic, payload.toString());
  useDeviceStore.getState().updateFromMqtt(topic, payload.toString());
});

export default client;
