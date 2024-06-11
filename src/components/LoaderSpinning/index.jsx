import { FadeLoader } from "react-spinners";
import { LoaderContainer } from "./styles";

export function LoaderSpinning() {
  return (
    <LoaderContainer>
      <FadeLoader color="white" />
    </LoaderContainer>
  );
}
