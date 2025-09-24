"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export function HeroSection7() {
  const isMobile = useIsMobile()
  const loginUrl = isMobile ? "https://app.lichaoyuan.com/agent-login" : "https://pc.lichaoyuan.com/login"
  
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading">
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex gap-12 lg:gap-16">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            <h1 id="hero-heading" className="text-foreground text-3xl lg:text-5xl font-bold flex-1">
              让全球顶级交易员
              <br/>
              <span className="text-primary">为你打工！</span>
            </h1>
            <div className="flex-1 w-full flex flex-col gap-8">
              <p className="text-muted-foreground text-base lg:text-lg">
                全自动合约跟单交易助手。没有交易员盈利抽成，没有跟单席位限制，支持跨交易所和模拟盘跟单。对接交易所官方API，秒级跟单。
              </p>

              <div className="flex flex-col lg:flex-row gap-3">
                <Link href={loginUrl}>
                  <Button>免费试用</Button>
                  <Button variant="ghost">
                    已支持欧意、币安、芝麻
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-xl border bg-background shadow-xl">
          <AspectRatio ratio={16 / 9}>
            <Image
              // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero%20image-BfDDyqA7gEJi5nCcYfKEbZOJR8pYrr.png"
              src="bg-1.png"
              alt="Flowly dashboard interface showing order statistics and revenue metrics"
              fill
              priority
              className="object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}
