//memo コンポーネントファイルの拡張子はjsxにする

//const App = () => {
export const App = () => {
  const onClickButton = () => {
    alert();
  };
//  return null;
  return (
    <>
      {console.log("テスト！なみかっこで囲むとJavaScriptを記述できる。")}
      <h1>Hello world!</h1>
      <p>aa</p>
      <button　onClick={onClickButton}>ボタン</button>
    </>
  )
};