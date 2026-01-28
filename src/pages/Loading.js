import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  keyframes,
} from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import PublicIcon from "@mui/icons-material/Public";

export default function Loading() {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    setTimeout(() => {
      navigate("/home");
    }, 1200);
  };

  // 🔄 دوران المدار
  const rotateOrbit = keyframes`
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  `;

  // 🧭 نصف قطر المدار (كبرناه)
  const orbitRadius = isMobile ? 85 : 130;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298, #00b0ff)",
        overflow: "hidden",
      }}
    >
      {/* 🎥 فيديو مخفي */}
      <video
        src="/videos/video.mp4"
        autoPlay
        muted
        onCanPlay={handleVideoLoaded}
        style={{ display: "none" }}
      />

      {/* 🌍 الكرة الأرضية */}
      <PublicIcon
        sx={{
          fontSize: isMobile ? 100 : 140,
          color: "#FFD700",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      {/* 🌀 مدار الطائرة */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: orbitRadius * 2,
          height: orbitRadius * 2,
          animation: `${rotateOrbit} 3.5s linear infinite`,
        }}
      >
        {/* ✈️ الطائرة */}
        <AirplanemodeActiveIcon
          sx={{
            fontSize: isMobile ? 30 : 45,
            color: "#FF5722",
            position: "absolute",
            top: -18, // 👈 مسافة إضافية عن المدار
            left: "50%",
            transform: `
              translateX(-50%)
              rotate(90deg)
            `,
          }}
        />
      </Box>

      {/* ⏳ تحميل */}
      {!videoLoaded && (
        <CircularProgress
          color="inherit"
          sx={{ position: "absolute", bottom: isMobile ? 20 : 50 }}
        />
      )}
    </Box>
  );
}
