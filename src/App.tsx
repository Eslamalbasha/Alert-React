import Alert from "./COMPONENT/ui/Alert/alert";
import { Ban, BellRing, BadgeInfo, BookCheck, MailWarning } from "lucide-react";

function App() {
  return (
    <>
      <Alert
        type="alert-error"
        title="Something went wrong"
        icon={<Ban size={20} />}
        discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        type="alert-default"
        title="Upgrade your plan"
        icon={<BellRing size={20} />}
        discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque laboriosam iste totam officiis beatae quas."
      />
      <Alert
        type="alert-info"
        title="Note"
        icon={<BadgeInfo size={20} />}
        discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque laboriosam iste totam officiis beatae quas."
      />
      <Alert
        type="alert-success"
        title="Your order has been processed"
        icon={<BookCheck size={20} />}
        discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque laboriosam iste totam officiis beatae quas."
      />
      <Alert
        type="alert-warning"
        title="Tips & Tricks"
        icon={<MailWarning size={20} />}
        discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque laboriosam iste totam officiis beatae quas."
      />
    </>
  );
}

export default App;
