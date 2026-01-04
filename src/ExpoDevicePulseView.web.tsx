import * as React from 'react';

import { ExpoDevicePulseViewProps } from './ExpoDevicePulse.types';

export default function ExpoDevicePulseView(props: ExpoDevicePulseViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
