import styled from "styled-components";
import { Box, Container, Typography } from "@material-ui/core";
import { Image } from "../imageCard";
import AddIcon from "@mui/icons-material/Add";

const Wrapper = styled(Box)`
  width: 100%;
  padding: 16px 0;
`;

const Title = styled(Typography)`
  text-align: center;
  padding-bottom: 16px;
`;

const Content = styled.div`
  width: 100%;
`;

export const StyledImage = styled(Image)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

const IconWrapper = styled.div`
  height: 50px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #eee;
  border: 1px solid #ddd;
  opacity: 0.6;
`;

const OverflowX = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const EmptyImage = () => {
  return (
    <IconWrapper>
      <AddIcon />
    </IconWrapper>
  );
};

const Images = ({ images = [] }) => {
  const count = images.length;
  return (
    <Wrapper>
      <Title variant="h5">Approved images ({count})</Title>
      <Content maxWidth="sm">
        {images.length ? (
          <OverflowX>
            {images.map(({ id, urls }, idx) => (
              <StyledImage key={id + idx} image={urls} />
            ))}
          </OverflowX>
        ) : (
          <EmptyImage />
        )}
      </Content>
    </Wrapper>
  );
};

export { Images };
