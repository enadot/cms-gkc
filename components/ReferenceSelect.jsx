// /components/MyCustomStringInput.jsx
import { Stack, Text, TextInput } from "@sanity/ui";

export default function ReferenceSelect(props) {
  const { elementProps, value = "" } = props;

  return (
    <Stack space={2}>
      <TextInput {...elementProps} />
      <Text>Characters: {value.length}</Text>
    </Stack>
  );
}
