import { Box, Stack, Typography } from "@mui/material";
import Card from "./Card";
import ExpireData from "./ExpireData";

const CardDetails = () => {
  return (
    <Box
      component={"aside"}
      sx={{
        gridArea: "side",
        borderRight: "0",
        borderTop: "1px solid gray",
        borderBottom: "1px solid gray",
        marginBlockStart: "1rem",
      }}
    >
      <Stack
        sx={{
          border: "1px solid gray",
          marginBlock: "3rem",
          marginInline: "2rem",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ paddingBlockStart: "1.5rem", paddingInlineStart: "1.5rem" }}>
          <Typography sx={{ color: "white", fontFamily: "monospace" }}>
            Card Details
          </Typography>
        </Box>
        <Card />
        <Box sx={{ marginInlineStart: "2rem" }}>
          <Typography
            sx={{ color: "white", fontSize: "0.9rem", fontFamily: "monospace" }}
          >
            CARD NUMBER
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "1.2rem",
              fontFamily: "monospace",
              paddingBlockStart: "0.2rem",
            }}
          >
            **** **** ** 0728
          </Typography>
        </Box>
        <ExpireData />
      </Stack>
    </Box>
  );
};

export default CardDetails;
