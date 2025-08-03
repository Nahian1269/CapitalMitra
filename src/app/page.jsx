import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Target, Users, Quote, CheckCircle } from "lucide-react";

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
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                    Find Your Perfect Investment Match
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl font-body">
                    CapitalMitra connects ambitious clients with savvy investors and experienced mentors. Unlock your potential and achieve your financial goals with us.
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
              <Image
                src="/images.jpeg"
                width="650"
                height="450"
                alt="Hero"
                data-ai-hint="collaboration business meeting"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">For Every Role in the Ecosystem</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                  We provide tailored tools and opportunities for clients, investors, and mentors to thrive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none">
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="flex flex-col items-center text-center">
                  <Target className="h-12 w-12 mb-4 text-accent" />
                  <CardTitle className="font-headline">For Clients</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" /><span>Connect with investors who match your vision.</span></p>
                    <p className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" /><span>Receive guidance from industry experts.</span></p>
                    <p className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" /><span>Secure the funding to bring your ideas to life.</span></p>
                </CardContent>
              </Card>
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                 <CardHeader className="flex flex-col items-center text-center">
                  <Briefcase className="h-12 w-12 mb-4 text-accent" />
                  <CardTitle className="font-headline">For Investors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" /><span>Discover curated, high-potential ventures.</span></p>
                    <p className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" /><span>Diversify your portfolio with promising startups.</span></p>
                    <p className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" /><span>Engage with innovative entrepreneurs.</span></p>
                </CardContent>
              </Card>
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                 <CardHeader className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 mb-4 text-accent" />
                  <CardTitle className="font-headline">For Mentors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" /><span>Share your expertise with the next generation.</span></p>
                    <p className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" /><span>Help shape the future of innovative businesses.</span></p>
                    <p className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" /><span>Expand your network and make an impact.</span></p>
                </CardContent>
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
                <CarouselItem className="md:basis-1/2 p-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="w-8 h-8 text-accent mb-4" />
                        <p className="mb-4">"CapitalMitra connected me with an investor who not only funded my startup but also became a key mentor. It's more than just a platform; it's a community."</p>
                      </div>
                      <div className="flex items-center gap-4 pt-4">
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
                      <div className="flex items-center gap-4 pt-4">
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
                      <div className="flex items-center gap-4 pt-4">
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
