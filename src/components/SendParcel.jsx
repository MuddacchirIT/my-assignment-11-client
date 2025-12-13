import { useForm } from "react-hook-form";
const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  const handleSendParcel = (data) => {};
  return (
    <div className="max-w-[1500px] mx-auto my-10">
      <h2 className="text-5xl font-bold">Send A Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-10 p-4">
        {/* parcel type */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcel type")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcel type")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>
        {/* parcel info: name, weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="parcel name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (Kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="parcel weight"
            />
          </fieldset>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            {/* sender name */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="sender name"
            />
            {/* sender address */}
            <label className="label">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="sender address"
            />
            {/* sender district */}
            <label className="label">Sender District</label>
            <input
              type="text"
              {...register("senderDistrict")}
              className="input w-full"
              placeholder="sender district"
            />
          </fieldset>
          {/* receiver details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>
            {/* sender name */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="reciver name"
            />
            {/* sender address */}
            <label className="label">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="receiver address"
            />
            {/* sender district */}
            <label className="label">Receiver District</label>
            <input
              type="text"
              {...register("receiverDistrict")}
              className="input w-full"
              placeholder="receiver district"
            />
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="send parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
