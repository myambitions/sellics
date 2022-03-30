import { Box, Typography } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import ApprovedIcon from "@mui/icons-material/Done";

const Wrapper = styled(Box)`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 6px;

  & > img {
    width: ${({ wide }) => (!wide ? "100px" : "100%")};
    height: ${({ wide }) => !wide && "50px"};
    object-fit: cover;
    border-radius: 6px;
  }
`;

const Loader = styled(CircularProgress)`
  margin: 16px auto;
`;

const NoImageText = styled(Typography)`
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #197bbd88;
  z-index: 1;
  border-radius: 6px;

  & > svg {
    display: flex;
    margin-left: auto;
    margin-right: 4px;
    filter: invert(1);
  }
`;

const Image = ({ image, single = false, className, loading }) => {
  const { small, thumb } = image || {};
  const isLoading = !image && loading;
  const noImage = !image && !loading;
  const show = image && !loading;

  return (
    <Wrapper wide={!!single} className={className}>
      {noImage ? (
        <NoImageText>No image available</NoImageText>
      ) : show ? (
        <img src={single ? small : thumb} alt="sellics" />
      ) : null}
      {isLoading ? <Loader color="inherit" /> : null}
      {!single ? (
        <Overlay>
          <ApprovedIcon color="#fff" />
        </Overlay>
      ) : null}
    </Wrapper>
  );
};

export { Image };
