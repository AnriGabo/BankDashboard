import { Box, Divider, Stack, Typography } from "@mui/material";

const ExpireData = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        marginInline: "2rem",
        marginBlockStart: "1rem",
        gap: "1rem",
        color: "white",
      }}
    >
      <Box>
        <Typography>Expire Data</Typography>
        <Divider sx={{ border: "1px solid gray" }} />

        <Typography sx={{ justifyContent: "center", display: "flex" }}>
          08/28
        </Typography>
      </Box>
      <Box>
        <Typography>CVV</Typography>
        <Divider sx={{ border: "1px solid gray" }} />
        <Typography sx={{ justifyContent: "center", display: "flex" }}>
          08/28
        </Typography>
      </Box>
      <Box>
        <Typography>LEVEL</Typography>
        <Divider sx={{ border: "1px solid gray" }} />
        <Typography sx={{ justifyContent: "center", display: "flex" }}>
         02
        </Typography>
      </Box>
    </Stack>
  );
};

export default ExpireData;
