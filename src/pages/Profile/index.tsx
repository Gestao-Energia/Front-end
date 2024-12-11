import { Box, Button, Stack, Typography } from "@mui/material";
import { forwardRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import EditForm from "./components/EditForm";
import ProfilePicture from "./components/ProfilePicture";
import StaticProfileInfo from "./components/StaticProfileInfo";

const enum PageState {
  FORM = "FORM",
  STATIC = "STATIC",
}
export interface UserDataProps {
  id: number;
  phone: string;
  name: string;
  email: string;
  role: string;
}

const ComponentMapping: Record<PageState, React.FC<UserDataProps>> = {
  [PageState.FORM]: EditForm,
  [PageState.STATIC]: StaticProfileInfo,
};

interface CurrentComponentProps {
  pageState: PageState;
}

const CurrentComponent = forwardRef<HTMLDivElement, CurrentComponentProps>(
  ({ pageState }, ref) => {
    const Component = ComponentMapping[pageState];

    return (
      <div ref={ref}>
        <Component />
      </div>
    );
  },
);

export default function Profile() {
  const id = useParams();
  const { state } = useLocation();
  console.log(state);
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

        <CurrentComponent userInfo={isEditing} userData={state} />
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
