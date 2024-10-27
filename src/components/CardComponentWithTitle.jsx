import clsx from "clsx";

export const CardComponentWithTitle = ({ color, Icon, title, description }) => {
  return (
    <div
      className={clsx(
        "bg-white shadow-lg rounded-lg p-6 border-l-4",
        `border-${color}-600`
      )}
    >
      <div className="flex items-center mb-4">
        <Icon className={clsx("text-3xl mr-4", `text-${color}-600`)} />
        <h2 className={clsx("text-xl font-semibold", `text-${color}-800`)}>
          {title}
        </h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const CardComponentWithoutTitle = ({ color, Icon, description }) => {
  return (
    <li className="flex items-center bg-white p-3 rounded-lg shadow hover:shadow-lg transition">
      <Icon className={clsx(`text-${color}-500`, "mr-2 text-3xl")} />
      {description}
    </li>
  );
};
