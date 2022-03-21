import { baseUrlWs } from '../constants';
import { store } from '../components/redux';
import { fetchSavedServices } from '../components/redux/asyncActions';

const socket = new WebSocket(baseUrlWs);

socket.onopen = () => {
  socket.send(
    JSON.stringify({
      id: '123',
      method: 'connection',
    })
  );
};

socket.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  switch (msg.method) {
    case 'update':
      fetchSavedServices()(store.dispatch);
      break;
  }
};

export const sendMessage = (): void => {
  socket.send(
    JSON.stringify({
      id: '123',
      method: 'update',
    })
  );
};
