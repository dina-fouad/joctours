import { Box } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function StickyAvatar() {
  const whatsappNumber = "962798017138"; 
  const message = "اهلا وسهلا!";

  return (
    <Box
      component="a"
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: 200, // حجم الشاشات الكبيرة يبقى كما هو
        height: "auto",
        cursor: "pointer",
        zIndex: 1000,
        display: "block",
        "&:hover .whatsapp-overlay": {
          opacity: 1,
          transform: "translateY(-10px) scale(1.2)",
        },
        // تعديلات للشاشات الصغيرة فقط
        "@media (max-width:600px)": {
          width: 120, // تصغير الحجم للشاشات الصغيرة
        }
      }}
    >
      {/* صورة الأفاتار */}
      <Box
        component="img"
        src="/images/avatar.png"
        alt="Jordanian Avatar"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {/* أيقونة واتسآب تظهر عند hover */}
      <Box
        className="whatsapp-overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#25D366", // لون شعار واتسآب
          fontSize: 60,
          opacity: 0,
          transition: "all 0.3s ease",
          pointerEvents: "none", // لتجنب منع الضغط على الرابط
          "@media (max-width:600px)": {
            fontSize: 35, // تصغير حجم الأيقونة على الشاشات الصغيرة
          }
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 50, "@media (max-width:600px)": { fontSize: 30 } }} />
      </Box>
    </Box>
  );
}
