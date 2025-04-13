"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components = [
  {
    title: "FlavorCraft",
    href: "/projects/flavorcraft",
    description: "A recipe search platform built using HTML, CSS, and JavaScript with responsive UI and API integration.",
  },
  {
    title: "TaskMaster",
    href: "/projects/taskmaster",
    description: "A task management app built with React and Firebase to help teams stay organized and productive.",
  },
  {
    title: "HealthMate",
    href: "/projects/healthmate",
    description: "A fitness tracker app that allows users to log workouts and monitor health metrics in real-time.",
  },
  {
    title: "EduPath",
    href: "/projects/edupath",
    description: "An e-learning platform offering curated content and quizzes to enhance self-paced learning.",
  },
  {
    title: "ArtHub",
    href: "/projects/arthub",
    description: "A digital art marketplace showcasing unique pieces and allowing artists to sell their work online.",
  },
  {
    title: "DevLink",
    href: "/projects/devlink",
    description: "A developer portfolio and blogging site built with Next.js, featuring markdown support and live previews.",
  },
];


export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learning</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      SkillRush
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     Learn and achive greate in life by making your learning fun.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/team" title="Meet the Team">
  Get to know the passionate individuals behind this project.
</ListItem>
<ListItem href="/setup" title="Project Setup">
  Learn how we structured the app and set up the development environment.
</ListItem>
<ListItem href="/design" title="Design & Styling">
  Explore our use of React, Tailwind CSS, and UI/UX design principles.
</ListItem>

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
