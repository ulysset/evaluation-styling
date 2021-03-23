import "../styles/Global.scss";
import "../styles/globals-tw.css";
import "../components/Button.scss";
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />

      <div className="flex flex-col space-y-2 text-indigo-700 ">
        <Link href="/button-jsx">
          <a className="hover:text-indigo-300">Styled JSX</a>
        </Link>
        <Link href="/button-module">
          <a className="hover:text-indigo-300">SCSS Modules</a>
        </Link>
        <Link href="/button-sass">
          <a className="hover:text-indigo-300">SCSS</a>
        </Link>
        <Link href="/button-styled">
          <a className="hover:text-indigo-300">Styled Components</a>
        </Link>
      </div>
    </div>
  );
}

export default MyApp;
