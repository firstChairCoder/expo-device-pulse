// Reexport the native module. On web, it will be resolved to ExpoDevicePulseModule.web.ts
// and on native platforms to ExpoDevicePulseModule.ts
export { default } from './ExpoDevicePulseModule';
export { default as ExpoDevicePulseView } from './ExpoDevicePulseView';
export * from  './ExpoDevicePulse.types';
