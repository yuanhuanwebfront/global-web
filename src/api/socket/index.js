const PORT = '9001';

class WsApi {

  constructor(options){

    this.ws = new WebSocket(`ws://localhost:${PORT}`);
    this._options = options;

    this.initEvents();
  }

  initEvents(){
    // 连接成功的回调
    this.ws.onopen = () => {
      if(this._options.openCallback && typeof this._options.openCallback == 'function') this._options.openCallback();
    }

    // 发送消息的回调
    this.ws.onmessage = (event) => {
      if(this._options.msgCallback && typeof this._options.msgCallback == 'function') this._options.msgCallback(event.data);
    }

  }

  send(msg){
    if(this.ws) this.ws.send(msg);
  }

}


export default WsApi;