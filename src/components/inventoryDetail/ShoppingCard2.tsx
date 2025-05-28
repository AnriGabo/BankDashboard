import { Box, Stack, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const ShoppingCard2 = () => {
  return (
    <Stack
      sx={{
        marginBlock: "2rem",
        minWidth: "19rem",
        maxWidth: "23rem",
        borderRadius: "10px",
      }}
    >
      <Stack
        sx={{
          paddingInline: "2rem",
          paddingBlock: "1.7rem",
          flexDirection: "row",
          backgroundColor: "#004687",
          alignItems: "center",
          borderRadius: "10px 10px 0px 0px",
        }}
      >
        <Stack sx={{ flex: 1, gap: "1.3rem" }}>
          <Box>
            <Typography
              variant={"h5"}
              component={"p"}
              sx={{ fontSize: "0.9rem", color: "black", fontWeight: "600" }}
            >
              Shopping Card
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={"h5"}
              component={"p"}
              sx={{ fontSize: "0.9rem", color: "white" }}
            >
              NAME
            </Typography>
          </Box>
        </Stack>
        <Stack sx={{ flex: "1", gap: "1.3rem", alignItems: "flex-end" }}>
          <Box>
            <CreditCardIcon sx={{ fontSize: "1.5rem" }} />
          </Box>
          <Box>
            <Typography
              variant={"h5"}
              component={"p"}
              sx={{ fontSize: "0.9rem", fontWeight: 600 }}
            >
              Exp 24/3
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack
        sx={{
          flexDirection: "row",
          paddingInlineStart: "1.3rem",
          backgroundColor: "#FF00FF",
          paddingBlock: "1.3rem",
          alignItems: "center",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <Box sx={{ flex: 1, fontWeight: "bold", fontSize: "1.3rem" }}>
          {" "}
          **** **** ** 0024
        </Box>{" "}
        <Box
          sx={{
            paddingInlineEnd: "2rem",
          }}
        >
          <i>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              VISA
            </Typography>
          </i>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ShoppingCard2;
