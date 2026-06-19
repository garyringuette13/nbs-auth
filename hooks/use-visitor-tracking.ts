import { useEffect, useState } from "react"

export interface VisitorInfo {
  location: string
  ip: string
  ipV4?: string
  ipV6?: string
  timezone: string
  isp: string
  userAgent: string
  screen: string
  language: string
  referrer: string
  url: string
  utcTime: string
}

export function useVisitorTracking() {
  const [visitorInfo, setVisitorInfo] = useState<VisitorInfo | null>(null)

  useEffect(() => {
    const getVisitorInfo = async () => {
      try {
        let ipData = {
          city: "Unknown",
          region: "Unknown",
          country_name: "Unknown",
          ip: "Unknown",
          timezone: "UTC",
          org: "Unknown",
        }

        try {
          const res = await fetch("https://ipapi.co/json/")
          ipData = await res.json()
        } catch (error) {
          // CORS restriction in browser - this is expected in development
          // IP data will use fallback values
        }

        let ipV4 = ""
        let ipV6 = ""

        try {
          const ipv4Res = await fetch("https://api.ipify.org?format=json")
          const ipv4Json = await ipv4Res.json()
          if (ipv4Json?.ip) {
            ipV4 = ipv4Json.ip
          }
        } catch (error) {
          // Failed to get IPv4 - optional field
        }

        try {
          const ipv6Res = await fetch("https://api64.ipify.org?format=json")
          const ipv6Json = await ipv6Res.json()
          if (ipv6Json?.ip) {
            ipV6 = ipv6Json.ip
          }
        } catch (error) {
          // Failed to get IPv6 - optional field
        }

        const primaryIp = ipV4 || ipData.ip

        const visitor: VisitorInfo = {
          location: `${ipData.city}, ${ipData.region}, ${ipData.country_name}`,
          ip: primaryIp,
          ipV4: ipV4 || undefined,
          ipV6: ipV6 || undefined,
          timezone: ipData.timezone,
          isp: ipData.org,
          userAgent: navigator.userAgent,
          screen: `${window.screen.width}x${window.screen.height}`,
          language: navigator.language,
          referrer: typeof document !== "undefined" ? document.referrer : "",
          url: typeof window !== "undefined" ? window.location.href : "",
          utcTime: new Date().toLocaleString("en-US", {
            timeZone: "UTC",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          }),
        }

        setVisitorInfo(visitor)
      } catch (error) {
        // Fallback if something unexpected happens
        console.warn("Unable to collect visitor info")
      }
    }

    getVisitorInfo()
  }, [])

  return visitorInfo
}


