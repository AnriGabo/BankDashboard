import BlurCircularRoundedIcon from "@mui/icons-material/BlurCircularRounded";
import StackedLineChartRoundedIcon from "@mui/icons-material/StackedLineChartRounded";
import { Box, Stack, Typography } from "@mui/material";


const Analytics = () => {
  return (
    <Stack sx={{ paddingBlockStart: "3rem" }}>
      <Typography
        sx={{ color: "gray", fontWeight: "bold", fontSize: "0.8rem" }}
      >
        ANALYTICS
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginBlockStart: "1rem",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        <StackedLineChartRoundedIcon
          sx={{ fontSize: "1.7rem", color: "white" }}
        />
        <Typography sx={{ color: "white" }}>Performance</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginBlockStart: "0.5rem",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        <BlurCircularRoundedIcon sx={{ fontSize: "1.7rem", color: "white" }} />
        <Typography sx={{ color: "white" }}>Hotjar</Typography>
      </Box>
    </Stack>
  );
};

export default Analytics;
