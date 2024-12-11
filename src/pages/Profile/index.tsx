import { Box, Button, Stack, Typography } from "@mui/material";
import { forwardRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import EditForm from "./components/EditForm";
import ProfilePicture from "./components/ProfilePicture";
import StaticProfileInfo from "./components/StaticProfileInfo";

const enum UserInfo {
  FORM = "FORM",
  STATIC = "STATIC",
}

const ComponentMapping: Record<UserInfo, React.FC<{ userData: object }>> = {
  [UserInfo.FORM]: EditForm,
  [UserInfo.STATIC]: StaticProfileInfo,
};

interface CurrentComponentProps {
  userInfo: UserInfo;
  userData: object;
}

const CurrentComponent = forwardRef<HTMLDivElement, CurrentComponentProps>(
  ({ userInfo, userData }, ref) => {
    const Component = ComponentMapping[userInfo];

    return (
      <div ref={ref}>
        <Component userData={userData} />
      </div>
    );
  },
);

export default function Profile() {
  const id = useParams();
  const { state } = useLocation();
  const [isEditing, setIsEditing] = useState<UserInfo>(UserInfo.STATIC);

  const handleIsEditing = () => {
    setIsEditing(UserInfo.FORM);
  };
  const handleBack = () => {
    setIsEditing(UserInfo.STATIC);
  };

  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={"140px"}
      gap={2}
      sx={{}}
    >
      <Typography variant="h4" fontWeight={700} alignSelf={"start"}>
        Perfil
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={20}
        width={"100%"}
      >
        <Stack>
          <ProfilePicture />
        </Stack>

        <CurrentComponent userInfo={isEditing} userData={state} />
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent:
            isEditing == UserInfo.FORM ? "space-between" : "flex-end",
          width: "100%",
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
            visibility: isEditing == UserInfo.FORM ? "hidden" : "visible",
            display: isEditing == UserInfo.FORM ? "none" : "block",
          }}
          onClick={handleIsEditing}
        >
          Editar
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: "#2C3E50",
            borderRadius: "40px",
            color: "#000000",
            fontSize: "18px",
            fontWeight: 700,
            padding: "20px 60px",
            visibility: isEditing == UserInfo.FORM ? "visible" : "hidden",
            display: isEditing == UserInfo.FORM ? "block" : "none",
          }}
          onClick={handleBack}
        >
          Voltar
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#2C3E50",
            borderRadius: "40px",
            color: "#000000",
            fontSize: "18px",
            fontWeight: 700,
            padding: "20px 60px",
            visibility: isEditing == UserInfo.FORM ? "visible" : "hidden",
            display: isEditing == UserInfo.FORM ? "block" : "none",
          }}
          onClick={handleBack}
        >
          Salvar
        </Button>
      </Box>
    </Stack>
  );
}
