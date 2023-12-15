import { Alert, AlertTitle, Box, Button,  Snackbar } from "@mui/material";
import { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: "grid", gap: "1rem" }}>
        <Alert
          severity="error"
          icon={<AutorenewIcon fontSize="inherit" />}
          variant="filled"
        >
          <AlertTitle>Error</AlertTitle>This is an error alert — check it out!
        </Alert >
        <Button variant="contained"
        onClick={() => setOpen(true)}>Open</Button>
        <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
        <Alert
          severity="warning"
          action={
            <>
              <Button color="error">Delete</Button>
              <Button color="primary">update</Button>
            </>
          }
          variant="outlined"
        >
          This is a warning alert — check it out!
        </Alert>
        </Snackbar>
      </Box>
    </>
  );
};
export default Home;
