import { Box } from "@mui/material";

export default function AuthLayout({ children }) {
    return (
        <Box
            height="100%"
            maxHeight={700}
            width="100%"
            maxWidth={1200}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            {children}
        </Box>
    );
}