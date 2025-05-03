import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { Booking, BookingFormValues } from "../../types/bookings";

type BookingFormProps = {
  defaultValues?: Booking;
  onSubmit?: (data: BookingFormValues) => void;
  onUpdate?: (id: number, data: BookingFormValues) => void;
};

export default function BookingForm({
  defaultValues,
  onSubmit,
  onUpdate,
}: Readonly<BookingFormProps>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    defaultValues: {
      customerName: defaultValues?.customerName ?? "",
      address: defaultValues?.address ?? "",
      date: defaultValues?.date ?? "",
      time: defaultValues?.time ?? "",
      serviceId: defaultValues?.service?.id ?? undefined,
      userId: defaultValues?.user?.id,
    },
  });

  const onFormSubmit = (data: BookingFormValues) => {
    if (defaultValues?.id && onUpdate) {
      onUpdate(defaultValues.id, data);
    } else if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col gap-5 px-5"
    >
      <InputField
        label="Customer Name"
        id="customer-name"
        type="text"
        placeholder="John Doe"
        register={register("customerName", {
          required: "Customer name is required",
        })}
        error={errors.customerName}
      />

      <InputField
        label="Address"
        id="address"
        type="text"
        placeholder="123 Main St, City, State"
        register={register("address", {
          required: "Address is required",
        })}
        error={errors.address}
      />

      <InputField
        label="Date"
        id="date"
        type="date"
        register={register("date", {
          required: "Date is required",
        })}
        error={errors.date}
      />

      <InputField
        label="Time"
        id="time"
        type="time"
        register={register("time", {
          required: "Time is required",
        })}
        error={errors.time}
      />

      <InputField
        label="Service"
        id="service"
        type="select"
        register={register("serviceId", {
          required: "Service selection is required",
          valueAsNumber: true,
        })}
        error={errors.serviceId}
        options={[
          { value: 1, label: "Deep Cleaning" },
          { value: 2, label: "Carpet Cleaning" },
        ]}
      />

      <div className="flex justify-end mt-5">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded w-fit px-5 py-2"
        >
          {defaultValues?.customerName ? "Update Booking" : "Book Service"}
        </button>
      </div>
    </form>
  );
}
