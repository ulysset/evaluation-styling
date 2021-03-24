import Button from "../components/Button_Tailwind";

export default function Home() {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-lg font-bold">Tailwind</h2>
        <div className="mt-12 w-full grid grid-cols-4 justify-items-center">
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
