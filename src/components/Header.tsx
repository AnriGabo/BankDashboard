import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Profile from "../images/profilePicture.jpg";

const Header = () => {
  return (
    <Stack
      component={"header"}
      sx={{
        gridArea: "header",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginInline: "1.5rem",
        marginBlockStart: "0.5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "0.7rem",
          alignItems: "center",
        }}
      >
        <AccountBalanceIcon sx={{ fontSize: "3rem", color: "white" }} />
        <Typography
          variant={"h5"}
          sx={{ color: "white", fontFamily: "'Merriweather', serif" }}
        >
          HBank
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "0.7rem", alignItems: "center" }}>
        <Box sx={{ "&:hover": { transform: "scale(2)", cursor:"pointer",paddingInlineEnd:"1rem",paddingBlockStart:"0.2rem" } }}>
          <Avatar src={Profile}></Avatar>
        </Box>
        <Typography
          variant={"h6"}
          sx={{ color: "white", fontFamily: "'Merriweather', serif" }}
        >
          Anri Gabaidze
        </Typography>
      </Box>
    </Stack>
  );
};

export default Header;
