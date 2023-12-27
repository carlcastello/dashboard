import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import Image from "next/image";

import NavLinks from "./components/nav-links";
import ProfileNav from "./components/profile-nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const drawerWidth: number = 300;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box className="px-4">
            <Box className="flex justify-center py-8 align-middle">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={150}
                height={24}
                priority
              />
            </Box>
            <Divider />
            <NavLinks />
          </Box>
        </Drawer>
      </Box>
      <Box component="main" className="flex w-full p-4">
        <ProfileNav />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
