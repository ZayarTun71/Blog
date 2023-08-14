exports.projectSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    description: { type: "string" },
    feature: { type: "string" },
    git_link: { type: "string" },
    video_link: { type: "string" },
  },
  required: ["title", "description", "feature", "git_link", "video_link"],
};
