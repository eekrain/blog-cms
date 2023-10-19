import { BiRegularChat, BiRegularHomeAlt, BiRegularUser } from "solid-icons/bi";
import { RiDocumentDraftLine } from "solid-icons/ri";

export type Route = {
  name: string;
  href?: string;
  children?: Route[];
  icon?: any;
};

export const routeLists: Route[] = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: <BiRegularHomeAlt />,
  },
  {
    name: "Posts",
    href: "/admin/posts",
    icon: <RiDocumentDraftLine />,
    children: [
      {
        name: "All Posts",
        href: "/admin/posts",
      },
      {
        name: "Categories",
        href: "/admin/posts/categories",
      },
    ],
  },
  {
    name: "Comments",
    href: "/admin/comments",
    icon: <BiRegularChat />,
  },
  {
    name: "Accounts",
    href: "/admin/accounts",
    icon: <BiRegularUser />,
  },
];
