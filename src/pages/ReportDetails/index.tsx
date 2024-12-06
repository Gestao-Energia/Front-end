import {
  axisClasses,
  BarPlot,
  ChartsReferenceLine,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  ResponsiveChartContainer,
} from "@mui/x-charts";
import SearchBar from "../../components/SearchBar";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { useCallback, useMemo, useState } from "react";

enum FilterOptions {
  ANNUAL = "Anual",
  MONTHLY = "Mensal",
}

const chartSetting = {
  colors: ["#4285F4"],
  sx: {
    padding: "0.625rem",
    maxHeight: "68.75rem",
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-30px, 0)",
    },
    [`.${axisClasses.line}, .${axisClasses.tick}`]: {
      strokeWidth: "0 !important",
    },
  },
};

export default function ReportDetails() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [periodicity, setPeriodicity] = useState<FilterOptions>(
    FilterOptions.ANNUAL,
  );

  const open = Boolean(anchorEl);

  const filterOptions = Object.values(FilterOptions);

  const handleOpenFilterMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilterMenu = () => {
    setAnchorEl(null);
  };

  const handleClickMenuItem = (option: FilterOptions) => {
    setPeriodicity(option);
    handleCloseFilterMenu();
  };

  const getChartData = useCallback(() => {
    const chartDataYear = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 1237];
    const xLabelsYear = [
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ];
    const chartDataMonth = [
      500, 300, 200, 780, 190, 230, 390, 237, 645, 123, 903, 186,
    ];
    const xLabelsMonth = [
      "JAN",
      "FEV",
      "MAR",
      "ABR",
      "MAI",
      "JUN",
      "JUL",
      "AGO",
      "SET",
      "OUT",
      "NOV",
      "DEZ",
    ];

    if (periodicity === FilterOptions.ANNUAL) {
      return { chartData: chartDataYear, labels: xLabelsYear };
    }
    return { chartData: chartDataMonth, labels: xLabelsMonth };
  }, [periodicity]);

  const { chartData, labels } = useMemo(() => getChartData(), [getChartData]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#E5EDF8",
          borderRadius: "50px",
          padding: "12px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SearchBar onSearch={(e) => console.log("TODO", e)} />
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleOpenFilterMenu}
        >
          <TuneIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseFilterMenu}
          slotProps={{
            paper: {
              style: {
                maxHeight: 48 * 4.5,
                width: "10ch",
              },
            },
          }}
        >
          {filterOptions.map((option: FilterOptions) => (
            <MenuItem
              key={option}
              selected={periodicity === option}
              value={option}
              onClick={() => {
                handleClickMenuItem(option);
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={"1.875rem"}
      >
        <Typography fontWeight={500} fontSize={"1.5rem"} lineHeight={"2.25rem"}>
          Energia Sead
        </Typography>
        <Typography fontWeight={500} fontSize={"1.5rem"} lineHeight={"2.25rem"}>
          {periodicity}
        </Typography>
      </Stack>
      <Box sx={{ height: "70%" }}>
        <ResponsiveChartContainer
          {...chartSetting}
          series={[
            {
              type: "bar",
              data: chartData,
            },
          ]}
          xAxis={[
            {
              data: labels,
              scaleType: "band",
              id: "x-axis-id",
            },
          ]}
          yAxis={[
            {
              min: 0,
              max: Math.max(...chartData),
              scaleType: "linear",
              id: "y-axis-id",
              valueFormatter: (value) => `${value} kw`,
            },
          ]}
        >
          <ChartsTooltip />
          <BarPlot borderRadius={10} />
          <ChartsXAxis position="bottom" axisId="x-axis-id" />
          <ChartsYAxis position="left" axisId="y-axis-id" />
          <ChartsReferenceLine y={Math.max(...chartData) / 2} />
        </ResponsiveChartContainer>
      </Box>
      <Stack>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#2C3E50",
            borderRadius: "2.5rem",
            color: "#2C3E50",
            fontSize: "1.125rem",
            fontWeight: 700,
            padding: "20px 60px",
            alignSelf: "end",
          }}
        >
          Imprimir
        </Button>
      </Stack>
    </>
  );
}
