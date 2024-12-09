"use client";
import { Box, Button, Typography } from "@mui/material";
import JoinFullIcon from '@mui/icons-material/JoinFull';
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    return (
        <Box
            display="flex"
            flexDirection="row"
            alignContent="center"
            paddingLeft="5px"
            paddingRight="5px"
        >
            <Button
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    flexGrow: 1,
                    color: "0A5EB0",
                    textTransform: "none",
                    gap: "3px",
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)"
                }}
                onClick={() => router.push("/")}
            >
                <Typography variant="h5">
                    The Blue Pill
                </Typography>
                <JoinFullIcon fontSize="large" />
            </Button>
            <Box
                display="flex"
                flexDirection="row"
                alignContent="center"
                gap="5px"
            >
                <Button variant="contained" color="primary" sx={{borderRadius: "16px"}}>
                    Login
                </Button>
                <Button variant="contained" color="success" sx={{borderRadius: "16px"}}>
                    Join
                </Button>
            </Box>
        </Box>
    );
}