import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SpaceCard from "../../components/SpaceCard";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card";
import StoryCard from "../../components/StoryCard";
import StoryForm from "./StoryForm"
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import { selectToken, selectMySpace } from "../../store/user/selectors"
import MySpaceForm from "./MySpaceForm";


export default function MySpacePage() {
  const token = useSelector(selectToken)
  const space = useSelector(selectMySpace);
  const [postStoryMode, setpostStoryMode] = useState(false);
  const [editMode, setEditMode] = useState(false)
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
      <Card>
            <Button onClick={() => setEditMode(!editMode)}>
              {editMode ? "Close" : "Edit my space"}
            </Button>
            <Button
              onClick={() => setpostStoryMode(!postStoryMode)}
              className="mt-2"
            >
              {postStoryMode ? "Close" : "Post a cool story bro"}
            </Button>
          </Card>

        {postStoryMode && (
        <Card>
          <StoryForm />
        </Card>
        )}
        {editMode && (
        <Card>
          <MySpaceForm />
        </Card>
        )}
        <StoryCard owner={true} space={space} />
      </Container>

    </>
  );
}