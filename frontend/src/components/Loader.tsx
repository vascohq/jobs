import { DetailedHTMLProps } from "react";
import { loader } from "./Loader.module.css";

/**
 * A simple loader component for people to wait.
 */
export default function Loader(
  props: DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) {
  return <div className={loader} {...props}></div>;
}
