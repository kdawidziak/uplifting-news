import {
  LucideIcon,
  Sparkles,
  Drama,
  FileText,
  HeartPulse,
  FlaskConical,
  BriefcaseBusiness,
} from "lucide-react"

const createRoute = (path: string, name?: string, icon?: LucideIcon) => ({ path, name, icon })

export const SUPPORTED_ROUTES = {
  // NEWS LISTING
  HOME: createRoute("/", "Latest News", Sparkles),
  // NEWS DETAILS
  DETAILS: createRoute("/[id]/[slug]"),
  // CATEGORY
  BUSINESS: createRoute("/category/business", "Business", BriefcaseBusiness),
  ENTERTAINMENT: createRoute("/category/entertainment", "Entertainment", Drama),
  HEALTH: createRoute("/category/health", "Health", HeartPulse),
  SCIENCE: createRoute("/category/science", "Science", FlaskConical),
  // LEGAL
  PRIVACY_POLICY: createRoute("/privacy-policy", "Privacy Policy", FileText),
  TERMS_OF_SERVICE: createRoute("/terms-of-service", "Terms of Service", FileText),
} as const
