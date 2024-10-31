import { Navbar } from "@/components/navbar";
import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

export const HEADER_HEIGHT = 60;

export function Layout() {
  return (
    <AppShell header={{ height: HEADER_HEIGHT }} padding="md">
      <Navbar />
      <AppShell.Main className="flex flex-col">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
