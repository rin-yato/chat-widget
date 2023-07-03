import { Button } from "./components/button";
import axios from "axios";

function App() {
  const trrr = async () => {
    const data = await fetch("http://localhost:3000/api/collection", {
      method: "POST",
      body: JSON.stringify({
        collection: "test22ss",
      }),
    });
    console.log(await data.json());
  };
  const getf = async () => {
    const data = await axios.get("http://localhost:3000/api/chat");
    console.log(data.data);
  };

  const chattt = async () => {
    const data = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      // headers: {
      //   "api-key": "73da1ec8-8b7f-4f3e-92dd-0963ede6d7a5",
      // },
      body: JSON.stringify({
        question: "who is yato?",
        messages: [],
        apiKey: "73da1ec8-8b7f-4f3e-92dd-0963ede6d7a5"
      }),
    });

    console.log(await data.json());
  };
  return (
    <div className="w-screen h-screen flex">
      <Button className="m-auto" onClick={trrr}>
        Test
      </Button>
      <Button className="m-auto" onClick={getf}>
        Test
      </Button>
      <Button className="m-auto" onClick={chattt}>
        chat
      </Button>
    </div>
  );
}

export default App;
