import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const BluuCard = () => {
  return (
    <>
      <Card sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/1000x200"
            height="200"
            alt="description"
          />
          <CardContent>
            <Typography variant="h5">Card Title</Typography>
            <Typography
              component="p"
              variant="body2"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              maiores quos quae dolorem nostrum repellendus quas, maxime
              aspernatur ut ratione ex. Eveniet quis voluptatum quo earum
              blanditiis itaque praesentium dolor.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained">Add</Button>
          <Button variant="outlined">Remove</Button>
        </CardActions>
      </Card>
    </>
  );
};
export default BluuCard;
