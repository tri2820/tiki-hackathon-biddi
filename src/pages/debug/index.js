Page({
    data: {
        name: 'TiDu Nguyen'
    },
    onLoad() {
        // set data để thay đổi view
        // this.setData({
        //   name: 'Nguyen Van A'
        // });
    },
    onMessage(e) {
        console.log(e.detail.data); // it will log "ping" to console
        const webview = my.createWebViewContext('web-view1');
        webview.postMessage('pong');
    }
});