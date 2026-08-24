import { Plus } from "lucide-react"

import { ShowcaseSection } from "@/components/shared"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardsShowcase() {
  return (
    <ShowcaseSection
      id="cards"
      title="Cards"
      description="Group related content in structured containers."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>
              Track progress across your active projects.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              12 active projects, 3 due this week.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm">View all</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create New</CardTitle>
            <CardDescription>
              Start a new project from a template.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Choose from 8 pre-built templates.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="outline">
              <Plus />
              New project
            </Button>
          </CardFooter>
        </Card>
      </div>
    </ShowcaseSection>
  )
}
