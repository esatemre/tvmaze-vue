import PosterCardVue from "@/components/PosterCard.vue";
import { shallowMount } from "@vue/test-utils";


describe("PosterCard.vue", () => {
  it("renders props.image when passed", () => {
    const image = "https://someimage.url/needs.png";
    const wrapper = shallowMount(PosterCardVue, {
      props: { image: image, name: "image_name" },
    });
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it("does not render props.image when null", () => {
    const wrapper = shallowMount(PosterCardVue, {
      props: { image: undefined, name: "image_name" },
    });
    expect(wrapper.find('img').exists()).toBe(false);
  });
});
