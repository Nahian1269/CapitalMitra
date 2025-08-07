import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Target, Users, Quote, CheckCircle, Handshake } from "lucide-react";
import React from 'react';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <Image
                src="https://placehold.co/1920x1080.png"
                layout="fill"
                objectFit="cover"
                alt="Professional business meeting"
                data-ai-hint="professional business meeting"
                className="opacity-5"
            />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                    Where Vision Meets Capital
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl font-body">
                    CapitalMitra is the premier platform connecting ambitious founders with strategic investors and expert mentors to build the future of business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/login-selector">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#how-it-works">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                 <Image
                    src="https://placehold.co/600x400.png"
                    width="600"
                    height="400"
                    alt="Hero"
                    data-ai-hint="collaboration business"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                  />
              </div>
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
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 p-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="w-8 h-8 text-accent mb-4" />
                        <p className="mb-4">"CapitalMitra connected me with an investor who not only funded my startup but also became a key mentor. It's more than just a platform; it's a community."</p>
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <Avatar>
                           <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="woman portrait" />
                           <AvatarFallback>JC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Jane Cooper</p>
                          <p className="text-sm text-muted-foreground">Founder, Tech Innovators</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 p-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="w-8 h-8 text-accent mb-4" />
                        <p className="mb-4">"As an investor, the quality of projects on CapitalMitra is outstanding. I've diversified my portfolio with ventures I truly believe in."</p>
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <Avatar>
                           <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="man portrait" />
                           <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">John Doe</p>
                          <p className="text-sm text-muted-foreground">Angel Investor</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                 <CarouselItem className="md:basis-1/2 p-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="w-8 h-8 text-accent mb-4" />
                        <p className="mb-4">"Mentoring on this platform has been incredibly rewarding. It's fulfilling to share my experience and see new businesses thrive with my guidance."</p>
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <Avatar>
                           <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="woman professional" />
                           <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Sarah Adams</p>
                          <p className="text-sm text-muted-foreground">Industry Mentor</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
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
            <div className="p-4 bg-accent/10 rounded-full text-accent">
                {React.cloneElement(icon, { className: "h-8 w-8" })}
            </div>
        </div>
        <CardTitle className="font-headline text-lg mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </Card>
)

const StepCard = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-16 w-16 text-2xl font-bold border-4 border-primary/20">{number}</div>
      <h3 className="text-xl font-bold font-headline mt-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
)
