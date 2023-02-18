// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const id = event.length === 0 ? 1 : event.length + 1;
//   const myNewEvent = { ...newEvent, id };

//   try {
//     const payLoad = {
//       name: newEvent.eventTitle,
//       description: newEvent.eventDescription,
//       public: !newEvent.public,
//       stime: newEvent.startDate,
//       etime: newEvent.endDate,
//     };
//     const access = localStorage.getItem("isloggedIn");
//     const response = await axios.post(
//       "http://localhost:8080/events/new",
//       { ...payLoad },
//       {
//         headers: {
//           "content-Type": "application/json; charset=utf-8",
//           authorization: `Bearer${access}`,
//         },
//       }
//     );
//     const allEvents = [...event, response?.data];
//     console.log(response);
//     console.log(allEvents);
//     setEvent(allEvents);
//   } catch (err) {
//     console.log(`Error: ${err.message}`);
//   } finally {
//     setNewEvent("");
//   }
// };
