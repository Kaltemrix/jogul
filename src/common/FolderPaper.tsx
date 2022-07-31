import { BoxProps, styled } from "@mui/material";

interface StyledFolderProps extends BoxProps {
    image?: string;
    opacity?: string;
}
interface StyledFolderTabProps extends BoxProps {
    active?: boolean
}

export const FolderPaper = styled('div', {
    shouldForwardProp: (prop) => prop !== "image"
})<StyledFolderProps>(({ image, opacity, theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2,2,2,2),
    alignItems: "center",
    backgroundColor: "#ffffee",
    borderRadius: theme.spacing(0, 0, 3, 3),
    width: "100%",
    height: "100%"
    // background: `
    //     linear-gradient(rgba(0, 0, 0, ${opacity || 0.5}),rgba(0, 0, 0, ${opacity || 0.5})),
    //     url(${image || ""})
    // `,
    // height: "100vh",
    // backgroundSize: "cover",
}));
export const FolderTabPaper = styled('div', {
    shouldForwardProp: (prop) => prop !== "image"
})<StyledFolderTabProps>(({ active, theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2,2,2,2),
    alignItems: "center",
    backgroundColor: "#ffffee",
    borderRadius: theme.spacing(3,3,0,0),
    width: "100%",
    height: theme.spacing(4),
...(!active ? {
    boxShadow: "inset 0px 3px 4px 10px rgba(0,0,0,0.9)"
} : {})
    // background: `
    //     linear-gradient(rgba(0, 0, 0, ${opacity || 0.5}),rgba(0, 0, 0, ${opacity || 0.5})),
    //     url(${image || ""})
    // `,
    // height: "100vh",
    // backgroundSize: "cover",
}));