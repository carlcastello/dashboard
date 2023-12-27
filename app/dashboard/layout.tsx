import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import Image from "next/image";
import NavLinks from "./nav-links";

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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
