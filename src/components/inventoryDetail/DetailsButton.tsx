import { Box, Button, Stack } from "@mui/material"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";


const DetailsButton = () => {
  return (
    <Stack
            sx={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor:"#3CB371",
              paddingInlineEnd: "1.8rem",
              paddingBlockEnd: "1.8rem",
              borderRadius:"0px 10px 10px 0px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: "2.125rem",
                  textTransform: "capitalize",
                  color: "black",
                  minWidth: "7rem",
                  letterSpacing: "0.1rem",
                  backgroundColor: "white",
                }}
              >
                Details
                <ArrowRightAltIcon />
              </Button>
            </Box>
          </Stack>
  )
}

export default DetailsButton
