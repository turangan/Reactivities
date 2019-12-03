import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label, Select } from "semantic-ui-react";

interface IProps
  extends FieldRenderProps<string, HTMLInputElement>,
    FormFieldProps {}

const SelectInput = (props: IProps) => {
  return (
    <Form.Field error={props.touched && !!props.error} width={props.width}>
      <Select
        value={props.input.value}
        onChange={(e, data) => props.input.onChange(data.value)}
        placeholder={props.placeholder}
        options={props.options}
      />
      {props.touched && props.error && (
        <Label basic color="red">
          {props.error}
        </Label>
      )}
    </Form.Field>
  );
};

export default SelectInput;
