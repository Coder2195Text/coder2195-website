import { FC, useEffect, useState } from "react";
import { FaPowerOff, FaWifi, FaMoon } from "react-icons/fa";
import { MdDoNotDisturbOn } from "react-icons/md";

import { Activity, useLanyardWS } from "use-lanyard";
import Collapsible from "./Collapsible";

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

function formatColonDuration(duration: number) {
  //calc seconds minutes and hours
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  let returnStr = "";
  if (hours > 0) returnStr = `${hours}:`;
  if (minutes > 0)
    returnStr += hours > 0 && minutes < 10 ? `0${minutes}:` : `${minutes}:`;
  else returnStr += "0:";
  if (seconds < 10)
    returnStr += `0${seconds}`; //add a zero if seconds is less than 10
  else returnStr += seconds;

  return returnStr;
}

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
  const playingDuration = activity.timestamps?.start
    ? `Playing for ${formatColonDuration(time - activity.timestamps.start)}`
    : "";

  const progress =
    (time - activity.timestamps?.start!) /
    (activity.timestamps?.end! - activity.timestamps?.start!);

  const progressBar =
    activity.timestamps?.start && activity.timestamps?.end ? (
      <div>
        <div className="w-full bg-gray-700 rounded-full">
          <div
            className={`bg-blue-600 font-medium text-blue-100 text-center p-0.5 my-2 pt-2 leading-none rounded-full`}
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between w-full">
          <span>0:00</span>
          <span>
            {formatColonDuration(
              activity.timestamps.end - activity.timestamps.start
            )}
          </span>
        </div>
      </div>
    ) : (
      []
    );

  const activityImages = activity.assets ? (
    <div className="flex items-center w-full">
      <div className="relative">
        <img
          src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}`}
          alt={activity.assets.large_text}
          className="w-30"
        />
        <img
          src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}`}
          className="absolute right-0 bottom-0 w-5/12"
          alt={activity.assets.small_text}
        />
      </div>
      <div className="inline-block m-auto w-full text-sm sm:text-xl md:text-2xl">
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
    <Collapsible
      color="bg-gray-900"
      title={
        <span>
          Playing <b>{activity.name}</b>
        </span>
      }
    >
      {details}
    </Collapsible>
  );
};

export default ActivityStatus;
