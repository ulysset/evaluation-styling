import ButtonModule from "../components/ButtonModule";

export default function Home() {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-lg font-bold">Module</h2>
        <div className="flex align-top items-start space-x-2 pt-4 pl-3">
          <ButtonModule importance="primary" size="normal">
            Click me
          </ButtonModule>
          <ButtonModule importance="primary" size="big">
            Click me
          </ButtonModule>
          <ButtonModule importance="secondary" size="normal">
            Click me
          </ButtonModule>
          <ButtonModule importance="secondary" size="big">
            Click me
          </ButtonModule>
        </div>
      </div>
    </div>
  );
}
