import "./App.css";
import background from "./DictionaryPictureBig.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="App">
      <div className="container">
        <header>Dictionary App</header>

        <main>
          <Dictionary />
        </main>

        <footer>
          <section>
            <div className="footer-coding-credit">
              Coded with 💖 &nbsp;by{" "}
              <a
                href="http://www.maaikewachters.com"
                target="_blank"
                rel="noreferrer"
              >
                Maaike Wachters
              </a>
              . Open-source code at{" "}
              <a
                href="https://github.com/MaaikeWachters/dictionary-app"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              .
            </div>
            <div className="footer-photo-credit">
              Background photo by{" "}
              <a href="https://unsplash.com/@mrthetrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Joshua Hoehne
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/dictionary?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}
