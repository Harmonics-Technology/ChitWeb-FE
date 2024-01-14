/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // add your own scope here if needed
    "scope-enum": [
      2,
      "always",
      ["components", "layout", "pages", "styles", "utils", "types", "services"],
    ],
    "scope-case": [2, "always", "kebab-case"],
    hasLinearTicketNumber: [2, "always"],
  },
  plugins: [
    {
      rules: {
        hasLinearTicketNumber: ({ subject }) => {
          const regex = /CHIT-\d+$/;
          return [
            regex.test(subject),
            `Your subject should contain the Linear ticket number in the format of CHIT-*`,
          ];
        },
      },
    },
  ],
};

module.exports = CommitLintConfiguration;
