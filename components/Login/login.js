"use client";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Login() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            gap={2}
        >
            <Typography variant="h5" textAlign="start" width="100%">
                Welcome Back!
            </Typography>
            <TextField label="User Name" autoComplete="username" fullWidth />
            <TextField label="Password" type="password" autoComplete="password" fullWidth />
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
                Log In
            </Button>
            <Button
                onClick={() => {}}
            >
                Forgot Password?
            </Button>
        </Box>
    );
}