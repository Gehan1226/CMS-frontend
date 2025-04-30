import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { BookingFormValues } from "../../types/bookings";
import { UserContext } from "../../context/UserContext";

type BookingFormProps = {
  defaultValues?: Partial<BookingFormValues>;
  onSubmit: (data: BookingFormValues) => void;
};

export default function BookingForm({
  defaultValues,
  onSubmit,
}: Readonly<BookingFormProps>) {
  const userContext = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    defaultValues: {
      customerName: "",
      address: "",
      date: "",
      time: "",
      serviceId: undefined,
      userId: userContext?.user?.id,
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset({
        userId: 1,
        ...defaultValues,
      });
    }
  }, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
