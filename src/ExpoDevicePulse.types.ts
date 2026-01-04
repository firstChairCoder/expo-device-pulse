export type DeviceStats = {
  batteryLevel: number;
  uptime: number;
  platform: 'ios' | 'android';
};

export type PulseEvent = {
  timestamp: number;
};
