module.exports = () => {
  let skipped = Symbol("isSkipped"); // skipped flag
  let counter = Symbol("skippedCounter"); // counter for test "isSkipped" optimization

  function generateRule(displayDecl, { Rule, Declaration }) {
    let rules = displayDecl.parent;
    rules[counter] = Number.isInteger(rules[counter]) ? rules[counter] : 0;

    if (!rules[skipped]) {
      if (displayDecl.value === "grid") {
        displayDecl.parent.after(
          new Rule({
            selector: `${displayDecl.parent.selector} > *`,
            nodes: [new Declaration({ prop: "min-width", value: "0" })],
          })
        );

        rules[skipped] = true;
        rules[counter]++;
      }
    }
  }

  return {
    postcssPlugin: "postcss-grid-reset",
    Declaration: {
      display: (decl, helpers) => generateRule(decl, helpers),
    },
  };
};
module.exports.postcss = true;
