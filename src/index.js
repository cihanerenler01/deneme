import ReactDOM from "react-dom";
import App from "./App";

const notes = [
  { id: 1, note: "HTML is easy" },
  { id: 2, note: "Browser can execute only Javascript" },
  {
    id: 3,
    note: "GET and POST are the most important methods of HTTP protocol",
  },
];

ReactDOM.render(<App notes={notes} />, document.getElementById("root"));
