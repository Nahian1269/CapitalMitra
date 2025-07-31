import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Target, Users, Quote } from "lucide-react";

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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                    CapitalMitra Connect: Your All-in-One Investment Solution
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl font-body">
                    Connecting ambitious clients with savvy investors and experienced mentors. Unlock your potential and achieve your financial goals with us.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/login-selector">
                      Join Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="investment meeting"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Roles</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Find Your Place in Our Ecosystem</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                  Whether you're seeking funding, looking to invest in the next big thing, or eager to share your expertise, CapitalMitra has a place for you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Target className="h-12 w-12 mb-4 text-accent" />
                  <CardTitle className="font-headline">Clients</CardTitle>
                  <CardDescription>Bring your innovative ideas and projects to life by connecting with the right investors and mentors who believe in your vision.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Briefcase className="h-12 w-12 mb-4 text-accent" />
                  <CardTitle className="font-headline">Investors</CardTitle>
                  <CardDescription>Discover and fund promising ventures. Access a curated list of projects and startups with high growth potential.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 mb-4 text-accent" />
                  <CardTitle className="font-headline">Mentors</CardTitle>
                  <CardDescription>Guide the next generation of entrepreneurs. Share your knowledge, experience, and network to help shape successful businesses.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Getting Started is Easy</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                  Three simple steps to join our thriving community.
                </p>
            </div>
            <div className="mx-auto grid gap-12 pt-12 sm:grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-16 w-16 text-2xl font-bold">1</div>
                  <h3 className="text-xl font-bold font-headline">Register</h3>
                  <p className="text-muted-foreground">Choose your role and create a detailed profile to showcase your project, investment criteria, or expertise.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-16 w-16 text-2xl font-bold">2</div>
                  <h3 className="text-xl font-bold font-headline">Connect</h3>
                  <p className="text-muted-foreground">Our platform helps you find the right matches. Browse profiles, send requests, and start conversations.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-16 w-16 text-2xl font-bold">3</div>
                  <h3 className="text-xl font-bold font-headline">Grow</h3>
                  <p className="text-muted-foreground">Collaborate to build successful ventures, grow your investments, and make a lasting impact in the industry.</p>
                </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
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
                <CarouselItem className="md:basis-1/2">
                  <Card>
                    <CardContent className="p-6">
                      <Quote className="w-8 h-8 text-accent mb-4" />
                      <p className="mb-4">"CapitalMitra connected me with an investor who not only funded my startup but also became a key mentor. It's more than just a platform; it's a community."</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                           <AvatarImage src="https://placehold.co/40x40.png" />
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
                <CarouselItem className="md:basis-1/2">
                  <Card>
                    <CardContent className="p-6">
                      <Quote className="w-8 h-8 text-accent mb-4" />
                      <p className="mb-4">"As an investor, the quality of projects on CapitalMitra is outstanding. I've diversified my portfolio with ventures I truly believe in."</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                           <AvatarImage src="https://placehold.co/40x40.png" />
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
                 <CarouselItem className="md:basis-1/2">
                  <Card>
                    <CardContent className="p-6">
                      <Quote className="w-8 h-8 text-accent mb-4" />
                      <p className="mb-4">"Mentoring on this platform has been incredibly rewarding. It's fulfilling to share my experience and see new businesses thrive with my guidance."</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                           <AvatarImage src="https://placehold.co/40x40.png" />
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
