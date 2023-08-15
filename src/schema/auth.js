exports.authSchema = {
  type: "object",
  properties: {
    identifier: {
      anyOf: [
        {
          type: "string",
          format: "email",
        },
        {
          type: "string",
        },
      ],
    },
    password: { type: "string" },
  },
  required: ["identifier", "password"],
};
