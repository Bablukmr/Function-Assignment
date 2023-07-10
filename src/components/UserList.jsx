import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, editUser } from './redux/CrudSlice';
import './UserList.css'

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.CRUD);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id) => {
    const editedName = prompt("Enter the updated name");
    const editedAge = prompt("Enter the updated age");
    const editedUniversity = prompt("Enter the updated university");

    if (editedName && editedAge && editedUniversity) {
      const updatedUser = {
        id,
        name: editedName,
        age: editedAge,
        university: editedUniversity,
      };

      dispatch(editUser(updatedUser));
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>University</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <td>{user.name || ''}</td>
              <td>{user.age || ''}</td>
              <td>{user.university || ''}</td>
              <td>
                <button onClick={() => handleEdit(id)}>Edit</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
