import { Card, CardContent } from "@mui/material";
import InputField from "../InputField";

export default function BookingForm() {
  return (
    <Card className="p-5">
      <CardContent>
        <form className="flex flex-col gap-5">
          <InputField
            label="Customer Name"
            id="customer-name"
            type="text"
            placeholder="John Doe"
          />
          <InputField
            label="Address"
            id="address"
            type="text"
            placeholder="123 Main St, City, State"
          />
          <InputField
            label="Date"
            id="date"
            type="date"
            placeholder="YYYY-MM-DD"
          />
          <InputField label="Time" id="time" type="time" placeholder="HH:MM" />
          <InputField
            label="Service"
            id="service"
            type="select"
            options={[
              { value: "1", label: "Deep Cleaning" },
              { value: "2", label: "Carpet Cleaning" },
            ]}
          />
        </form>
      </CardContent>
    </Card>
  );
}
