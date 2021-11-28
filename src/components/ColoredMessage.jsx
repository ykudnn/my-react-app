// 引数の()の段階で分割代入
export const ColoredMessage = ({ color, children }) => {

  // Propsを分割代入
  // const { color, children } = props;

  const contentStyle = {
    // color: color, 
    color, //省略記法が使える！
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
}