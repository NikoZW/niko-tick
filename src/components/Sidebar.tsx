import AddToDoForm from "./AddToDoForm";
import Button from "./Button";
import { useTodo } from "../libs/hook";

export default function Sidebar() {
  const { user, handleLogout, openLoginModal, openRegisterModal } = useTodo();

  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/8 px-6.25 pt-4.5 pb-7">
      {user ? (
        <>
          <AddToDoForm />
          <div className="mt-auto">
            <Button buttonType="secondary" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </>
      ) : (
        <div className="mt-auto space-y-2">
          <Button buttonType="secondary" onClick={openLoginModal}>Log In</Button>
          <Button buttonType="secondary" onClick={openRegisterModal}>Register</Button>
        </div>
      )}
    </section>
  );
}
