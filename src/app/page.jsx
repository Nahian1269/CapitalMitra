
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Target, Users, Quote, Handshake } from "lucide-react";
import React from 'react';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
            <Image
                src="/stock.jpg"
                layout="fill"
                objectFit="cover"
                alt="Business meeting"
                className="absolute inset-0 z-0"
                data-ai-hint="background business"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter drop-shadow-lg">
                Where Businesses Rise and Investors Grow .
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 drop-shadow-md">
                   CapitalMitra is the premier platform connecting ambitious founders with strategic investors and expert mentors to build the future of business.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 rounded-full shadow-2xl transition-transform hover:scale-105">
                        <Link href="/login-selector">
                            Create Account
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">The Ecosystem</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Platform for Growth</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                  We provide tailored tools and opportunities for every stakeholder in the startup ecosystem.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:max-w-none">
              <FeatureCard icon={<Target />} title="For Clients" description="Connect with investors who match your vision and secure the funding to bring your ideas to life." />
              <FeatureCard icon={<Briefcase />} title="For Investors" description="Discover curated, high-potential ventures and diversify your portfolio with promising startups." />
              <FeatureCard icon={<Users />} title="For Mentors" description="Share your expertise with the next generation and help shape the future of innovative businesses." />
              <FeatureCard icon={<Handshake />} title="For Advisors" description="Provide expert financial guidance and connect with a network of high-growth companies and investors." />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Getting Started is Easy</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                  Three simple steps to join our thriving community.
                </p>
            </div>
            <div className="mx-auto grid gap-12 pt-12 sm:grid-cols-1 md:grid-cols-3">
                <StepCard number="1" title="Register" description="Choose your role and create a detailed profile to showcase your project, investment criteria, or expertise." />
                <StepCard number="2" title="Connect" description="Our platform helps you find the right matches. Browse profiles, send requests, and start conversations." />
                <StepCard number="3" title="Grow" description="Collaborate to build successful ventures, grow your investments, and make a lasting impact in the industry." />
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline text-primary">What Our Users Say</h2>
            <p className="max-w-[900px] mx-auto text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body mb-12">
              Hear from members who have found success on our platform.
            </p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-7xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4 p-4">
                  <Card className="h-full border-2 border-primary/10 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                      <Quote className="w-12 h-12 text-primary/20 mb-4" />
                      <blockquote className="text-lg italic text-foreground/80 flex-grow">"CapitalMitra connected me with an investor who not only funded my startup but also became a key mentor. It's more than just a platform; it's a community."</blockquote>
                      <div className="flex items-center gap-4 pt-6 mt-6 border-t">
                        <Avatar className="h-12 w-12">
                           <AvatarImage src="/asd.jpg" data-ai-hint="woman portrait" />
                           <AvatarFallback>FA</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg font-headline">Fatima Ahmed</p>
                          <p className="text-sm text-muted-foreground">Founder, Sobji Arat</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4 p-4">
                  <Card className="h-full border-2 border-primary/10 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                        <Quote className="w-12 h-12 text-primary/20 mb-4" />
                        <blockquote className="text-lg italic text-foreground/80 flex-grow">"As an investor, the quality of projects on CapitalMitra is outstanding. I've diversified my portfolio with ventures I truly believe in."</blockquote>
                      <div className="flex items-center gap-4 pt-6 mt-6 border-t">
                        <Avatar className="h-12 w-12">
                           <AvatarImage src="/asd.jpg" data-ai-hint="man portrait" />
                           <AvatarFallback>RK</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg font-headline">Rahim Khan</p>
                          <p className="text-sm text-muted-foreground">Angel Investor</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                 <CarouselItem className="md:basis-1/2 lg:basis-1/4 p-4">
                  <Card className="h-full border-2 border-primary/10 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                        <Quote className="w-12 h-12 text-primary/20 mb-4" />
                        <blockquote className="text-lg italic text-foreground/80 flex-grow">"Mentoring on this platform has been incredibly rewarding. It's fulfilling to share my experience and see new businesses thrive."</blockquote>
                      <div className="flex items-center gap-4 pt-6 mt-6 border-t">
                        <Avatar className="h-12 w-12">
                           <AvatarImage src="/asd.jpg" data-ai-hint="woman professional" />
                           <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg font-headline">Sadia Chowdhury</p>
                          <p className="text-sm text-muted-foreground">Industry Mentor</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                 <CarouselItem className="md:basis-1/2 lg:basis-1/4 p-4">
                  <Card className="h-full border-2 border-primary/10 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                        <Quote className="w-12 h-12 text-primary/20 mb-4" />
                        <blockquote className="text-lg italic text-foreground/80 flex-grow">"The insights and connections I've gained here have been invaluable for my clients' portfolios. A must-have tool for financial advisors."</blockquote>
                      <div className="flex items-center gap-4 pt-6 mt-6 border-t">
                        <Avatar className="h-12 w-12">
                           <AvatarImage src="/asd.jpg" data-ai-hint="man professional" />
                           <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg font-headline">Al-Amin Islam</p>
                          <p className="text-sm text-muted-foreground">Financial Advisor</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
    <Card className="text-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full text-primary">
                {React.cloneElement(icon, { className: "h-8 w-8" })}
            </div>
        </div>
        <h3 className="font-headline text-lg mb-2 font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
)

const StepCard = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-16 w-16 text-2xl font-bold border-4 border-primary/20">{number}</div>
      <h3 className="text-xl font-bold font-headline mt-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
)
