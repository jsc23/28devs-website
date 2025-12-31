import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 4,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Help Center",
    path: "/contact",
    newTab: false,
  },
  {
    id: 33,
    title: "Pricing",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Apps for Zendesk",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
    ],
  },
    {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  
];
export default menuData;
