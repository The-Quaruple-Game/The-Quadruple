// src/components/icons.tsx
import { LucideProps } from "lucide-react"
import { Home, Menu, X } from "lucide-react"

export const Icons = {
  logo: (props: LucideProps) => <Home {...props} />, // Use any icon here
  menu: (props: LucideProps) => <Menu {...props} />,
  close: (props: LucideProps) => <X {...props} />,
}
