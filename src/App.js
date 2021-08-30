import { defineComponent, ref, h } from "vue";
const count = ref(0);
const HelloWorld = {
  name: "HelloWorld",
  setup() {},
  render() {
    return h(
      "div",
      { tId: "helloWorld" },
      `hello world: count: ${count.value}`
    );
  }
};

const childCom = function (props, context) {
  console.log(context.slots.default());
  return h(`h${props.level}`, context.attrs, context.slots);
};

childCom.props = ["level"];
export default defineComponent({
  name: "App",
  render() {
    return h("div", { tId: 1 }, [
      h("p", {}, "主页"),
      h(HelloWorld),
      h(childCom, { level: 2 }, ["4444444", h("h3", {}, "ceshi")])
    ]);
  }
});
