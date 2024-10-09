import { FadeLoader } from "react-spinners";
import { LoaderContainer } from "./LoaderSpinning/Loading";

export function LoaderSpinning() {
  return (
    <LoaderContainer>
      <FadeLoader color="white" />
    </LoaderContainer>
  );
}
