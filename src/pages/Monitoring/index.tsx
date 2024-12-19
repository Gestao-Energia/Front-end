import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Box, Stack } from "@mui/material";
import GaugeGraph from "../Dashboard/components/GaugeGraph";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SearchBar from "../../components/SearchBar";

export default function Monitoring() {
  const handleOnSearch = (query: string) => {
    console.log(query);
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#E5EDF8",
          padding: 1.5,
          borderRadius: "50px",
        }}
      >
        <SearchBar onSearch={handleOnSearch} />
      </Box>
      <Box sx={{ fontSize: "24px", fontWeight: "500", pt: "35px", pb: "35px" }}>
        Monitoramento de Secretaria
      </Box>

      <Card
        sx={{ maxWidth: "205px", maxHeight: "300px", borderRadius: "10px" }}
        variant="outlined"
      >
        <CardContent sx={{ bgcolor: "#2C3E50" }}>
          <Stack alignItems={"center"}>
            <FlashOnIcon
              sx={{ color: "#00FF00", width: "50px", height: "42px" }}
            />
            <Typography
              sx={{ color: "white", fontWeight: "700", fontSize: "20px" }}
            >
              Sefaz
            </Typography>
            <GaugeGraph
              width={131}
              color="#00FF00"
              labelSize={20}
              value={50}
              height={148}
            />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
