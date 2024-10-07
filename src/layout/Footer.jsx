import { Box, Container, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

function Footer() {
    return (
        <Container maxWidth="false" sx={{ backgroundColor: "#333" }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#fff",
                        py: 2,
                    }}
                >
                    <>
                        <AdbIcon
                            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            LOGO
                        </Typography>
                    </>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            fontFamily: "monospace",
                            ml: "auto",
                            fontWeight: 400,
                            fontSize: 16,
                        }}
                    >
                        © 2024 copyright by Dinh Trong Huy
                    </Typography>
                </Box>
            </Container>
        </Container>
    );
}

export default Footer;
