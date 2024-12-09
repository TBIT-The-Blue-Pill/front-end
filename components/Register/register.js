"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            gap={2}
        >
            <Typography variant="h5" textAlign="start" width="100%">
                Welcome On Board!
            </Typography>
            <TextField label="User Name" autoComplete="username" fullWidth />
            <TextField label="Password" type="password" autoComplete="password" fullWidth />
            <TextField label="Confirm Your Password" type="password" autoComplete="password" fullWidth />
            <Button
                variant="contained"
                color="warning"
                width="60%"
                sx={{
                    borderRadius: "16px",
                    textTransform: "none",
                    fontSize: "large"
                }}
            >
                Register
            </Button>
            <Button
                onClick={() => { router.push("/login") }}
            >
                Already have an account?
            </Button>
        </Box>
    );
}