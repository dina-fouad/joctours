import { useState } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  keyframes,
} from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

export default function Loading({ onFinish }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  // عند تحميل الفيديو، اضبط الحالة ثم بعد 1.2 ثانية أخبر App أن اللودنج انتهى
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    setTimeout(() => {
      if (onFinish) onFinish(); // تخبر App أن اللودنج انتهى
    }, 1200);
  };

  // حركة دوران الطائرة حول المركز
  const rotateOrbit = keyframes`
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  `;

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
        background: "linear-gradient(135deg, #1b4d5c, #1da9cc)",
        overflow: "hidden",
      }}
    >
      {/* فيديو الخلفية مخفي */}
      <video
        src="/videos/video.mp4"
        autoPlay
        muted
        onCanPlay={handleVideoLoaded}
        style={{ display: "none" }}
      />

      {/* الصورة في مركز الشاشة */}
      <img
        src="/images/logo.webp"
        alt="Logo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 130 : 180,
          height: isMobile ? 130 : 180,
          zIndex: 1,
        }}
      />

      {/* صندوق دوران الطائرة حول الصورة */}
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
        <AirplanemodeActiveIcon
          sx={{
            fontSize: isMobile ? 30 : 45,
            color: "#0ae5ec",
            position: "absolute",
            top: -18,
            left: "50%",
            transform: `translateX(-50%) rotate(90deg)`,
          }}
        />
      </Box>

      {/* مؤشر التحميل أثناء انتظار الفيديو */}
      {!videoLoaded && (
        <CircularProgress
          sx={{
            position: "absolute",
            bottom: isMobile ? 20 : 50,
            color: "#00FFE0",
          }}
        />
      )}
    </Box>
  );
}
