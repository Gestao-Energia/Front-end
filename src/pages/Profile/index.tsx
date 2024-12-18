import { Box, Button, Stack, Typography } from "@mui/material";
import { forwardRef, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../contexts/authContext";
import { useGetUser } from "../../queries/useGetUser";
import EditForm from "./components/EditForm";
import ProfilePicture from "./components/ProfilePicture";
import StaticProfileInfo from "./components/StaticProfileInfo";

const enum PageState {
  FORM = "FORM",
  STATIC = "STATIC",
}

const ComponentMapping: Record<PageState, React.FC<{ userData: User }>> = {
  [PageState.FORM]: EditForm,
  [PageState.STATIC]: StaticProfileInfo,
};

interface CurrentComponentProps {
  pageState: PageState;
  userData: User;
}

const CurrentComponent = forwardRef<HTMLDivElement, CurrentComponentProps>(
  ({ pageState, userData }, ref) => {
    const Component = ComponentMapping[pageState];

    return (
      <div ref={ref}>
        <Component userData={userData} />
      </div>
    );
  },
);
export default function Profile() {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetUser({ id });

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const profileData = data?.data ?? currentUser;

  console.log(profileData);
  // console.log(currentUser);
  // console.log(data?.data);
  // console.log(localStorage.getItem("currentUser"));

  const [isEditing, setIsEditing] = useState<PageState>(PageState.STATIC);

  const handleIsEditing = () => {
    setIsEditing(PageState.FORM);
  };
  const handleBack = () => {
    setIsEditing(PageState.STATIC);
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

        <CurrentComponent pageState={isEditing} userData={profileData} />
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent:
            isEditing == PageState.FORM ? "space-between" : "flex-end",
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
            visibility: isEditing == PageState.FORM ? "hidden" : "visible",
            display: isEditing == PageState.FORM ? "none" : "block",
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
            visibility: isEditing == PageState.FORM ? "visible" : "hidden",
            display: isEditing == PageState.FORM ? "block" : "none",
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
            visibility: isEditing == PageState.FORM ? "visible" : "hidden",
            display: isEditing == PageState.FORM ? "block" : "none",
          }}
          onClick={handleBack}
        >
          Salvar
        </Button>
      </Box>
    </Stack>
  );
}
