import { addPulseListener, getDeviceStats, PLATFORM_VERSION } from 'expo-device-pulse';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [stats, setStats] = useState<any>(null);
  const [pulse, setPulse] = useState<number>(0);

  useEffect(() => {
    getDeviceStats().then(setStats);

    const sub = addPulseListener(event => {
      setPulse(event.timestamp);
    });

    return () => sub.remove();
  }, []);



  return (
   <View style={styles.container}>
      <Text style={styles.title}>📡 DevicePulse</Text>

      {stats && (
        <>
          <Text>Battery: {stats.batteryLevel}%</Text>
          <Text>Uptime: {stats.uptime}s</Text>
          <Text>Platform: {stats.platform}</Text>
          <Text>OS Version: {PLATFORM_VERSION}</Text>
        </>
      )}

      <Text style={styles.pulse}>
        Last Pulse: {new Date(pulse).toLocaleTimeString()}
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  pulse: {
    marginTop: 20,
    fontWeight: 'bold'
  }
});
