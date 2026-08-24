"use client"

import { ShowcaseSection } from "@/components/shared"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsShowcase() {
  return (
    <ShowcaseSection
      id="tabs"
      title="Tabs"
      description="Organize content into switchable panels."
    >
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4 text-muted-foreground">
          A quick overview of your project metrics and recent activity.
        </TabsContent>
        <TabsContent value="analytics" className="mt-4 text-muted-foreground">
          Track performance trends and user engagement over time.
        </TabsContent>
        <TabsContent value="settings" className="mt-4 text-muted-foreground">
          Configure preferences, notifications, and account details.
        </TabsContent>
      </Tabs>
    </ShowcaseSection>
  )
}
