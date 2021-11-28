export const ColoredMessage = (props) => {

  // Propsを分割代入
  const { color, children } = props;

  const contentStyle = {
    // color: color, 
    color, //省略記法が使える！
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
}