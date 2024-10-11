import { FadeLoader } from "react-spinners";
import { LoaderContainer } from "./styles/Loading";

export function LoaderSpinning() {
  return (
    <LoaderContainer>
      <FadeLoader color="white" />
    </LoaderContainer>
  );
}
