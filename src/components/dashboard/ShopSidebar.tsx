import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import ProductionQuantityLimitsRoundedIcon from "@mui/icons-material/ProductionQuantityLimitsRounded";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import { Box, Stack, Typography } from "@mui/material";

const ShopSidebar = () => {
  return (
    <Stack sx={{ paddingBlockStart: "3rem" }}>
      <Typography
        sx={{ color: "gray", fontWeight: "bold", fontSize: "0.8rem" }}
      >
        SUPPORT
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginBlockStart: "1rem",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        <ProductionQuantityLimitsRoundedIcon
          sx={{ fontSize: "1.7rem", color: "white" }}
        />
        <Typography sx={{ color: "white" }}>Products</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginBlockStart: "0.5rem",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        <ListAltRoundedIcon sx={{ fontSize: "1.7rem", color: "white" }} />
        <Typography sx={{ color: "white" }}>Agents</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginBlockStart: "0.5rem",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        <ReportGmailerrorredRoundedIcon
          sx={{ fontSize: "1.7rem", color: "white" }}
        />
        <Typography sx={{ color: "white" }}>Reports</Typography>
      </Box>
    </Stack>
  );
};

export default ShopSidebar;
