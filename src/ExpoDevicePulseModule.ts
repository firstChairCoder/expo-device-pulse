import { NativeModule, requireNativeModule } from 'expo';

import { DeviceStats } from './ExpoDevicePulse.types';

declare class ExpoDevicePulseModule extends NativeModule {
  platformVersion: string;
  getDeviceStats(): Promise<DeviceStats>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoDevicePulseModule>('ExpoDevicePulse');
