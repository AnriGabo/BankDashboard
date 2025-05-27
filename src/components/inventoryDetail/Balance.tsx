import { Box, Stack, Typography } from "@mui/material";

const Balance = () => {
  return (
    <Stack
      sx={{
        flex: 1,
        gap: "1rem",
        paddingInlineStart: "1.8rem",
        paddingBlock: "1.8rem",
      }}
    >
      <Box>
        <Typography
          variant={"h5"}
          component={"p"}
          sx={{ fontSize: "0.9rem", fontWeight: "500" }}
        >
          Your Balance:
        </Typography>
      </Box>
      <Box>
        <Typography
          variant={"h5"}
          component={"p"}
          sx={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          $25,300
        </Typography>
      </Box>

      <Box>
        <Typography
          variant={"h5"}
          component={"p"}
          sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
        >
          3 cards
        </Typography>
      </Box>
    </Stack>
  );
};

export default Balance;
