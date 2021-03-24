import Button from "../components/Button_SassModules";

export default function Home() {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-lg font-bold">Sass Modules</h2>
        <div className="flex align-top items-start space-x-2 pt-4 pl-3">
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
      </div>
    </div>
  );
}
