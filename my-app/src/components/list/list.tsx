import { ListItem } from "./item";

interface ListProps<T> {
  data: T[];
  itemRenderer:(item:T)=>React.ReactElement|null;
  className?: string;
}
export function List<T>(props:ListProps<T>) {
  const {data,className,itemRenderer} = props;
  return (<div className={className}>{data.map((item:T,index)=><ListItem key={index} content={itemRenderer(item)}/>)}</div>)
}