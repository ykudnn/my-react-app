//memo コンポーネントファイルの拡張子はjsxにする

//import reactDom from "react-dom";
import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { Memo } from "./components/Memo";

//const App = () => {
export const App = () => {
  const [num, setNum] = useState(0);

  //useEffect(実行する関数, [依存する値]) ...「ある値が変わった時に限り、ある処理を実行する」
  //numが変わった時に限り、alertを実行する。
  useEffect(() => {
    alert("numの値が変更されました。");
  }, [num]);

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      {console.log(`レンダリング！${num + 1}回目`)}
      <h1 style={{color:"red"}}>Hello world!</h1>
      {/* <ColoredMessage color="blue" message="テスト！　ブルー" /> */}
      {/* <ColoredMessage color="pink" message="テスト！　ピンク" /> */}
      <ColoredMessage color="blue">ブルー（childrenで指定）</ColoredMessage>
      <ColoredMessage color="pink">ピンク（childrenで指定）</ColoredMessage>
      <button　onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <CssModules />
      <Memo />
    </>
  )
};