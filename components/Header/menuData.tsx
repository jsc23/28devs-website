import { Menu } from "@/types/menu";

const menuData: Menu[] = [

  {
    id: 3,
    title: "Help Center",
    path: "/contact",
    newTab: false,
  },
  {
    id: 33,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 4,
    title: "Apps for Zendesk",
    newTab: false,
    submenu: [
      {
      id: 11,
      title: "Incognito Auditor",
      path: "/incognito-auditor",
      newTab: false,
    },
    ],
  },
  {
    id: 33,
    title: "Resources",
    newTab: false,
    submenu: [
      {
      id: 11,
      title: "Blog",
      path: "/blog",
      newTab: false,
    },
    ],
  },
  
];
export default menuData;
