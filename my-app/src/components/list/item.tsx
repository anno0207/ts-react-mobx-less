interface ListItemProps<T> {
  content:React.ReactElement|null;
  className?:string;
  onClick?:() => any;
}
export function ListItem<T>(props:ListItemProps<T>){
  const {content,className} = props;
  return <div className={className}>
    {content}
    </div>
}