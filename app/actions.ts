"use server"

import { z } from "zod"

import prisma from "@/lib/prisma"

const FormSchema = z.object({
  email: z.string().email(),
})

export async function subscribe(data: z.infer<typeof FormSchema>) {
  const result = FormSchema.safeParse(data)

  if (result.success) {
    await prisma.subscriber.upsert({
      where: {
        email: result.data.email,
      },
      update: {},
      create: {
        email: result.data.email,
      },
    })
  }

  return {
    success: result.success,
  }
}
