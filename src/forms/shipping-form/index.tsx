import { FormComponent } from "components";
import React, { memo } from "react"
import { FormInputType } from "types/form-types";

export default memo(({ formName, onSubmit, submitButtonName }: any) => {

    const ShippingFormFields: FormInputType<Record<string, unknown>>[] = [
        {
            id: "first-name",
            name: "first-name",
            className: "textbox",
            label: "First Name",
            type: "text",
            rules: { required: "Required" },
        },
        {
            id: "last-name",
            name: "last-name",
            className: "textbox",
            label: "Last Name",
            type: "text",
            rules: { required: "Required" },
        },
        {
            id: "address-line-1",
            name: "address-line-1",
            className: "textbox",
            label: "Address Line 1",
            type: "text",
            rules: { required: "Required" },
        },
        {
            id: "address-line-2",
            name: "address-line-2",
            className: "textbox",
            label: "Address Line 2",
            type: "text"
        },
        {
            id: "city",
            name: "city",
            className: "textbox",
            label: "City",
            type: "text",
            rules: { required: "Required" },
        },
        {
            id: "postal-code",
            name: "postal-code",
            className: "textbox",
            label: "Postal Code",
            type: "number",
            rules: {
                required: "Required",
                pattern: { value: /^([6])([0-9]){5}/, message: "Invalid postal code" }
            },
        },
        {
            id: "phone-number",
            name: "phone-number",
            className: "textbox",
            label: "Phone Number",
            type: "number",
            rules: {
                pattern: { value: /^([9,8,7])([0-9]){9}/, message: "Invalid phone number" }
            }
        }
    ];

    return (
        <FormComponent
            formName={formName}
            onSubmit={onSubmit}
            formFields={ShippingFormFields}
            submitButtonName={submitButtonName}
        />
    );
});