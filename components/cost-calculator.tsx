"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, Info, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Switch } from "@/components/ui/switch"

type PropertyType = "home" | "business"
type Resolution = "2mp" | "4mp" | "4k"
type StorageType = "local-1tb" | "local-4tb" | "cloud" | "hybrid"

const resolutionOptions: { value: Resolution; label: string; multiplier: number }[] = [
  { value: "2mp", label: "2MP (1080p Full HD)", multiplier: 1 },
  { value: "4mp", label: "4MP (2K Super HD)", multiplier: 1.3 },
  { value: "4k", label: "8MP (4K Ultra HD)", multiplier: 1.7 },
]

const storageOptions: { value: StorageType; label: string; price: number }[] = [
  { value: "local-1tb", label: "Local NVR (1TB)", price: 2500 },
  { value: "local-4tb", label: "Local NVR (4TB)", price: 4500 },
  { value: "cloud", label: "Cloud Storage (Monthly)", price: 1500 },
  { value: "hybrid", label: "Hybrid (Local + Cloud)", price: 5500 },
]

export function CostCalculator() {
  const [propertyType, setPropertyType] = useState<PropertyType>("home")
  const [resolution, setResolution] = useState<Resolution>("2mp")
  const [channels, setChannels] = useState([4])
  const [storageType, setStorageType] = useState<StorageType>("local-1tb")
  const [addSmartLocks, setAddSmartLocks] = useState(false)
  const [smartLockCount, setSmartLockCount] = useState([1])
  const [addAlarm, setAddAlarm] = useState(false)
  const [addElectricFencing, setAddElectricFencing] = useState(false)
  const [fencingMeters, setFencingMeters] = useState([30])
  const [addGateMotor, setAddGateMotor] = useState(false)
  const [addIntercom, setAddIntercom] = useState(false)

  const estimate = useMemo(() => {
    const cameraCount = channels[0]
    const cameraUnitPrice = propertyType === "home" ? 1800 : 2500
    const camerasCost = cameraCount * cameraUnitPrice * (resolutionOptions.find((r) => r.value === resolution)?.multiplier || 1)
    const installCost = cameraCount * 650
    const storage = storageOptions.find((s) => s.value === storageType)!

    let smartLocksCost = 0
    if (addSmartLocks) {
      smartLocksCost = smartLockCount[0] * 4500
    }

    let alarmCost = 0
    if (addAlarm) {
      alarmCost = propertyType === "home" ? 6500 : 12000
    }

    let fencingCost = 0
    if (addElectricFencing) {
      fencingCost = fencingMeters[0] * 350
    }

    let gateMotorCost = 0
    if (addGateMotor) {
      gateMotorCost = 8500
    }

    let intercomCost = 0
    if (addIntercom) {
      intercomCost = 5500
    }

    const total = Math.round(camerasCost + installCost + storage.price + smartLocksCost + alarmCost + fencingCost + gateMotorCost + intercomCost)

    return {
      cameras: Math.round(camerasCost),
      installation: installCost,
      storage: storage.price,
      smartLocks: smartLocksCost,
      alarm: alarmCost,
      fencing: fencingCost,
      gateMotor: gateMotorCost,
      intercom: intercomCost,
      total,
    }
  }, [propertyType, resolution, channels, storageType, addSmartLocks, smartLockCount, addAlarm, addElectricFencing, fencingMeters, addGateMotor, addIntercom])

  return (
    <>
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60 mb-3">Transparent Pricing</p>
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
            Security Cost Calculator
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Get an instant estimated price for your security system. Select your options below and see the price update in real time. All prices in South African Rand (ZAR).
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Calculator Form */}
            <div className="lg:col-span-3 flex flex-col gap-8 rounded-xl border border-border bg-card p-6 lg:p-8">
              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-1">Configure Your System</h2>
                <p className="text-sm text-muted-foreground">Adjust the options to match your Cape Town property.</p>
              </div>

              {/* Property Type */}
              <div className="flex flex-col gap-3">
                <Label className="text-sm font-medium text-card-foreground">Property Type</Label>
                <Select value={propertyType} onValueChange={(v) => setPropertyType(v as PropertyType)}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Residential / Home</SelectItem>
                    <SelectItem value="business">Business / Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Divider - CCTV */}
              <div className="border-t border-border pt-6">
                <h3 className="text-base font-semibold text-card-foreground mb-4">CCTV Cameras</h3>

                {/* Camera Resolution */}
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Label className="text-sm font-medium text-card-foreground">Camera Resolution</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-foreground text-background">
                          <p className="max-w-xs text-sm">Higher resolution means sharper footage. 4K is recommended for face/plate recognition.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Select value={resolution} onValueChange={(v) => setResolution(v as Resolution)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {resolutionOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Number of Cameras */}
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium text-card-foreground">Number of Cameras</Label>
                    <span className="text-2xl font-bold text-cta">{channels[0]}</span>
                  </div>
                  <Slider value={channels} onValueChange={setChannels} min={1} max={32} step={1} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 camera</span>
                    <span>32 cameras</span>
                  </div>
                </div>

                {/* Storage Type */}
                <div className="flex flex-col gap-3">
                  <Label className="text-sm font-medium text-card-foreground">Storage Type</Label>
                  <Select value={storageType} onValueChange={(v) => setStorageType(v as StorageType)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {storageOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Divider - Add-ons */}
              <div className="border-t border-border pt-6">
                <h3 className="text-base font-semibold text-card-foreground mb-4">Additional Services</h3>
                
                <div className="flex flex-col gap-6">
                  {/* Smart Locks */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-0.5">
                        <Label className="text-sm font-medium text-card-foreground">Smart Door Locks</Label>
                        <span className="text-xs text-muted-foreground">Fingerprint, PIN & app controlled</span>
                      </div>
                      <Switch checked={addSmartLocks} onCheckedChange={setAddSmartLocks} />
                    </div>
                    {addSmartLocks && (
                      <div className="flex flex-col gap-2 pl-4 border-l-2 border-cta/30">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Number of locks</span>
                          <span className="text-sm font-semibold text-cta">{smartLockCount[0]}</span>
                        </div>
                        <Slider value={smartLockCount} onValueChange={setSmartLockCount} min={1} max={6} step={1} />
                      </div>
                    )}
                  </div>

                  {/* Alarm System */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <Label className="text-sm font-medium text-card-foreground">Alarm System</Label>
                      <span className="text-xs text-muted-foreground">Sensors, siren & armed response ready</span>
                    </div>
                    <Switch checked={addAlarm} onCheckedChange={setAddAlarm} />
                  </div>

                  {/* Electric Fencing */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-0.5">
                        <Label className="text-sm font-medium text-card-foreground">Electric Fencing</Label>
                        <span className="text-xs text-muted-foreground">Perimeter protection with energiser</span>
                      </div>
                      <Switch checked={addElectricFencing} onCheckedChange={setAddElectricFencing} />
                    </div>
                    {addElectricFencing && (
                      <div className="flex flex-col gap-2 pl-4 border-l-2 border-cta/30">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Perimeter length</span>
                          <span className="text-sm font-semibold text-cta">{fencingMeters[0]}m</span>
                        </div>
                        <Slider value={fencingMeters} onValueChange={setFencingMeters} min={10} max={200} step={5} />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>10m</span>
                          <span>200m</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Gate Motor */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <Label className="text-sm font-medium text-card-foreground">Gate Motor</Label>
                      <span className="text-xs text-muted-foreground">Sliding or swing, battery backup</span>
                    </div>
                    <Switch checked={addGateMotor} onCheckedChange={setAddGateMotor} />
                  </div>

                  {/* Intercom */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <Label className="text-sm font-medium text-card-foreground">Video Intercom</Label>
                      <span className="text-xs text-muted-foreground">See visitors & open gate remotely</span>
                    </div>
                    <Switch checked={addIntercom} onCheckedChange={setAddIntercom} />
                  </div>
                </div>
              </div>
            </div>

            {/* Estimate Summary */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 flex flex-col gap-6 rounded-xl border border-border bg-card p-6 lg:p-8">
                <h3 className="text-lg font-bold text-card-foreground">Your Estimate</h3>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">CCTV cameras ({channels[0]}x)</span>
                    <span className="text-card-foreground font-medium">R{estimate.cameras.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Installation labour</span>
                    <span className="text-card-foreground font-medium">R{estimate.installation.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Storage (NVR/Cloud)</span>
                    <span className="text-card-foreground font-medium">R{estimate.storage.toLocaleString()}</span>
                  </div>

                  {addSmartLocks && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Smart locks ({smartLockCount[0]}x)</span>
                      <span className="text-card-foreground font-medium">R{estimate.smartLocks.toLocaleString()}</span>
                    </div>
                  )}
                  {addAlarm && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Alarm system</span>
                      <span className="text-card-foreground font-medium">R{estimate.alarm.toLocaleString()}</span>
                    </div>
                  )}
                  {addElectricFencing && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Electric fencing ({fencingMeters[0]}m)</span>
                      <span className="text-card-foreground font-medium">R{estimate.fencing.toLocaleString()}</span>
                    </div>
                  )}
                  {addGateMotor && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Gate motor</span>
                      <span className="text-card-foreground font-medium">R{estimate.gateMotor.toLocaleString()}</span>
                    </div>
                  )}
                  {addIntercom && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Video intercom</span>
                      <span className="text-card-foreground font-medium">R{estimate.intercom.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="border-t border-border my-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-card-foreground">Estimated Total</span>
                    <span className="text-2xl font-bold text-cta">R{estimate.total.toLocaleString()}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  This is an estimate only. Final pricing depends on site conditions, cable runs, wall types, and specific equipment chosen. We provide an exact quote after a free on-site consultation.
                </p>

                <div className="flex flex-col gap-3">
                  <Button asChild className="w-full bg-cta text-primary-foreground hover:bg-cta-hover">
                    <Link href="/contact">
                      Get an Exact Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full gap-2">
                    <a href="tel:+27000000000">
                      <Phone className="h-4 w-4" />
                      Call to Discuss
                    </a>
                  </Button>
                </div>

                {/* What's included */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold text-card-foreground mb-3">Every quote includes:</p>
                  <ul className="flex flex-col gap-2">
                    {["Free on-site consultation", "Professional installation", "Smartphone app setup", "Warranty on all work", "After-sales support"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 shrink-0 text-cta" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
