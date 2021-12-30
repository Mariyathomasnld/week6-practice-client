import Jumbotron from "react-bootstrap/Jumbotron";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAllSpaces } from "../../store/spaces/actions";
import { selectSpaces } from "../../store/spaces/selectors";

import Container from "react-bootstrap/Container";
import Spacecard from "../../components/Spacecard";

export default function AllSpaces() {
  const dispatch = useDispatch();

  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(fetchAllSpaces);
  });

  return (
    <div>
      <Jumbotron>
        <h1> Spaces</h1>
      </Jumbotron>

      <Container>
        {spaces.map((space) => {
          return (
            <Spacecard
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
    </div>
  );
}
