import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Footer() {
  const { darkMode } = useContext(DarkModeContext);

  console.log(darkMode); // darkMode가 잘 출력이 됨

  return (
    <footer className={`footer ${darkMode ? "footer--dark" : "footer--light"}`}>
      <p className="footer__text">푸터 컴포넌트</p>
    </footer>
  );
}
