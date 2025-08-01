"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AuthLayout } from "@/components/auth-layout";
import { useToast } from "@/hooks/use-toast";

const interests = [
  { id: "tech", label: "Technology" },
  { id: "healthcare", label: "Healthcare" },
  { id: "realestate", label: "Real Estate" },
  { id: "finance", label: "Finance" },
  { id: "sustainability", label: "Sustainability" },
];

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  interests: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one interest.",
  }),
  portfolioSize: z.string().min(1, { message: "Please select a portfolio size." }),
});

export default function InvestorRegisterPage() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      interests: [],
      portfolioSize: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    toast({
      title: "Registration Successful",
      description: "Your investor account has been created.",
    });
  }

  return (
    <AuthLayout>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Create your Investor Account</CardTitle>
          <CardDescription>Provide your details to find investment opportunities.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField control={form.control} name="fullName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input placeholder="Jane Smith" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl><Input placeholder="name@example.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField control={form.control} name="password" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl><Input type="password" placeholder="••••••••" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField control={form.control} name="interests" render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Investment Interests</FormLabel>
                      <FormDescription>Select areas you are interested in investing in.</FormDescription>
                    </div>
                    {interests.map((item) => (
                      <FormField key={item.id} control={form.control} name="interests" render={({ field }) => (
                          <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange(field.value?.filter((value) => value !== item.id));
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField control={form.control} name="portfolioSize" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio Size</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select a range" /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="<50k">&lt; $50,000</SelectItem>
                        <SelectItem value="50k-250k">$50,000 - $250,000</SelectItem>
                        <SelectItem value="250k-1m">$250,000 - $1M</SelectItem>
                        <SelectItem value="1m+">&gt; $1M</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Create Account</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login/investor" className="font-semibold text-primary hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
}
