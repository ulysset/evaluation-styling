import Button from "../components/Button_Sass";

export default function App() {
  return (
    <div className="App_root">
      <Button importance="primary" size="normal">
        Click me
      </Button>
      <Button importance="primary" size="big">
        Click me
      </Button>
      <Button importance="secondary" size="normal">
        Click me
      </Button>
      <Button importance="secondary" size="big">
        Click me
      </Button>
    </div>
  );
}
