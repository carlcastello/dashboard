import {
  Avatar,
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
} from "@mui/material";

const ProfileNav = () => {
  return (
    <Box className="fixed right-4 flex items-center">
      <FormControl className="rounded-full bg-slate-100 py-1 pr-4">
        <Input
          id="search"
          startAdornment={
            <InputAdornment position="start">
              <Button
                className="w-fit rounded-l-full pl-4 pr-3 hover:bg-slate-100"
                sx={{ minWidth: 0 }}
              >
                O
              </Button>
            </InputAdornment>
          }
          placeholder="Search..."
          disableUnderline
        />
      </FormControl>
      <Avatar></Avatar>
    </Box>
  );
};

export default ProfileNav;
