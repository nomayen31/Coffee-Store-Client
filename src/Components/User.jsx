import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const loadedUsers = useLoaderData();
    console.log(loadedUsers);
    return (
        <div>
            <h2>Users: {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
        loadedUsers?.map((user, index) => <tr key={user._key}>
            <th>{index + 1 }</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>Blue</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;