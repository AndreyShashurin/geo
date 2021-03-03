export const state = () => ({
  urlPiesocket: 'wss://demo.websocket.me/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self', 
  urlWs: 'wss://echo.websocket.org/',
  websocketE: '',
  piesocket: '',
  piesocketMessage: '',
  wsMessage: ''
})

export const mutations = {
  setWebsocketE(state, content) {
    state.websocketE = content;
  },
  setPiesocket(state, content) {
    state.piesocket = content;
  },
  setPiesocketMessage(state, content) {
    state.piesocketMessage = content;
  },
  setWsMessage(state, content) {
    state.wsMessage = content;
  }
}

export const actions = {
  async getSocketTest({state, commit}) {
    const ws = new WebSocket(state.urlWs);
    const piesocket = new WebSocket(state.urlPiesocket);
    ws.onerror = (evt) => { 
      commit("setWebsocketE", evt.type);
    };
    ws.onopen = (event) => {
      commit("setWebsocketE", event.type);
    };        
    
    piesocket.onerror = (event) => {
      commit("setPiesocket", event.type);
    }
    piesocket.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      commit("setPiesocket", payload.info);
    }    
  },
  
  async getSocketMessage({state, commit}) {    
    const ws = new WebSocket(state.urlWs);
    const piesocket = new WebSocket(state.urlPiesocket);
    ws.onopen = (event) => {
      ws.send('Отправленный текст в https://www.websocket.org/echo.html');
    };
    ws.onmessage = (event) => {
      commit("setWsMessage", event.data);
    };
    
    piesocket.onopen = () => {
      piesocket.send(JSON.stringify({
        text: 'Отправленный текст в https://www.piesocket.com/websocket-tester'
      }));
    }      
    piesocket.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      commit("setPiesocketMessage", payload.text);
    } 
  }
}