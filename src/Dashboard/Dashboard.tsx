import { BoxProps, Link, styled, Typography } from "@mui/material";
import PewsImage from "./../img/pews.jpg"
interface StyledBoxProps extends BoxProps {
    image?: string;
    opacity?: string;
}
const Background = styled('div', {
    shouldForwardProp: (prop) => prop !== "image"
})<StyledBoxProps>(({ image, opacity, theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `
        linear-gradient(rgba(0, 0, 0, ${opacity || 0.5}),rgba(0, 0, 0, ${opacity || 0.5})),
        url(${image || ""})
    `,
    height: "100vh",
    backgroundSize: "cover",
}));

function Dashboard () {
    return (
        <>
            <Background
                image={PewsImage}
                opacity={"0.5"}
            >
                <Typography variant="h1" color="white">Church of St. Katherine</Typography>
                <Typography variant="h6" color="white">Your journey to accendancy is about to begin</Typography>
                <br />
                <Typography variant="h6" color="white">Scroll down to learn more.</Typography>
            </Background>
            <Background opacity="0">
                <Typography variant="h1" color="black">Our Brothers</Typography>
                <Link variant="h6" color="inherit" href="/jogul">Jogul</Link>
            </Background>
        </>
    )
}

export default Dashboard;