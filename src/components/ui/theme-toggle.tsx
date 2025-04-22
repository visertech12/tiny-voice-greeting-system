
"use client"

import * as React from "react"
import { Moon, Sun, Leaf, Droplet } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 green:scale-0 green:-rotate-90 blue:scale-0 blue:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 green:scale-0 blue:scale-0" />
          <Leaf className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all green:rotate-0 green:scale-100 dark:scale-0 blue:scale-0" />
          <Droplet className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all blue:rotate-0 blue:scale-100 dark:scale-0 green:scale-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("green")}>
          Green
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("blue")}>
          Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
