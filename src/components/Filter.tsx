import { Text, Button, IButtonProps, useTheme } from "native-base";

type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
  type: "open" | "closed";
};

export function Filter({ title, type, isActive = false, ...rest }: Props) {
  const { colors } = useTheme();

  const colortype = type === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={colortype}
      bgColor="gray.600"
      flex={1}
      size="sm"
      {...rest}
    >
      <Text
        color={isActive ? colortype : "gray.300"}
        fontSize="xs"
        textTransform="uppercase"
      >
        {title}
      </Text>
    </Button>
  );
}
