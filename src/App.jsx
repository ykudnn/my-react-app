//memo コンポーネントファイルの拡張子はjsxにする

//import reactDom from "react-dom";
import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

//const App = () => {
export const App = () => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    // alert();
    setNum(num + 1);
  };

  return (
    <>
      {console.log(`レンダリング！${num + 1}回目`)}
      <h1 style={{ color:"red" }}>Hello world!</h1>
      {/* <ColoredMessage color="blue" message="テスト！　ブルー" /> */}
      {/* <ColoredMessage color="pink" message="テスト！　ピンク" /> */}
      <ColoredMessage color="blue">ブルー（childrenで指定）</ColoredMessage>
      <ColoredMessage color="pink">ピンク（childrenで指定）</ColoredMessage>
      <button　onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  )
};