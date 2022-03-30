import { Box, Button } from "@material-ui/core";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ApproveIcon from "@mui/icons-material/Done";

const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  padding: 16px;
`;

const Controls = ({ onApprove, onDecline, disabled }) => {
  return (
    <Wrapper>
      <Button
        variant="contained"
        color="secondary"
        onClick={onDecline}
        disabled={disabled}
      >
        <CloseIcon />
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onApprove}
        disabled={disabled}
      >
        <ApproveIcon />
      </Button>
    </Wrapper>
  );
};

export { Controls };
