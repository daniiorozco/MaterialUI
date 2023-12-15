import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";
import Carretera from "../assets/carretera.jpg";

const Product = () => {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });
  return (
    <>
      {/* como una tarjetita */}
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
          mt: 5,
        }}
      >
        <Img
          src={Carretera}
          alt="carretera en bosque"
        />
        <Box sx={{ flexGrow: 1 , display: 'grid' , gap: 2}}>
          <Typography variant="h4">Product Name</Typography>
          <Typography variant="body1">Product descripction</Typography>
          <Button variant="contained">Add car</Button>
        </Box>
        <Box
          sx={{ mr: 2 }}
          component="p"
        >
          $35000
        </Box>
      </Paper>
    </>
  );
};
export default Product;
