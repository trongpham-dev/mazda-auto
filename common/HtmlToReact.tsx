import React from "react";
import parse, {
  domToReact,
  attributesToProps,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";

/**
 * I got some TS issues, that's why I came up with `typedDomNode`.
 *
 * Related issues:
 * @see https://github.com/remarkablemark/html-react-parser/issues/221#issuecomment-771600574
 */
const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    const typedDomNode = domNode as Element;

    if (typedDomNode.attribs && typedDomNode.name === "a") {
      return (
        <a
          {...attributesToProps(typedDomNode.attribs)}
          className="underline text-primary-500"
          target="_blank"
        >
          {typedDomNode.children && domToReact(typedDomNode.children, options)}
        </a>
      );
    }

    return false;
  },
};

export const HTMLToReact = ({ payload }: { payload: string }) => {
  return <>{parse(payload, options)}</>;
};
