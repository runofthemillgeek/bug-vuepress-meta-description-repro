import Content from "./components/Content.vue";

const components = {
  Content,
};

export default ({ Vue }) => {
  Object.entries(components).forEach(([name, component]) =>
    Vue.component(name, component)
  );
};
