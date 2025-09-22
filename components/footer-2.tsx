"use client"

import { Logo } from "./logo-1"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer2() {
  return (
    <footer className="bg-muted py-12 sm:py-16 lg:py-24" role="contentinfo" aria-label="Site footer">
      <div className="container px-4 sm:px-6 mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-16">
        <div className="flex flex-col gap-8 sm:gap-12">
          <div className="flex flex-col lg:flex-row md:justify-between md:items-center gap-8 sm:gap-12">
            <div className="flex flex-col items-center lg:flex-row gap-6 sm:gap-8 lg:gap-12">
              <Link href="/" aria-label="Go to homepage" className="mb-2 sm:mb-0">
                <Logo />
              </Link>

              <nav
                className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-center"
                aria-label="Social media navigation"
              >
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="Follow us on Facebook">
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="Follow us on Twitter">
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="Follow us on Instagram">
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="Connect with us on LinkedIn">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="Subscribe to our YouTube channel">
                  <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </nav>
            </div>


          </div>

          <Separator role="presentation" />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12 text-center">
            <p className="text-muted-foreground order-2 md:order-1 text-sm sm:text-base leading-relaxed">
              <span>Built with ❤️ by</span>{" "}
              <Link href="https://www.shadcndesign.com/pro-blocks" target="_blank" className="underline hover:text-foreground transition-colors">
                demo.lichaoyuan.com
              </Link>
            </p>

            <nav
              className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 order-1 md:order-2"
              aria-label="Legal links"
            >
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base py-1">
                用户协议
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base py-1">
                产品教程
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
