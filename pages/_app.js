import "../styles/Global.scss";
import "../styles/globals-tw.css";
import "../components/Button_Sass.scss";
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />

      <div className="flex flex-col space-y-2 text-indigo-700 ">
        <Link href="/Tailwind">
          <a className="hover:text-indigo-300">Tailwind</a>
        </Link>
        <Link href="/Sass">
          <a className="hover:text-indigo-300">Sass</a>
        </Link>
        <Link href="/SassModules">
          <a className="hover:text-indigo-300">Sass Modules</a>
        </Link>
        <Link href="/StyledJSX">
          <a className="hover:text-indigo-300">Styled JSX</a>
        </Link>
        <Link href="/Emotion">
          <a className="hover:text-indigo-300">Emotion</a>
        </Link>
      </div>
    </div>
  );
}

export default MyApp;
