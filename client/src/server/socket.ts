import { baseUrlWs } from '../constants';
import { store } from '../components/redux';
import { fetchSavedServices } from '../components/redux/asyncActions';

let socket = new WebSocket(baseUrlWs);

socket.onopen = () => onOpen();

function onOpen(): void {
  socket.onclose = () => onClose();

  socket.send(
    JSON.stringify({
      id: '123',
      method: 'connection',
    })
  );

  socket.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    switch (msg.method) {
      case 'update':
        fetchSavedServices()(store.dispatch);
        break;
    }
  };
}

function onClose(): void {
  socket = new WebSocket(baseUrlWs);

  socket.onopen = () => onOpen();
}

export const sendMessage = (): void => {
  socket.send(
    JSON.stringify({
      id: '123',
      method: 'update',
    })
  );
};
