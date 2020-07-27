const fetchGuest = async (...args) => {
  const headers = {
    Authorization: `Bearer ${args[0]}`,
  };
  return await fetch('/api/rsvp', {
    headers,
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      const error = new Error('Guest not found!');
      error.status = 404;
      throw error;
    });
};

const updateGuest = async (rsvpCode, data) => {
  const headers = {
    Authorization: `Bearer ${rsvpCode}`,
    'Content-Type': 'application/json',
  };
  return fetch('/api/rsvp', {
    headers,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};

export {
  fetchGuest,
  updateGuest,
};
