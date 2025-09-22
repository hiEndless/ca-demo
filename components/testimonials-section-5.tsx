"use client"

import React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

const testimonials = [
  {
    quote: "可能是市面最好用的跟单工具，性价比极高，网站也很简洁。",
    author: "匿名OK用户",
    role: "KOL",
    image: "https://github.com/shadcn.png",
  },
  {
    quote: "用了五个月，一直在用，也没用过其他的软件。非常稳定，开发者更新频率也非常高。",
    author: "匿名OK用户",
    role: "交易员",
    image: "https://github.com/shadcn.png",
  },
]

export function TestimonialsSection5() {
  return (
    <section className="py-16 md:py-24 bg-background" aria-labelledby="testimonial-title">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 md:gap-5 max-w-xl text-center md:text-left">
            <p className="text-sm md:text-base font-semibold text-muted-foreground leading-[20px] md:leading-6">
              Testimonials
            </p>
            <h2 id="testimonial-title" className="text-3xl md:text-4xl font-bold">
              来自用户的评价
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <>
                    <div className="hidden md:block w-[1px] self-stretch bg-border" />
                    <Separator className="md:hidden bg-border" orientation="horizontal" />
                  </>
                )}
                <div className="flex flex-col gap-8">
                  <p className="text-foreground text-lg font-medium leading-7 md:text-left text-center">
                    {testimonial.quote}
                  </p>
                  <div className="flex md:flex-row flex-col items-center gap-5">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1 md:text-left text-center">
                      <p className="text-foreground text-base font-semibold leading-6">{testimonial.author}</p>
                      <p className="text-muted-foreground text-base leading-6">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
