import { Avatar, Button, Stack } from "@mui/material";
import ProFileImage from "../../../assets/BigPfP.png";

export default function ProfilePicture(){
    return (
        <Stack direction={'column'} gap={5}>
            <Avatar 
            variant="rounded"
            src={ProFileImage}
            sx={{
                width: '258px',
                height: '300px'
            }}
            />
            <Button
          variant="outlined"
          sx={{
            borderColor: "#EFF0F6",
            borderRadius: "40px",
            color: "#2C3E50",
            fontSize: "18px",
            fontWeight: 700,
            padding: "20px 60px",
            
          }}
        >
          Alterar foto
        </Button>
        </Stack>
    )
}