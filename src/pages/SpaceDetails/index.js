import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Spacecard from "../../components/Spacecard";
// import StoryCarousel from "../../components/StoryCarousel";
import Container from "react-bootstrap/Container";
// import Loading from "../../components/Loading";

import { selectSpaceDetail } from "../../store/spaceDetails/selectors";
import { fetchSpaceById } from "../../store/spaceDetails/actions";

export default function SpaceDetails() {
  const { id } = useParams();

  const space = useSelector(selectSpaceDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch, id]);

  // if (!space || parseInt(space.id) !== parseInt(id)) return <Loading />;

  return (
    <>
      <Spacecard
        id={space.id}
        title={space.title}
        description={space.description}
        backgroundColor={space.backgroundColor}
        color={space.color}
        showLink={false}
      />
      {/* <Container>
        <StoryCarousel space={space} />
      </Container> */}
    </>
  );
}
