$(document).ready(function() {

    setInterval(function() {
        $.ajax({
            url: 'http://192.168.4.126/tectalk/api/messages/select',
            dataType: 'json',
            success: async function ajaxLoop(data) {
                let messagesLength = data.Messages.length;
                let html = '';

                for (let i = 0; i < messagesLength; i++) {
                    let msg = data.Messages[i];
                    let status = msg.Account_id === window.localStorage.getItem('account_id') ? "left" : "right";
                    let account = await getAccount(msg.Account_id);

                    let chatItem = `
                        <span class="chat-item ${status}">
                            <section class="message">
                                ${msg.Message}
                            </section>
                            <section class="message-from">
                                <div class="message-info">
                                    <img src="assets/img/NoImage.png" />
                                    <span class="message-name">
                                        ${account.username}
                                    </span>
                                </div>
                                <span class="time">
                                    <i class="fa fa-clock-o"></i>${msg.Datetime}
                                </span>
                            </section>
                        </span>`;

                    html += chatItem;
                }

                $("#chatBody").html(html);
            }
        });
    }, 1000);

    async function getAccount(account_id) {
        let result = await fetch(`http://192.168.4.126/tectalk/api/account/single/${account_id}`).then(response => response.json());

        //console.log(result.Account[0]);
        return result.Account[0];
    }
});