import { createSignal } from "solid-js";

export const [isSidebarOpen, setSidebarOpen] = createSignal(true);
export const [isSidebarCollapsed, setSidebarCollapsed] = createSignal(false);
