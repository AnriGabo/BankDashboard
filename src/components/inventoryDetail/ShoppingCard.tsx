import PaymentIcon from "@mui/icons-material/Payment";
import { Box, Stack, Typography } from "@mui/material";
const ShoppingCard = () => {
  return (
    <Stack
      sx={{
        borderRadius: "10px",
        marginBlock: "2rem",
        minWidth: "19rem",
        maxWidth: "23rem",
      }}
    >
      <Stack
        sx={{
          flex: 1,
          paddingBlock: "1.4rem",
          paddingInline: "1.5rem",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#008080",
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
            sx={{ fontSize: "0.9rem", color: "white" }}
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
              sx={{ fontSize: "0.9rem", fontWeight: 600 }}
            >
              Exp 26/6
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack
        sx={{
          flexDirection: "row",
          paddingBlock: "1.2rem",
          paddingInline: "1.3rem",
          alignItems: "center",
          backgroundColor: "#90EE90",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            fontWeight: "bold",
            fontSize: "1.3rem",
          }}
        >
          **** **** ** 0028
        </Box>

        <Box
          sx={{
            paddingInlineEnd: "1rem",
          
          }}
        >
          <i>
            <Typography sx={{fontWeight:"bold",fontSize:"1.2rem"}}>VISA</Typography>
          </i>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ShoppingCard;
