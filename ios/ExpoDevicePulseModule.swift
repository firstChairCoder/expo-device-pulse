import ExpoModulesCore
import UIKit

public class ExpoDevicePulseModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  private var timer: Timer?

  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoDevicePulse')` in JavaScript.
    Name("ExpoDevicePulse")

    // Defines constant property on the module.
    Constants([
      "platformVersion": UIDevice.current.systemVersion
    ])

    // Defines event names that the module can send to JavaScript.
    Events("pulse")

    OnCreate {
      UIDevice.current.isBatteryMonitoringEnabled = true
      startPulse()
    }

    OnDestroy {
      timer?.invalidate()
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("getDeviceStats") { () -> [String: Any] in 
      let battery = UIDevice.current.batteryLevel
      let uptime = ProcessInfo.processInfo.systemUptime
      
      return [
        "batteryLevel": Int(battery * 100),
        "uptime": uptime,
        "platform": "ios"
      ]
    }
  }

  private func startPulse() {
    timer = Timer.scheduledTimer(withTimeInterval: 5.0, repeats: true) { [weak self] _ in
      self?.sendEvent("pulse", [
        "timestamp": Date().timeIntervalSince1970 * 1000
      ])
    }
  }
}
