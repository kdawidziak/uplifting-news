import type { Metadata } from "next"
import { redirect } from "next/navigation"

import prisma from "@/lib/prisma"
import { toVisibleDate } from "@/lib/utils"
import { SUPPORTED_ROUTES } from "@/lib/navigation"

import { Newsletter } from "@/components/newsletter"
import { NewsCard } from "@/components/news-card"
import { Separator } from "@/components/ui/separator"

type Params = Promise<{ id: string }>

export async function generateMetadata(props: {
  params: Params,
}): Promise<Metadata> {
  const params = await props.params

  const news = await prisma.news.findUnique({
    where: {
      id: params.id,
    },
  })

  const title = `${news?.title} | Uplifting News`
  const description = news?.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: SUPPORTED_ROUTES.DETAILS.path
        .replace("[id]", news?.id as string)
        .replace("[slug]", news?.slug as string),
      type: "website",
      locale: "en_US",
    },
    twitter: {
      title,
      description,
      card: "summary",
    },
  }
}

export default async function Page(props: {
  params: Params
}) {
  const params = await props.params

  const news = await prisma.news.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!news) {
    redirect("/")
  }

  const suggestions = await prisma.news.findMany({
    where: {
      category: news.category,
      id: {
        not: news.id,
      },
    },
    take: 3,
  })

  return (
    <div>
      <article>
        <header className="flex flex-col">
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {news.title}
          </h1>

          <div className="order-first flex items-center text-base gap-1 text-zinc-500 dark:text-zinc-400">
            <time dateTime="2022-09-02" className="flex items-center">
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
              <span className="ml-3">{toVisibleDate(news.createdAt)}</span>
            </time>
            <span>&#x2022; {news.readTime} min read.</span>
          </div>
        </header>

        <div className="mt-8 prose max-w-none prose-img:rounded-xl prose-img:max-h-96 prose-img:object-cover prose-img:w-full prose-img:mx-auto prose-figcaption:text-center dark:prose-invert">
          <p>{news.description}</p>

          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={news.image} alt={news.imageAlt as string} />
            <figcaption>
              {news.imageCaption}
            </figcaption>
          </figure>

        </div>

        <div className="mt-8 prose max-w-none prose-img:rounded-xl prose-img:max-h-64 prose-img:object-cover prose-img:w-full prose-img:mx-auto prose-figcaption:text-center dark:prose-invert" dangerouslySetInnerHTML={{ __html: news.content as string }} />
      </article>

      <div className="mt-12">
        <Separator />

        {suggestions.length > 0 && (
          <>
            <div className="mt-12 flex items-center justify-between flex-wrap">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">Latest &quot;{SUPPORTED_ROUTES[news.category].name}&quot; News</h2>
                <p className="text-sm text-muted-foreground">Recently added news. Updated weekly.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
              {suggestions.map((item => <NewsCard key={item.id} item={item} />))}
            </div>
          </>
        )}

        <div className="mt-12">
          <Newsletter />
        </div>
      </div>
    </div>
  )
}
