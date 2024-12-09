import { Box, Button, Stack, Typography } from "@mui/material";
import EditForm from "./components/EditForm";
import ProfilePicture from "./components/ProfilePicture";

export default function Profile() {
    return (
        <Stack 
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        margin={'140px'}
        gap={2}
        sx={{
            
        }}
        >
            
            <Typography variant="h4" fontWeight={700} alignSelf={'start'}>
                Perfil
            </Typography>
            <Stack 
            direction={'row'} 
            justifyContent={'space-between'} 
            gap={5} 
            width={'100%'}>

            <ProfilePicture/>
            
            <EditForm/>
            {/* <Grid2
            container
            rowSpacing={4}
            >
                <Grid2 size={12} >
                    <Typography>
                        Nome
                    </Typography>
                    <Typography>
                        Samantha da Silva Vasconcelos                        
                    </Typography>
                </Grid2>
                <Grid2 size={6}>
                    <Typography>
                        Email
                    </Typography>
                    <Typography>
                        samantha@gmail.com                        
                    </Typography>
                </Grid2>
                <Grid2 size={6}>
                    <Typography>
                        User
                    </Typography>
                    <Typography>
                        samantha01                        
                    </Typography>
                </Grid2>
                <Grid2 size={6}>
                    <Typography>
                        Numero
                    </Typography>
                    <Typography>
                        (123) 456 - 7890           
                    </Typography>
                </Grid2>
                <Grid2 size={6}>
                    <Typography>
                        Tipo de Conta
                    </Typography>
                    <Typography>
                        Administrador           
                    </Typography>
                </Grid2>
            </Grid2> */}
        </Stack>
        <Box 
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: '100%',
          
        }}
        >

        <Button
          variant="outlined"
          sx={{
            borderColor: "#2C3E50",
            borderRadius: "40px",
            color: "#000000",
            fontSize: "18px",
            fontWeight: 700,
            padding: "20px 60px",
            
          }}
        >
          Editar
        </Button>
        </Box>
      </Stack>
    )
}