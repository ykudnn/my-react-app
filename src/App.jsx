//memo コンポーネントファイルの拡張子はjsxにする

//import reactDom from "react-dom";
import { ColoredMessage } from "./components/ColoredMessage";

//const App = () => {
export const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      {console.log("テスト！なみかっこで囲むとJavaScriptを記述できる。")}
      <h1 style={{ color:"red" }}>Hello world!</h1>
      {/* <ColoredMessage color="blue" message="テスト！　ブルー" /> */}
      {/* <ColoredMessage color="pink" message="テスト！　ピンク" /> */}
      <ColoredMessage color="blue">ブルー（childrenで指定）</ColoredMessage>
      <ColoredMessage color="pink">ピンク（childrenで指定）</ColoredMessage>
      <button　onClick={onClickButton}>ボタン</button>
    </>
  )
};