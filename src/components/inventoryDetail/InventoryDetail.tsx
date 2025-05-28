import { Box, Stack, Typography } from "@mui/material";
import DetailsButton from "./DetailsButton";
import Balance from "./Balance";
import ShoppingCard from "./ShoppingCard";
import ShoppingCard2 from "./ShoppingCard2";

const InventoryDetail = () => {
  return (
    <Box
      sx={{
        gridArea: "main",
        borderTop: "1px solid gray",
        borderRight: "1px solid gray",
        marginBlockStart: "1rem",
      }}
    >
      <Stack
        sx={{ border: "1px solid gray", margin: "2rem", borderRadius: "10px" }}
      >
        <Box sx={{ paddingBlockStart: "1rem", paddingInlineStart: "1.5rem" }}>
          <Typography component={"h6"} variant={"h6"} sx={{ color: "white" }}>
            Inventory Details
          </Typography>
        </Box>

        <Stack
          sx={{
            backgroundColor: "white",
            marginInline: "1.5rem",
            marginBlockStart: "2.5rem",
            borderRadius: "10px",
            gap: "1rem",
            flexDirection: "row",
          }}
        >
          <Balance />
          <DetailsButton />
        </Stack>

        <Box sx={{ paddingInlineStart: "1.4rem", marginBlockStart: "2.4rem" }}>
          <Typography component={"h6"} variant={"h6"} sx={{ color: "white" }}>
            Inventory Details
          </Typography>
        </Box>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            marginInline: "2rem",
          }}
        >
          <ShoppingCard />
          <ShoppingCard2 />
          <ShoppingCard2 />
        </Box>
      </Stack>
    </Box>
  );
};

export default InventoryDetail;
