import { ButtonAsLink } from "@solid/ui/button";
import { type Component, createMemo, For, Show } from "solid-js";
import { routeLists } from "src/routes";
import type { AstroGlobal } from "astro";

const SidebarLinks: Component<{ url: AstroGlobal["url"] }> = (props) => {
  const pathname = props.url.pathname;
  console.log("🚀 ~ file: SidebarLinks.tsx:8 ~ pathname:", pathname);

  const checkActiveURL = (href: string = "") =>
    href === pathname ? true : false;
  const checkGroupURL = (href: string = ""): boolean =>
    pathname.includes(href) ? true : false;

  const memoizedRoute = createMemo(() => {
    const withActiveRoute = routeLists.map((parent) => ({
      ...parent,
      active: parent.children
        ? checkGroupURL(parent.href)
        : checkActiveURL(parent.href),
      children: parent.children
        ? parent.children.map((child) => ({
            ...child,
            active: checkActiveURL(child.href),
          }))
        : undefined,
    }));

    return withActiveRoute;
  });

  return (
    <ul class="flex flex-col text-sm font-medium">
      <For each={memoizedRoute()}>
        {(route) => (
          <li class="relative">
            <ButtonAsLink
              variant={
                route.active ? "sidebarLinkActive" : "sidebarLinkInactive"
              }
              class="w-full justify-normal rounded-none px-10 py-6"
              href={route.href}
            >
              <div class="flex items-center space-x-2">
                <span class="mr-4 text-2xl text-brand-700">{route.icon}</span>
                <span>{route.name}</span>
              </div>
            </ButtonAsLink>

            <Show when={route.active}>
              <div class="absolute right-0 top-px h-full w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
            </Show>
          </li>
        )}
      </For>
    </ul>
  );
};

export default SidebarLinks;
