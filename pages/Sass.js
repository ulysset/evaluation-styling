import Button from "../components/Button_Sass";

export default function Home() {
  return (
    <div className="App_root">
      <h2 className="text-lg font-bold">Sass</h2>
      <div className="flex align-top items-start space-x-2 pt-4 pl-3"></div>
      <Button data-id="first" importance="primary" size="normal">
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
