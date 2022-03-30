import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Container, Typography } from "@material-ui/core";
import { Images } from "./images";
import { Image } from "./imageCard";
import { Controls } from "./controls";
import { useApi } from "../api";

const ERROR_TEXT = "Error occured during images fetch. Please try later";

const Title = styled(Typography)`
  width: 100%;
  border-bottom: 1px solid #ddd;
  text-transform: uppercase;
  text-align: center;
`;

const MainImage = styled(Image)`
  width: 100%;
  margin: 16px 0;
`;

const Wrapper = styled(Container)`
  padding-top: 32px;
  display: flex !important;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [approvedImages, setApprovedImages] = useState([]);
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { getImage } = useApi();

  const reset = useCallback(() => {
    setLoading(true);
    setImage(null);
    setError("");
  }, []);

  const getNewImage = useCallback(() => {
    reset();
    getImage()
      .then(setImage)
      .catch(() => setError(ERROR_TEXT))
      .finally(() => setLoading(false));
  }, [getImage, reset]);

  const handleApprove = useCallback(() => {
    if (!image) {
      setError(ERROR_TEXT);
    } else {
      const next = [...approvedImages];
      next.unshift(image);
      setApprovedImages(next);
      getNewImage();
    }
  }, [approvedImages, image, getNewImage]);

  useEffect(() => {
    getNewImage();
  }, [getNewImage]);

  return (
    <Wrapper maxWidth="sm">
      <Title variant="h5">Image approval application</Title>
      <Images images={approvedImages} />

      <MainImage single image={image?.urls} loading={loading} />
      <Controls
        onApprove={handleApprove}
        onDecline={getNewImage}
        disabled={!image}
      />
      {error ? <Typography variant="subtitle2">{error}</Typography> : null}
    </Wrapper>
  );
};

export default App;
