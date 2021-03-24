import Button from "../components/Button_Emotion";

export default function Home() {
  return (
    <>
      <h2 className="title">Emotion</h2>
      <div className="flex align-top items-start space-x-2 pt-4 pl-3"></div>
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
    </>
  );
}
