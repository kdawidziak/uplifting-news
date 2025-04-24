import type { Metadata, Viewport } from "next"

import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: "Uplifting News",
  description: "A place to read positive and uplifting, feel good news stories.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: "/",
    type: "website",
    locale: "en_US",
    title: "Uplifting News",
    description: "A place to read positive and uplifting, feel good news stories.",
  },
  twitter: {
    card: "summary",
    title: "Uplifting News",
    description: "A place to read positive and uplifting, feel good news stories.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  colorScheme: "dark",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4">
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumbs />
                </div>
                <ThemeToggle />
              </header>

              <div className="p-4 pb-8 mx-auto max-w-2xl lg:max-w-6xl">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
};
