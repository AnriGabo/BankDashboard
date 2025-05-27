import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Box, Stack, Typography } from "@mui/material";
import AnalyticsSidebar from "./SupportSideBar";
import ShopSidebar from "./ShopSidebar";
import Analytics from "./Analytics";

const SideBar = () => {
  return (
    //იქ წარმოვიდგინოთ რო უნდა იყოს ხაზი
    <Stack
      component={"aside"}
      sx={{
        gridArea: "sidebar",
        marginBlockStart: "1rem",
        border: "1px solid gray",
        paddingInlineStart: "1.5rem",
        paddingBlockStart: "1.5rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
        <HomeRoundedIcon sx={{ color: "white", fontSize: "1.7rem" }} />
        <Typography variant={"h6"} sx={{ color: "white" }}>
          Dashboard
        </Typography>
      </Box>
      <Analytics />
      <AnalyticsSidebar />
      <ShopSidebar />
    </Stack>
  );
};

export default SideBar;
