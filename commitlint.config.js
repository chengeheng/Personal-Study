module.exports = {
  extends: ["git-commit-emoji", "cz"],
  rules: {
    // must add these rules
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
  },
};
