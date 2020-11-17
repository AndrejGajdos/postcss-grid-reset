const fs = require("fs");
const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it("element with display grid rule", () => {
  let input = fs.readFileSync("./test/withGrid.in.css", "utf8");
  let output = fs.readFileSync("./test/withGrid.out.css", "utf8");

  return run(input, output);
});

it("element without display grid rule", () => {
  let input = fs.readFileSync("./test/withoutGrid.in.css", "utf8");
  let output = fs.readFileSync("./test/withoutGrid.out.css", "utf8");

  return run(input, output);
});
