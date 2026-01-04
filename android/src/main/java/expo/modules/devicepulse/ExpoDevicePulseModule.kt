package expo.modules.devicepulse

import android.content.Context
import android.os.BatteryManager
import android.os.Build
import android.os.Handler
import android.os.Looper
import android.os.SystemClock
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoDevicePulseModule : Module() {
  private val handler = Handler(Looper.getMainLooper())
  private val interval = 5000L

  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoDevicePulse')` in JavaScript.
    Name("ExpoDevicePulse")

    // Defines constant property on the module.
    Constants(
      "platformVersion" to Build.VERSION.RELEASE
    )

    // Defines event names that the module can send to JavaScript.
    Events("pulse")

    OnCreate {
      startPulse()
    }

    OnDestroy {
      handler.removeCallbacksAndMessages(null)
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("getDeviceStats") {
      val context = appContext.reactContext ?: return@AsyncFunction null

      val batteryManager = context.getSystemService(Context.BATTERY_SERVICE) as BatteryManager

      val battery = batteryManager.getIntProperty(
        BatteryManager.BATTERY_PROPERTY_CAPACITY
      )

      val uptime = SystemClock.elapsedRealtime() / 1000

      mapOf(
        "batteryLevel" to battery,
        "uptime" to uptime,
        "platform" to "android"
      )
    }
  }

  private fun startPulse() {
    val runnable = object : Runnable {
      override fun run() {
        sendEvent("pulse", mapOf("timestamp" to System.currentTimeMillis()))
        handler.postDelayed(this, interval)
      }
    }
    handler.post(runnable)
  }
}
