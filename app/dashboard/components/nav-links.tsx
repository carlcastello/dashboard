"use client";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard" },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
  },
  { name: "Customers", href: "/dashboard/customers" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <List>
      {links.map(({ name, href }) => (
        <ListItem key={name} disablePadding>
          <Link href={href} className="w-full">
            <ListItemButton selected={href === pathname}>
              {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
              <ListItemText primary={name} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavLinks;
