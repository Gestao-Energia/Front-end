import {
  Button,
  Card,
  Divider,
  Stack,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { forwardRef, useState } from "react";
import RegisterUserForm from "./components/Form";
import RegisterUserPermissions from "./components/Permissions";
import FinishUserRegistration from "./components/Finish";
import { useRegisterUserFormContext } from "../../hooks/useRegisterUserFormContext";
import { FormData } from "../../contexts/registerUserContext";

export enum ActiveSteps {
  FORM = "FORM",
  PERMISSIONS = "PERMISSIONS",
  FINISH = "FINISH",
}

const ComponentMapping: Record<ActiveSteps, React.FC> = {
  [ActiveSteps.FORM]: RegisterUserForm,
  [ActiveSteps.PERMISSIONS]: RegisterUserPermissions,
  [ActiveSteps.FINISH]: FinishUserRegistration,
};

const QontoConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2C3E50",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2C3E50",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#EFF0F6",
    borderTopWidth: 6,
    borderRadius: 5,
  },
}));

interface CurrentComponentProps {
  activeStep: ActiveSteps;
}

const CurrentComponent = forwardRef<HTMLDivElement, CurrentComponentProps>(
  ({ activeStep }, ref) => {
    const Component = ComponentMapping[activeStep];

    return (
      <div ref={ref}>
        <Component />
      </div>
    );
  },
);

export default function Register() {
  const [activeStep, setActiveStep] = useState<ActiveSteps>(ActiveSteps.FORM);
  const { form } = useRegisterUserFormContext();
  const steps = Object.values(ActiveSteps);
  const formFields: (keyof FormData)[] = [
    "name",
    "email",
    "contactNumber",
    "userName",
  ];
  const roleField: (keyof FormData)[] = ["role"];

  const handleNextStep = async () => {
    const fieldsToValidate =
      activeStep === ActiveSteps.FORM ? formFields : roleField;
    const result = await form.trigger(fieldsToValidate, { shouldFocus: true });
    if (result) {
      changeStep();
    }
  };

  const changeStep = () => {
    switch (activeStep) {
      case ActiveSteps.FORM:
        setActiveStep(ActiveSteps.PERMISSIONS);
        break;
      case ActiveSteps.PERMISSIONS:
        setActiveStep(ActiveSteps.FINISH);
        break;
      default:
        break;
    }
  };

  return (
    <Stack alignItems={"center"} sx={{ textAlign: "center" }} gap={2}>
      <Typography variant="h4" fontWeight={"700"}>
        Cadastro do sistema
      </Typography>
      <Typography variant="body2" color="#6F6C90">
        Por favor, preencha o formulário a seguir.
      </Typography>
      <Card
        sx={{
          maxWidth: "650px",
          width: "100%",
          padding: "1.875rem",
          boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
          borderRadius: "45px",
        }}
      >
        <Stepper
          alternativeLabel
          activeStep={steps.indexOf(activeStep)}
          connector={<QontoConnector />}
        >
          {steps.map((label) => (
            <Step
              completed={false}
              key={label}
              sx={{
                "& .MuiStepLabel-root .Mui-active": {
                  color: "#2C3E50",
                },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "#FFF",
                },
              }}
            >
              <StepLabel />
            </Step>
          ))}
        </Stepper>
        <Divider sx={{ my: "1.8rem" }} />
        <CurrentComponent activeStep={activeStep} />
      </Card>
      <Stack
        direction={"row"}
        width={700}
        justifyContent={"space-between"}
        mt={5}
      >
        <Button
          variant="outlined"
          sx={{
            borderColor: "#2C3E50",
            borderRadius: "40px",
            color: "#2C3E50",
            fontSize: "18px",
            fontWeight: 700,
            padding: "20px 60px",
            visibility: activeStep === ActiveSteps.FORM ? "hidden" : "block",
          }}
          onClick={() => setActiveStep(ActiveSteps.FORM)}
        >
          Voltar
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "#2C3E50",
            borderRadius: "40px",
            color: "#FFF",
            fontSize: "18px",
            fontWeight: 700,
            padding: "20px 60px",
            visibility: activeStep === ActiveSteps.FINISH ? "hidden" : "block",
          }}
          onClick={handleNextStep}
        >
          Próximo
        </Button>
      </Stack>
    </Stack>
  );
}
