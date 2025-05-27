import { Box, Stack, Typography } from "@mui/material";
import AirplaneTicketRoundedIcon from "@mui/icons-material/AirplaneTicketRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';

const AnalyticsSidebar = () => {
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
        <AirplaneTicketRoundedIcon
          sx={{ fontSize: "1.7rem", color: "white" }}
        />
        <Typography sx={{ color: "white" }}>Tickets</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginBlockStart: "0.5rem",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        <SupportAgentRoundedIcon sx={{ fontSize: "1.7rem", color: "white" }} />
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
        <PeopleAltRoundedIcon sx={{ fontSize: "1.7rem", color: "white" }} />
        <Typography sx={{ color: "white" }}>Customers</Typography>
      </Box>
    </Stack>
  );
};

export default AnalyticsSidebar;
