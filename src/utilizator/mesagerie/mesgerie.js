import axios from "axios";

export const fetchMesaje = async (userId) => {
  const response = await axios.get(`http://localhost:3001/api/mesagerie/${userId}`);
  return response.data;
};

export const fetchMesajeByRecipient = async (userId, recipientId) => {
  const response = await axios.get(`http://localhost:3001/api/mesagerie/${userId}/${recipientId}`);
  return response.data;
};

export const sendMesaj = async (userId, recipientId, text) => {
  const mesajDeTrimis = {
    sender_id: userId,
    recipient_id: recipientId,
    text,
    timestamp: new Date().toISOString()
  };

  const response = await axios.post('http://localhost:3001/api/mesagerie', mesajDeTrimis);
  return response.data;
};
