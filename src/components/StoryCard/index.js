import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function StoryCard(props) {
  return (
    <Carousel className="mt-5">
      {props.space.stories.map((story) => {
        return (
          <Carousel.Item key={story.id}>
            {story.imageUrl && (
              <img
                className="d-block w-100"
                src={story.imageUrl}
                alt={story.name}
              />
            )}
            <Carousel.Caption
              style={{
                backgroundColor: `${props.space.backgroundColor}99`,
                color: props.space.color,
              }}
              className="p-5"
            >
              <h3>{story.name}</h3>
              <p>{story.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
