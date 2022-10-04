const messageRender = () => {
  document.getElementById("app-body").innerHTML = `
          <div class="chat-box" id="chat">
            <div class="users" id="user-id">
              <ul class="color-purple" id="seller-users">
              </ul>
            </div>
            <div class="chats">
              <div class="chat-box-messages">
                <ul id="chat-box"class="color-purple chats-section">
                  <li class="sender">Hello, How are you</li>
                  <li class="receiver">Hi, Fine</li>
                </ul>
              </div>
              <div>
                    <input
                      type="text"
                     class="write-message"
                      id="msg"
                      placeholder="Send message"
                    />
                    <button type="submit" class="send-btn" id="send-message">Send</button>
              </div>
            </div>
          </div>`;
};
