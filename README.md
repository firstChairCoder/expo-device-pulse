# 📦 Module Name
**expo-device-pulse**

---

# 🧠 Architecture Overview

**JS/TS** &nbsp;&nbsp;&nbsp;&nbsp;↓  
**ExpoModulesCore (JSI-backed)** &nbsp;&nbsp;&nbsp;&nbsp;↓  
**Swift (iOS) / Kotlin (Android)**

### Key differences vs old bridge

| Feature | Old Bridge | Expo Modules |
| :--- | :--- | :--- |
| **Access** | `NativeModules` | `requireNativeModule()` |
| **Communication** | Async bridge | JSI sync + async |
| **Registration** | Manual registration | Auto-registered |
| **Complexity** | Boilerplate-heavy | Minimal |

---

### Module Structure

```text
expo-device-pulse/
├── android/
│   └── DevicePulseModule.kt
├── ios/
│   └── DevicePulseModule.swift
├── src/
│   ├── index.ts
│   └── DevicePulse.types.ts
