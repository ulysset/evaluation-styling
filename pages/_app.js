import "../styles/global.scss";
import "../styles/globals-tw.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-8">
      <div className="mb-8 flex flex-col space-y-2 text-indigo-700">
        <Link href="/Tailwind">
          <a className="hover:text-indigo-300">Tailwind</a>
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
        <Link href="/Linaria">
          <a className="hover:text-indigo-300">Linaria</a>
        </Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
