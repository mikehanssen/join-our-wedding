export default async (...args) => {
  const headers = {
    Authorization: `Bearer ${args[0]}`,
  };
  return await fetch('/api/rsvp', {
    headers,
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      console.log(`Error: ${err}`);
      return {};
    });
};
