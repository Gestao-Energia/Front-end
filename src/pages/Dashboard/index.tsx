import { Box, Divider, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import BarChartGraph from "./components/BarChart";
import GaugeGraph from "./components/GaugeGraph";

export default function Dashboard() {
    return (
        <>
            <BarChartGraph />
            <Divider />
            <Stack direction={"row"} width={'100%'} height={'390px'}>
                <Box sx={{ flex: 1, padding: '30px' }}>
                    <Typography mb={'16px'} variant="subtitle1">Top 3 Maior Ultilização - Mensal</Typography>
                    <Stack direction={'row'} gap={5}>
                        <Stack alignItems={"center"}>
                            <GaugeGraph value={80} color={'#D84B16'} />
                            <Typography variant="subtitle1">Sect</Typography>
                        </Stack>
                        <Stack alignItems={"center"}>
                            <GaugeGraph value={70} color={'#F99C30'} />
                            <Typography variant="subtitle1">SSP</Typography>
                        </Stack>
                        <Stack alignItems={"center"}>
                            <GaugeGraph value={40} color={'#4C9A2A '} />
                            <Typography variant="subtitle1">Sema</Typography>
                        </Stack>
                    </Stack >
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ flex: 1, padding: '30px' }}>
                    <Box sx={{ width: '300px', margin: '0 auto' }}>
                        <Typography variant="subtitle1">Carbono</Typography>
                        <List>
                            <ListItem sx={{ textAlign: 'right' }}>
                                <ListItemText primary="Sead" />
                                <ListItemText primary="120%" />
                            </ListItem>
                            <Divider />
                            <ListItem sx={{ textAlign: 'right' }}>
                                <ListItemText primary="SeFaz" />
                                <ListItemText primary="98%" />
                            </ListItem>
                            <Divider />
                            <ListItem sx={{ textAlign: 'right' }}>
                                <ListItemText primary="Sedecti" />
                                <ListItemText primary="92%" />
                            </ListItem>
                            <Divider />
                            <ListItem sx={{ textAlign: 'right' }}>
                                <ListItemText primary="Seduc" />
                                <ListItemText primary="52%" />
                            </ListItem>
                            <Divider />
                            <ListItem sx={{ textAlign: 'right' }}>
                                <ListItemText primary="Seinfra" />
                                <ListItemText primary="97%" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Stack>
        </>
    )
}