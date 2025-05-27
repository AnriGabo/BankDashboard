import { Box, Stack, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
const ShoppingCard = () => {
  return (
    <Stack
      sx={{
        borderRadius: "10px",
        backgroundColor: "white",
        marginInline: "1.8rem",
        marginBlock: "2rem",
        maxWidth: "20rem",
      }}
    >
      <Stack
        sx={{
          flex: 1,
          paddingBlock: "1.4rem",
          paddingInline: "1.5rem",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#D3D3D3",
          borderRadius: "10px 10px 0px 0px",
        }}
      >
        <Stack sx={{ flex: 1, gap: "1.5rem" }}>
          <Box>
            <Typography
              variant={"h5"}
              component={"p"}
              sx={{ fontSize: "0.9rem", color: "black", fontWeight: "600" }}
            >
              Shopping Card
            </Typography>
          </Box>
          <Typography
            variant={"h5"}
            component={"p"}
            sx={{ fontSize: "0.9rem", color: "#899499" }}
          >
            NAME
          </Typography>
        </Stack>
        <Stack
          sx={{
            flex: 1,
            gap: "1rem",
            alignItems: "flex-end",
          }}
        >
          <Box>
            <PaymentIcon sx={{ fontSize: "1.5rem" }} />
          </Box>
          <Box>
            <Typography
              variant={"h5"}
              component={"p"}
              sx={{ fontSize: "0.9rem", fontWeight: "600" }}
            >
              Exp 26/6
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack
        sx={{
          flex: 1,
          flexDirection: "row",
          paddingBlock: "1.2rem",
          paddingInline: "1.3rem",
          alignItems: "center",
          backgroundColor: "#007BFF",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            color: "black",
            fontWeight: "bold",
            fontSize: "1.3rem",
          }}
        >
          **** **** ** 0028
        </Box>
        <i>
          <Box
            sx={{
              paddingInlineEnd: "1rem",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            VISA
          </Box>
        </i>
      </Stack>
    </Stack>
  );
};

export default ShoppingCard;
