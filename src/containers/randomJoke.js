import React, {useState, useEffect} from "react";
import { JokeContainer } from "../components/styles";
import { apiRequest } from "../utils/helpers";

const RandomJoke = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getRandomJoke = async () => {
      setLoading(true);
      const joke = await apiRequest(
        "https://geek-jokes.sameerkumar.website/api",
        "get"
      );
      setLoading(false);
      setJoke(joke);
    };
    getRandomJoke();
  }, []);
  return (
    <JokeContainer>
      {loading ? "Why so serious, let's put a smile on your face :)" : joke}
    </JokeContainer>
  );
};
export default RandomJoke;
