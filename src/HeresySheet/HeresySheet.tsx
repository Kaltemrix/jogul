import { BoxProps, styled, Typography } from "@mui/material";
import { FC } from "react";
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

interface HeresySheetProps {
    name: string
}

const HeresySheet: FC<HeresySheetProps> = ({
    name
}) => {
    return (
        <>
            <Background opacity="0">
                <Typography variant="h1" color="black">{name} Sheet</Typography>
            </Background>
        </>
    )
}

export default HeresySheet;