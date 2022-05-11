export interface INewsTypes {
  warningHandler?: (name: string, e: string) => void;
  getFieldName?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  getCoordinates?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  labelHandler?: {
    [key: string]: string | undefined;
  };
  value?: string;
  fieldValue?: string;
  title?: string;
  new_title?: string;
  content?: string;
  new_content?: string;
  formikNews: {
    touched: {
      title?: boolean;
      new_title?: boolean;
      content?: boolean;
      new_content?: boolean;
    };
    errors: {
      title?: string;
      new_title?: string;
      content?: string;
      new_content?: string;
    };
    handleChange: (e: string) => void;
    isValid: boolean;
    setFieldTouched: (name: string, value?: boolean, isValidate?: boolean) => void;
    handleBlur: (e: React.FocusEvent) => void;
    handleSubmit: () => string | unknown;
    values: {
      title: string;
      new_title?: string;
      content: string;
      new_content?: string;
    };
  };
  imageUrl?: string;
  isLoading?: boolean;
  handleFocus?: (e: React.FocusEvent) => void;
  labelState?: string;
  status?: string;
  labelStatus?: string | boolean;
  classes?: {
    [key: string]: string | undefined;
  };
}

export interface INewsHelper {
  news: {
    [key: string]: string;
  };
  loading?: boolean;
  refetch: () => void;
  openChanger: () => void;
  isFetchingAction: (loader: boolean) => void;
}
