import React from "react";
import ActorInfo from "../components/actorDetails";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Actor Details Page/ActorInfo",
  component: ActorInfo,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <ActorInfo actor={SampleActor} />;

Basic.storyName = "Default";