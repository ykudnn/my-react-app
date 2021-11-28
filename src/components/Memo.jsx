export const Memo = () => {

  const text = `
  ここにメモをかきたいけど、画面に表示した時に改行できない。
  レンダリング最適化のmemoではない。
  ・Core Web Vitals：Googleが提唱
  ・メモ化：処理結果を保持して処理を高速化する技術
  ・コンポーネントのメモ化：memo
  ・関数のメモ化：useCallback
  ・変数のメモ化：useMemo
  `;

  return (
    <>
      <p>---------------memo---------------</p>
      <div>{text}</div>
    </>
  )
}