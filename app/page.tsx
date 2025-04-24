import prisma from "@/lib/prisma"

import { Newsletter } from "@/components/newsletter"
import { NewsCard } from "@/components/news-card"
import { Pagination } from "@/components/pagination"

const NEWS_PER_PAGE = 12

type SearchParams = Promise<{ page?: string }>

export default async function Page(props: {
  searchParams?: SearchParams
}) {
  const searchParams = await props.searchParams
  const page = searchParams?.page || "1"

  const [news, total] = await prisma.$transaction([
    prisma.news.findMany({
      take: NEWS_PER_PAGE,
      skip: (parseInt(page) - 1) * NEWS_PER_PAGE,
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.news.count(),
  ])

  const totalPages = Math.ceil(total / NEWS_PER_PAGE)

  const firstHalf = news.slice(0, NEWS_PER_PAGE / 2)
  const secondHalf = news.slice(NEWS_PER_PAGE / 2, news.length)

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex items-center justify-between flex-wrap col-span-1 md:col-span-2 lg:col-span-3">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Latest News</h2>
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
