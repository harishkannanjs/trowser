'use client';

import { AppSidebar } from "@/components/app-sidebar"
// import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { columns, Expense } from "@/components/columns"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AddExpense } from "@/components/AddExpense";
import { useUserExpensesStore } from "@/store/userExpensesStore";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

export default function Page() {
  const { expenses, isFetchingExpenses, fetchUserExpenses } = useUserExpensesStore();
  
  useEffect(() => {
    fetchUserExpenses();
  }, [fetchUserExpenses]);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              {/* Will add later if i want to add chart */}
              {/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div> */}
              <AddExpense />
              <div className="px-4 lg:px-6">
                {
                  !isFetchingExpenses ? (
                    <DataTable columns={columns} data={expenses as Expense[]} />
                  ): (
                    <div className="w-full h-full flex justify-center items-center mx-auto">
                      <Loader2 className="animate-spin mx-auto" size={64} />
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
