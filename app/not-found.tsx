import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="container flex min-h-[calc(100vh-16rem)] items-center justify-center py-12">
      <Card className="max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-muted p-4">
              <span className="text-4xl">404</span>
            </div>
          </div>
          <h1 className="mb-2 text-2xl font-bold">Page Not Found</h1>
          <p className="mb-6 text-muted-foreground">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button asChild variant="default">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/work">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View Work
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
