const Item = ({ note, date, time, deleteData, id,submittingStatus }) => {
  function deleteItem() {
    submittingStatus.current = true
    deleteData((old) => {
      return old.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">
        Delete
      </button>
    </div>
  );
};
export default Item;
