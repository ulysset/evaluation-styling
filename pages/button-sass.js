import Button from "../components/ButtonSass";

export default function App() {
  return (
    <div className="App_root">
      <Button dataId="first" importance="primary" size="normal" />
      <Button importance="primary" size="big" />
      <Button dataId="third" importance="secondary" size="normal" />
      <Button importance="secondary" size="big" />
    </div>
  );
}
