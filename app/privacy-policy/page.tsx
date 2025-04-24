import type { Metadata } from "next"

import { SUPPORTED_ROUTES } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Privacy Policy | Uplifting News",
  description: "Read our Privacy Policy and how it relates to you.",
  openGraph: {
    url: SUPPORTED_ROUTES.PRIVACY_POLICY.path,
    type: "website",
    locale: "en_US",
    title: "Privacy Policy | Uplifting News",
    description: "Read our Privacy Policy and how it relates to you.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Uplifting News",
    description: "Read our Privacy Policy and how it relates to you.",
  },
}

export default function Page() {
  return (
    <div className="mt-8 prose max-w-none prose-img:rounded-xl prose-img:max-h-64 prose-img:object-cover prose-img:w-full prose-img:mx-auto prose-figcaption:text-center dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p><em>Last Updated: YYYY-MM-DD</em></p>

      <h2>1. Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor felis vel diam mollis, quis feugiat diam iaculis. Nunc eu dui id felis dignissim pellentesque id vitae risus. Vivamus euismod porta magna, sit amet pellentesque ipsum finibus in. Morbi at turpis nulla. Aliquam tellus justo, cursus vitae semper sit amet, tristique eu ligula.</p>

      <h2>2. Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor felis vel diam mollis, quis feugiat diam iaculis. Nunc eu dui id felis dignissim pellentesque id vitae risus. Vivamus euismod porta magna, sit amet pellentesque ipsum finibus in. Morbi at turpis nulla. Aliquam tellus justo, cursus vitae semper sit amet, tristique eu ligula.</p>
      <ul>
        <li>Lorem Ipsum,</li>
        <li>Lorem Ipsum,</li>
        <li>Lorem Ipsum.</li>
      </ul>

      <h2>3. Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor felis vel diam mollis, quis feugiat diam iaculis. Nunc eu dui id felis dignissim pellentesque id vitae risus. Vivamus euismod porta magna, sit amet pellentesque ipsum finibus in. Morbi at turpis nulla. Aliquam tellus justo, cursus vitae semper sit amet, tristique eu ligula.</p>
    </div>
  )
}
