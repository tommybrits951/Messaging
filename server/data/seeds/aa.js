/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      first_name: "Tommy",
      last_name: "Brits",
      email: "tommybrits74@gmail.com",
      username: "britstd951",
      postal: 92553,
      password: "$2b$08$429eWd/emu/TKLljCry5cOUiDl1wDCsjcE6d0s2Wpx8iN3pnIUHVG",
      joined: "2024-04-11"
    },
    {
      first_name: "Jeff",
      last_name: "Jeffrey",
      email: "jeff@jeff.com",
      username: "jeff123",
      postal: 92544,
      password: "$2b$08$ochp/.5XjgVHMF06rId6BeiBMZ8cdng9TUZcNbIaerPGGnNaVIa82", //password is password
      joined: "2024-04-11"
    },
    {
      first_name: "Tim",
      last_name: "Johnson",
      email: "tim@jon.com",
      username: "tim123",
      postal: 92544,
      password: "$2b$08$ochp/.5XjgVHMF06rId6BeiBMZ8cdng9TUZcNbIaerPGGnNaVIa82", //password is password
      joined: "2024-04-11"
    },
    {
      first_name: "Jane",
      last_name: "Doe",
      email: "jane@doe.com",
      username: "doe123",
      postal: 92544,
      password: "$2b$08$ochp/.5XjgVHMF06rId6BeiBMZ8cdng9TUZcNbIaerPGGnNaVIa82", //password is password
      joined: "2024-04-11"
    }
  ]);
};
