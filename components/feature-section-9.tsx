"use client"

import { Rotate3d, ArrowLeftRight, Database, Combine } from "lucide-react"

const features = [
  {
    icon: Rotate3d,
    title: "跨交易所跟单",
    description: "跟单不再受交易所限制，可以使用任意交易跟单任意交易员！",
  },
  {
    icon: Database,
    title: "私域跟单",
    description: "针对私域带单或者隐藏实盘的交易员进行跟单",
  },
  {
    icon: ArrowLeftRight,
    title: "反向跟单",
    description: "对跟单的交易员进行反向交易，交易员开多，你便开空",
  },
  {
    icon: Combine,
    title: "热门交易员跟单",
    description: "全网搜寻并监控热门交易员，实时进行跟单",
  },
]

export function FeatureSection9() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">产品功能</h2>
          <p className="text-base text-muted-foreground">
            看看我们为你开发了哪些强大的功能:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col gap-5 items-center text-center">
                <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
