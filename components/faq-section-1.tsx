"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "能否使用OK账户跟单币安的交易员？",
    answer: "我们支持使用OK跟单币安的交易员，也支持使用币安跟单OK的交易员。",
  },
  {
    question: "交易员隐藏了实盘是否可以跟单？",
    answer: "使用普通的跟单服务，在隐藏实盘的情况下无法跟单，比如OK的隐藏带单数据，以及币安的私域跟单，都是无法进行跟单的。此时可以使用我们的高级跟单服务，可以突破交易所隐藏限制，帮你实现跟单。",
  },
  {
    question: "使用跟单交易所的交易员时为什么会有延迟？",
    answer:
      "交易所的延迟是交易所系统设置的，比如OK有5分钟的开仓展示延迟。如果想突破延迟，实现实时跟单，我们也提供了高级的跟单服务。",
  },
  {
    question: "是否可以同时跟单多个交易员？",
    answer:
      "出于对交易稳定性的考虑，我们只允许一个交易所账户同时跟单一个交易员，如果你需要跟单多个交易员，可以在交易所申请子账号，将子账号的api授权给我们，这样就可以同时跟单多个交易员。",
  },
  {
    question: "如何才能提高资产金额限制，用更多的资金进行跟单？",
    answer:
      "出于对用户资产的保护，避免交易时因滑点导致过多的资金损失，我们限制了用户使用软件的资产上限。如果你需要更多的资金交易，请联系我们购买私有化部署服务，我们将为你部署交易服务到你自己的服务器上，你可以获得更低的交易延迟，同时我们也将免费为你远程维护服务！",
  },
  {
    question: "如何确保我的账户资金安全？",
    answer:
      "我们要求用户提交的api不要添加交易所资金权限，交易所可以很好的保护你的资金安全。同时我们也向用户提供了专属ip绑定到api上，在其他ip地址下无法通过api操作你的账户！",
  },
]

export function FaqSection1() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-muted-foreground font-semibold">FAQ</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            常见问题
          </h1>
          {/*<p className="text-muted-foreground">*/}
          {/*  We've compiled the most important information to help you get the most out of your experience. Can't find*/}
          {/*  what you're looking for?{" "}*/}
          {/*  <Link href="#" className="text-primary underline">*/}
          {/*    Contact us.*/}
          {/*  </Link>*/}
          {/*</p>*/}
        </div>

        <Accordion type="single" defaultValue="item-1" aria-label="FAQ items">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">还有疑问？</h2>
            <p className="text-base text-muted-foreground">
              如果你还有问题或疑问，可以联系我们团队寻求帮助！
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">邮箱：</span>
                <a href="mailto:demo@demo.lichaoyuan.com" className="text-primary hover:underline">
                  demo@demo.lichaoyuan.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">微信：</span>
                <span className="text-foreground">lichaoyuan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
