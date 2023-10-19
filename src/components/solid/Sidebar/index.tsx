import { type Component } from "solid-js";
import { isSidebarOpen } from "@store/dashboard";
import SidebarLinks from "./SidebarLinks";
import type { AstroGlobal } from "astro";

const Sidebar: Component<{ url: AstroGlobal["url"] }> = (props) => {
  return (
    <aside
      class="fixed bottom-0 top-0 w-[300px] overflow-y-auto bg-white text-center transition-all duration-500 lg:left-0"
      classList={{ "-translate-x-full": !isSidebarOpen() }}
    >
      <div class="mt-[50px] text-center text-[26px] font-bold uppercase text-indigo-700 dark:text-white">
        Eka <span class="font-medium">CMS</span>
      </div>
      <div class="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />

      <ul class="flex flex-col space-y-2 text-sm font-medium">
        <SidebarLinks url={props.url} />
      </ul>
    </aside>
  );
};

export default Sidebar;
