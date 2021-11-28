//memo コンポーネントファイルの拡張子はjsxにする

import reactDom from "react-dom";

//const App = () => {
export const App = () => {
  const onClickButton = () => {
    alert();
  };
  const contentStyle = {
    color:"blue",
    fontSize:"10px"
  };
//  return null;
  return (
    <>
      {console.log("テスト！なみかっこで囲むとJavaScriptを記述できる。")}
      <h1 style={{ color:"red" }}>Hello world!</h1>
      <p style={contentStyle}>test!!!!!!!!!!!!!!!!!</p>
      <button　onClick={onClickButton}>ボタン</button>
    </>
  )
};