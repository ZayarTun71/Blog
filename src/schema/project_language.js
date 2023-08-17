exports.projectLanguageSchema = {
  type: "object",
  properties: {
    project_language: {
      type: "array",
      items: {
        type: "object",
        properties: {
          project_id: { type: "integer" },
          language_id: { type: "integer" }
        },
        required: ["project_id", "language_id"]
      }
    }
  },
  required: ["project_language"]
};

