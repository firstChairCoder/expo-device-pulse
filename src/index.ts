import { requireNativeModule } from 'expo-modules-core';
import type { DeviceStats, PulseEvent } from './ExpoDevicePulse.types';

const DevicePulseModule = requireNativeModule('ExpoDevicePulse');

// deprecated
// const emitter = new EventEmitter(DevicePulseModule);

export function getDeviceStats(): Promise<DeviceStats> {
  return DevicePulseModule.getDeviceStats();
}

export function addPulseListener(
  listener: (event: PulseEvent) => void
): { remove(): void } {
  return DevicePulseModule.addListener('pulse', listener);
}

export const PLATFORM_VERSION: string =
  DevicePulseModule.platformVersion;

