import FormField from "../components/FormField.svelte"
import FormButtonGroup from "../components/FormButtonGroup.svelte"

const registry = {
  string: FormField,
  text: FormField,
  buttonGroup: FormButtonGroup
}

export default (type) => registry.hasOwnProperty(type) ? registry[type] : FormField
