import { Box, Stack, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Card = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "white",
        marginInline: "2.3rem",
        marginBlock: "2rem",
        flexDirection: "row",
        borderRadius: "10px",
      }}
    >
      <Stack
        sx={{
          writingMode: "sideways-lr",
          flex: 1,
          backgroundColor: "white",
          borderRadius: "10px 0px 0px 10px",
        }}
      >
        <Stack
          sx={{
            paddingBlockStart: "2rem",
            paddingInline: "1rem",
            alignItems: "center",
            gap: "1.5rem",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
          }}
        >
          <Stack sx={{ gap: "1.3rem" }}>
            <Box>
              <CreditCardIcon sx={{fontSize:"1.5rem"}} />
            </Box>
            <Box>
                <Typography sx={{color:"gray"}}>Exp 26/6</Typography>
            </Box>
          </Stack>

          <Stack sx={{ gap: "1.3rem" }}>
            <Box>
                <Typography sx={{fontWeight:"bold",fontSize:"0.9rem"}}>Shopping Card</Typography>
            </Box>
            <Box>
                <Typography sx={{color:"gray",fontSize:"0.9rem"}}>Name</Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      {/* Second Stack starting */}
      <Stack
        sx={{
          writingMode: "sideways-lr",
          flexDirection: "row",
          gap: "1.5rem",
          padding: "1.3rem",
          backgroundColor: "#2E8B57",
          borderRadius: "0px 10px 10px 0px",
        }}
      >
        <Box>
          <Typography>**** **** ** 0780</Typography>
        </Box>
        <Box sx={{ paddingInlineEnd: "1.5rem" }}>
          <i>
            {" "}
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              VISA
            </Typography>
          </i>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Card;
