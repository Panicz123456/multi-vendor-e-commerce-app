'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavbarSidebar } from './NavbarSidebar'
import { useState } from 'react'
import { MenuIcon } from 'lucide-react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["700"]
})

interface Props {
  href: string
  children: React.ReactNode,
  isActive?: boolean
}

const NavbarItems = ({ children, href, isActive }: Props) => {


  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
  )
}

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" }
]

export const Navbar = () => {
  const [open, onOpenChange] = useState(false)

  const pathname = usePathname()

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className='pl-6 flex items-center'>
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          JoyTrail
        </span>
      </Link>

      <NavbarSidebar
        open={open}
        onOpenChange={onOpenChange}
        items={navbarItems}
      />

      <div className='items-center gap-4 hidden lg:flex'>
        {navbarItems.map((item) => (
          <NavbarItems
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItems>
        ))}
      </div>

      <div className='hidden lg:flex'>
        <Button
          asChild
          variant="secondary"
          className='border-l border-t-0 border-b-0 border-r-0 px-12 h-full
          rounded-none bg-white hover:bg-pink-400 transaction-colors'
        >
          <Link href="/sign-in">
            Log in
          </Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className='border-r-0 border-l border-t-0 border-b-0 px-12 h-full rounded-none
          bg-black text-white hover:bg-pink-400 hover:text-black transition-colors'
        >
          <Link href="/sign-up">
            Start selling
          </Link>
        </Button>
      </div>

      <div className='flex lg:hidden items-center justify-center'>
        <Button
          variant="ghost"
          className='size-12 border-transparent bg-white'
          onClick={() => onOpenChange(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  )
}