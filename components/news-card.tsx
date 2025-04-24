import Image from "next/image"
import Link from "next/link"
import type { News } from "@prisma/client"
import { ChevronRight } from "lucide-react"

import { toVisibleDate } from "@/lib/utils"
import { SUPPORTED_ROUTES } from "@/lib/navigation"

import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function NewsCard({
  item,
}: {
  item: News
}) {
  return (
    <Card className="relative pt-0 bg-muted/50">
      <div className="relative">
        <div className="aspect-3/2">
          <Image src={item.image} alt={item.imageAlt!} fill className="rounded-t-xl object-cover pointer-events-none" />
        </div>
      </div>

      <CardHeader>
        <CardTitle>
          <h2 className="line-clamp-2 leading-normal">
            <Link href={SUPPORTED_ROUTES.DETAILS.path} as={`/${item.id}/${item.slug}`} passHref>
              <span className="absolute inset-0 z-20 rounded-xl"></span>
              <span className="relative z-10">{item.title}</span>
            </Link>
          </h2>
        </CardTitle>

        <CardDescription className="mt-1">
          <div className="order-first">
            <time dateTime="2022-09-02">
              <span>{toVisibleDate(item.createdAt)}</span>
            </time>
            <span className="ml-1">&#x2022; {item.readTime} min read.</span>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-4 leading-normal text-sm">{item.description}</p>
      </CardContent>

      <CardFooter>
        <div aria-hidden="true" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 text-primary underline-offset-4 hover:underline">
          Read article <ChevronRight className="size-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
