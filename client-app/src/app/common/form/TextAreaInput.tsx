import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label } from "semantic-ui-react";

interface IProps
  extends FieldRenderProps<string, HTMLTextAreaElement>,
    FormFieldProps {}

const TextAreaInput = (props: IProps) => {
  return (
    <Form.Field
      error={props.touched && !!props.error}
      type={props.type}
      width={props.width}
    >
      <textarea
        rows={props.rows}
        {...props.input}
        placeholder={props.placeholder}
      />
      {props.touched && props.error && (
        <Label basic color="red">
          {props.error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextAreaInput;
