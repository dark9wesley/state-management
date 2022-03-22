
const TodoListItem: React.FC = () => {
  return (
    <li>
      <label>
        <input type="checkbox"/>
        {/* <span v-if="!todo.isEdit">{{ todo.value }}</span> */}
        <input type="text" />
      </label>
      <button className="btn btn-danger">删除</button>
      {/* <button className="btn btn-edit">编辑</button> */}
    </li>
  );
}
 
export default TodoListItem;
