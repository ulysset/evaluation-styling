import ButtonJsx from "../components/ButtonJsx";

export default function Home() {
  return (
    <div>
      <div>
        <h2 className="title">Styled Jsx</h2>
        <div className="flex align-top items-start space-x-2 pt-4 pl-3"></div>
        <div className="flex align-top items-start space-x-2 pt-4 pl-3">
          <ButtonJsx importance="primary" size="normal">
            Click me
          </ButtonJsx>
          <ButtonJsx importance="primary" size="big">
            Click me
          </ButtonJsx>
          <ButtonJsx importance="secondary" size="normal">
            Click me
          </ButtonJsx>
          <ButtonJsx importance="secondary" size="big">
            Click me
          </ButtonJsx>
        </div>
      </div>

      <style jsx>{`
        .title {
          font-size: 2rem;
          font-weight: bold;
        }
        .buttons {
          display: flex;
          vertical-align: top;
          align-items: flex-start;
        }
        .buttons > :not([hidden]) ~ :not([hidden]) {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );
}
