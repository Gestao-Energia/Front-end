import { axisClasses, BarChart } from "@mui/x-charts";

export default function BarChartGraph() {
    const chartData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 1237, 543, 645, 4122, 978, 2500, 3678, 543, 970, 3000];

    const xLabels = [
        'Seap',
        'Sepror',
        'Sect',
        'Sema',
        'Sec',
        'Seas',
        'SSP',
        'Sedel',
        'Sedurb',
        'Semig',
        'Seinfra',
        'Seduc',
        'Ses/AM',
        'Sejusc',
        'Sead',
        'Sedecti',
        'Sefaz',
    ];

    const chartSetting = {
        yAxis: [
            {
                label: 'Consumo em KW/mês',
            },
        ],
        width: 1550,
        height: 460,
        colors: ['#4285F4'],
        sx: {
            padding: '10px',
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-30px, 0)',
            },
        },
    };

    return (
        <BarChart
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
            series={[
                { data: chartData, label: 'Consumo em KW/mês', id: 'pvId' },
            ]}
            {...chartSetting}
        />
    )
}