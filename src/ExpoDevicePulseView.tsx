import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoDevicePulseViewProps } from './ExpoDevicePulse.types';

const NativeView: React.ComponentType<ExpoDevicePulseViewProps> =
  requireNativeView('ExpoDevicePulse');

export default function ExpoDevicePulseView(props: ExpoDevicePulseViewProps) {
  return <NativeView {...props} />;
}
