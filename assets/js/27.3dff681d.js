(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{461:function(e,i,a){"use strict";a.r(i);var l=a(25),o=Object(l.a)({},(function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"explaining-the-patches-in-opencore-legacy-patcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explaining-the-patches-in-opencore-legacy-patcher"}},[e._v("#")]),e._v(" Explaining the patches in OpenCore Legacy Patcher")]),e._v(" "),a("p",[e._v("In our patcher, there are numerous patches used to ensure a stable system. Here, we're going to go over what patches are used and why we recommend or even require them.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#opencore-settings"}},[e._v("OpenCore Settings")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#injected-kexts"}},[e._v("Injected Kexts")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#on-disk-patches"}},[e._v("On-Disk Patches")])])]),e._v(" "),a("h2",{attrs:{id:"opencore-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opencore-settings"}},[e._v("#")]),e._v(" OpenCore Settings")]),e._v(" "),a("p",[e._v("Below is a rundown of the main logic that OpenCore Legacy Patcher uses to gain native support in macOS. Note that OpenCore's configuration is documented within "),a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg"),a("OutboundLink")],1),e._v(" as well as on an online version provided by us:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://dortania.github.io/docs/latest/Configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg Online Docs"),a("OutboundLink")],1)])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Configuration Explanation")]),e._v(" "),a("h3",{attrs:{id:"acpi-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acpi-add"}},[e._v("#")]),e._v(" ACPI -> Add")]),e._v(" "),a("ul",[a("li",[e._v("SSDT-CPBG\n"),a("ul",[a("li",[e._v("Reason: Resolves Kernel Panic on Arrandale Macs in early Big Sur builds")]),e._v(" "),a("li",[e._v("Logic: Disable dummy CPBG device in ACPI")]),e._v(" "),a("li",[e._v("Models: MacBookPro6,x and iMac11,x")])])]),e._v(" "),a("li",[e._v("SSDT-PCI\n"),a("ul",[a("li",[e._v("Reason: Patch Windows Audio support for Sandy and Ivy Bridge")]),e._v(" "),a("li",[e._v("Logic: Removes PCI0's 32-bit Allocation Limitation")]),e._v(" "),a("li",[e._v("Models: All Sandy and Ivy Bridge Macs, excluding MacPro6,1")])])]),e._v(" "),a("li",[e._v("SSDT-DGPU\n"),a("ul",[a("li",[e._v("Reason: Allows for software based deMUX disabling dGPUs in 2011 MacBook Pros")]),e._v(" "),a("li",[e._v("Logic: Sends power down request to dGPU via ACPI")]),e._v(" "),a("li",[e._v("Models: MacBookPro8,2 and MacBookPro8,3 with dead dGPUs")])])])]),e._v(" "),a("h3",{attrs:{id:"acpi-patch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acpi-patch"}},[e._v("#")]),e._v(" ACPI -> Patch")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("EHCx")]),e._v(" and "),a("code",[e._v("XHC1")]),e._v(" Patches\n"),a("ul",[a("li",[e._v("Reason: Required for proper USB operation")]),e._v(" "),a("li",[e._v("Logic: Avoids USB maps of newer models attaching and breaking USB port functionality")]),e._v(" "),a("li",[e._v("Models: All models require when spoofing with Moderate or Advanced SMBIOS")])])]),e._v(" "),a("li",[a("code",[e._v("BUF0")]),e._v(" to "),a("code",[e._v("BUF1")]),e._v(" Patch\n"),a("ul",[a("li",[e._v("Reason: To be paired with SSDT-PCI")])])]),e._v(" "),a("li",[a("code",[e._v("_INI")]),e._v(" to "),a("code",[e._v("XINI")]),e._v(" Patch\n"),a("ul",[a("li",[e._v("Reason: To be paired with SSDT-DGPU")])])])]),e._v(" "),a("h3",{attrs:{id:"booter-patch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#booter-patch"}},[e._v("#")]),e._v(" Booter -> Patch")]),e._v(" "),a("ul",[a("li",[e._v("Reroute "),a("code",[e._v("HW_BID")]),e._v(" to "),a("code",[e._v("OC_BID")]),e._v(" "),a("ul",[a("li",[e._v("Reason: Allows macOS installers to be used on unsupported models")]),e._v(" "),a("li",[e._v("Logic: Reroutes Board ID macOS checks to custom variable")]),e._v(" "),a("li",[e._v("Models: All systems using VMM spoofing")])])])]),e._v(" "),a("h3",{attrs:{id:"booter-quirks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#booter-quirks"}},[e._v("#")]),e._v(" Booter -> Quirks")]),e._v(" "),a("ul",[a("li",[e._v("ForceBooterSignature\n"),a("ul",[a("li",[e._v("Reason: Required to ensure Hibernation support")]),e._v(" "),a("li",[e._v("Logic: Tricks boot.efi into thinking OpenCore is Apple's firmware")]),e._v(" "),a("li",[e._v("Models: All models require")])])])]),e._v(" "),a("h3",{attrs:{id:"deviceproperties-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deviceproperties-add"}},[e._v("#")]),e._v(" DeviceProperties -> Add")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("PciRoot(0x0)/Pci(0x3,0x0)/Pci(0x0,0x0)")])]),e._v(" "),a("li",[a("code",[e._v("PciRoot(0x0)/Pci(0x1,0x0)/Pci(0x0,0x0)")]),e._v(" "),a("ul",[a("li",[e._v("Reason: Required to ensure Brightness Control works on upgraded iMacs")]),e._v(" "),a("li",[e._v("Logic: Sets AppleBackLight properties")]),e._v(" "),a("li",[e._v("Models: iMac11,x and iMac12,x with upgraded NVIDIA Metal GPUs")])])]),e._v(" "),a("li",[a("code",[e._v("PciRoot(0x0)/Pci(0x2,0x0)")]),e._v(" "),a("ul",[a("li",[e._v("Reason: Disables internal GPU to fix sleep issues on upgraded iMacs")]),e._v(" "),a("li",[e._v("Logic: Tricks macOS into thinking iGPU is a generic PCI device")]),e._v(" "),a("li",[e._v("Models: iMac12,x with upgraded Metal GPUs")])])])]),e._v(" "),a("h3",{attrs:{id:"kernel-patch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kernel-patch"}},[e._v("#")]),e._v(" Kernel -> Patch")]),e._v(" "),a("ul",[a("li",[e._v("SMC Patch\n"),a("ul",[a("li",[e._v("Reason: Required to avoid SMC Firmware updates")]),e._v(" "),a("li",[e._v("Logic: Patches out "),a("code",[e._v("smc-version")]),e._v(" in AppleSMC.kext, requires SMC-Spoof.kext for full functionality")]),e._v(" "),a("li",[e._v("Models: All models require when spoofing SMBIOS")])])]),e._v(" "),a("li",[e._v("IOHIDFamily Patch\n"),a("ul",[a("li",[e._v("Reason: Required for HID peripheral support in macOS on older hardware")]),e._v(" "),a("li",[e._v("Logic: Tricks IOHIDFamily into thinking it's always booting recovery")]),e._v(" "),a("li",[e._v("Models: Penryn CPUs (Core2 series)")])])]),e._v(" "),a("li",[e._v("Force FileVault on Broken Seal Patch\n"),a("ul",[a("li",[e._v("Reason: Allow FileVault on root patched Macs")]),e._v(" "),a("li",[e._v("Logic: Forces APFS.kext to always return true on FileVault support")]),e._v(" "),a("li",[e._v("Models: Any model needing root patches")])])]),e._v(" "),a("li",[e._v("Disable Library Validation Enforcement Patch\n"),a("ul",[a("li",[e._v("Reason: non-Metal Root Volume Patches do not pass library validation tests")]),e._v(" "),a("li",[e._v("Logic: Forces Library Validation function to always return not required")]),e._v(" "),a("li",[e._v("Models: Non-Metal GPUs")])])]),e._v(" "),a("li",[e._v("SurPlus Patch\n"),a("ul",[a("li",[e._v("Reason: macOS 11.3-12.0.1 require systems to have RDRAND support in the CPU for stable boot")]),e._v(" "),a("li",[e._v("Logic: Forces RDRAND code to return predetermined value")]),e._v(" "),a("li",[e._v("Models: All pre-Ivy Bridge Macs")])])]),e._v(" "),a("li",[e._v("Reroute "),a("code",[e._v("kern.hv_vmm_present")]),e._v(" Patch\n"),a("ul",[a("li",[e._v("Reason: Allows macOS to be installed and updated on unsupported hardware")]),e._v(" "),a("li",[e._v("Logic: Forces userspace to see system as Virtual Machine")]),e._v(" "),a("li",[e._v("Models: Any model using VMM spoofing")])])])]),e._v(" "),a("h3",{attrs:{id:"kernel-quirks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kernel-quirks"}},[e._v("#")]),e._v(" Kernel -> Quirks")]),e._v(" "),a("ul",[a("li",[e._v("ThirdPartyDrives\n"),a("ul",[a("li",[e._v("Reason: Required to avoid Hibernation wake issues on 3rd party drives")]),e._v(" "),a("li",[e._v("Logic: Patches AppleAHCIPort.kext into support")]),e._v(" "),a("li",[e._v("Models: All models with standard SATA ports")])])]),e._v(" "),a("li",[e._v("PanicNoKextDump\n"),a("ul",[a("li",[e._v("Reason: Avoids kext dump on kernel panics, easier kernel debugging")]),e._v(" "),a("li",[e._v("Logic: Patches Kernel to not dump dump unnecessary info")]),e._v(" "),a("li",[e._v("Models: Only set when Verbose Boot is enabled by the user")])])])]),e._v(" "),a("h3",{attrs:{id:"misc-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#misc-security"}},[e._v("#")]),e._v(" Misc -> Security")]),e._v(" "),a("ul",[a("li",[e._v("SecureBootModel\n"),a("ul",[a("li",[e._v("Reason: Required to allow native OS updates on T2 model spoofs")]),e._v(" "),a("li",[e._v("Logic: Sets T2's Secure Enclave Identifier")]),e._v(" "),a("li",[e._v("Models: All models required that spoof T2 model with minimal or higher")])])])]),e._v(" "),a("h3",{attrs:{id:"nvram-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvram-add"}},[e._v("#")]),e._v(" NVRAM -> Add")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-v keepsyms=1 debug=0x100")]),e._v(" "),a("ul",[a("li",[e._v("Reason: Used to see debug info of macOS's kernel and kexts, and avoids reboots on panic")]),e._v(" "),a("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),a("li",[e._v("Models: Only set when Verbose Boot is enabled by the user")])])]),e._v(" "),a("li",[a("code",[e._v("-liludbgall")]),e._v(" "),a("ul",[a("li",[e._v("Reason: Enables Lilu and plugin debug logging")]),e._v(" "),a("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),a("li",[e._v("Models: Only set when Kext DEBUG is enabled by the user")])])]),e._v(" "),a("li",[a("code",[e._v("msgbuf=1048576")]),e._v(" "),a("ul",[a("li",[e._v("Reason: Sets message buffer size to 1MB, ensures boot logs are retained")]),e._v(" "),a("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),a("li",[e._v("Models: Only set when Kext DEBUG is enabled by the user")])])]),e._v(" "),a("li",[a("code",[e._v("agdpmod=pikera")]),e._v(" "),a("ul",[a("li",[e._v("Reason: Fixes GPU switching on MacBookPro9,x")]),e._v(" "),a("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),a("li",[e._v("Models: MacBookPro9,x")])])]),e._v(" "),a("li",[a("code",[e._v("shikigva=80 unfairgva=1")])]),e._v(" "),a("li",[a("code",[e._v("shikigva=128 unfairgva=1 -wegtree")]),e._v(" "),a("ul",[a("li",[e._v("Reason: Fixes DRM support on models with upgraded AMD Metal GPUs")]),e._v(" "),a("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),a("li",[e._v("Models: Models with upgraded AMD Metal GPUs")])])]),e._v(" "),a("li",[a("code",[e._v("-revasset")]),e._v(" "),a("ul",[a("li",[e._v("Reason: Enables Content Caching when using VMM spoofing")]),e._v(" "),a("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),a("li",[e._v("Models: Any model using VMM spoofing")])])])]),e._v(" "),a("h3",{attrs:{id:"uefi-protocoloverrides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uefi-protocoloverrides"}},[e._v("#")]),e._v(" UEFI -> ProtocolOverrides")]),e._v(" "),a("ul",[a("li",[e._v("GopPassThrough\n"),a("ul",[a("li",[e._v("Reason: Used for proper output on machines with UGA firmware but GOP GPU")]),e._v(" "),a("li",[e._v("Logic: Provide GOP protocol instances on top of UGA protocol instances")]),e._v(" "),a("li",[e._v("Models: MacPro3,1, MacBook4,1 iMac7,1-8,1")])])])])]),e._v(" "),a("h2",{attrs:{id:"injected-kext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#injected-kext"}},[e._v("#")]),e._v(" Injected Kext")]),e._v(" "),a("p",[e._v("Below is an explanation of what Kexts OpenCore Legacy Patcher will inject into memory on boot-up.")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Injected Kext Explanation")]),e._v(" "),a("h3",{attrs:{id:"acidanthera"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acidanthera"}},[e._v("#")]),e._v(" Acidanthera")]),e._v(" "),a("ul",[a("li",[e._v("Lilu\n"),a("ul",[a("li",[e._v("Reason: Patching engine for other kexts")]),e._v(" "),a("li",[e._v("Models: All models require")])])]),e._v(" "),a("li",[e._v("WhateverGreen\n"),a("ul",[a("li",[e._v("Reason: Patches GPU Frameworks and kext to ensure proper support")]),e._v(" "),a("li",[e._v("Models: All models require when spoofing or have non-stock GPU")])])]),e._v(" "),a("li",[e._v("CPUFriend\n"),a("ul",[a("li",[e._v("Reason: Patches IOx86PlatformPlugin to restore previous CPU profiles")]),e._v(" "),a("li",[e._v("Models: All models using minimal or higher spoofing")])])]),e._v(" "),a("li",[e._v("AirportBrcmFixup\n"),a("ul",[a("li",[e._v("Reason: Patches IO80211 and co to fix networking support for unsupported cards, and fix bugs on native ones as well (ie. random degraded network performance)")]),e._v(" "),a("li",[e._v("Models: BCM943224, BCM94331, BCM94360 and BCM943602")])])]),e._v(" "),a("li",[e._v("BlueToolFixup\n"),a("ul",[a("li",[e._v("Reason: Patches BlueTool to enable bluetooth functionality on Monterey")]),e._v(" "),a("li",[e._v("Models: All models with pre-BCM94360 wireless cards or 3rd-party chipsets")])])]),e._v(" "),a("li",[e._v("Bluetooth-Spoof\n"),a("ul",[a("li",[e._v("Reason: Injects extra data into certain bluetooth chipsets for recognition by the system")]),e._v(" "),a("li",[e._v("Models: Models with the BCM2070 or BCM2046 chipsets")])])]),e._v(" "),a("li",[e._v("FeatureUnlock (Night Shift)\n"),a("ul",[a("li",[e._v("Reason: Patches CoreBrightness.framework to enable Night Shift on unsupported models")]),e._v(" "),a("li",[e._v("Models: 2011 or older")])])]),e._v(" "),a("li",[e._v("FeatureUnlock (Sidecar/AirPlay)\n"),a("ul",[a("li",[e._v("Reason: Patches SidecarCore.framework and AirPlaySupport.framework to enable Sidecar and AirPlay to Mac on unsupported models")]),e._v(" "),a("li",[e._v("Models: All models with Metal capable GPUs")])])]),e._v(" "),a("li",[e._v("RestrictEvents\n"),a("ul",[a("li",[e._v("Reason: Disables memory errors on MacPro7,1")]),e._v(" "),a("li",[e._v("Models: Mac Pros and Xserves")])])])]),e._v(" "),a("h3",{attrs:{id:"ethernet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethernet"}},[e._v("#")]),e._v(" Ethernet")]),e._v(" "),a("ul",[a("li",[e._v("nForceEthernet\n"),a("ul",[a("li",[e._v("Reason: Inject old NVIDIA Ethernet kext to resolve networking in Catalina and newer")]),e._v(" "),a("li",[e._v("Models: 2010 and older NVIDIA Ethernet require")])])]),e._v(" "),a("li",[e._v("MarvelYukonEthernet\n"),a("ul",[a("li",[e._v("Reason: Inject old Marvel Ethernet kext to resolve networking in Catalina and newer")]),e._v(" "),a("li",[e._v("Models: 2008 and older Marvel Ethernet require")])])]),e._v(" "),a("li",[e._v("CatalinaBCM5701Ethernet\n"),a("ul",[a("li",[e._v("Reason: Inject old Broadcom Ethernet kext to resolve networking in Big Sur")]),e._v(" "),a("li",[e._v("Logic: Patch out conflicting symbols to not collide existing BCM5701Ethernet")]),e._v(" "),a("li",[e._v("Models: 2011 and older Broadcom Ethernet require")])])])]),e._v(" "),a("h3",{attrs:{id:"maps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maps"}},[e._v("#")]),e._v(" Maps")]),e._v(" "),a("ul",[a("li",[e._v("USBMap\n"),a("ul",[a("li",[e._v("Reason: Inject old USB map profiles to fix USB")]),e._v(" "),a("li",[e._v("Models: All models require when spoofing moderate or higher, as well as pre-2012 models")])])])]),e._v(" "),a("h3",{attrs:{id:"sse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sse"}},[e._v("#")]),e._v(" SSE")]),e._v(" "),a("ul",[a("li",[e._v("AAMouSSE\n"),a("ul",[a("li",[e._v("Reason: Translates SSE4.2 instructions to compatible code for SSE4,1 CPUs, required for AMD Metal drives")]),e._v(" "),a("li",[e._v("Models: MacPro3,1")])])]),e._v(" "),a("li",[e._v("telemetrap\n"),a("ul",[a("li",[e._v("Reason: Ensures telemetry.plugin doesn't run, required for SSE4,1 CPUs")]),e._v(" "),a("li",[e._v("Models: Penryn CPUs")])])])]),e._v(" "),a("h3",{attrs:{id:"wifi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wifi"}},[e._v("#")]),e._v(" Wifi")]),e._v(" "),a("ul",[a("li",[e._v("IO80211HighSierra\n"),a("ul",[a("li",[e._v("Reason: Re-inject Atheros wifi drivers from High Sierra")]),e._v(" "),a("li",[e._v("Logic: Patch out conflicting symbols to not collide existing IO80211Family")]),e._v(" "),a("li",[e._v("Models: Atheros cards")])])]),e._v(" "),a("li",[e._v("IO80211Mojave\n"),a("ul",[a("li",[e._v("Reason: Re-inject Broadcom wifi drivers from Mojave")]),e._v(" "),a("li",[e._v("Logic: Patch out conflicting symbols to not collide existing IO80211Family")]),e._v(" "),a("li",[e._v("Models: BCM94322")])])])]),e._v(" "),a("h3",{attrs:{id:"misc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[e._v("#")]),e._v(" Misc")]),e._v(" "),a("ul",[a("li",[e._v("AppleBackLightFixup\n"),a("ul",[a("li",[e._v("Reason: Patch AppleBacklight for iMacs with NVIDIA Metal GPU upgrades")]),e._v(" "),a("li",[e._v("Models: iMac11,x, iMac12,x with upgraded NVIDIA Metal GPUs")])])]),e._v(" "),a("li",[e._v("AppleIntelPIIXATA\n"),a("ul",[a("li",[e._v("Reason: Fix IDE support on MacPro3,1")]),e._v(" "),a("li",[e._v("Models: MacPro3,1")])])]),e._v(" "),a("li",[e._v("AppleIntelMCEDisabler\n"),a("ul",[a("li",[e._v("Reason: Fix dual socket support in Catalina and newer")]),e._v(" "),a("li",[e._v("Models: Mac Pros and Xserves")])])]),e._v(" "),a("li",[e._v("SMC-Spoof\n"),a("ul",[a("li",[e._v("Reason: Spoofs SMC version to 9.9999")]),e._v(" "),a("li",[e._v("Models: All models require when spoofing minimal or higher")])])])])]),e._v(" "),a("h2",{attrs:{id:"on-disk-patches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-disk-patches"}},[e._v("#")]),e._v(" On-Disk Patches")]),e._v(" "),a("p",[e._v("Unfortunately certain on-disk patches are required to achieve full functionality. Below is a breakdown of patches supported")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Audio Patches (11.0+)")]),e._v(" "),a("h3",{attrs:{id:"extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),a("ul",[a("li",[e._v("AppleHDA\n"),a("ul",[a("li",[e._v("Reason: Re-add El Capitan's AppleHDA to achieve audio support")]),e._v(" "),a("li",[e._v("Models: iMac7,1 and iMac8,1")])])])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Legacy Wireless Patches (12.0+)")]),e._v(" "),a("p",[e._v("Applicable for BCM94328, BCM94322 and Atheros Wifi cards")]),e._v(" "),a("h3",{attrs:{id:"coreservices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coreservices"}},[e._v("#")]),e._v(" CoreServices")]),e._v(" "),a("ul",[a("li",[e._v("WiFiAgent.app")])]),e._v(" "),a("h3",{attrs:{id:"usr-libexec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usr-libexec"}},[e._v("#")]),e._v(" /usr/libexec")]),e._v(" "),a("ul",[a("li",[e._v("airportd")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("NVIDIA Kepler Graphics Acceleration Patches (12.0+)")]),e._v(" "),a("h3",{attrs:{id:"extensions-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extensions-2"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),a("ul",[a("li",[e._v("GeForce.kext")]),e._v(" "),a("li",[e._v("GeForceAIRPlugin.bundle")]),e._v(" "),a("li",[e._v("GeForceGLDriver.bundle")]),e._v(" "),a("li",[e._v("GeForceMTLDriver.bundle")]),e._v(" "),a("li",[e._v("GeForceVADriver.bundle")]),e._v(" "),a("li",[e._v("NVDAGF100Hal.kext")]),e._v(" "),a("li",[e._v("NVDAGK100Hal.kext")]),e._v(" "),a("li",[e._v("NVDAResman.kext")]),e._v(" "),a("li",[e._v("NVDAStartup.kext")])]),e._v(" "),a("h3",{attrs:{id:"frameworks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frameworks"}},[e._v("#")]),e._v(" Frameworks")]),e._v(" "),a("ul",[a("li",[e._v("OpenCL (libCLVMNVPTXPlugin.dylib, NVPTX.dylib)\n"),a("ul",[a("li",[e._v("Reason: Re-add Kepler hardware acceleration support")])])])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Intel Ivy Bridge Graphics Acceleration Patches (12.0+)")]),e._v(" "),a("h3",{attrs:{id:"extensions-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extensions-3"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),a("ul",[a("li",[e._v("AppleIntelIVBVA.bundle")]),e._v(" "),a("li",[e._v("AppleIntelFramebufferCapri.kext")]),e._v(" "),a("li",[e._v("AppleIntelGraphicsShared.bundle")]),e._v(" "),a("li",[e._v("AppleIntelHD4000Graphics.kext")]),e._v(" "),a("li",[e._v("AppleIntelHD4000GraphicsGLDriver.bundle")]),e._v(" "),a("li",[e._v("AppleIntelHD4000GraphicsMTLDriver.bundle")]),e._v(" "),a("li",[e._v("AppleIntelHD4000GraphicsVADriver.bundle")])]),e._v(" "),a("h3",{attrs:{id:"privateframeworks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#privateframeworks"}},[e._v("#")]),e._v(" PrivateFrameworks")]),e._v(" "),a("ul",[a("li",[e._v("AppleGVA/AppleGVACore\n"),a("ul",[a("li",[e._v("Reason: Enable DRM support")])])])]),e._v(" "),a("h3",{attrs:{id:"frameworks-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frameworks-2"}},[e._v("#")]),e._v(" Frameworks")]),e._v(" "),a("ul",[a("li",[e._v("OpenCL (libCLVMIGILPlugin.dylib)\n"),a("ul",[a("li",[e._v("Reason: Re-add Ivy Bridge hardware acceleration support")])])]),e._v(" "),a("li",[e._v("WebKit (com.apple.WebProcess.sb)\n"),a("ul",[a("li",[e._v("Reason: Re-add Ivy Bridge Safari rendering support")])])])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("non-Metal Graphics Acceleration Patches (11.0+)")]),e._v(" "),a("h3",{attrs:{id:"extensions-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extensions-4"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),a("h4",{attrs:{id:"general-patches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-patches"}},[e._v("#")]),e._v(" General Patches")]),e._v(" "),a("ul",[a("li",[e._v("IOSurface.kext\n"),a("ul",[a("li",[e._v("Reason: Fixes immediate logout on login")]),e._v(" "),a("li",[e._v("Logic: Downgrade to Catalina IOSurface")]),e._v(" "),a("li",[e._v("Note: For AMD and Intel, additional "),a("code",[e._v("addMemoryRegion/removeMemoryRegion")]),e._v(" patch added changing the first conditional jump to non conditional jump\n"),a("ul",[a("li",[e._v("At Offset "),a("code",[e._v("0xdb52")]),e._v(" and "),a("code",[e._v("0xdbc6")]),e._v(", replace following bytes with "),a("code",[e._v("0xeb")])])])])])])]),e._v(" "),a("h4",{attrs:{id:"dropped-acceleration-binaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dropped-acceleration-binaries"}},[e._v("#")]),e._v(" Dropped Acceleration Binaries")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("NVIDIA Binaries")]),e._v(" "),a("ul",[a("li",[e._v("GeForceGA.bundle")]),e._v(" "),a("li",[e._v("GeForceTesla.kext\n"),a("ul",[a("li",[e._v("Skip IOFree Panic - Mojave+\n"),a("ul",[a("li",[e._v("At Offset "),a("code",[e._v("0x5CF9A")]),e._v(" replace following bytes with "),a("code",[e._v("0xEB")])])])]),e._v(" "),a("li",[e._v("Avoids "),a("code",[e._v("addMemoryRegion/removeMemoryRegion")]),e._v(" calls\n"),a("ul",[a("li",[e._v("At Offset "),a("code",[e._v("0x5527")]),e._v(" and "),a("code",[e._v("0x77993")]),e._v(", replace following bytes with "),a("code",[e._v("0x909090909090")])])])])])]),e._v(" "),a("li",[e._v("GeForceTeslaGLDriver.bundle")]),e._v(" "),a("li",[e._v("GeForceTeslaVADriver.bundle")]),e._v(" "),a("li",[e._v("NVDANV50HalTesla.kext")]),e._v(" "),a("li",[e._v("NVDAResmanTesla.kext\n"),a("ul",[a("li",[e._v("0x1ea59a - 0x1ea5b3: nop")]),e._v(" "),a("li",[e._v("Replace VSLGestalt to IOLockLock or any other known symbol of the same length.")])])])])]),e._v(" "),a("li",[a("p",[e._v("AMD/ATI Binaries")]),e._v(" "),a("ul",[a("li",[e._v("AMD2400Controller.kext")]),e._v(" "),a("li",[e._v("AMD2600Controller.kext")]),e._v(" "),a("li",[e._v("AMD3800Controller.kext")]),e._v(" "),a("li",[e._v("AMD4600Controller.kext")]),e._v(" "),a("li",[e._v("AMD4800Controller.kext")]),e._v(" "),a("li",[e._v("AMD5000Controller.kext")]),e._v(" "),a("li",[e._v("AMD6000Controller.kext")]),e._v(" "),a("li",[e._v("AMDFramebuffer.kext")]),e._v(" "),a("li",[e._v("AMDLegacyFramebuffer.kext")]),e._v(" "),a("li",[e._v("AMDLegacySupport.kext")]),e._v(" "),a("li",[e._v("AMDRadeonVADriver.bundle")]),e._v(" "),a("li",[e._v("AMDRadeonVADriver2.bundle")]),e._v(" "),a("li",[e._v("AMDRadeonX3000.kext")]),e._v(" "),a("li",[e._v("AMDRadeonX3000GLDriver.bundle")]),e._v(" "),a("li",[e._v("AMDShared.bundle")]),e._v(" "),a("li",[e._v("AMDSupport.kext")]),e._v(" "),a("li",[e._v("ATIRadeonX2000.kext")]),e._v(" "),a("li",[e._v("ATIRadeonX2000GA.plugin")]),e._v(" "),a("li",[e._v("ATIRadeonX2000GLDriver.bundle")]),e._v(" "),a("li",[e._v("ATIRadeonX2000VADriver.bundle")])])]),e._v(" "),a("li",[a("p",[e._v("Intel 5th Gen Binaries")]),e._v(" "),a("ul",[a("li",[e._v("AppleIntelFramebufferAzul.kext")]),e._v(" "),a("li",[e._v("AppleIntelFramebufferCapri.kext")]),e._v(" "),a("li",[e._v("AppleIntelHDGraphics.kext")]),e._v(" "),a("li",[e._v("AppleIntelHDGraphicsFB.kext")]),e._v(" "),a("li",[e._v("AppleIntelHDGraphicsGA.plugin")]),e._v(" "),a("li",[e._v("AppleIntelHDGraphicsGLDriver.bundle")]),e._v(" "),a("li",[e._v("AppleIntelHDGraphicsVADriver.bundle")])])]),e._v(" "),a("li",[a("p",[e._v("Intel 6th Gen Binaries")]),e._v(" "),a("ul",[a("li",[e._v("AppleIntelHD3000Graphics.kext")]),e._v(" "),a("li",[e._v("AppleIntelHD3000GraphicsGA.plugin")]),e._v(" "),a("li",[e._v("AppleIntelHD3000GraphicsGLDriver.bundle")]),e._v(" "),a("li",[e._v("AppleIntelHD3000GraphicsVADriver.bundle")]),e._v(" "),a("li",[e._v("AppleIntelSNBGraphicsFB.kext\n"),a("ul",[a("li",[e._v("Board ID Patch\n"),a("ul",[a("li",[e._v("Replace original Board ID with updated model")])])])])]),e._v(" "),a("li",[e._v("AppleIntelSNBVA.bundle")])])])]),e._v(" "),a("h3",{attrs:{id:"frameworks-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frameworks-3"}},[e._v("#")]),e._v(" Frameworks")]),e._v(" "),a("ul",[a("li",[e._v("CoreDisplay.framework\n"),a("ul",[a("li",[e._v("Logic: Copied from Mojave, heavy modifications/shims")])])]),e._v(" "),a("li",[e._v("IOSurface.framework")]),e._v(" "),a("li",[e._v("OpenGL.framework\n"),a("ul",[a("li",[e._v("Logic: Copied from Mojave")])])])]),e._v(" "),a("h3",{attrs:{id:"privateframeworks-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#privateframeworks-2"}},[e._v("#")]),e._v(" PrivateFrameworks")]),e._v(" "),a("ul",[a("li",[e._v("GPUSupport.framework\n"),a("ul",[a("li",[e._v("Logic: Copied from Mojave")])])]),e._v(" "),a("li",[e._v("SkyLight.framework\n"),a("ul",[a("li",[e._v("Logic: Copied from Mojave, heavy modifications/shims")])])])])])])}),[],!1,null,null,null);i.default=o.exports}}]);