import { Button } from "rsuite";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  console.log(API_URL);
  return (
    <>
      <Button color="cyan" appearance="primary">
        Hello
      </Button>
      <h1 className="text-red-500">Hi</h1>;
    </>
  );
}

export default App;
