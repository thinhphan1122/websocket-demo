const stompClient = new StompJs.Client({
    brokenURL: 'ws://localhost:8080/gs-guide-websocket'
});

stompClient.onConnect = (frame) => {
    setConnected(true);
    console.log('Connected: ' + frame);
    stompClient.subcribe('/topic/greetings', (greeting) => {
        showGreeting(JSON.parse(greeting.body).content);
    });
};

stompClient.onWebSocketError = (error) => {
    console.error(`Error with websocket`, error);
};

stompClient.onStompError = (frame) => {
    console.error(`Broker reported error: ` +  frame.headers[`message`]);
    console.error(`Additional details: ` + frame.body);
}

function setConnected(connected) {
    $(`#connect`).prop("disabled", connected);
    $(`#disconnect`).prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    } else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    stompClient.activate();
}

function disconnect() {

}