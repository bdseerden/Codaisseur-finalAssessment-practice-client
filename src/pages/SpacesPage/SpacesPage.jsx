import HeroBanner from "../../components/HeroBanner"
import Container from "react-bootstrap/Container"
import { selectAllSpaces } from "../../store/space/selectors"
import { useEffect } from "react";
import { fetchSpaces } from "../../store/space/actions";
import { useDispatch, useSelector } from "react-redux";
import SpaceCard from "../../components/SpaceCard"

export default function SpacesPage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectAllSpaces);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  return (
    <>
      <HeroBanner>
        <h1>Spaces</h1>
      </HeroBanner>
      <Container>
        {spaces.map((space, index) => {
          console.log(space.id)
          return (
            <SpaceCard
              key={space.id}
              id={space.id}
              title={space.title}
              description={space.description}
              backgroundColor={space.backgroundColor}
              color={space.color}
              showLink={true}
            />
          );
        })}
      </Container>
    </>
  );
}