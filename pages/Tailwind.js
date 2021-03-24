import Button from "../components/Button_Tailwind";

export default function Home() {
  return (
    <>
      <h2 className="text-lg font-bold">Tailwind</h2>
      <div className="mt-12 w-full grid grid-rows-4 lg:grid-cols-4 gap-3 place-items-center">
        <Button
          importance="primary"
          size="normal"
          rootStyle="self-start justify-self-start lg:self-end lg:justify-self-end"
        >
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
    </>
  );
}
