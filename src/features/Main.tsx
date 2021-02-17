import { useState } from "react";
import { useQuery } from "urql";

const PagesQuery = `
  query ($limit: Int!, $start: Int!) {
    pages (first: $limit, skip: $start) {
      title
      content {
        raw
      }
    }
  }
`;

// const IntrospectionQuery = `
//   query {
//     __type(name: "Page) {
//       name
//       fields {
//         name
//         type {
//           name
//           kind
//         }
//       }
//     }
//   }
// `;

export const Main = () => {
  const [start, setStart] = useState<number | undefined>(0);
  const [limit, setLimit] = useState<number | undefined>(3);

  const [{ data, fetching, error }, reexecuteQuery] = useQuery({
    query: PagesQuery,
    variables: { start, limit },
    pause: !limit,
    requestPolicy: "cache-first",
  });

  const refresh = () => reexecuteQuery({ requestPolicy: "network-only" });

  if (error) {
    return <>{error.message}</>;
  }

  if (fetching) {
    return <>Loading content off some free-tier system...</>;
  }

  return (
    <div>
      {data?.pages.map((v: any, i: number) => (
        <p key={i}>{v.title}</p>
      ))}
      <button onClick={refresh}>Refresh</button>
      <input
        placeholder="start"
        onChange={(e) => setStart(Number(e.target.value))}
        value={start}
      ></input>
      <input
        placeholder="limit"
        onChange={(e) => setLimit(Number(e.target.value))}
        value={limit}
      ></input>
    </div>
  );
};
