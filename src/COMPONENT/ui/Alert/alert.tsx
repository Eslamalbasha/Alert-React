import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { AlertType } from "../../../type";

interface IProps {
  title: string;
  type: AlertType;
  icon: ReactNode;
  discription: string;
}

const Alert = ({ title, type = "alert-error", icon, discription }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>
          <h4>{title}</h4>
        </div>

        <X className="close" size={25} />
      </div>
      <p>{discription}</p>
    </div>
  );
};
export default Alert;
