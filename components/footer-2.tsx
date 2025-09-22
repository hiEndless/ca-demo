"use client"

import { Logo } from "./logo-1"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer2() {
  return (
    <footer className="bg-muted py-16 lg:py-24" role="contentinfo" aria-label="Site footer">
      <div className="container px-6 mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row md:justify-between md:items-center gap-12">
            <div className="flex flex-col items-center lg:flex-row gap-12">
              <Link href="/" aria-label="Go to homepage">
                <Logo />
              </Link>

              <nav
                className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center"
                aria-label="Social media navigation"
              >
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Follow us on Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Follow us on Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Follow us on Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Connect with us on LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Subscribe to our YouTube channel">
                  <Youtube className="h-5 w-5" />
                </Link>
              </nav>
            </div>


          </div>

          <Separator role="presentation" />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 text-center">
            <p className="text-muted-foreground order-2 md:order-1">
              <span>Built with ❤️ by</span>{" "}
              <Link href="https://www.shadcndesign.com/pro-blocks" target="_blank" className="underline">
                demo.lichaoyuan.com
              </Link>
            </p>

            <nav
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8 order-1 md:order-2"
              aria-label="Legal links"
            >
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                用户协议
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                产品教程
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
