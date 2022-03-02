import { FormComponent } from "components";
import React, { memo } from "react"
import { FormInputType } from "types/form-types";

export default memo(({ formName, onSubmit, submitButtonName }: any) => {

    const PaymentFormFields: FormInputType<Record<string, unknown>>[] = [
        {
            id: "card-number",
            name: "card-number",
            className: "textbox",
            label: "Credit Card",
            type: "number",
            rules: {
                required: "Required",
                pattern: { value: /^([0-9]{16})/, message: "Invalid card number" }
            },
        },
        {
            id: "expire-date",
            name: "expire-date",
            className: "textbox",
            label: "Expire Date",
            type: "text",
            rules: {
                required: "Required",
                pattern: { value: /^([0-9]{2}\/([0-9]{2}))/, message: "Invalid expire date" }
            },
        },
        {
            id: "cvc",
            name: "cvc",
            className: "textbox",
            label: "CVC",
            type: "number",
            rules: {
                required: "Required",
                pattern: { value: /^([0-9]{3})/, message: "Invalid cvc" }
            },
        }
    ];

    return (
        <FormComponent
            formName={formName}
            onSubmit={onSubmit}
            formFields={PaymentFormFields}
            submitButtonName={submitButtonName}
        />
    );
});