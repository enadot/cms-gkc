import { StringInputProps, set } from "sanity";
import { Stack, Button, Grid } from "@sanity/ui";
import { BRANDS } from "./brandType";
import { useCallback, createElement } from "react";

export function BrandInput(props: StringInputProps) {
  const { value, onChange } = props;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const nextValue = event.currentTarget.value;
      onChange(set(nextValue));
    },
    [onChange]
  );

  return (
    <Grid columns={BRANDS.length} gap={3}>
      {BRANDS.map((brand) => (
        <Button
          key={brand.value}
          value={brand.value}
          mode={value === brand.value ? `default` : `ghost`}
          tone={value === brand.value ? `primary` : `default`}
          onClick={handleClick}
        >
          <Stack space={3} padding={2}>
            {createElement(brand.icon)}
          </Stack>
        </Button>
      ))}
    </Grid>
  );
}
