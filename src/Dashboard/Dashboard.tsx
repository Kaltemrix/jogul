import { styled, Typography } from "@mui/material";

const Background = styled('div')(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.primary.main
}));

function Dashboard () {
    return (
        <Background>
            <Typography variant="h3" color="white">Welcome to your new home</Typography>
        </Background>
    )
}

export default Dashboard;