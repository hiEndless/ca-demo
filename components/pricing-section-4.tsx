"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

const pricingData = {
  plans: [
    {
      name: "免费体验",
      description: "可使用基础跟单功能",
      features: [
        {
          name: "跟单欧意交易员",
          tooltip: "跟单欧意交易员",
        },
        {
          name: "欧意模拟盘/实盘",
          tooltip: "欧意模拟盘/实盘",
        },
        {
          name: "普通交易 (延迟2-4秒)",
          tooltip: "普通交易 (延迟2-4秒)",
        },
        {
          name: "交易消息通知",
          tooltip: "交易消息通知",
        },
        {
          name: "资产限额2000USDT",
          tooltip: "资产限额2000USDT",
        },
        {
          name: "实盘需单独购买海外固定IP",
          tooltip: "实盘需单独购买海外固定IP",
        },
      ],
      pricing: {
        monthly: 0,
        annually: 0,
      },
      variant: "secondary",
    },
    {
      name: "VIP会员",
      description: "可使用完整跟单功能",
      badge: "Most popular",
      features: [
        {
          name: "跟单币安交易员",
          tooltip: "跟单币安交易员",
        },
        {
          name: "币安实盘",
          tooltip: "币安实盘",
        },
        {
          name: "交易消息通知",
          tooltip: "交易消息通知",
        },
        {
          name: "赠送30天固定海外IP",
          tooltip: "赠送30天固定海外IP",
        },
        {
          name: "极速交易 (延迟1秒左右)",
          tooltip: "极速交易 (延迟1秒左右)",
        },
        {
          name: "资产限额5000USDT",
          tooltip: "资产限额5000USDT",
        },
      ],
      pricing: {
        monthly: 40,
        annually: 432,
      },
      variant: "default",
    },
    {
      name: "私有化",
      description: "针对大资金客户可私有化定制交易服务",
      features: [
        {
          name: "会员全部功能",
          tooltip: "会员全部功能",
        },
        {
          name: "资产限额5万USDT起 (付费提额)",
          tooltip: "资产限额5万USDT起 (付费提额)",
        },
        {
          name: "极速交易 (延迟0.5秒左右)",
          tooltip: "极速交易 (延迟0.5秒左右)",
        },
        {
          name: "定制功能需求",
          tooltip: "定制功能需求",
        },
        {
          name: "亚马逊服务器 (交易所内网)\n",
          tooltip: "亚马逊服务器 (交易所内网)\n",
        },
      ],
      pricing: {
        monthly: 9999,
        annually: 9999,
      },
      variant: "secondary",
    },
  ],
}

export function PricingSection4() {
  const [billingPeriod, setBillingPeriod] = React.useState("monthly")

  return (
    <section className="py-16 md:py-24 pattern-1 bg-muted" aria-labelledby="pricing-section-title-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            <p className="text-base font-semibold text-muted-foreground">Pricing</p>
            <h2 id="pricing-section-title-4" className="text-3xl md:text-4xl font-bold">
              产品价格
            </h2>
            <p className="text-base text-muted-foreground">选择适合你的套餐</p>
          </div>

          <Tabs value={billingPeriod} onValueChange={setBillingPeriod} className="w-fit">
            <TabsList className="bg-black/30 h-10 p-1 rounded-[40px]">
              <TabsTrigger
                value="monthly"
                className="rounded-full px-3 py-1.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                月付
              </TabsTrigger>
              <TabsTrigger
                value="annually"
                className="rounded-full px-3 py-1.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                年付
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col lg:flex-row gap-6 lg:max-w-5xl w-full mx-auto">
            {pricingData.plans.map((plan, index) => (
              <Card key={plan.name} className={`p-8 space-y-8 ${index === 2 ? "bg-foreground text-background" : ""}`}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold leading-7">{plan.name}</h3>
                    <p className={`text-sm leading-5 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-end gap-0.5">
                    <span className="text-4xl font-semibold leading-10">
                      ${billingPeriod === "monthly" ? plan.pricing.monthly : plan.pricing.annually}
                    </span>
                    <span className={`text-base leading-6 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      {plan.pricing.monthly === 0 ? "" : `/${billingPeriod === "monthly" ? "月" : "年"}`}
                    </span>
                  </div>

                  <Button variant={index === 2 ? "secondary" : "default"} className="w-full">
                    {plan.pricing.monthly === 0 ? "免费开始" : "联系客服"}
                  </Button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium">
                    {index === 0 ? "服务包括" : `全部的 ${pricingData.plans[index - 1].name}, 加上:`}
                  </p>
                  <div className="flex flex-col gap-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 ${index === 2 ? "" : "text-primary"}`} />
                        <span className={`text-sm flex-1 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                          {feature.name}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info
                                className={`h-4 w-4 ${index === 2 ? "opacity-40" : "text-muted-foreground opacity-70"}`}
                              />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
