/*$(document).ready(function() {

    setInterval(function() {
        $.ajax({
            url: 'http://192.168.4.126/tectalk/api/account/select',
            dataType: 'json',
            success: function ajaxLoop(data) {
                $("#onlinelist").html("");
                let accountsLength = data.Accounts.length;

                for (let i = 0; i < accountsLength; i++) {
                    let status = data.Accounts[i].online_status === "1" ? "online" : "offline";

                    let userItem = `
                        <section class="chats-item">
                            <section class="online-indicator ${status}"></section>
                            <img src="assets/img/NoImage.png">
                            <div class="item-group">
                                <span class="fullname">
                                    ${data.Accounts[i].username}
                                </span>
                                <span class="last-message">
                                    Something from the chat!
                                </span>
                            </div>
                            <section class="online-time"></section>
                        </section>`;

                    $("#onlinelist").append(userItem);
                }

            }
        });
    }, 1000);

});*/