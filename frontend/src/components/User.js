import React from 'react'


const UserItem = ({user}) => {
   return (
       <div className="row">
           <div className="col-4 user">
               <div className="list-group" id="list-tab" role="tablist">
                   <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list"
                      href="#list-home" role="tab" aria-controls="home">{user.username}</a>
                   <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                      href="#list-profile" role="tab" aria-controls="profile">{user.first_name}</a>
                   <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"
                      href="#list-messages" role="tab" aria-controls="messages">{user.last_name}</a>
                   <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                      href="#list-settings" role="tab" aria-controls="settings">{user.email}</a>
               </div>
           </div>
       </div>
   )
}

const UserList = ({users}) => {
   return (
       <div>
           <div className="page-header"><h2>Users</h2></div>
           <div className="users">
               {users.map((user) => <UserItem user={user} />)}
           </div>
       </div>
   )
}


export default UserList;
