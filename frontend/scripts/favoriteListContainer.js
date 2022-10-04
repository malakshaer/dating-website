const fList = (users_id, option = "") => {
  return `
    <div class='uList'>
     <div class='uList-title'>
       <h2>Favorites<h2>
       <div class='plus' id='plus'>${option}
       </div>
     </div>
     <div id="users-list" class="users-list">
     </div>
    </div>`;
};
