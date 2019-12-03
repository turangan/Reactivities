import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label } from "semantic-ui-react";
import { DateTimePicker } from "react-widgets";

interface IProps
  extends FieldRenderProps<Date, HTMLInputElement>,
    FormFieldProps {}

const DateInput = (props: IProps) => {
  return (
    <Form.Field error={props.touched && !!props.error} width={props.width}>
      <DateTimePicker
        placeholder={props.placeholder}
        value={props.input.value || null}
        onChange={props.input.onChange}
        onBlur={props.input.onBlur}
        onKeyDown={e => e.preventDefault()}
        date={props.date || false}
        time={props.time || false}
        {...props.rest}
      />
      {props.touched && props.error && (
        <Label basic color="red">
          {props.error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
