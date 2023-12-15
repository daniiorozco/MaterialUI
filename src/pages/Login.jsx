import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

const Login = () => {

  const {enqueueSnackbar} = useSnackbar();

  const handleClick =()=>{
    enqueueSnackbar("Hola Mundo", {
      variant : "success"
    })
  }
  return (
    <>
    <h1>Login</h1>
    <Button variant="contained" onClick={handleClick}>Open</Button>
    </>
  )
}
export default Login