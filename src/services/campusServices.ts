import devfapi from "../api/devfapi";
import { IUpdateCircleProps } from "../interfaces";

function updateCircle (props: IUpdateCircleProps) {
  return devfapi.post(`/circles/notification/${props.channel}/${props.thread}`);
}

export {
  updateCircle
};