export default interface ITextFieldTypes {
  error: {
    login?: string;
    password?: string;
  };
  touched: Record<string, boolean | undefined>;
}
