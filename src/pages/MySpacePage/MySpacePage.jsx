import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SpaceCard from "../../components/SpaceCard";
import StoryCard from "../../components/StoryCard";
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import { selectToken, selectMySpace } from "../../store/user/selectors"

export default function MySpacePage() {
  const token = useSelector(selectToken)
  const space = useSelector(selectMySpace);
  const navigate = useNavigate();
  

  if (token === null) {
    navigate("/");
  }

  if (space === null) {
    return <Loading />;
  }

  return (
    <>
      <SpaceCard
        id={space.id}
        title={space.title}
        description={space.description}
        backgroundColor={space.backgroundColor}
        color={space.color}
        showLink={false}
      />
      <Container>
        <StoryCard owner={true} space={space} />
      </Container>
    </>
  );
}