import { BorderStyle } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";

export const APP = () => {
  return (
    <>
      <Container sx={{ border: 3, boxShadow: 3, pb: 2 }}>
        <h1>APP</h1>
        <Typography variant="h1" component="span">
          Soy un parrafo
        </Typography>
        <Typography variant="h2">Soy un parrafo</Typography>
        <Typography variant="body1" textAlign="center" mt={5}>
          Soy un tYPOGRAPHY
        </Typography>
        <Box
          sx={{
            border: 2,
            borderColor: "peru",
            p: 2,
            bgcolor: "#111",
            color: "white",
          }}
          component="main"
        >
          Material MUI BOX
        </Box>
        <Button variant="contained">Mi primer Botón</Button>
      </Container>
    </>
  );
};

export default APP;
