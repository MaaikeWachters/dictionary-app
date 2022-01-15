import "./App.css";
import DictionaryPicture from "./DictionaryPicture.jpeg";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={DictionaryPicture}
          className="Header-picture"
          alt="dictionary"
        />
        <h1>Dictionary App</h1>
      </header>
      <footer>
        <div className="footer-coding-credit">
          Coded with 💖 &nbsp;by{" "}
          <a
            href="http://www.maaikewachters.com"
            target="_blank"
            rel="noreferrer"
          >
            Maaike Wachters
          </a>
          . Open-sourced code at{" "}
          <a href="http://www.github.com" target="_blank" rel="noreferrer">
            Github
          </a>
          .
        </div>
        <div className="footer-photo-credit">
          Header photo by{" "}
          <a href="https://unsplash.com/@mrthetrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Joshua Hoehne
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/dictionary?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </footer>
    </div>
  );
}
