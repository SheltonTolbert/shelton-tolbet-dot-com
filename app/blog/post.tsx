"use client";

import Image from "next/image";
import { marked } from "marked";
import { DocumentData } from "firebase/firestore/lite";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./post.css";

function uniqueId() {
  return Math.random().toString(36);
}

function MarkedRenderer({ token }: { token: marked.Token }) {
  switch (token.type) {
    case "heading":
      switch (token.depth) {
        case 1:
          return <h1 className="heading-1">{token.text}</h1>;
        case 2:
          return <h2>{token.text}</h2>;
        case 3:
          return <h3>{token.text}</h3>;
        default:
          return <h4>{token.text}</h4>;
      }
    case "paragraph":
      return token.tokens.map((token) => {
        switch (token.type) {
          case "text":
            return <p key={uniqueId()}>{token.text}</p>;
          case "image":
            return (
              <Image
                key={uniqueId()}
                src={token.href}
                alt={token.text}
                width={500}
                height={500}
              />
            );
          default:
            return null;
        }
      });
    case "code":
      return (
        <SyntaxHighlighter language={token.lang} style={darcula}>
          {token.text}
        </SyntaxHighlighter>
      );
    case "list":
      return (
        <ul>
          {token.items.map((item) => (
            <li key={uniqueId()}>{item.text}</li>
          ))}
        </ul>
      );
    case "list_item":
      return <li>{token.text}</li>;
    case "text":
      return <span>{token.text}</span>;
    case "space":
      return <span>{token.raw}</span>;
    case "strong":
      return <strong>{token.text}</strong>;
    case "em":
      return <em>{token.text}</em>;
    case "codespan":
      return <code>{token.text}</code>;
    case "br":
      return <br />;
    case "del":
      return <del>{token.text}</del>;
    case "link":
      return <a href={token.href}>{token.text}</a>;
    case "image":
      return <Image src={token.href} alt={token.text} />;
    default:
      return <div>{JSON.stringify(token)}</div>;
  }
}

export default function Post({ post }: { post: DocumentData }) {
  const parsedMarkdown = JSON.parse(post.content);

  return (
    <div className="w-full h-auto px-20 mt-10 post">
      {parsedMarkdown.map((token: marked.Token) => (
        <MarkedRenderer key={uniqueId()} token={token} />
      ))}
    </div>
  );
}
