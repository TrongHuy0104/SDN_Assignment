import { Box, Button, Typography } from "@mui/material";

function Heading({ title, handleOpen }) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Typography
                variant="h1"
                sx={{ fontSize: "30px", fontWeight: 600 }}
                gutterBottom
            >
                {title}
            </Typography>
            <Button
                variant="outlined"
                size="large"
                sx={{ borderWidth: "3px", fontWeight: "600" }}
                onClick={handleOpen}
            >
                Add {title}
            </Button>
        </Box>
    );
}

export default Heading;
