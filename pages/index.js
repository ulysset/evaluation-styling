import ButtonTailwind from "../components/ButtonTailwind";

export default function Home() {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-lg font-bold">Tailwind</h2>
        <div className="flex align-top items-start space-x-2 pt-4 pl-3">
          <ButtonTailwind importance="primary" size="normal">
            Click me
          </ButtonTailwind>
          <ButtonTailwind importance="primary" size="big">
            Click me
          </ButtonTailwind>
          <ButtonTailwind importance="secondary" size="normal">
            Click me
          </ButtonTailwind>
          <ButtonTailwind importance="secondary" size="big">
            Click me
          </ButtonTailwind>
        </div>
      </div>
    </div>
  );
}
