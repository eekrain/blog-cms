import type { ParentComponent } from "solid-js";
import { isSidebarOpen, setSidebarOpen } from "@store/dashboard";

const MainLayout: ParentComponent<{}> = (props) => {
  return (
    <main
      class="min-h-screen bg-zinc-100 p-4 text-center transition-all duration-500"
      classList={{ "ml-[300px]": isSidebarOpen() }}
    >
      <button
        onClick={() => {
          setSidebarOpen((prev) => !prev);
        }}
      >
        tes open
      </button>
      {props.children}
    </main>
  );
};

export default MainLayout;
