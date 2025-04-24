"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Newspaper } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar,
} from "@/components/ui/sidebar"

import { SUPPORTED_ROUTES } from "@/lib/navigation"

import { useIsMobile } from "@/hooks/use-mobile"

const NAVIGATION_MAIN = [SUPPORTED_ROUTES.HOME]

const NAVIGATION_CATEGORIES = [
  SUPPORTED_ROUTES.HEALTH,
  SUPPORTED_ROUTES.ENTERTAINMENT,
  SUPPORTED_ROUTES.SCIENCE,
  SUPPORTED_ROUTES.BUSINESS,
]

const NAVIGATION_LEGAL = [
  SUPPORTED_ROUTES.PRIVACY_POLICY,
  SUPPORTED_ROUTES.TERMS_OF_SERVICE,
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const { toggleSidebar } = useSidebar()

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" onClick={() => isMobile ? toggleSidebar() : undefined}>
                <div className="bg-sidebar-foreground text-sidebar-accent flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Newspaper className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Uplifting News</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Discover</SidebarGroupLabel>
          <SidebarMenu>
            {NAVIGATION_MAIN.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={pathname === item.path}>
                  <Link href={item.path} onClick={() => isMobile ? toggleSidebar() : undefined}>
                    {item.icon && <item.icon />}
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Category</SidebarGroupLabel>
          <SidebarMenu>
            {NAVIGATION_CATEGORIES.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={pathname === item.path}>
                  <Link href={item.path} onClick={() => isMobile ? toggleSidebar() : undefined}>
                    {item.icon && <item.icon />}
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {NAVIGATION_LEGAL.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild size="sm" isActive={pathname === item.path}>
                    <Link href={item.path} onClick={() => isMobile ? toggleSidebar() : undefined}>
                      {item.icon && <item.icon />}
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
