const dataAPI = () => {
  return fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((data) => {
      const dataResults = data.results.map((user) => {
        return {
          // Se puede acceder al nombre en este caso, de dos maneras.
          // name: `${user.name.first} ${user.name.last}`,
          name: user.name,
          gender: user.gender,
          city: user.location.city,
          image: user.picture.medium,
          email: user.email,
          age: user.dob.age,
          id: user.login.uuid,
        };
      });
      return dataResults;
    });
};

export default dataAPI;
