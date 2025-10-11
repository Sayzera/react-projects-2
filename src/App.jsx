import Comments from "./views/comments";
import ConditionallyRendering from "./views/conditionally-rendering";
import { TernaryConditionallyRendering } from "./views/conditionally-rendering/ternary-conditionally-rendering";
import { AndConditionallyRendering } from "./views/conditionally-rendering/and-conditionally-rendering";
import { LoadingConditionallyRendering } from "./views/conditionally-rendering/loading-conditionally-rendering";

export default function MainApp() {
  //TODO: Cart içersinde tıklanabilme özelliği kazandıralım
  return (
    // <ConditionallyRendering />
    // <TernaryConditionallyRendering />
    // <AndConditionallyRendering />
    <LoadingConditionallyRendering />
  );
}
