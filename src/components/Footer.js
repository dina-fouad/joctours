import { Box, Typography, Button, IconButton, TextField } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { LocationOn, Phone, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#1b4d5c",
        color: "#fff",
        pt: 14,
        px: { xs: 3, md: 12 },
        overflow: "hidden",
      }}
    >
      {/* Wave Top */}
      <Box
        sx={{
          position: "absolute",
          top: -1,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: "100%", height: 80, display: "block" }}
        >
          <path
            d="M0,0 C300,50 1000,0 1200,120 L1200,0 L0,0 Z"
            fill="#eef3f5"
          />
        </svg>
      </Box>

      {/* Decorative Circles */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          top: "10%",
          left: "-100px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          bottom: "-150px",
          right: "-150px",
        }}
      />

      {/* Footer Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: "space-between",
          gap: { xs: 6, md: 0 },
          mb: 8,
        }}
      >
        {/* 1️⃣ About */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
          <Typography
            sx={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: { xs: 28, md: 32 },
              fontWeight: 700,
              color: "#00FFE0",
              mb: 2,
            }}
          >
            Jordan Classical Tours
          </Typography>
          <Typography sx={{ opacity: 0.8, mb: 2 }}>
            We provide authentic travel experiences in Jordan with classic touches and premium services for every traveler.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#00FFE0",
              borderColor: "#00FFE0",
              "&:hover": { background: "#00FFE0", color: "#1b4d5c" },
              textTransform: "none",
              mt: 1,
            }}
          >
            Read More
          </Button>
        </Box>

        {/* 2️⃣ Quick Links */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>Quick Links</Typography>
          {["Home", "About", "Tours", "Contact", "Special Offers"].map((link, i) => (
            <Button
              key={i}
              sx={{
                display: "block",
                color: "#fff",
                textTransform: "none",
                mb: 1,
                "&:hover": { color: "#00FFE0" },
              }}
            >
              {link}
            </Button>
          ))}
        </Box>

        {/* 3️⃣ Contact */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>Contact Us</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
            <LocationOn sx={{ color: "#00FFE0" }} />
            <Typography>Amman, Jordan</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
            <Phone sx={{ color: "#00FFE0" }} />
            <Typography>+962 7980 17138</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
            <Email sx={{ color: "#00FFE0" }} />
            <Typography>info@jctours.com</Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{
              color: "#00FFE0",
              borderColor: "#00FFE0",
              "&:hover": { background: "#00FFE0", color: "#1b4d5c" },
              textTransform: "none",
              mt: 1,
            }}
          >
            Book Now
          </Button>
        </Box>

        {/* 4️⃣ Follow & Newsletter */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>Follow Us</Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            {[Facebook, Instagram, Twitter, YouTube].map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  color: "#fff",
                  border: "1px solid #00FFE0",
                  "&:hover": { background: "#00FFE0", color: "#1b4d5c" },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
          <Typography sx={{ fontWeight: 700, mb: 1 }}>Subscribe to Newsletter</Typography>
          <Box sx={{ display: "flex", gap: 1, flexDirection: { xs: "column", sm: "row" } }}>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                background: "#fff",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1,
                  paddingRight: 1,
                  "& fieldset": { border: "none" },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                background: "#00FFE0",
                color: "#1b4d5c",
                "&:hover": { background: "#1da9cc", color: "#fff" },
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Box sx={{ height: "1px", backgroundColor: "rgba(255,255,255,0.2)", mb: 2 }} />

      {/* Copyright */}
      <Typography sx={{ textAlign: "center", fontSize: 14, opacity: 0.7 }}>
        © {new Date().getFullYear()} Jordan Classical Tours. All rights reserved.
      </Typography>
    </Box>
  );
}
