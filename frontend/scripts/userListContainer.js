const uList = (users_id, option = "") => {
  return `
    <div class='uList'>
     <div class='uList-title'>
       <input style="width: 35rem;" placeholder="Search" id='search-users'/>
       <button class="search-users-btn" type="submit">Search</button>
       <div class='plus' id='plus'>${option}
       </div>
     </div>
     <div id="users-list" class="users-list">
     </div>
    </div>`;
};
