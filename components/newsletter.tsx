"use client"

import * as React from "react"
import { toast } from "sonner"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { subscribe } from "@/app/actions"

import { SUPPORTED_ROUTES } from "@/lib/navigation"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
})

export function Newsletter() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const response = await subscribe(values)

    if (response.success) {
      toast.success("Thank you for subscribing to our newsletter!", {
        duration: 8000,
        description: "We send you a confirmation email. Please check your inbox and confirm your subscription.",
      })
    } else {
      toast.error("Oops, something went wrong...", {
        duration: 8000,
        description: "Try again later.",
      })
    }

    form.reset()
  }

  return (
    <Card className="text-center items-center bg-muted/50">
      <CardHeader>
        <CardTitle>
          <h3 className="text-4xl">Subscribe to our newsletter.</h3>
        </CardTitle>
        <CardDescription>You will never miss our latest news. Once a week. Every Monday.</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormDescription className="text-balance text-left text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
                    By clicking subscribe, you agree to our <Link target="_blank" href={SUPPORTED_ROUTES.TERMS_OF_SERVICE.path}>Terms of Service</Link>{" "}and <Link target="_blank" href={SUPPORTED_ROUTES.PRIVACY_POLICY.path}>Privacy Policy</Link>.
                  </FormDescription>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            />

            <Button type="submit" className="ml-4" disabled={form.formState.isSubmitting}>Subscribe</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
