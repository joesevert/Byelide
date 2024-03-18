import { defineComponent, h } from "vue";
import { constants } from "smooth-dnd";
import { validateTagProp, getTagProps } from "./util";

export const SmoothDndDraggagle = defineComponent({
  name: 'SmoothDraggagle', 
  props: {
    tag: {
      validator: validateTagProp,
      default: 'div'
    }
  },
  render: function() {
    const tagProps = getTagProps(this, constants.wrapperClass)
    return h(tagProps.value, Object.assign({}, tagProps.props), this.$slots?.default?.())
  }
})