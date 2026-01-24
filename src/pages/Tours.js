import { useTranslation } from "react-i18next";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

export default function Tours() {
  const { t } = useTranslation("tours");

  // جلب بيانات الجولات من i18n
  const dataObject = t("data", { returnObjects: true });

  // تحويل object إلى array جاهزة للـ map
  const tours = dataObject && typeof dataObject === "object"
    ? Object.entries(dataObject).map(([id, value]) => ({ id, ...value }))
    : [];

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        {t("title", "Tours")}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {t("subtitle", "Explore our available tours")}
      </Typography>

      <Grid container spacing={3}>
        {tours.map((tour) => (
          <Grid item xs={12} sm={6} md={4} key={tour.id}>
            <Card>
              {/* مكان الصورة */}
              <div
                style={{
                  height: 150,
                  backgroundColor: "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: "#555",
                }}
              >
                IMAGE
              </div>

              <CardContent>
                <Typography variant="h6">{tour.title}</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {tour.description}
                </Typography>
                <Typography variant="body2">
                  {tour.duration} | {tour.price}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  {t("viewMore", "View More")}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
