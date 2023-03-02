import { FC, useEffect, useState } from "react";
import { FaPowerOff, FaWifi, FaMoon } from "react-icons/fa";
import { MdDoNotDisturbOn } from "react-icons/md";

import { Activity, useLanyardWS } from "use-lanyard";
import { BsTriangleFill } from "react-icons/bs";
import { formatDuration, intervalToDuration } from "date-fns";

const STATUS_MAP = {
  online: <FaWifi color="green" className="inline" />,
  idle: <FaMoon color="yellow" className="inline" />,
  dnd: <MdDoNotDisturbOn color="red" className="inline" />,
  offline: <FaPowerOff color="gray" className="inline" />,
};

const STATUS_NAMES = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
};

const ActivityStatus: FC = () => {
  let data = useLanyardWS("1016862766079938662");
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  if (!data) return <div>Fetching Data...</div>;
  return (
    <div>
      {STATUS_NAMES[data.discord_status]} {STATUS_MAP[data?.discord_status]}
      <br />
      {data?.activities?.map((activity) => (
        <Activity activity={activity} key={activity.id} time={time} />
      ))}
    </div>
  );
};

const Activity: FC<{ activity: Activity; time: number }> = ({
  activity,
  time,
}) => {
  const [collapsed, setCollapsed] = useState(true);

  const playingDuration = activity.timestamps?.start
    ? `Playing for ${formatDuration(
      intervalToDuration({
        start: new Date(activity.timestamps.start),
        end: new Date(time),
      }),
      { format: ["hours", "minutes"] }
    )}`
    : "";

  const progressBar =
    activity.timestamps?.start && activity.timestamps?.end ? (
      <div>
        <progress
          max="1"
          value={
            (time - activity.timestamps.start) /
            (activity.timestamps.end - activity.timestamps.start)
          }
          className="w-full"
        ></progress>
        <div className="w-full flex justify-between">
          <span>Start</span>
          <span>End</span>
        </div>
      </div>
    ) : (
      []
    );

  const activityImages = activity.assets ? (
    <div className="w-full flex items-center">
      <div className="relative">
        <img
          src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}`}
          alt={activity.assets.large_text}
          className="w-30"
        />
        <img
          src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}`}
          className="w-10 absolute right-0 bottom-0"
          alt={activity.assets.small_text}
        />
      </div>
      <div className="inline-block w-full m-auto text-sm sm:text-xl md:text-2xl">
        {activity.details}
        <br />
        {activity.state}
      </div>
    </div>
  ) : (
    []
  );

  const details = (
    <div>
      <hr className="my-4" />
      {playingDuration}
      <br />
      {progressBar}
      {activityImages}
    </div>
  );

  return (
    <div
      className={`${collapsed
          ? "bg-opacity-10 hover:bg-opacity-30"
          : "bg-opacity-50 hover:bg-opacity-70"
        } 
          bg-gray-900 rounded-2xl p-4 overflow-hidden transition-all duration-500`}
    >
      <button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        className="w-full"
      >
        <div className="w-full flex justify-between content-between items-center">
          <span>
            Playing <b>{activity.name}</b>{" "}
          </span>
          <BsTriangleFill
            className={`inline ${collapsed ? "rotate-90" : "rotate-180"
              } transition-all`}
          />
        </div>
        {collapsed ? [] : details}
      </button>
    </div>
  );
};

export default ActivityStatus;
