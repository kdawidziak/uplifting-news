"use client"

import { useSearchParams } from "next/navigation"

import {
  Pagination as UIPagination,
  PaginationContent as UIPaginationContent,
  PaginationItem as UIPaginationItem,
  PaginationLink as UIPaginationLink,
  PaginationNext as UIPaginationNext,
  PaginationPrevious as UIPaginationPrevious,
} from "@/components/ui/pagination"

export function Pagination({
  totalPages,
}: { totalPages: number }) {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1

  const isPreviousDisabled = currentPage <= 1
  const isNextDisabled = currentPage >= totalPages

  return (
    <UIPagination>
      <UIPaginationContent>
        <UIPaginationItem>
          <UIPaginationPrevious
            href={{
              query: {
                page: currentPage - 1,
              },
            }}
            tabIndex={
              isPreviousDisabled
                ? -1
                : undefined
            }
            aria-disabled={isPreviousDisabled}
            className={
              isPreviousDisabled
                ? "pointer-events-none opacity-50"
                : undefined
            }
          />
        </UIPaginationItem>
        <UIPaginationItem>
          <UIPaginationLink href={{
            query: {
              page: currentPage,
            },
          }}
          >
            {currentPage}
          </UIPaginationLink>
        </UIPaginationItem>
        <UIPaginationItem>
          <UIPaginationNext
            href={{
              query: {
                page: currentPage + 1,
              },
            }}
            tabIndex={
              isNextDisabled
                ? -1
                : undefined
            }
            aria-disabled={isNextDisabled}
            className={
              isNextDisabled
                ? "pointer-events-none opacity-50"
                : undefined
            }
          />
        </UIPaginationItem>
      </UIPaginationContent>
    </UIPagination>
  )
}
