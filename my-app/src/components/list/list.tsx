import { ListItem } from "./item";

interface ListProps<T> {
  data: T[];
  itemRenderer:(item:T)=>React.ReactElement|null;
  className?: string;
  itemClassName?: string;
}
export function List<T>(props:ListProps<T>) {
  const {data,className,itemClassName,itemRenderer} = props;

  return (<div className={className}>{data.map((item:T)=><ListItem content={itemRenderer(item)}/>)}</div>)
}