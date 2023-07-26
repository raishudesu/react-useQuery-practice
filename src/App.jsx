import React from "react";
import { useQuery } from "@tanstack/react-query";
import request from "./components/Request";
import "./App.css";

function App() {
  const {
    isError,
    isSuccess,
    isLoading,
    data: cats,
    error,
  } = useQuery({
    queryKey: ["facts"],
    queryFn: request,
  });
  return (
    <>
      <div>
        {" "}
        {isLoading && <div>Loading...</div>}
        {/* Display error state */}
        {isError && <div>Error: {error.message}</div>}
        {/* Display success state */}
        {isSuccess && (
          <div>
            {/* Use the facts data here */}
            {cats.map((cats, index) => (
              <p key={index}>
                {1 + index}
                <br />
                {cats.fact}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
