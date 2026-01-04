import { registerWebModule, NativeModule } from 'expo';

import { ExpoDevicePulseModuleEvents } from './ExpoDevicePulse.types';

class ExpoDevicePulseModule extends NativeModule<ExpoDevicePulseModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoDevicePulseModule, 'ExpoDevicePulseModule');
