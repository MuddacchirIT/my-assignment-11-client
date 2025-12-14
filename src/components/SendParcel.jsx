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
            {/* sender email */}
            <label className="label">Sender Email</label>
            <input
              type="text"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="sender email"
            />
            {/* sender region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select defaultValue="Pick a district" className="select">
                <option disabled={true}>Pick a district</option>
                <option>Chrome</option>
              </select>
              <span className="label">Optional</span>
            </fieldset>
            {/* sender district */}
            <label className="label">Sender District</label>
            <input
              type="text"
              {...register("senderDistrict")}
              className="input w-full"
              placeholder="sender district"
            />
            {/* sender address */}
            <label className="label">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="sender address"
            />
          </fieldset>
          {/* receiver details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>
            {/* receiver name */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="reciver name"
            />
            {/* receiver email */}
            <label className="label">Receiver Email</label>
            <input
              type="text"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="reciver email"
            />
            {/* receiver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Browsers</legend>
              <select defaultValue="Pick a browser" className="select">
                <option disabled={true}>Pick a browser</option>
                <option>Chrome</option>
              </select>
              <span className="label">Optional</span>
            </fieldset>
            {/* receiver district */}
            <label className="label">Receiver District</label>
            <input
              type="text"
              {...register("receiverDistrict")}
              className="input w-full"
              placeholder="receiver district"
            />
            {/* receiver address */}
            <label className="label">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="receiver address"
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
