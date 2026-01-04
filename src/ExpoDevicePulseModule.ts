import { NativeModule, requireNativeModule } from 'expo';

import { ExpoDevicePulseModuleEvents } from './ExpoDevicePulse.types';

declare class ExpoDevicePulseModule extends NativeModule<ExpoDevicePulseModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoDevicePulseModule>('ExpoDevicePulse');
