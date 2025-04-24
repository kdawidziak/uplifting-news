import type { Metadata } from "next"
import { redirect } from "next/navigation"

import prisma from "@/lib/prisma"
import { SUPPORTED_ROUTES } from "@/lib/navigation"

import { Newsletter } from "@/components/newsletter"
import { NewsCard } from "@/components/news-card"
import { Pagination } from "@/components/pagination"

const NEWS_PER_PAGE = 12

const SUPPORTED_CATEGORY = {
  HEALTH: "health",
  ENTERTAINMENT: "entertainment",
  SCIENCE: "science",
  BUSINESS: "business",
} as const

type Params = Promise<{ category: string }>
type SearchParams = Promise<{ page?: string }>

export async function generateMetadata(props: {
  params: Params,
}): Promise<Metadata> {
  const params = await props.params

  const category = SUPPORTED_ROUTES[params.category.toUpperCase() as keyof typeof SUPPORTED_ROUTES]

  const title = `${category.name} | Uplifting News`
  const description = `A place to read positive and uplifting, feel good news stories from the ${category.name} category.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: category.path,
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
  searchParams?: SearchParams
}) {
  const params = await props.params
  if (!Object.values(SUPPORTED_CATEGORY).includes(params.category as typeof SUPPORTED_CATEGORY[keyof typeof SUPPORTED_CATEGORY])) {
    redirect("/")
  }

  const searchParams = await props.searchParams
  const page = searchParams?.page || "1"

  const [news, total] = await prisma.$transaction([
    prisma.news.findMany({
      take: NEWS_PER_PAGE,
      skip: (parseInt(page) - 1) * NEWS_PER_PAGE,
      where: {
        category: params.category.toUpperCase() as keyof typeof SUPPORTED_CATEGORY,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.news.count({
      where: {
        category: params.category.toUpperCase() as keyof typeof SUPPORTED_CATEGORY,
      },
    }),
  ])

  const totalPages = Math.ceil(total / NEWS_PER_PAGE)

  if (Number(page) > totalPages) {
    redirect(`/category/${params.category}`)
  }

  const firstHalf = news.slice(0, NEWS_PER_PAGE / 2)
  const secondHalf = news.slice(NEWS_PER_PAGE / 2, news.length)

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex items-center justify-between flex-wrap col-span-1 md:col-span-2 lg:col-span-3">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">{SUPPORTED_ROUTES[params.category.toUpperCase() as keyof typeof SUPPORTED_ROUTES].name}</h2>
          <p className="text-sm text-muted-foreground">Recently added news. Updated weekly.</p>
        </div>
      </div>

      {firstHalf.map((item => <NewsCard key={item.id} item={item} />))}

      <div className="col-span-1 md:col-span-2 lg:col-span-3 my-6">
        <Newsletter />
      </div>

      {secondHalf.map((item => <NewsCard key={item.id} item={item} />))}

      <div className="mt-6 col-span-1 md:col-span-2 lg:col-span-3">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
