export const Memo = () => {

  const text = `
  ここにメモをかきたいけど、画面に表示した時に改行できない。

  `;

  return (
    <>
      <p>---------------memo---------------</p>
      <div>{text}</div>
    </>
  )
}